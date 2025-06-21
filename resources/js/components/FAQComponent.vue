<template>
  <div class="faq-container">
    <h2 class="faq-title">{{ t('faq.title') }}</h2>
    <div class="faq-item">
      <div class="faq-question" @click="toggleAnswer(0)">
        <font-awesome-icon :icon="isOpen[0] ? 'minus' : 'plus'" class="faq-icon" />
        {{ t('faq.question1') }}
      </div>
      <div v-if="isOpen[0]" class="faq-answer">
        {{ t('faq.answer1') }}
      </div>
    </div>
    <div class="faq-item">
      <div class="faq-question" @click="toggleAnswer(1)">
        <font-awesome-icon :icon="isOpen[1] ? 'minus' : 'plus'" class="faq-icon" />
        {{ t('faq.question2') }}
      </div>
      <div v-if="isOpen[1]" class="faq-answer">
        {{ t('faq.answer2') }}
      </div>
    </div>
    <div class="faq-item">
      <div class="faq-question" @click="toggleAnswer(2)">
        <font-awesome-icon :icon="isOpen[2] ? 'minus' : 'plus'" class="faq-icon" />
        {{ t('faq.question3') }}
      </div>
      <div v-if="isOpen[2]" class="faq-answer">
        {{ t('faq.answer3') }}
      </div>
    </div>
    <div class="faq-item">
      <div class="faq-question" @click="toggleAnswer(3)">
        <font-awesome-icon :icon="isOpen[3] ? 'minus' : 'plus'" class="faq-icon" />
        {{ t('faq.question4') }}
      </div>
      <div v-if="isOpen[3]" class="faq-answer">
        {{ t('faq.answer4') }}
      </div>
    </div>
    <div class="faq-item">
      <div class="faq-question" @click="toggleAnswer(4)">
        <font-awesome-icon :icon="isOpen[4] ? 'minus' : 'plus'" class="faq-icon" />
        {{ t('faq.question5') }}
      </div>
      <div v-if="isOpen[4]" class="faq-answer">
        {{ t('faq.answer5') }}
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {useI18n} from 'vue-i18n';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';

library.add(faPlus, faMinus);

const {t} = useI18n();

const isOpen = ref([false, false, false, false, false]);

const toggleAnswer = (index) => {
  isOpen.value[index] = !isOpen.value[index];
};
</script>

<style scoped>
.faq-container {
  text-align: start;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.faq-title {
  color: #8DBB5B;
  text-align: center;
  margin-bottom: 20px;
}

.faq-item {
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 10px;
  overflow: hidden;
}

.faq-question {
  display: flex;
  align-items: center;
  padding: 15px;
  background-color: #8DBB5B;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
}

.faq-question:hover {
  background-color: #45a049;
}

.faq-icon {
  margin-right: 10px;
}

.faq-answer {
  padding: 15px;
  border-top: 1px solid #ddd;
  background-color: #f9f9f9;
}
</style>
