<template>
  
  <h1>Carousel</h1>

  <Carousel :slides="slides"/>

  <br/><br/>

  <code>
    &ltCarousel :slides="slides"/&gt
  </code>
  
  <br/><br/>

  <code>
    data() {<br/>

      &nbsp&nbspreturn {<br/>

        &nbsp&nbsp&nbsp&nbspslides: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png", "https://pluralsight.imgix.net/paths/path-icons/angular-14a0f6532f.png"],<br/>


      &nbsp&nbsp}<br/>

    }
  </code>

  <br/><br/>

  <DataTable :items="thead" :columns="tbody" :search="search"/>

</template>

<style lang="less">

  #carousel {
    width: 100%;
  }
  
</style>

<script lang="ts">

  import { defineComponent } from 'vue';

  import Carousel from '@/components/Carousel.vue';
  import DataTable from '@/components/DataTable.vue';

  export default defineComponent({

    name: "CarouselView",

    components: {
      Carousel,
      DataTable
    },

    data() {

      return {

        slides: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png", "https://pluralsight.imgix.net/paths/path-icons/angular-14a0f6532f.png"],

        thead: [
          {title: 'Название', value: 'name', sortable: true},
          {title: 'Тип', value: 'type'},
          {title: 'Дефолтное значение', value: 'default'},
          {title: 'Обязательность', value: 'obligation'},
          {title: 'Описание', value: 'description'},
        ],

        tbody: [
          {name: ':slides', type: 'Array', default: '-', obligation: 'Обязательный', description: 'Этот проп устанавливает массив слайдов для карусели'},
        ],

        search: {
          fields: [],
        },

      }

    }  

        
  });

</script>