<template>
  <div class="contact-info">
    <h2>{{ t('contactsPage.title') }}</h2>
    <div class="content">
      <div class="text-section">
        <p> {{t('contactsPage.paragraph1')}}</p>
        <p>Email: <a href="mailto:semyankova@bk.ru">semyankova@bk.ru</a></p>
        <hr>
        <p> {{t('contactsPage.paragraph2')}} </p>
        <p>Email: <a href="mailto:inoup@pnzgu.ru">inoup@pnzgu.ru</a></p>
        <p>{{t('contactsPage.paragraph3')}}<a href="tel:+78412368239">(8-841-2) 36-82-39</a></p>
      </div>
      <div id="map" class="map"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import {useI18n} from "vue-i18n";

const {t} = useI18n();

const initMap = () => {
  const script = document.createElement('script');
  script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
  script.async = true;
  script.onload = () => {
    ymaps.ready(() => {
      const map = new ymaps.Map('map', {
        center: [53.181405, 45.003846],
        zoom: 12,
      });

      const placemark = new ymaps.Placemark([53.181405, 45.003846], {
        balloonContent: 'Пензенский государственный университет',
      });

      map.geoObjects.add(placemark);
    });
  };
  document.head.appendChild(script);
};

onMounted(() => {
  initMap();
});
</script>

<style scoped>
.contact-info {
  padding: 20px;
  border-radius: 10px;
}

.contact-info h2 {
  margin-top: 0;
  color: #8DBB5B;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text-section {
  margin-bottom: 20px;
}

.text-section p {
  margin: 5px 0;
}

.text-section a {
  color: #000;
  text-decoration: none;
}

.text-section a:hover {
  text-decoration: underline;
}

.map {
  width: 100%;
  max-width: 400px;
  height: 300px;
}

@media (min-width: 768px) {
  .content {
    flex-direction: row;
    align-items: flex-start;
  }

  .text-section {
    flex: 1;
    margin-right: 20px;
  }

  .map {
    width: 400px;
    height: 300px;
  }
}
</style>
