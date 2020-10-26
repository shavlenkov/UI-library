<template>
<Navbar>

    <template #brand>

      <img class="logo" src="../public/logo.png" width="280" height="50"/>

    </template>

    <template #menu>
      
      <router-link to="/MyButton">MyButton</router-link>

      <router-link to="/Grid">Grid</router-link>

      <router-link to="/Modal">Modal</router-link>

      <router-link to="/Carousel">Carousel</router-link>

      <router-link to="/DataTable">DataTable</router-link>

    </template>

  </Navbar>

  <br/><br/>

  <div class="view">

    <router-view/>

  </div>

  <div class="count-particles">
    <span class="js-count-particles">--</span>
  </div>

  

</template>

<style lang="less">

  body {
    background: url("../public/starry_sky.jpg");
  }

  .view {

    background: linear-gradient(180deg, #ff7700, #fff200, #22ff00, #4059ff);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;

    @keyframes gradient {

      0% {
        background-position: 0% 25%;
      }

      25% {
        background-position: 25% 50%;
      }

      50% {
        background-position: 50% 75%;
      }

      75% {
        background-position: 75% 100%;
      }

      100% {
        background-position: 100% 0%;
      } 

    }

    margin-top: -60px;
  }

  h1 {
    font-family: 'Arial';
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