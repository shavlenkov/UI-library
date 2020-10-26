<template>

  <h1>DataTable</h1>
  
  <DataTable :items="config" :columns="users" :search="search"/>

  <br/><br/>

  <img src="../../public/DataTableCode/code1.png"/>
  <img src="../../public/DataTableCode/code2.png"/>

  <br/><br/>

  <DataTable :items="thead" :columns="tbody" :search="search"/>

</template>

<script lang="ts">

  import { defineComponent } from 'vue';
  
  import DataTable from '@/components/DataTable.vue';
  
  export default defineComponent({

    name: "DataTableView",

    components: {
      DataTable,
    },
    
    data() {

      return {

        config: [
          {title: '№', value: 'id', sortable: true},
          {title: 'Имя', value: 'name'},
          {title: 'Фамилия', value: 'surname'},
          {title: 'Возраст', value: 'age'},
        ],

        users: [
          {id: 1, name: 'Вася', surname: 'Петров', age: 20},
          {id: 2, name: 'Петя', surname: 'Васечкин', age: 16},
        ],


        thead: [
          {title: 'Название', value: 'name', sortable: true},
          {title: 'Тип', value: 'type'},
          {title: 'Дефолтное значение', value: 'default'},
          {title: 'Обязательность', value: 'obligation'},
          {title: 'Описание', value: 'description'},
        ],

        tbody: [
          {name: ':items', type: 'Array', default: '-', obligation: 'Обязательный', description: 'Этот проп устанавливает шапку таблицы'},
          {name: ':columns', type: 'Array', default: '-', obligation: 'Обязательный', description: 'Этот проп устанавливает тело таблицы'},
          {name: ':search', type: 'Object', default: '-', obligation: 'Необязательный', description: 'Этот проп устанавливает тело таблицы'},
        ],

        search: {
          fields: [],
        },

      }

    }
    
  });

</script>






