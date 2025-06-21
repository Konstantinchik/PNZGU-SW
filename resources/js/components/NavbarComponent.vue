<template>
  <div class="navbar">
    <button @click="toggleMenu" class="burger-button">
      <span v-if="!isMenuOpen">&#9776;</span> <!-- Иконка бургера -->
    </button>
    <ul :class="['nav-menu', { 'open': isMenuOpen }]">
      <button @click="toggleMenu" class="close-button" v-if="isMenuOpen">
        <span>&#10006;</span> <!-- Иконка крестика -->
      </button>
      <router-link v-if="showHomeButton" class="nav-link" to="/news">{{ t('navigationBar.news') }}</router-link>
      <router-link v-if="showHomeButton" class="nav-link" to="/for-participants">{{ t('navigationBar.participants') }}</router-link>
      <router-link v-if="showHomeButton" class="nav-link" to="/requirements">{{ t('navigationBar.requirements') }}</router-link>
      <router-link v-if="showHomeButton" class="nav-link" to="/archive">{{ t('navigationBar.archive') }}</router-link>
      <router-link v-if="showHomeButton" class="nav-link" to="/contacts">{{ t('navigationBar.contacts') }}</router-link>
      <router-link v-if="isAuth&&showHomeButton" class="nav-link" to="/admin-panel">{{ t('navigationBar.adminPanel') }}</router-link>
      <router-link v-if="showAdminButton" class="nav-link" to="/admin-panel/edit-participants">{{t('navigationBar.changeCommittee') }}</router-link>
      <router-link v-if="showAdminButton" class="nav-link" to="/admin-panel/incoming-applications">{{ t('navigationBar.incomingApplications') }}</router-link>
      <router-link v-if="showAdminButton" class="nav-link" to="/admin-panel/history-applications">{{ t('navigationBar.historyApplication') }}</router-link>
      <router-link v-if="showAdminButton" class="nav-link" to="/admin-panel/directions">{{t('navigationBar.directions')  }}</router-link>

    </ul>
    <div class="left-bar">
      <router-link v-if="!isAuth&&showHomeButton" class="nav-link" to="/sign-in">{{ t('navigationBar.signIn') }}</router-link>
      <img :src="ruLanguage" alt="ru" @click="selectLanguage('ru')">
      <img :src="enLanguage" alt="en" @click="selectLanguage('en')">
    </div>
  </div>
  <div class = "lowVisionMode">
    <font-awesome-icon icon="search" class="lowVisionMode" @click="toggleFontSize"/>
  </div>
</template>

<script setup>
import {ref, computed} from 'vue';
import {useRoute} from "vue-router";
import ruLanguage from '../../assets/language/ru.png';
import enLanguage from '../../assets/language/en.png';
import Cookies from "js-cookie";
import {useI18n} from "vue-i18n";


const isMenuOpen = ref(false);

const route = useRoute();
const showHomeButton = computed(()=>!route.path.startsWith('/admin-panel'));
const showAdminButton = computed(()=>route.path.startsWith('/admin-panel'));
const isAuth = computed(()=> Cookies.get('auth_token'));

const {t, locale} = useI18n();

function selectLanguage(newLocale) {
  console.log(newLocale)
  locale.value = newLocale;
}

let inLowVisionMode = false;
const originalFontSizes = computed(()=>{
  const elements = document.querySelectorAll('*');
  let fzs = new Map();
  elements.forEach(element => {
    const currentFontSize = window.getComputedStyle(element).fontSize;
    const match = currentFontSize.match(/([\d.]+)(px|em|rem)/);
    if (match) {
      const currentFontSizeValue = parseFloat(match[1]);
      const unit = match[2];
      let newFontSizeValue;

      // Преобразуем все единицы измерения в пиксели
      if (unit === 'em') {
        const baseFontSize = parseFloat(window.getComputedStyle(element.parentElement).fontSize);
        newFontSizeValue = currentFontSizeValue * baseFontSize;
      } else if (unit === 'rem') {
        const baseFontSize = parseFloat(window.getComputedStyle(document.documentElement).fontSize);
        newFontSizeValue = currentFontSizeValue * baseFontSize;
      } else {
        newFontSizeValue = currentFontSizeValue;
      }

      if (!fzs.get(element)) {
        fzs.set(element, newFontSizeValue);
      }
    }
  });
  return fzs;
});



const toggleFontSize = () => {
  const elements = document.querySelectorAll('*');
  inLowVisionMode = !inLowVisionMode;
  elements.forEach(element =>{
    let fontSize = originalFontSizes.value.get(element);
    if (inLowVisionMode) {
      fontSize += 4;
    }
    element.style.fontSize = `${fontSize}px`;
  });
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

</script>

<style scoped>

.lowVisionMode{
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 1000;
  color:black;
  font-size: 32px;
}
.navbar {
  flex-grow: 1;
  font-size: 24px; /* размер шрифта для Димы */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px; /* Отступы по бокам */
  position: relative; /* Для позиционирования бургер-меню */
}

.burger-button {
  display: none;
  background: none;
  border: none;
  color: inherit; /* Наследуем цвет текста */
  font-size: 24px;
  cursor: pointer;
  z-index: 1001; /* Чтобы кнопка была поверх меню */
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: inherit; /* Наследуем цвет текста */
  font-size: 24px;
  cursor: pointer;
  z-index: 1001; /* Чтобы кнопка была поверх меню */
}

.nav-menu {
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
  white-space: nowrap; /* Предотвращает перенос текста на новую строку */
  overflow: hidden; /* Предотвращает выход за границы */
}
.nav-menu.open {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 70%;
  background: rgba(0, 0, 0, 0.9); /* Добавляем полупрозрачный фон */
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  z-index: 1000;
  overflow-y: auto; /* Добавляем прокрутку, если контент не помещается */
}

.nav-link {
  color: inherit; /* Наследуем цвет текста */
  text-decoration: none;
  white-space: nowrap; /* Предотвращает перенос текста на новую строку */
}

.left-bar {
  display: flex;
  gap: 10px;
}

.left-bar img {
  height: 20px;
}

li {
  cursor: pointer;
  list-style: none;
  white-space: nowrap; /* Предотвращает перенос текста на новую строку */
}

@media (max-width: 1100px) {
  .nav-menu {
    display: none;
  }

  .nav-menu.open {
    display: flex;
  }

  .burger-button {
    display: block;
  }

  .left-bar {
    display: flex;
    gap: 10px;
  }
}
</style>
