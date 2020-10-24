<template>

  <Carousel :slides="slides"/>

</template>

<script lang="ts">

  import { defineComponent } from 'vue';

  import Carousel from '@/components/Carousel.vue';

  export default defineComponent({

    name: "CarouselView",

    components: {
      Carousel,
    },

    data() {

      return {

        slides: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png", "https://pluralsight.imgix.net/paths/path-icons/angular-14a0f6532f.png"],

      }

    }  
        
  });

</script>