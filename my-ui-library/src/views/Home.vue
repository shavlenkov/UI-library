<template>
 
  <h1 class="text"><span class="bedge">UI-library</span></h1>
  <h2 class="text">Компоненты для Vue.js</h2>

  <br/><br/>

  <span class="git-clone">$ git clone https://github.com/shavlenkov/UI-library.git</span>

  <br/><br/><br/>

  <MyButton class="button-github" color="white-gradient"><i class="fab fa-github"></i><b><a href="https://github.com/shavlenkov/UI-library" class="link-github">GitHub</a></b></MyButton>
  <MyButton class="button-fork" color="white-gradient"><i class="fab fa-github"></i><b><a href="https://github.com/shavlenkov/UI-library/fork" class="link-fork">Fork</a></b></MyButton>


</template>

<script lang="ts">

  import { defineComponent } from 'vue';

  import MyButton from '@/components/MyButton.vue';

  export default defineComponent({

    name: "Home",

    components: {
      MyButton
    }

  });
  
</script>

<style>	

  h1.text {
  	font-family: 'Permanent Marker', cursive;
  	text-align: center;
  	padding-top: 10%;
  	font-size: 80px;
  	color: #ff9100;
    animation: size 0.5s ease;
    
  }

  span.bedge {
  	background: #f5f5f5;
  	padding: 13px;
  	border-radius: 20px;
  	border: 5px solid #e8e8e8;
  }

  @keyframes size {

  	from {
  	  opacity: 0;
  	}


  	to {
      opacity: 1;
  	}

  }

  h2.text {
  	font-family: 'Asap', sans-serif;
  	text-align: center;
  	color: #e8e8e8;
  	animation: size 0.5s ease;
  }

  a.link-github, a.link-fork {
  	text-decoration: none;
  	color: #000;
  	animation: size 0.5s ease;
  }

  button.button-github, button.button-fork {
    margin-left: 20%;
    animation: size 0.5s ease;
  }

  span.git-clone {
    background: #a1ffee;
    padding: 10px;
    font-size: 30px;
    margin-left: 12%;
    animation: size 0.5s ease;
    border-radius: 10px;
    border: 5px solid #5ef7aa;
  }

  .menu {
  	margin-bottom: 0;
  }

</style>