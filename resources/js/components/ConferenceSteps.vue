<template>
  <div class="conference-steps">
    <h2>{{ t('mainPage.confSteps.title') }}</h2>
    <div class="steps-container">
      <div class="step">
        <div class="step-number">1</div>
        <div class="step-content">
          <div class="step-date">{{ t('mainPage.confSteps.step1.date') }}</div>
          <div class="step-description">{{ t('mainPage.confSteps.step1.description') }}</div>
        </div>
      </div>
      <div class="step">
        <div class="step-number">2</div>
        <div class="step-content">
          <div class="step-date">{{ t('mainPage.confSteps.step2.date') }}</div>
          <div class="step-description">{{ t('mainPage.confSteps.step2.description') }}</div>
        </div>
      </div>
      <div class="step">
        <div class="step-number">3</div>
        <div class="step-content">
          <div class="step-date">{{ t('mainPage.confSteps.step3.date') }}</div>
          <div class="step-description">{{ t('mainPage.confSteps.step3.description') }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style scoped>
.conference-steps {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.conference-steps h2 {
  margin-bottom: 20px;
}

.steps-container {
  display: flex;
  justify-content: space-between;
  position: relative;
}

.step {
  flex: 1;
  text-align: center;
  position: relative;
}

.step-number {
  background-color: #ff9800;
  color: white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  margin: 0 auto 10px;
}

.step-content {
  padding: 20px;
  margin-top: 10px;
  background-color: #fff;
}

.step-content .step-date {
  font-weight: bold;
  margin-bottom: 10px;
}

.step-content .step-description {
  text-align: center;
}

/* Adding lines between steps */
.steps-container::before,
.steps-container::after {
  content: '';
  position: absolute;
  top: 25px; /* Adjust this value based on your layout */
  border-top: 2px solid #ff9800;
  width: 33%;
}

.steps-container::before {
  left: 16.5%;
}

.steps-container::after {
  right: 16.5%;
}
</style>
