<template>
  <div class="wrapper">
    <table>
      <thead>
      <tr>
        <th class="name-column">Название</th>
        <th class="icon-column">Иконка</th>
        <th class="actions-column">Действия</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in props.data" :key="index">
        <td>
          <input v-if="item.isEditing" v-model="item.title" class="input"/>
          <span v-else>{{ item.title }}</span>
        </td>
        <td>
          <div v-if="item.isEditing" class="icon-selector-container">
            <IconSelector :initialIcon="item.icon" @select="selectIcon(item, $event)"/>
          </div>
          <div v-else class="selected-icon-wrapper">
            <font-awesome-icon :icon="['fas', item.icon]" class="selected-icon"/>
          </div>
        </td>
        <td>
          <button v-if="!item.isEditing" @click="editItem(item)">
            <font-awesome-icon icon="pen" class="icon"/>
          </button>
          <button v-if="item.isEditing" @click="saveItem(item)">
            <font-awesome-icon icon="save" class="icon"/>
          </button>
          <button v-if="!item.isEditing" @click="deleteItem(index)">
            <font-awesome-icon icon="trash" class="icon"/>
          </button>
          <button v-if="item.isEditing" @click="cancelItem(item)">
            <font-awesome-icon icon="cancel" class="icon"/>
          </button>
        </td>
      </tr>
      <tr v-if="isAdding">
        <td>
          <input v-model="newItem.title" class="input"/>
        </td>
        <td>
          <div class="icon-selector-container">
            <IconSelector @select="selectIcon(newItem, $event)"/>
          </div>
        </td>
        <td>
          <button @click="addItem">
            <font-awesome-icon icon="save" class="icon"/>
          </button>
          <button @click="cancelAddingItem">
            <font-awesome-icon icon="cancel" class="icon"/>
          </button>
        </td>
      </tr>
      </tbody>
    </table>
    <button v-if="!isAdding" @click="startAddingItem">
      <font-awesome-icon icon="plus" class="icon"/>
    </button>
  </div>
</template>

<script setup>
import {ref, defineEmits, defineProps} from 'vue';
import IconSelector from './IconSelector.vue';

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  url:{
    type: String,
    required: true
  }
});

const emit = defineEmits(['update:data']);

const isAdding = ref(false);
const newItem = ref({ name: '', icon: '', isEditing: true });

function editItem(item) {
  item.isEditing = true;
}

async function saveItem(item) {
  item.isEditing = false;
  try{
    console.log(item)
    await axios.patch(`${props.url}/${item.id}`, item);
    emit('update:data', props.data);
  }catch (e) {
    console.error("Запись не обновлена: ", e);
  }
}

async function deleteItem(index) {
  const item = props.data[index];
  props.data.value.splice(index, 1);
  try{
    await axios.delete(props.url+"/"+item.id);
    emit('update:data', props.data);
  }catch (e){
    console.error("Запись не была удалена: ", e);
  }
}

function cancelItem(item) {
  item.isEditing = false;
}

function startAddingItem() {
  isAdding.value = true;
}

function cancelAddingItem(){
  newItem.value = {};
  isAdding.value = false;
}

async function addItem() {
  try{
    newItem.value.status=1;
    await axios.post(props.url, newItem.value);
    props.data.push({ ...newItem.value, isEditing: false });
    newItem.value = {};
    isAdding.value = false;
    emit('update:data', props.data);
  }catch (e){
    console.log("Запись не была добавлена: ", e)
  }
}

function selectIcon(item, icon) {
  item.icon = icon;
}
</script>

<style scoped>
.wrapper{
  text-align: center;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
}
th {
  background-color: #f2f2f2;
}
.input {
  border: 1px solid black;
  border-radius: 5px;
  height: 25px;
  padding: 5px;
  width: calc(100% - 20px); /* Учитываем padding */
  box-sizing: border-box;
}
button {
  background: none;
  border: none;
  cursor: pointer;
}
.icon {
  margin: 10px;
  font-size: 24px;
}
.icon-selector-container {
  position: relative;
  width: 100%;
  height: 30px; /* Уменьшаем высоту контейнера */
}
.selected-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
}
.selected-icon {
  font-size: 24px;
}
.name-column {
  width: 50%;
}
.icon-column {
  width: 30%;
}
.actions-column {
  width: 20%;
}
</style>
