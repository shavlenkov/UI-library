<template>

  <h1>Grid</h1>

  <Row>
    <Column xs="12" sm="12" md="4" lg="4" xl="4" style="background: red;">Red</Column>
    <Column xs="12" sm="12" md="4" lg="4" xl="4" style="background: yellow;">Yellow</Column>
    <Column xs="12" sm="12" md="4" lg="4" xl="4" style="background: lime;">Green</Column>
  </Row>

  <br/><br/>

  <img src="../../public/GridCode/code1.png" id="grid"/>

  <br/><br/>

  <DataTable :items="thead" :columns="tbody" :search="search"/>

</template>

<style lang="less">

  #grid {
    width: 100%;
  }

</style>

<script lang="ts">

  import { defineComponent } from 'vue';

  import Row from '@/components/grid/Row.vue';
  import Column from '@/components/grid/Column.vue';
  import DataTable from '@/components/DataTable.vue';
  
  export default defineComponent({

    name: "GridView",

    components: {
      Row,
      Column,
      DataTable,
    },

    data() {

      return {

        thead: [
          {title: 'Название', value: 'name', sortable: true},
          {title: 'Тип', value: 'type'},
          {title: 'Дефолтное значение', value: 'default'},
          {title: 'Обязательность', value: 'necessarily'},
          {title: 'Описание', value: 'description'},
        ],

        tbody: [
          {name: 'xs', type: 'Number', default: '12', necessarily: "Обязательний", description: 'Этот атрибут устанавливает размер сетки на телефоне'},
          {name: 'sm', type: 'Number', default: '12', necessarily: "Обязательний", description: 'Этот атрибут устанавливает размер сетки на телефоне'},
          {name: 'md', type: 'Number', default: '12', necessarily: "Обязательний", description: 'Этот атрибут устанавливает размер сетки на планшете'},
          {name: 'lg', type: 'Number', default: '12', necessarily: "Обязательний", description: 'Этот атрибут устанавливает размер сетки на ноутбуке'},
          {name: 'xl', type: 'Number', default: '12', necessarily: "Обязательний", description: 'Этот атрибут устанавливает размер сетки на компьютере'},
        ],

        search: {
          fields: [],
        }
        
      }
    }

  });

</script>
