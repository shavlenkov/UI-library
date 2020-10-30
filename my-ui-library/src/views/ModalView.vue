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

  <code>
    &ltModal button="Show"&gt<br/><br/>

    &nbsp&nbsp&lttemplate v-slot:header&gt<br/>
    &nbsp&nbsp&nbsp&nbsp&lth1Header&lt/h1&gt<br/>
    &nbsp&nbsp&lt/template&gt<br/><br/>

    &nbsp&nbsp&lttemplate v-slot:body&gt<br/>
    &nbsp&nbsp&nbsp&nbsp&lth3Body&lt/h3&gt<br/>
    &nbsp&nbsp&lt/template&gt<br/><br/>

    &nbsp&nbsp&lttemplate v-slot:footer&gt<br/>
    &nbsp&nbsp&nbsp&nbsp&lth3Footer&lt/h3&gt<br/>
    &nbsp&nbsp&lt/template&gt<br/><br/>

    &lt/Modal&gt   
  </code>

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