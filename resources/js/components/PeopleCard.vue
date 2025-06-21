<template>
  <div class="participant-card">
    <img :src="link" alt="Фото участника" class="participant-photo" />
    <div class="participant-info">
      <h3 class="participant-name">{{ translation.name }}</h3>
      <p class="participant-degree">{{ translation.position }}</p>
      <p class="participant-role">{{ translation.place }}</p>
    </div>
  </div>
</template>

<script setup>
import {defineProps, watch, ref, onMounted} from 'vue';
import {useI18n} from "vue-i18n";

const {locale} = useI18n();

const translation = ref({})

onMounted(()=>{
  translation.value = {
    name: props.name,
    place: props.place,
    position: props.position
  }
  translateArray();
})

const props = defineProps({
  link: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  place: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  }
});

const translateArray = async () => {
  try {
    const promise = async () => {
      const response = await axios.post(
        'http://localhost:3002/translate',
        {
          texts:[props.name, props.place, props.position],
          targetLanguageCode: locale.value,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      console.log(response.data)
      return {
        name: response.data.translations[0].text,
        place: response.data.translations[1].text,
        position: response.data.translations[2].text,
      };
    }
    translation.value = await promise();
  } catch (error) {
    console.error('Ошибка при переводе текста:', error);
  }
};

watch(locale, translateArray, {deep:true})
</script>


<style scoped>
.participant-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
  width: 250px;
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;
}

.participant-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.participant-photo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 15px;
  object-fit: cover;
}

.participant-info {
  text-align: center;
}

.participant-name {
  font-size: 1.2rem;
  color: #333333;
  margin-bottom: 5px;
}

.participant-degree {
  font-size: 1rem;
  color: #666666;
  margin-bottom: 5px;
}

.participant-role {
  font-size: 0.9rem;
  color: #999999;
}
</style>
