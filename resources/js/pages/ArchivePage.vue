<script setup>

import PdfComponent from "../components/PdfComponent.vue";

const scale = 0.7
</script>

<template>
  <div class="grid">
    <pdf-component :scale="scale" url="/storage/-uploads/applications/Information–communication–document_(ICD-2023)_SB_2023.pdf" title="2023"/>
    <pdf-component :scale="scale" url="/storage/-uploads/applications/The_collection_IS_ICD_2021_ITOG.pdf" title="2021"/>
    <pdf-component :scale="scale" url="/storage/-uploads/applications/COMPENDY_ICD_2020.pdf" title="2020"/>
  </div>
</template>

<style scoped>
  .grid{
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    padding:30px;
    gap: 10px;
  }
</style>
