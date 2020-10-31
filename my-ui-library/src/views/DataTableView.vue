<template>

  <h1>DataTable</h1>
  
  <DataTable :items="config" :columns="users" :search="search"/>

  <br/><br/>

  <code>
    &ltDataTable :items="config" :columns="users" :search="search"/&gt
  </code>
  
  <br/><br/>

  <code>
    data() {<br/><br/>

      &nbsp&nbspreturn {<br/><br/>

        &nbsp&nbsp&nbsp&nbspconfig: [<br/>
          &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp{title: '№', value: 'id', sortable: true},<br/>
          &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp{title: 'Имя', value: 'name'},<br/>
          &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp{title: 'Фамилия', value: 'surname'},<br/>
          &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp{title: 'Возраст', value: 'age'},<br/>
        &nbsp&nbsp&nbsp&nbsp],<br/><br/>

        &nbsp&nbsp&nbsp&nbspusers: [<br/>
          &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp{id: 1, name: 'Вася', surname: 'Петров', age: 20},<br/>
          &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp{id: 2, name: 'Петя', surname: 'Васечкин', age: 16},<br/>
        &nbsp&nbsp&nbsp&nbsp],<br/><br/>

        &nbsp&nbsp&nbsp&nbspsearch: {<br/>
          &nbsp&nbsp&nbsp&nbsp&nbsp&nbspfields: [],<br/>
        &nbsp&nbsp&nbsp&nbsp},<br/><br/>

      &nbsp&nbsp}<br/><br/>

    }
  </code>

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