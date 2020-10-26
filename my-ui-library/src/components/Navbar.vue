<template>

  <div class="nav">

    <div class="menu"><slot name="brand"></slot><i class="fas fa-bars" @click="burger()" icon></i></div>

    <div class="submenu"><slot name="menu"></slot></div>

  </div>

</template>

<script lang="ts">

  import { defineComponent } from 'vue';
   
  export default defineComponent({
    
    name: "Navbar",

    methods: {

      burger() {

        let icon = document.querySelectorAll("i[icon]")[0];
        let submenu = document.querySelectorAll("div.submenu")[0];

        switch(icon.getAttribute("class")){

          case "fas fa-bars":
            icon.setAttribute("class", "fas fa-times");
            submenu.setAttribute("style", "display: block");
            break;

          case "fas fa-times":
            icon.setAttribute("class", "fas fa-bars");
            submenu.removeAttribute("style");
 
        }
    	
      }

    },

  });

</script>

<style lang="less">

  @white: #fff;
  @black: #000;
  @gray: #4d4d4d;

  @media (max-width: 767px) {

    i.fa-bars, i.fa-times { color: @white; }

    .nav {
      width: 100%;
      margin: 0 auto;
    }

    .menu {
      width: 100%;
      background: @black;

    }

    .submenu {
      background: @black;
      display: none;
    }

    a[href] {
      color: @white;
      text-decoration: none;
      border-top: 1px solid @white;
      font-size: 25px;
      display: block;
      padding: 10px;
      font-family: "Arial";
    }

    a[href]:hover { background: @gray; }

    .view {
      width: 600px;
      margin: 0 auto;
    }

    .logo { margin-right: 45%; }
    

  }

  @media (min-width: 768px) and (max-width: 991px) {

    i.fa-bars, i.fa-times { color: @white; }

    .nav {
      width: 600px;
      margin: 0 auto;
    }

    .menu {
      width: 100%;
      background: @black;

    }

    .submenu {
      background: @black;
      display: none;
    }

    a[href] {
      color: @white;
      text-decoration: none;
      border-top: 1px solid @white;
      font-size: 25px;
      display: block;
      padding: 10px;
      font-family: "Arial";
    }

    a[href]:hover { background: @gray; }

    .view {
      width: 600px;
      margin: 0 auto;
    }

    .logo { margin-right: 45%; }

  }

  @media (min-width: 992px){

    i.fa-bars, i.fa-times { display: none; }

    .nav {
      display: flex;
      width: 900px;
      margin: 0 auto;
    }

    .menu {
      width: 100%;
      background: @black;

    }

    .submenu {
      background: @black;
      display: flex;
    }

    a[href] {
      width: 100%;
      color: @white;
      text-decoration: none;
      border-right: 1px solid @white;
      font-size: 25px;
      padding: 10px;
      font-family: "Arial";
    }

    a[href]:hover { background: @gray; }

    .view {
      width: 900px;
      margin: 0 auto;
    }

  }

</style>