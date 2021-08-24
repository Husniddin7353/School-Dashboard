<template>
  <div class="table">
      <table class="table">
          <tr>
              <th>#</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Dapartment</th>
              <th>Class</th>
              <th>Gender</th>
              <th>Date of birth</th>
              <th>Activity</th>
              <th></th>
          </tr>
          
          <tr class="table-row" v-for="(student, index) in students" :key="index">
            <td>{{ index + 1}}</td>
            <td>{{student.firstName}}</td>
            <td>{{student.lastName}}</td>
            <td>{{student.interesting}}</td>
            <td>{{student.studentClass}}</td>
            <td>{{student.gender}}</td>
            <td>{{student.dataOfBirth}}</td>
            <td>
              <div class="table__row-icon">
                <span v-html="remove" @click="removeOneUser(index)"></span>
                <router-link  v-html="edit"  :to="`employees/${index}/EditEmployee`"></router-link>
              </div>
            </td>
            
          </tr>

          
      </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:'Table',

    data() {
    return {
      remove:
        '<svg data-v-aeed2194="" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-aeed2194="" d="M19.325 9.4682C19.325 9.4682 18.782 16.2032 18.467 19.0402C18.317 20.3952 17.48 21.1892 16.109 21.2142C13.5 21.2612 10.888 21.2642 8.28003 21.2092C6.96103 21.1822 6.13803 20.3782 5.99103 19.0472C5.67403 16.1852 5.13403 9.4682 5.13403 9.4682" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path data-v-aeed2194="" d="M20.7082 6.23969H3.75024" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path data-v-aeed2194="" d="M17.4406 6.23967C16.6556 6.23967 15.9796 5.68467 15.8256 4.91567L15.5826 3.69967C15.4326 3.13867 14.9246 2.75067 14.3456 2.75067H10.1126C9.53358 2.75067 9.02558 3.13867 8.87558 3.69967L8.63258 4.91567C8.47858 5.68467 7.80258 6.23967 7.01758 6.23967" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      edit: '<svg data-v-aeed2194="" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-aeed2194="" d="M13.6997 19.8981H20.0767" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path data-v-aeed2194="" fill-rule="evenodd" clip-rule="evenodd" d="M12.855 4.95573C13.592 4.01673 14.783 4.06573 15.723 4.80273L17.113 5.89273C18.053 6.62973 18.386 7.77273 17.649 8.71373L9.35996 19.2887C9.08296 19.6427 8.65996 19.8517 8.20996 19.8567L5.01296 19.8977L4.28896 16.7827C4.18696 16.3457 4.28896 15.8857 4.56596 15.5307L12.855 4.95573Z" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path data-v-aeed2194="" d="M11.3027 6.93616L16.0967 10.6942" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
    };
  },
  methods: {
    removeOneUser(index) {
      this.$store.commit("REMOVE_ONE_USER", index);
       this.$store.dispatch('saveDataToLocalStorage')
      this.clearForm()
      },
      clearForm() {
      this.students = {}
    },

    
  },

      mounted(){
        this.$store.dispatch('loadDataToLocalstorage')
      },

 
    computed:{
      ...mapState({
        students: state => state.students
      })
    },

    

    
}
</script>

<style lang="scss">

table{
  td{
    text-transform: uppercase;
  }

  .table-row{
    transition: all 0.2s;
    cursor: pointer;
    &:hover{
      background: #c7cfe0;
      
    }
  }
}
</style>