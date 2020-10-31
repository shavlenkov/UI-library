<template>

  <Navbar>

    <template #brand>

      <img class="logo" src="../public/logo.png" width="270" height="50"/>

    </template>

    <template #menu>

      <router-link class="router-link" to="/Home">Home</router-link>
      
      <router-link class="router-link" to="/MyButton">MyButton</router-link>

      <router-link class="router-link" to="/Grid">Grid</router-link>

      <router-link class="router-link" to="/Modal">Modal</router-link>

      <router-link class="router-link" to="/Carousel">Carousel</router-link>

      <router-link class="router-link" to="/DataTable">DataTable</router-link>

    </template>

  </Navbar>

  <div class="view">

    <router-view/>

  </div>

</template>

<style lang="less">

  body {
    background: url("../public/starry_sky.jpg");
    background-repeat: repeat;
  }

  .view { background: linear-gradient(to bottom, #00ffc8, #006eff); }

  @media (max-width: 767px) {

    .view {
      width: 100%;
      margin: 0 auto;
      margin-top: -20px;
    }

  }

  @media (min-width: 768px) and (max-width: 991px) {

    .view {
      width: 600px;
      margin: 0 auto;
      margin-top: -20px;
    }

  }

  @media (min-width: 992px) {

    .view {
      width: 900px;
      margin: 0 auto;
      margin-top: -20px;
    }

  }

  h1, h2 {
    font-family: 'Arial';
  }

  code {
    display: inline-block;
    background: #303030;
    color: white;
    font-size: 15px;
  }

</style>

<script lang="ts">

  import { defineComponent } from 'vue';
  
  import Navbar from '@/components/Navbar.vue';
  
  export default defineComponent({

    name: "NavbarView",

    components: {
      Navbar,
    },

  });
 
</script>