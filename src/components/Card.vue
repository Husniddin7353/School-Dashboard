<template>
  <div class="container">
      <div class="blog">
          <div v-for="(item, index) in cards" :key="index"  class="blog-items d-flex align-items-center">
            <span v-html="item.img"></span>
            <div class="amount">
              <p class="number">
                  {{ item.number }}
              </p>

              <p class="type">
                  {{ item.title }}
              </p>
            </div>
          </div>

          
  </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
name:'Card',
props: ["cards"],


computed:{
        ...mapState({
            students: state => state.students
        }),
    
        getInterestOfStudent(){
            return this.students.filter(s => s.interesting === 'IT')
        }
    },
}
</script>

<style lang="scss">
    .blog{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;  
        gap: 20px;      
        
        &-items{
            background: #ebf5ee;
            padding: 10px;
            border-radius: 8px;
            justify-content: space-around;

            .amount{
                text-align: center;
               

                .number{
                    font-size: 25px;
                    font-weight: bold;
                }

                .type{
                    font-weight: 400;
                    font-size: 20px;
                }
            }
        }
    }
</style> 
