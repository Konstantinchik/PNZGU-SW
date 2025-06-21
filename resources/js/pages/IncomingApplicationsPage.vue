<script setup>

import DataTable from "../components/DataTable.vue";
import {fetchData} from "../main";
import {onMounted, ref, watch} from "vue";

const rawApplications = ref(null);
const processedApplications = ref([]);



const processData = (data) => {
  processedApplications.value = data.map(item => {
    const author = item.users[0];
    const coAuthor = item.users[1];

    console.log(item)

    return {
      id: item.id,
      title: item.title,
      file: `/storage/-uploads/applications/${item.id}.${item.file}`,
      direction: item.direction.title,
      status: item.status,
      created_at: item.created_at,
      updated_at: item.updated_at,
      additionalInfo: [
        {
          name: author ? author.name : '',
          email: author ? author.email : '',
          phone: author ? author.phone : ''
        },
        {
          name: coAuthor ? coAuthor.name : '',
          email: coAuthor ? coAuthor.email : '',
          phone: coAuthor ? coAuthor.phone : ''
        }
      ]
    };
  });
}

watch(rawApplications, (newData)=>{
  processData(newData);
})

onMounted(()=>{
  fetchData("/api/applications?status=0", rawApplications);
})

const applicationsColumns = [
  {key:"title", label:"Название", type: "text", isEditable: false,},
  {key:"direction", label:"Направление", type: "text", isEditable: false},
  {key:"file", label:"URL Файл статьи", type: "url", isEditable: false},
  {key:"status", label:"Статус", type: "select", options: [
      {
        text:"Отклонено",
        value:-1
      },
      {
        text:"Ожидание",
        value:0
      },
      {
        text:"Принято",
        value:1
      },
    ],
    isEditable: true
  },
];

const additionalColumns = [
  {key:"name", label:"ФИО"},
  {key:"email", label:"Email"},
  {key:"phone", label:"Номер телефона"},
]

</script>

<template>
  <data-table
    url="/api/applications"
    :data="processedApplications"
    :columns="applicationsColumns"
    :adding="false"
    :additional-columns="additionalColumns"
  />
</template>

<style scoped>

</style>
