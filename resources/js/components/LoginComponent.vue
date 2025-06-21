<template>
    <div class="login-container">
        <h2>Вход</h2>
        <form @submit.prevent="login">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" v-model="form.email" required>
            </div>
            <div class="form-group">
                <label for="password">Пароль</label>
                <input type="password" v-model="form.password" required>
            </div>
            <button type="submit" class="btn">Login</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from '../routes/axios';
import Cookies from "js-cookie";
import router from "../routes";

const form = ref({
    email: '',
    password: ''
});

const login = async () => {
  try {
    const response = await axios.post('/api/auth/login', form.value);
    Cookies.set('auth_token', response.data.token, {expires:1});
    await router.push('/admin-panel');
  } catch (error) {
    console.error(error.response.data.message);
  }
};
</script>

<style scoped>
.login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.btn {
    display: inline-block;
    padding: 10px 20px;
    color: #fff;
    background-color: #8DBB5B;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.btn:hover {
    background-color: #45a049;
}
</style>
