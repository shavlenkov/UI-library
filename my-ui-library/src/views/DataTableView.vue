<template>
  
  <DataTable :items="config" :columns="users" :search="search"/>

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

        search: {
          fields: [],
        },
      }
    }
  });

</script>