<template>

  <div class="carousel">
    
    <div class="carousel-item">
      <img v-bind:src="slides[Math.abs(index) % slides.length]"/>
    </div>

    <p v-on:click="index--"><a class="prev">&lt;</a></p>
    <p v-on:click="index++"><a class="next">&gt;</a></p>
  
  </div>

</template>

<script lang="ts">

  import { defineComponent } from 'vue';

  interface ICarouselConfig {
    slides: Array<string>;
  }
   
  export default defineComponent({
    
    name: "Carousel",

    props: {
      
      slides: {
        type: Array as () => ICarouselConfig[],
      },

    },

    data() {

      return {

        index: 0,

      }

    },
    
  });

</script>

<style lang="less">

@black: #000;

.carousel {
  max-width: 50%;
  height: 400px;
  margin: 0 auto;
  position: relative;
}

.carousel-item img {
  width: 50%;
  height: 50%;
  margin-left: 25%;
  margin-top: 50px;
}

.prev, .next {
  background: @black;
  color: white;
  font-size: 18px;
  position: absolute;
  top: 50%;
  padding: 16px;
  margin: 40px;
  cursor: pointer;
}

.next {
  right: 0;
}

</style>