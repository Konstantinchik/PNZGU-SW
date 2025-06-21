<script setup>
  import { defineEmits, defineProps } from "vue";
  import {useI18n} from "vue-i18n";

  const {t} = useI18n();
  const emit = defineEmits(['change']);

  const props = defineProps({
    file:{
      type:Object,
      required:true
    },
    accept:{
      type:String,
      required:true
    }
  })

  const handleFileChange = (event) =>{
    emit("change", event.target.files[0]);
  }

</script>

<template>
  <div class="file-upload">
    <label for="file" class="file-label" v-if="!file">
      <span class="file-icon">&#128206;</span> <!-- Иконка скрепки -->
      <span>{{t("fileUpload.attachFile")}}</span>
    </label>
    <div class="file-info" v-if="file">
      <span class="file-icon">&#x1F4C4;</span> <!-- Иконка файла -->
      <span>{{ file.name }}</span>
      <label for="file">{{t("edit")}} &#9998;</label><!-- Иконка карандаша -->
    </div>
    <input type="file" id="file" @change="handleFileChange" class="file-input" :accept="accept">
  </div>
</template>

<style scoped>

.file-upload {
  position: relative;
}

.file-label {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #8DBB5B;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.file-label:hover {
  background-color: #45a049;
}

.file-icon {
  margin-right: 10px;
  font-size: 20px;
}

.file-input {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.file-info {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #e0f7fa;
  border: 1px solid #00bcd4;
  border-radius: 4px;
  margin-top: 10px;
}

.file-info .file-icon {
  margin-right: 10px;
  font-size: 20px;
}
.file-info label {
  margin-left: auto;
}
</style>
