<template>
  <tr>
    <td v-for="column in columns" :key="column.key">
      <input
        v-if="column.type === 'text' || column.type === 'email'"
        :type="column.type"
        v-model="newItem[column.key]"
        :class="{ 'invalid': newItem.errors && newItem.errors[column.key] }"
      />
      <select v-if="column.type === 'select'" v-model="newItem[column.key]">
        <option v-for="option in column.options" :key="option.value" :value="option.value">
          {{ option.text }}
        </option>
      </select>
      <span v-if="newItem.errors && newItem.errors[column.key]" class="error-message">
        {{ newItem.errors[column.key] }}
      </span>
    </td>
    <td>
      <button @click="emit('add')">
        <font-awesome-icon icon="save" class="icon"/>
      </button>
      <button @click="emit('cancel')">
        <font-awesome-icon icon="cancel" class="icon"/>
      </button>
    </td>
  </tr>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  columns: {
    type: Array,
    required: true,
  },
  newItem: {
    type: Object,
    required: true,
  }
});

const emit = defineEmits(['add', 'cancel']);
</script>

<style scoped>
.invalid {
  border-color: red;
}

.error-message {
  color: red;
  font-size: 0.8em;
}

.icon {
  margin: 10px;
  width: 15px;
  height: 15px;
  color: #2c3e50;
}

button {
  background: none;
  border: none;
  cursor: pointer;
}
</style>
