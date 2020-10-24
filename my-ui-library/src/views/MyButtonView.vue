<template>

  <MyButton color="error">Button</MyButton>
  <MyButton color="success">Button</MyButton>
  <MyButton color="warning">Button</MyButton>
  <MyButton color="info">Button</MyButton>
  <MyButton color="black">Button</MyButton>
  <MyButton color="white">Button</MyButton>
  <MyButton color="primary">Button</MyButton>
  <MyButton color="secondary">Button</MyButton>

  <br/><br/>

  <MyButton color="error-gradient">Button</MyButton>
  <MyButton color="success-gradient">Button</MyButton>
  <MyButton color="warning-gradient">Button</MyButton>
  <MyButton color="info-gradient">Button</MyButton>
  <MyButton color="black-gradient">Button</MyButton>
  <MyButton color="white-gradient">Button</MyButton>
  <MyButton color="primary-gradient">Button</MyButton>
  <MyButton color="secondary-gradient">Button</MyButton>

  <br/><br/>

  <MyButton color="primary" size="smoll">Button</MyButton>
  <MyButton color="primary" size="standart">Button</MyButton>
  <MyButton color="primary" size="big">Button</MyButton>

  <br/><br/>

  <MyButton color="primary" size="standart" shape="circle">Button</MyButton>
  <MyButton color="primary" size="standart" shape="edge">Button</MyButton>

  <br/><br/>

  <MyButton color="primary" size="standart" shape="edge" state="outlined">Button</MyButton>
  <MyButton color="primary" size="standart" shape="edge" state="disabled" disabled>Button</MyButton>

  <br/><br/>

  <MyButton color="primary" size="standart" shape="edge" :click="message">Button</MyButton>

</template>

<script lang="ts">

  import { defineComponent } from 'vue';

  import MyButton from '@/components/MyButton.vue';
  
  export default defineComponent({

    name: "MyButtonView",

    components: {
      MyButton,
    },

    methods: {
      message: () => {
        alert("Hello, world!");
      }
    },

  });

</script>

