<template>
  <div class="custom-select">
    <div class="selected-option" @click="toggleDropdown">
      <font-awesome-icon :icon="selectedDirection.icon" class="icon" />
      {{ selectedDirection.title }}
    </div>
    <div v-if="isDropdownOpen" class="dropdown">
      <div
        v-for="direction in directions"
        :key="direction.id"
        class="dropdown-item"
        @click="selectDirection(direction)"
      >
        <font-awesome-icon :icon="direction.icon" class="icon" />
        {{ direction.title }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import {useI18n} from "vue-i18n";

const props = defineProps({
  label: String,
  modelValue: Number,
  url: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['update:modelValue']);

const directions = ref([]);
const selectedDirection = ref({});
const isDropdownOpen = ref(false);

const {locale} = useI18n();

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const translateArray = async () => {
  try {
    const promises = directions.value.map(async (item) => {
      const response = await axios.post(
        'http://localhost:3002/translate',
        {
          texts: [item.title],
          targetLanguageCode: locale.value,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      return {
        id: item.id,
        icon:item.icon,
        title: response.data.translations[0].text,
      };
    });

    directions.value = await Promise.all(promises);
    selectedDirection.value = directions.value[0];
  } catch (error) {
    console.error('Ошибка при переводе текста:', error);
  }
};

watch(locale, translateArray, {deep:true})

const selectDirection = (direction) => {
  selectedDirection.value = direction;
  emit('update:modelValue', direction.id);
  isDropdownOpen.value = false;
};

onMounted(async () => {
  try {
    const response = await axios.get(props.url);
    directions.value = response.data.data.map(direction => ({
      ...direction,
      icon: direction.icon, // Убедитесь, что direction.icon содержит правильные значения
      title: direction.title
    }));
    selectedDirection.value = directions.value.find(d => d.id === props.modelValue) || directions.value[0];
    await translateArray();
  } catch (e) {
    console.error(e);
  }
});

watch(() => props.modelValue, (newVal) => {
  selectedDirection.value = directions.value.find(d => d.id === newVal) || directions.value[0];
});
</script>

<style scoped>
.custom-select {
  position: relative;
  width: 100%;
  margin-bottom: 15px;
}

.selected-option {
  display: flex;
  align-items: center;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  background-color: #fff;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  z-index: 1000;
}

.dropdown-item {
  display: flex;
  align-items: center;
  padding: 8px;
  cursor: pointer;
}

.dropdown-item:hover {
  background-color: #f0f0f0;
}

.icon {
  margin-right: 10px;
}
</style>
