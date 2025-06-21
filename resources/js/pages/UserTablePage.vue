<script setup>
import UserTable from "../components/DataTable.vue";
import {onMounted, ref} from "vue"
import {fetchData} from "../main.js"

const userColumns = [
  { key: 'name', label: 'ФИО', type: 'text', isEditable: true },
  { key: 'email', label: 'Email', type: 'email', isEditable: true },
  { key: 'phone', label: "Номер телефона", type: "text", isEditable: true},
  { key: 'status', label: 'Статус', type: 'select', options: [
      {
        text:"Орг. комитет",
        value:99
      },
      {
        text:"Прог. комитет",
        value:98
      }
    ]
  },
  { key: 'place', label: 'Место работы', type: 'text', isEditable: true },
  { key: 'position', label: 'Должность', type: 'text', isEditable: true },
  { key: 'link', label: "URL Фото", type: 'url', isEditable: true },
];

const users = ref([]);

onMounted( () => fetchData("/api/users/organizing", users) );

</script>

<template>
   <div class = 'wrapper'>
     <user-table url="/api/users" :columns="userColumns" v-model:data="users" additional-columns=""></user-table>
   </div>
</template>

<style scoped>
  .wrapper{
    padding: 30px;
  }
</style>
