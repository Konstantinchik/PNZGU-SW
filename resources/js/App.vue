<script setup>

import HeaderComponent from "./components/HeaderComponent.vue";
</script>

<template>
    <header-component></header-component>
    <router-view class = 'view'></router-view>
</template>

<style>
  .view{
    margin-top: 140px;
    height: 100%;
  }
  body, html{
    height: 100%;
  }
  body{
    font-size: 16px;
  }
  *{
      padding: 0;
      margin: 0;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100%;
  }

  a{
      color: black;
      text-decoration: none;
  }
  a:active{
      color: black;
      text-decoration: none;
  }
  @media (max-width: 1100px) {
    .view{
      margin-top: 90px;
    }
  }
</style>
