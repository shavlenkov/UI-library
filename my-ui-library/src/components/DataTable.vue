<template>
  
  <div>

    <input v-if="search" v-model="value"/><br/><br/>

    <table>

      <thead>
        <tr>
          <th v-for="item in items">{{item.title}}<i @click="sortDataByColumn(item)" v-if="item.sortable" class="fas fa-sort" sort></i></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="search in searchColumns">
          <td v-for="item in items">{{search[item.value]}}</td>
        </tr>
      </tbody>

    </table>

  </div>

</template>

<script lang="ts">

  import { defineComponent } from 'vue';

  interface ITableItem {
    title: string;
    value: string;
    sortable: boolean;
  }

  interface ITableColumn {
    [key: string]: string | number;
  }
    
  interface ISearchConfig {
    fields: Array<string>;
  }
  
  export default defineComponent({

    name: "DataTable",

    props: {

      items: {
        type: Array as () => ITableItem[],
      },

      columns: {
        type: Array as () => ITableColumn[],
      },

      search: {
        type: Object as () => ISearchConfig,
      },

    },

    data() {

      return {
        value: '',
        copyUsers: this.columns,
        counter: -1,
        thisColumn: {} as ITableItem

      };

    },

    methods: {

      sortDataByColumn(item: ITableItem) {

        if(!item) return;

        if(this.thisColumn != item) {
          this.counter = -1;
          this.thisColumn = item;
        }

        this.counter++;

        this.copyUsers = this!.columns!.slice().sort((user1: ITableColumn, user2: ITableColumn):number => {
          if(typeof user1[item.value as string] == "string") {

            if(this.counter == 0){
              return (user1[item.value as string] as string ).localeCompare(user2[item.value as string] as string);
            } else if (this.counter == 1){
              return (user2[item.value as string] as string ).localeCompare(user2[item.value as string] as string);
            } else {
              this.counter = -1;
              return 0;
            }

          } else if (typeof user1[item.value as string] == "number"){
            if(this.counter == 0){
              return (user1[item.value as string] as number) - (user2[item.value as string] as number);
            } else if (this.counter == 1){
              return (user2[item.value as string] as number) - (user1[item.value as string] as number);
            } else {
              this.counter = -1;
              return 0;
            }
          }
         return 0;
        });

        let icon = document.querySelectorAll("i[sort]")[0];
        let icon_attr = icon.getAttribute("class");

        switch(icon_attr){

          case "fas fa-sort":
          icon.setAttribute("class", "fas fa-sort-down");

          break;

          case "fas fa-sort-down":
          icon.setAttribute("class", "fas fa-sort-up");
          break;

          case "fas fa-sort-up":
          icon.setAttribute("class", "fas fa-sort");

        }
    
      },
    },

    computed: {

      searchColumns: function (): Array<ITableColumn> | undefined {
        const value = this.value;

        if (value) {

          return this?.copyUsers?.filter(function (user: ITableColumn) {

            const res = Object.keys(user).filter(function (key: string): boolean { 
              return user[key]
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase());
            });

            return res.length;
            
          });

        }

        return this.copyUsers;
      },
    },
  });

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:ital,wght@1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kufam:ital@1&display=swap');



input { width: 20%;	}

table {
  width: 100%;
  border: 0;
}

thead {
  background: linear-gradient(to bottom, #858585, #303030);
  color: #fff;
  font-size: 24px;
  font-family: 'Balsamiq Sans', cursive;

}
tbody {
  background: linear-gradient(to bottom, #b5b5b5, #8f8f8f);
  color: #fff;
  text-align: center;
  padding: 10px;
  font-family: 'Kufam', cursive;
}

tbody > tr:hover { background: linear-gradient(to bottom, #919191, #525252); }
</style>

