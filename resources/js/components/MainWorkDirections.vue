<template>
  <div class="work-directions-block">
    <h2 class="block-title">{{t('mainPage.mainWorkDir')}}</h2>
    <div class="grid-container">
      <div class="grid-item" v-for="(item, index) in items" :key="index">
        <font-awesome-icon :icon="item.icon" class="item-icon" />
        <p class="item-description">{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, watch, onMounted} from 'vue';
import {fetchData} from "../main";
import {useI18n} from "vue-i18n";

const {t, locale} = useI18n();

const items = ref([])

const translateArray = async () => {
  try {
    const promises = items.value.map(async (item) => {
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
    items.value = await Promise.all(promises);
  } catch (error) {
    console.error('Ошибка при переводе текста:', error);
  }
};

watch(locale, translateArray, {deep:true});

onMounted(()=> {
  try{
    fetchData("/api/directions", items);
    translateArray();
  }catch (e){
    console.log(e);
  }
});

</script>

<style scoped>
.work-directions-block {
  padding: 20px;
  background: #8DBB5B;
  color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.block-title {
  text-align: center;
  margin-bottom: 20px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.grid-item {
  text-align: center;
  hyphens: auto;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  word-wrap: break-word;
  background: white;
  color: #333;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.grid-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.item-icon {
  font-size: 2rem;
  margin-bottom: 10px;
  color: #8DBB5B;
}

.item-title {
  margin-bottom: 10px;
}

.item-description {
  font-size: 0.9rem;
  color: #666;
}
</style>
