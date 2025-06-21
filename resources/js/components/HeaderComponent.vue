<script setup>
import logo from '../../assets/logo_pnzgu.png'
import NavbarComponent from "./NavbarComponent.vue";

</script>

<template>
  <div class = 'wrapper'>
    <div class="logo">
      <router-link to="/">
        <img :src="logo"  alt="pnzgu_logo"/>
      </router-link>
    </div>
    <navbar-component/>
  </div>
</template>

<style scoped>
  .logo{
    display: flex;
    justify-content: center;
  }
  .logo img{
    width: 100px;
  }
  .wrapper{
    opacity: .9;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1005;
    display: flex;
    background: #8DBB5B;
    color: white;
    padding: 20px;
    box-sizing: border-box;
  }
  @media (max-width: 1100px) {
    .logo img{
      width: 50px;
    }
  }
</style>
