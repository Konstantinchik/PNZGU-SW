<template>
  <div class="form-container">
    <h2>{{ t('forParticipants.applicationsForm.title') }}</h2>
    <form @submit.prevent="submitForm">
      <InputField
        id="title"
        :label="t('forParticipants.applicationsForm.labelTitleApp')"
        v-model="formData.title"
        required
        :placeholder="t('forParticipants.applicationsForm.exampleForTitleApp')"
      />
      <file-upload
        id="file-update"
        @change="handleFileChange"
        :file="formData.file"
        accept=".pdf,.doc,.docx"/>
      <custom-selector
        url="api/directions"
        :label="t('forParticipants.applicationsForm.labelSelectorDirections')"
        v-model="formData.direction_id"/>
      <InputField
        id="name"
        :label="t('forParticipants.applicationsForm.labelUsername')"
        v-model="formData.users[0].name"
        required
        :placeholder="t('forParticipants.applicationsForm.exampleForUsername')"
      />
      <InputField
        id="phone"
        :label="t('forParticipants.applicationsForm.labelPhone')"
        v-model="formData.users[0].phone"
        required
        :placeholder="t('forParticipants.applicationsForm.exampleForPhone')"
      />
      <InputField
        id="place"
        :label="t('forParticipants.applicationsForm.labelPlace')"
        v-model="formData.users[0].place"
        required
        :placeholder="t('forParticipants.applicationsForm.exampleForPlace')"
      />
      <InputField
        id="position"
        :label="t('forParticipants.applicationsForm.labelPosition')"
        v-model="formData.users[0].position"
        required
        :placeholder="t('forParticipants.applicationsForm.exampleForPosition')"
      />
      <InputField
        id="email"
        :label="t('forParticipants.applicationsForm.labelEmail')"
        type="email"
        v-model="formData.users[0].email"
        required
        :placeholder="t('forParticipants.applicationsForm.exampleForEmail')"
      />
      <button @click="addCoAuthor" class="submit-button" type="button">{{ t('forParticipants.applicationsForm.addCoAuthor') }}</button>
      <div v-for="(coAuthor, index) in formData.users.slice(1)" :key="index">
        <InputField
          :id="`coAuthorName${index}`"
          :label="t('forParticipants.applicationsForm.labelUsername')"
          v-model="coAuthor.name"
          required
          :placeholder="t('forParticipants.applicationsForm.exampleForUsername')"
        />
        <InputField
          :id="`coAuthorPhone${index}`"
          :label="t('forParticipants.applicationsForm.labelPhone')"
          v-model="coAuthor.phone"
          required
          :placeholder="t('forParticipants.applicationsForm.exampleForPhone')"
        />
        <InputField
          :id="`coAuthorPlace${index}`"
          :label="t('forParticipants.applicationsForm.labelPlace')"
          v-model="coAuthor.place"
          required
          :placeholder="t('forParticipants.applicationsForm.exampleForPlace')"
        />
        <InputField
          :id="`coAuthorPosition${index}`"
          :label="t('forParticipants.applicationsForm.labelPosition')"
          v-model="coAuthor.position"
          required
          :placeholder="t('forParticipants.applicationsForm.exampleForPosition')"
        />
        <InputField
          :id="`coAuthorEmail${index}`"
          :label="t('forParticipants.applicationsForm.exampleForEmail')"
          type="email"
          v-model="coAuthor.email"
          required
          :placeholder="t('forParticipants.applicationsForm.exampleForEmail')"
        />
        <button @click="removeCoAuthor(index)" class="remove-button" type="button">{{t('forParticipants.applicationsForm.removeCoAuthor')}}</button>
      </div>
      <button type="submit" class="submit-button">{{t("send")}}</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import FileUpload from "./FileUpload.vue";
import InputField from "./InputField.vue";
import { useI18n } from "vue-i18n";
import axios from 'axios';
import CustomSelector from "./CustomSelector.vue";

const { t } = useI18n();

const formData = ref({
  title: '',
  file: null,
  direction_id: 1,
  users: [
    {
      name: '',
      phone: '',
      place: '',
      position: '',
      email: '',
      status: 1
    }
  ]
});

const addCoAuthor = () => {
  if (formData.value.users.length < 5) {
    formData.value.users.push({
      name: '',
      phone: '',
      place: '',
      position: '',
      email: '',
      status: 2
    });
  }
};

const removeCoAuthor = (index) => {
  formData.value.users.splice(index, 1);
};

const handleFileChange = (data) => {
  formData.value.file = data;
};

async function submitForm() {
  const fd = new FormData();
  fd.append('title', formData.value.title);
  fd.append('direction_id', formData.value.direction_id);
  fd.append('file', formData.value.file);

  formData.value.users.forEach((user, index) => {
    fd.append(`users[${index}][name]`, user.name);
    fd.append(`users[${index}][phone]`, user.phone);
    fd.append(`users[${index}][place]`, user.place);
    fd.append(`users[${index}][position]`, user.position);
    fd.append(`users[${index}][email]`, user.email);
    fd.append(`users[${index}][status]`, user.status);
  });

  try {
    await axios.post("/api/applications", fd, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    alert('Форма успешно отправлена!');
  } catch (error) {
    console.error('Ошибка при отправке формы:', error);
    alert('Произошла ошибка при отправке формы. Пожалуйста, попробуйте снова.');
  }
}
</script>

<style scoped>
.form-container {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #8DBB5B;
  text-align: center;
  margin-bottom: 20px;
}

.submit-button {
  margin-bottom: 15px;
  width: 100%;
  padding: 10px;
  background-color: #8DBB5B;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.submit-button:hover {
  background-color: #45a049;
}
#file-update{
  margin-bottom: 10px;
}

.remove-button {
  margin-bottom: 15px;
  width: 100%;
  padding: 10px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.remove-button:hover {
  background-color: #e53935;
}
</style>
