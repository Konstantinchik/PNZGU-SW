<template>
  <direction-component :data="directions" url="/api/directions"></direction-component>
</template>

<script setup>

import DirectionComponent from "../components/DirectionComponent.vue";
import {fetchData} from "../main";
import {ref} from "vue";

const directions = ref();

fetchData("/api/directions", directions)


</script>

<style scoped>

</style>
