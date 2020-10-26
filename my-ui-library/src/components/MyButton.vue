<template>
  <button @click="click" :class="color + ' ' + size + ' ' + shape + ' ' + state"><slot></slot></button>
</template>

<script lang="ts">

  import { defineComponent } from 'vue';

  type Color = "error" | "success" | "warning" | "info" | "black" | "white" | "primary" | "secondary"
  type Size = "smoll" | "standart" | "big"
  type Shape = "circle" | "edge"
  type State = "outlined" | "disabled"
   
  export default defineComponent({

    name: "MyButton",

    props: {

      color: {
        type: String as () => Color,
        default: "secondary",
      },

      size: {
        type: String as () => Size,
        default: "standart",
      },

      shape: {
        type: String as () => Shape,
        default: "edge",
      },

      state: {
        type: String as () => State,
      },
      
      click: {
        type: Object,
      }

    },

  });

</script>

<style lang="less">

/* Colors */

@black: #000;
@white: #fff;

@alpha: rgba(0, 0, 0, 0.0);
@alpha-error: #fcd9d7;
@alpha-success: #d5f7d5;
@alpha-warning: #ffffd9;
@alpha-info: #d6ffff;
@alpha-primary: #d6d6ff;

@color-error: #ff0000;
@color-error-hover: #cf0000;
@color-success: #00ff00;
@color-success-hover: #00c900;
@color-warning: #ffff00;
@color-warning-hover: #c9c900;
@color-info: #00ffff;
@color-info-hover: #00cfcf;
@color-black: #292929;
@color-white-hover: #d1d1d1;
@color-primary: #0000ff;
@color-primary-hover: #0000cf;
@color-secondary: #808080;
@color-secondary-hover: #595959;

button {
  margin: 3px;
}

button.error {
  background-color: @color-error;
  color: @white;
}

button.error:hover {
  background-color: @color-error-hover;
}

button.error:focus {
  background: @alpha;
  color: @color-error;
  outline: none;
  border: 3px solid @color-error; 
}
    
button.success {
  background-color: @color-success;
  color: @black;
}
    
button.success:hover {
  background-color: @color-success-hover;
}

button.success:focus {
  background: @alpha;
  outline: none;
  border: 3px solid @color-success; 
  color: @color-success;
}

button.warning {
  background-color: @color-warning;
  color: @black;
}
    
button.warning:hover {
  background-color: @color-warning-hover;
}
     
button.warning:focus {
  background: @alpha;     
  outline: none;
  border: 3px solid @color-warning; 
  color: @color-warning;
}

button.info {
  background-color: @color-info;
  color: @black;
}

button.info:hover {
  background-color: @color-info-hover;
}

button.info:focus {
  background: @alpha;
  outline: none;
  border: 3px solid @color-info; 
  color: @color-info;
}

button.black {
  background-color: @color-black;
  color: @white;
}

button.black:hover {
  background-color: @black;
}

button.black:focus {
  background: @alpha;
  outline: none;
  border: 3px solid @color-black; 
  color: @color-black;
}

button.white {
  background-color: @white;
  color: @black;
}

button.white:hover {
  background-color: @color-white-hover;
}

button.white:focus {
  background: @alpha;
  outline: none;
  border: 3px solid @color-secondary; 
  color: @color-secondary;
  }

button.primary {
  background-color: @color-primary;
  color: @white;
}

button.primary:hover {
  background-color: @color-primary-hover;
}

button.primary:focus {
  background: @alpha;
  outline: none;
  border: 3px solid @color-primary; 
  color: @color-primary;
}

button.secondary {
  background-color: @color-secondary;
  color: @white;
}

button.secondary:hover {
  background-color: @color-secondary-hover;
}

button.secondary:focus {
  background: @alpha;
  outline: none;
  border: 3px solid @color-secondary; 
  color: @color-secondary;
}

/* Sizes */

button.smoll {
  font-size: 20px;
}

button.standart {
  font-size: 40px;
}

button.big {
  font-size: 60px;
}

/* Shape */
   
button.circle {
  border-radius: 50%;
  padding: 25px;
  outline: none;
}

button.edge {
  border-radius: 10px;
  outline: none;
}

/* State */

button.outlined {
  background: @alpha;
  color: @black;
}

button.outlined:hover {
  background: @alpha;
  color: @black;
}

button.outlined:focus {
  background: @alpha;
  border: 3px solid @black;
  color: @black;
}


button.disabled:disabled {
  opacity: 0.3;
}

/* Gradient */

button.error-gradient {
  background: linear-gradient(to bottom, @alpha-error, @color-error);
  color: @white;
}

button.success-gradient {
  background: linear-gradient(to bottom, @alpha-success, @color-success);
}

button.warning-gradient {
  background: linear-gradient(to bottom, @alpha-warning, @color-warning);
}

button.info-gradient {
  background: linear-gradient(to bottom, @alpha-info, @color-info);
}

button.black-gradient {
  background: linear-gradient(to bottom, @color-white-hover, @black);
  color: @white;
}

button.white-gradient {
  background: linear-gradient(to bottom, @white, @color-white-hover);
}

button.primary-gradient {
  background: linear-gradient(to bottom, @alpha-primary, @color-primary);
  color: @white;
}
    
button.secondary-gradient {
  background: linear-gradient(to bottom, @color-white-hover, @color-secondary);
  color: @white;
}

</style>