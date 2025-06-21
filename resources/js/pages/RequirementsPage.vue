<template>
  <div>
    <div class="main-container">
      <h1><font-awesome-icon icon="book" class="icon" /> {{ t('reqPage.title') }}</h1>
      <p>{{ t('reqPage.paragraph1') }}</p>
      <p>{{ t('reqPage.paragraph2') }}</p>
      <p>{{ t('reqPage.paragraph3') }}</p>
      <p>{{ t('reqPage.paragraph4') }}</p>
      <p>{{ t('reqPage.paragraph5') }}</p>
      <p>{{ t('reqPage.paragraph6') }}</p>
    </div>
    <req-table></req-table>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import ReqTable from "../components/ReqTable.vue";

const { t } = useI18n();
</script>

<style scoped>
.main-container {
  padding: 20px;
  color: #333;
  max-width: 800px;
  margin-left:auto;
  margin-right:auto;
  line-height: 1.6;
}

h1 {
  color: #4CAF50;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.icon {
  margin-right: 10px;
}

p {
  margin-bottom: 20px;
  text-align: justify;
}
</style>
