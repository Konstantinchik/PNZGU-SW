<template>
  <div class="icon-selector">
    <div v-if="selectedIcon" class="selected-icon-wrapper" @click="toggleSelector">
      <font-awesome-icon :icon="selectedIcon" class="selected-icon"/>
    </div>
    <div v-if="isOpen" class="icon-selector-content">
      <input v-model="searchQuery" placeholder="Поиск иконки" class="search-input"/>
      <div class="icon-grid">
        <div v-for="(icon, index) in filteredIcons" :key="index" @click="selectIcon(icon)" class="icon-item">
          <font-awesome-icon :icon="icon" class="icon"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, computed, defineEmits, defineProps, watch} from 'vue';
import {fas} from "@fortawesome/free-solid-svg-icons";

const emit = defineEmits(['select']);

const props = defineProps({
  initialIcon: {
    type: String,
    default: "0"
  }
});

const searchQuery = ref('');
const isOpen = ref(false);
const selectedIcon = ref(props.initialIcon);

const icons = Object.values(fas);
const iconNames = icons.map(icon => icon.iconName);

const filteredIcons = computed(() => {
  return iconNames.filter(icon => icon.toLowerCase().includes(searchQuery.value.toLowerCase()));
});

function selectIcon(icon) {
  selectedIcon.value = icon;
  isOpen.value = false;
  emit('select', icon);
}

function toggleSelector() {
  isOpen.value = !isOpen.value;
}

// Обновляем selectedIcon, если initialIcon изменяется
watch(() => props.initialIcon, (newIcon) => {
  selectedIcon.value = newIcon;
});
</script>

<style scoped>
.icon-selector {
  position: relative;
  width: 100%;
}

.search-input {
  width: calc(100% - 20px); /* Учитываем padding */
  box-sizing: border-box;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1000;
}

.icon-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.icon-item {
  flex-basis: calc(25% - 10px); /* Учитываем gap */
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  box-sizing: border-box;
}

.icon-item:hover {
  background-color: #f0f0f0;
}

.icon {
  font-size: 24px;
}

.selected-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
}

.selected-icon {
  font-size: 24px;
}

.icon-selector-content {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  z-index: 1000;
}
</style>
