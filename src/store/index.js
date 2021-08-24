import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0,
    students:[]
  },
  mutations: {
    increment(state){
      state.count++
    },
    getStudents(state, student){
      state.students.push(student)
    },
    getStudentsState(state, student){
      state.students = student
    },

    PUSH_USER(state, student) {
      state.students = [...state.students, student];
    },

    REMOVE_ONE_USER(state, index) {
      state.students.splice(index, 1);
    },

    UPDATE_ITEM(state, { index, student }) {
      if (state.students[index]) {
          Object.assign(state.students[index], student)
      }
  },
  },

  getters: {
    getMale(state) {
      return state.students.filter((student) => {
        return student.gender == "male";
      });
    },
    getFemale(state) {
      return state.students.filter((student) => {
        return student.gender == "female";
      });
    },
    getIT(state) {
      return state.students.filter((student) => {
        return student.interesting == "it";
      });
    },
    getMarketing(state) {
      return state.students.filter((student) => {
        return student.interesting == "marketing";
      });
    },
    getAcounting(state) {
      return state.students.filter((student) => {
        return student.interesting == "accounting";
      });
    },
    // getOneUser(state, index)
  },
  
  actions: {
    saveDataToLocalStorage({state}){
      const data = JSON.stringify(state.students)
      localStorage.setItem('students', data)
    },

    loadDataToLocalstorage(){
      let data = JSON.parse(localStorage.getItem('students'))

      if (data){
        this.commit('getStudentsState', data)
      }
    },

    async LOAD_FROM_LOCALSTORAGE({commit}) {
      const rawItems = await localStorage.getItem('students')
      let students = []

      if (rawItems && rawItems.length) {
          try {
              students = await JSON.parse(rawItems)
          } catch (e) {
              students = []
          }
      }

      commit('SET_ITEMS', students)
  },
  async SAVE_TO_LOCALSTORAGE({state}) {
      await localStorage.setItem('students', JSON.stringify(state.students))
  },
  },
  modules: {
  }
})
