<template>
  <div class="conference-banner">
    <img :src="backgroundImage" alt="Conference Background" class="background-image" />
    <div class="banner-content">
      <h1 class="banner-title">{{ t('mainPage.confBanner.title') }} <br><span>{{ t('mainPage.confBanner.subtitle') }}</span></h1>
      <p class="banner-date">{{ t('mainPage.confBanner.date') }}</p>
      <p class="banner-description">
        {{ t('mainPage.confBanner.description1') }}
        <br>
        {{ t('mainPage.confBanner.description2') }}
      </p>
    </div>
    <div class="glass-effect"></div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import backgroundImage from '../../assets/pgu.png';

const { t } = useI18n();
</script>

<style scoped>
.conference-banner {
  position: relative;
  width: 100%;
  height: 800px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(50%); /* Затемняем фон для лучшей читаемости текста */
}

.banner-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 1; /* Ensure the content is above the glass effect */
}

.banner-title {
  font-size: 2rem;
  margin-bottom: 10px;
  background: rgba(0, 0, 0, 0.5); /* Фон для текста */
  padding: 10px;
  border-radius: 5px;
}
.banner-title span {
  white-space: nowrap;
}

.banner-date {
  font-size: 1.5rem;
  font-weight: 900;
  margin-bottom: 20px;
}

.banner-description {
  font-size: 1rem;
  background: rgba(0, 0, 0, 0.5); /* Фон для текста */
  padding: 10px;
  border-radius: 5px;
  white-space: nowrap;
}

.glass-effect {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1); /* Светлый фон для эффекта стекла */
  z-index: 0; /* Ensure the glass effect is below the content */
}
</style>
