<template>

  <h1>MyButton</h1>

  <MyButton color="error">Button</MyButton>
  <MyButton color="success">Button</MyButton>
  <MyButton color="warning">Button</MyButton>
  <MyButton color="info">Button</MyButton>
  <MyButton color="black">Button</MyButton>
  <MyButton color="white">Button</MyButton>
  <MyButton color="primary">Button</MyButton>
  <MyButton color="secondary">Button</MyButton>

  <br/><br/>

  <img src="../../public/MyButtonCode/code1.png"/>

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

  <img src="../../public/MyButtonCode/code2.png"/>

  <br/><br/>

  <MyButton color="primary" size="smoll">Button</MyButton>
  <MyButton color="primary" size="standart">Button</MyButton>
  <MyButton color="primary" size="big">Button</MyButton>

  <br/><br/>

  <img src="../../public/MyButtonCode/code3.png"/>

  <br/><br/>

  <MyButton color="primary" size="standart" shape="circle">Button</MyButton>
  <MyButton color="primary" size="standart" shape="edge">Button</MyButton>

  <br/><br/>

  <img src="../../public/MyButtonCode/code4.png"/>

  <br/><br/>

  <MyButton color="primary" size="standart" shape="edge" state="outlined">Button</MyButton>
  <MyButton color="primary" size="standart" shape="edge" state="disabled" disabled>Button</MyButton>

  <br/><br/>

  <img src="../../public/MyButtonCode/code5.png"/>

  <br/><br/>

  <MyButton color="primary" size="standart" shape="edge" :click="message">Button</MyButton>

  <br/><br/>

  <img src="../../public/MyButtonCode/code6.png"/>
  <img src="../../public/MyButtonCode/code7.png"/>

  <br/><br/>

  <DataTable :items="thead" :columns="tbody" :search="search"/>

  <vue-markdown> 

   ##Test
  </vue-markdown>

</template>

<script lang="ts">

  import { defineComponent } from 'vue';

  import MyButton from '@/components/MyButton.vue';
  import DataTable from '@/components/DataTable.vue';

  
  export default defineComponent({

    name: "MyButtonView",

    components: {
      MyButton,
      DataTable,
    },

    methods: {
      message: () => {
        alert("Hello, world!");
      }
    },

    data() {

      return {

        thead: [
          {title: 'Название', value: 'name', sortable: true},
          {title: 'Тип', value: 'type'},
          {title: 'Дефолтное значение', value: 'default'},
          {title: 'Обязательность', value: 'obligation'},
          {title: 'Описание', value: 'description'},
        ],

        tbody: [
          {name: 'color', type: 'String', default: 'secondary', obligation: 'Необязательный', description: 'Этот проп устанавливает цвет кнопки'},
          {name: 'size', type: 'String', default: 'standart', obligation: 'Необязательный', description: 'Этот проп устанавливает размер кнопки'},
          {name: 'shape', type: 'String', default: 'edge', obligation: 'Необязательный', description: 'Этот проп устанавливает форму кнопки'},
          {name: 'state', type: 'String', default: '-', obligation: 'Необязательный', description: 'Этот проп устанавливает состояние кнопки'},
          {name: ':click', type: 'Object', default: '-', obligation: 'Необязательный', description: 'Этот проп устанавливает событие клик на кнопку'},
        ],

        search: {
          fields: [],
        },

      }

    }

  });

</script>

