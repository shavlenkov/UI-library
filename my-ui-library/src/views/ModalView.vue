<template>

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
  
</template>

<script lang="ts">

  import { defineComponent } from 'vue';

  import Modal from '@/components/Modal.vue';
  
  export default defineComponent({

    name: "ModalView",

    components: {
      Modal,
    },

  });

</script>