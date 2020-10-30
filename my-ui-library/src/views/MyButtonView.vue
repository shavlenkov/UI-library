<template>

  <h1>MyButton</h1>

  <h3>color</h3>

  <MyButton color="error">Button</MyButton>
  <MyButton color="success">Button</MyButton>
  <MyButton color="warning">Button</MyButton>
  <MyButton color="info">Button</MyButton>
  <MyButton color="black">Button</MyButton>
  <MyButton color="white">Button</MyButton>
  <MyButton color="primary">Button</MyButton>
  <MyButton color="secondary">Button</MyButton>

  <br/><br/>

  <code>
    &ltMyButton color="error"&gtButton&lt/MyButton&gt<br/>
    &ltMyButton color="success"&gtButton&lt/MyButton&gt<br/>
    &ltMyButton color="warning"&gtButton&lt/MyButton&gt<br/>
    &ltMyButton color="info"&gtButton&lt/MyButton&gt<br/>
    &ltMyButton color="black"&gtButton&lt/MyButton&gt<br/>
    &ltMyButton color="white"&gtButton&lt/MyButton&gt<br/>
    &ltMyButton color="primary"&gtButton&lt/MyButton&gt<br/>
    &ltMyButton color="secondary"&gtButton&lt/MyButton&gt
  </code>

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

  <code>
    &ltMyButton color="error-gradient"&gtButton&lt/MyButton&gt<br/>
    &ltMyButton color="success-gradient"&gtButton&lt/MyButton&gt<br/>
    &ltMyButton color="warning-gradient"&gtButton&lt/MyButton&gt<br/>
    &ltMyButton color="info-gradient"&gtButton&lt/MyButton&gt<br/>
    &ltMyButton color="black-gradient"&gtButton&lt/MyButton&gt<br/>
    &ltMyButton color="white-gradient"&gtButton&lt/MyButton&gt<br/>
    &ltMyButton color="primary-gradient"&gtButton&lt/MyButton&gt<br/>
    &ltMyButton color="secondary-gradient"&gtButton&lt/MyButton&gt
  </code>

  <br/><br/>

  <h3>size</h3>

  <MyButton color="primary" size="smoll">Button</MyButton>
  <MyButton color="primary" size="standart">Button</MyButton>
  <MyButton color="primary" size="big">Button</MyButton>

  <br/><br/>

   <code>
    &ltMyButton color="error-gradient" size="smoll"&gtButton&lt/MyButton&gt<br/>
    &ltMyButton color="success-gradient" size="standart"&gtButton&lt/MyButton&gt<br/>
    &ltMyButton color="warning-gradient" size="big"&gtButton&lt/MyButton&gt
  </code>

  <br/><br/>

  <h3>shape</h3>

  <MyButton color="primary" size="standart" shape="circle">Button</MyButton>
  <MyButton color="primary" size="standart" shape="edge">Button</MyButton>

  <br/><br/>

  <code>
    &ltMyButton color="error-gradient" size="smoll" shape="circle"&gtButton&lt/MyButton&gt<br/>
    &ltMyButton color="success-gradient" size="standart" shape="edge"&gtButton&lt/MyButton&gt
  </code>

  <br/><br/>

  <MyButton color="primary" size="standart" shape="edge" state="outlined">Button</MyButton>
  <MyButton color="primary" size="standart" shape="edge" state="disabled" disabled>Button</MyButton>

  <br/><br/>

  <h3>state</h3>

  <code>
    &ltMyButton color="error-gradient" size="smoll" shape="circle" state="outlined"&gtButton&lt/MyButton&gt<br/>
    &ltMyButton color="success-gradient" size="standart" shape="edge" state="disabled" disabled&gtButton&lt/MyButton&gt
  </code>

  <br/><br/>

  <h3>:click</h3>

  <MyButton color="primary" size="standart" shape="edge" :click="message">Button</MyButton>

  <br/><br/>

  <code> 
    &ltMyButton color="error-gradient" size="smoll" shape="edge" :click="message"&gtButton&lt/MyButton&gt<br/>
  </code>

  <br/><br/>

  <code> 
    methods: {<br/>
      &nbsp&nbspmessage: () => {<br/>
       &nbsp&nbsp&nbsp&nbspalert("Hello, world!");<br/>
      &nbsp&nbsp}<br/>
    }
  </code>

  <br/><br/>

  <DataTable :items="thead" :columns="tbody" :search="search"/>

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

