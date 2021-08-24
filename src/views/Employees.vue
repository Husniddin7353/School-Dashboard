<template>
  <div class="employees">
      <h1>All Students</h1>

      <Table/>
  </div>
</template>

<script>
import Table from '../components/Table.vue'


export default {
  name:'Employees',
  components: { Table },


}
</script>

<style lang="scss">
  .employees{
    h1{
      margin: 16px 0;
    }
  }
</style>

