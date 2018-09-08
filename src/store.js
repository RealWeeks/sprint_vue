import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

// export const HTTP = axios.create({
//   baseURL: `http://localhost:3000`,
//   // headers: {
//   //   Authorization: 'Bearer {token}'
//   // }
// })

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userData:{},
    users:null
  },
  mutations: {
    SIGN_UP (state, payload) {
      // mutate state
      state.userData = payload.user;
    },
    SIGN_IN (state, payload) {
      state.userData = payload.user;
    },
    GET_USERS (state, payload) {
      state.users = payload.users;
    }
  },
  actions: {
    SIGN_UP({commit}, payload) {
      axios({
        method: 'post',
        url: '/sign-up',
        baseURL: "http://localhost:4741",
        data: {
          credentials:{
            email: payload.email,
            password: payload.password,
            first_name: payload.password,
            last_name: payload.last_name,
            user_type: payload.user_type,
            password_confirmation: payload.password_confirmation
          }
        }
      })
      .then((response) => {
        commit('SIGN_UP', response.data)
      })
      .catch((err)=>{
        debugger;
      })
    },
    SIGN_IN({commit}, payload) {
      axios({
        method: 'post',
        url: '/sign-in',
        baseURL: "http://localhost:4741",
        data: {
          credentials:{
            email: payload.email,
            password: payload.password,
          }
        }
      })
      .then((response) => {
        commit('SIGN_IN', response.data)
      })
      .catch((err)=>{
        debugger;
      })
    },
    GET_USERS({commit}) {
      // debugger;
      axios({
        method: 'get',
        url: '/users',
        headers: {'Authorization': `Token token=${this.state.userData.token}`},
        baseURL: "http://localhost:4741",
      })
      .then((response) => {
        commit('GET_USERS', response.data)
      })
      .catch((err)=>{
        debugger;
      })
    }
  }
})
