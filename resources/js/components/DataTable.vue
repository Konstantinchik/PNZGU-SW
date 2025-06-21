<template>
  <div class="wrapper">
    <table>
      <thead>
      <TableHeader :columns="columns" />
      </thead>
      <tbody>
      <TableRow
        v-for="(item, index) in data"
        :key="index"
        :item="item"
        :columns="columns"
        :additionalColumns="additionalColumns"
        @edit="editItem"
        @save="saveItem"
        @delete="deleteItem"
        @cancel="cancelItem"
        @toggleExpand="toggleExpand"
      />
      <AddRow
        v-if="isAdding"
        :columns="columns"
        :newItem="newItem"
        @add="addItem"
        @cancel="cancelAdding"
      />
      </tbody>
    </table>
    <button v-if="!isAdding && adding" @click="startAddingItem">
      <font-awesome-icon icon="plus" class="icon"/>
    </button>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';
import axios from 'axios';
import TableHeader from './TableHeader.vue';
import TableRow from './TableRow.vue';
import AddRow from './AddRow.vue';

const props = defineProps({
  columns: {
    type: Array,
    required: true,
  },
  data: {
    type: Array,
    required: true,
  },
  url: {
    type: String,
    required: true
  },
  adding: {
    type: Boolean,
    default: true
  },
  additionalColumns: {
    type: Array,
    required: true,
  }
});

const emit = defineEmits(['update:data']);

const isAdding = ref(false);
const newItem = ref({});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validateItem(item) {
  const errors = {};
  props.columns.forEach(column => {
    if (column.type === 'email' && !validateEmail(item[column.key])) {
      errors[column.key] = 'Некорректный email';
    }
  });
  return errors;
}

function editItem(item) {
  item.originalData = {...item}; // Сохраняем копию исходных данных
  item.isEditing = true;
}

async function saveItem(item) {
  const errors = validateItem(item);
  if (Object.keys(errors).length === 0) {
    item.isEditing = false;
    item.errors = null;
    try {
      await axios.patch(`${props.url}/${item.id}`, item);
      emit('update:data', props.data);
    } catch (e) {
      console.error("Запись не обновлена: ", e);
    }
  } else {
    item.errors = errors;
  }
}

async function deleteItem(index) {
  const item = props.data[index];
  props.data.splice(index, 1);
  try {
    await axios.delete(props.url + "/" + item.id);
    emit('update:data', props.data);
  } catch (e) {
    console.error("Запись не была удалена: ", e);
  }
}

function startAddingItem() {
  isAdding.value = true;
  props.columns.forEach(column => {
    newItem.value[column.key] = '';
  });
}

async function addItem() {
  const errors = validateItem(newItem.value);
  if (Object.keys(errors).length === 0) {
    try {
      await axios.post(props.url, newItem.value);
      props.data.push({...newItem.value, isEditing: false});
      newItem.value = {};
      isAdding.value = false;
      emit('update:data', props.data);
    } catch (e) {
      console.log("Запись не была добавлена: ", e)
    }
  } else {
    newItem.value.errors = errors;
  }
}

function cancelItem(item) {
  Object.assign(item, item.originalData); // Восстанавливаем исходные данные
  item.isEditing = false;
  item.errors = null;
}

function cancelAdding() {
  isAdding.value = false;
  newItem.value = {};
}

function toggleExpand(item) {
  item.isExpanded = !item.isExpanded;
}
</script>

<style scoped>
.wrapper{
  text-align: center;
}

.icon {
  margin: 10px;
  width: 15px;
  height: 15px;
  color: #2c3e50;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  position: relative;
}

th {
  background-color: #f2f2f2;
}

input, select {
  border: 1px solid black;
  border-radius: 5px;
  height: 20px;
  padding: 5px;
}

button {
  background: none;
  border: none;
  cursor: pointer;
}
</style>
