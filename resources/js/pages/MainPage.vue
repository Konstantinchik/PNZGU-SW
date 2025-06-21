<template>
  <div>
    <conference-banner></conference-banner>
    <!--  <conference-plan></conference-plan>-->
    <conference-steps></conference-steps>
    <main-work-directions></main-work-directions>
    <compose-conference :title="t('mainPage.organizingCommittee')" :participants="organizing"></compose-conference>
    <compose-conference :title="t('mainPage.programCommittee')" :participants="program"></compose-conference>
    <f-a-q-component></f-a-q-component>
    <footer>{{ t('mainPage.footerText') }}</footer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from 'vue-i18n';
import axios from "../routes/axios.js";

import MainWorkDirections from "../components/MainWorkDirections.vue";
import ComposeConference from "../components/ComposeConference.vue";
import ConferenceBanner from "../components/ConferenceBanner.vue";
import ConferenceSteps from "../components/ConferenceSteps.vue";
import FAQComponent from "../components/FAQComponent.vue";

const { t } = useI18n();

const organizing = ref(null);
const program = ref(null);

async function fetchData(URL, data) {
  try {
    const response = await axios.get(URL);
    data.value = response.data.data;
  } catch (error) {
    console.error("Данные не были получены: ", error);
  }
}

fetchData("/api/users/organizing", organizing);
fetchData("/api/users/program", program);
</script>

<style scoped>
footer {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
