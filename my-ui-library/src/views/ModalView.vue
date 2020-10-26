<template>

  <h1>Modal</h1>

  <Modal button="Show">

    <template v-slot:header>
      <h1>Header</h1>
    </template>

    <template v-slot:body>
      <h3>Body</h3>
    </template>

    <template v-slot:footer>
      <h4>Footer</h4>
    </template>
    
  </Modal>

  <br/><br/>

  <img src="../../public/ModalCode/code1.png"/>

  <br/><br/>

  <DataTable :items="thead" :columns="tbody" :search="search"/>
  
</template>

<script lang="ts">

  import { defineComponent } from 'vue';

  import Modal from '@/components/Modal.vue';
  import DataTable from '@/components/DataTable.vue';
  
  export default defineComponent({

    name: "ModalView",

    components: {
      Modal,
      DataTable
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
          {name: 'button', type: 'String', default: '-', necessarily: 'Обязательний', description: 'Этот атрибут устанавливает текст внутри кнопки, которая откроет модальное окно'},
        ],

        search: {
          fields: [],
        }
        
      }
    }

  });

</script>