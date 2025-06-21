<template>
  <div class="conference-plans-block">
    <h2 class="block-title">В рамках конференции планируется:</h2>
    <div class="grid-container">
      <div class="grid-item" v-for="(item, index) in items" :key="index">
        <font-awesome-icon :icon="item.icon" class="item-icon" />
        <p class="item-description">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTable, faChalkboardTeacher, faAward } from '@fortawesome/free-solid-svg-icons';

library.add(faTable, faChalkboardTeacher, faAward);

const items = ref([
  {
    description: 'Круглый стол на тему «Официальная электронная коммуникация в условиях цифровизации»',
    icon: 'table'
  },
  {
    description: 'Мастер-классы по методикам развития коммуникативных компетенций в образовательном процессе',
    icon: 'chalkboard-teacher'
  },
  {
    description: 'Конкурс студенческих НИР на тему «Документная коммуникация XXI века»',
    icon: 'award'
  }
]);
</script>

<style scoped>
.conference-plans-block {
  padding: 40px 20px;
  background-color: #8DBB5B;
  color: white;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.block-title {
  font-size: 24px;
  margin-bottom: 30px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.grid-item {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: transform 0.2s, box-shadow 0.2s;
}

.grid-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.item-icon {
  font-size: 2rem;
  margin-bottom: 10px;
  color: #ffffff;
}

.item-description {
  color: #e0e0e0;
}
</style>
