<template>

  <div>

    <button v-on:click="hidden = true">{{button}}</button>

    <div class="modal" v-if="hidden">
      <div class="modal-header">
        <b v-on:click="hidden = false" class="times" style="font-size: 30px; cursor: pointer;">&times;</b>
        <slot name="header"><slot></slot></slot>
      </div>
      <div class="modal-body"> 
        <slot name="body"><slot></slot></slot>
      </div>
      <div class="modal-footer">  
        <slot name="footer"><slot></slot></slot>
      </div>
    </div>

  </div>
  
</template>

<script type="ts">

  import { defineComponent } from 'vue';
   
  export default defineComponent({

    name: "Modal",

    props: {
      
      button: {
        type: String,
      }

    },

    data() {

      return {
        hidden: false,
      }

    }

  });

</script>

<style lang="less">

@alpha-gray: rgba(0, 0, 0, 0.8);
@white: #fff;
@gray: #888;

.modal {
  width: 100%; 
  height: 100%; 
  background-color: @alpha-gray;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  overflow: auto;
}

.modal-header {
  width: 50%;
  background: @white;
  border: 1px solid @gray;
  margin: 0 auto;
  margin-top: 15%;
  padding: 20px;
}

.modal-body {
  width: 50%;
  background: @white;
  border: 1px solid @gray;
  margin: 0 auto;
  padding: 20px;
}

.modal-footer {
  width: 50%;
  background: @white;
  border: 1px solid @gray;
  margin: 0 auto;
  padding: 20px;
}

.times {
  float: right;
}

</style>