<template>
  <div class="addemp">
      <form class="addemp-form" action="">
          <div class="form-part">
              <label for="firstname">First name</label> <br>
              <input class="input" type="text" 
                id="fistname"
                v-model="form.firstName"
                placeholder="Abror"
                required>
          </div>

          <div class="form-part">
              <label for="lastname">Last name</label><br>
              <input class="input"  
                    type="text" 
                    id="lastname" placeholder="Islamov" 
                    v-model="form.lastName"
                    required>
          </div>

          <div class="form-part">
              <label for="dapartment">Department</label><br>
               <select class="input"  id="depatment"
                        v-model="form.interesting"
                        name="department" required="required">
                    <option  disabled value="disabled" selected></option>
                    <option value="accounting">Accounting</option>
                    <option value="marketing">Marketing</option>
                    <option value="bussiness">Bussuniss</option>
                    <option value="it">IT</option>
                </select>
          </div>

          <div class="form-part">
              <label for="position">Class</label><br>
              <input class="input"
                      type="text"
                      id="position"
                      placeholder="Web-developper" required
                      v-model="form.studentClass">
          </div>

          <div class="form-part">
              <div>
                <label >Gender</label><br>

                <label class="gender" for="male">Male</label>
                <input v-model="form.gender" class="radio" value="male" type="radio" id="male" name="gender" required>

                <label  class="gender input-gender" for="female">Female</label>
                <input  v-model="form.gender" class="radio" value="female"  type="radio" id="female" name="gender" required>
            </div>

            <div class="form-part">
                <label for="bday">Date of birth</label>
                <br>
                <input v-model="form.dataOfBirth" class="input"  type="date" id="bday" placeholder="01.02.1999" required>
            </div>
            <input @click.prevent="save"  class="submit" type="submit" value="Submit Form">
          </div>

          
      </form>
  </div>
</template>

<script>
export default {
    name:'AddEmployee',

    data() {
        return {
        form:{
            id:'' ,
            firstName: '',
            lastName: '',
            interesting: '',
            studentClass: '',
            gender: '',
            dataOfBirth: '',
        }
        
        }
    },
    methods: {
        save(){
        this.$store.commit('getStudents', this.form)
        console.log(this.$store.state.students)
        this.$store.dispatch('saveDataToLocalStorage')
        this.clearForm()
        },
        clearForm() {
        this.form = {}

        

        if (!this.$route.params.id) {
          this.$store.commit("PUSH_USER", this.student);
        } else {
          this.$store.commit("EDIT_ONE_USER", {
            student: this.student,
            index: this.$route.params.id,
          });
        }
    },

     created() {
    try {
      if (this.$route.params.id < this.$store.state.students.length) {
        this.student = this.$store.state.students[this.$route.params.id];
      }
    } catch (error) {
      // console.log(error);
      alert(Error);
    }}
  }
}
</script>

<style lang="scss">
 .addemp{
     &-form{
         display: grid;
         grid-template-columns: 1fr 1fr;

         .form-part{
             label{
                 font-weight: bold;
                 margin-top: 8px;
             }

             .gender{
                 font-weight: 300;
             }

             .input{
                max-width: 444px;
                width:100%;
                border:1px solid rgb(114, 116, 116);
                border-radius: 8px;
                outline-style: none;
                padding: 8px;
             }

             .input-gender{
                 margin-left: 12px;
             }

             .radio{
                 margin: 0 4px;
             }

             .submit{
                 padding: 8px;
                 background: #283044 ;
                 border-radius: 8px;
                 border: none;
                 outline-style: none;
                 color: white;
                 margin: 8px 0;
             }
         }
     }
 }
</style>