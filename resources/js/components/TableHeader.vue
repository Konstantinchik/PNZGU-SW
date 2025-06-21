<template>
  <tr>
    <th v-for="column in columns" :key="column.key">
      {{ column.label }}
    </th>
    <th>Действия</th>
  </tr>
</template>

<script setup>
defineProps({
  columns: {
    type: Array,
    required: true,
  }
});
</script>

<style scoped>
th {
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  padding: 8px;
}
</style>
