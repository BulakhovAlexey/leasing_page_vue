import users from '@/seeders/usersData.js'

export const auth = {
  state () {
    return {
      isAuth: false,
      showPopup: false,
      loginValue: '',
      passwordValue: '',
      hasError: false,
      processAuth: true,
      users: users.data,
      authLogin: ''
    }
  },
  getters: {
    getIsAuth(state){
      return state.isAuth
    },
    getShowPopup(state){
      return state.showPopup
    },
    getLoginValue(state){
      return state.loginValue
    },
    getPasswordValue(state){
      return state.passwordValue
    },
    getHasError(state){
      return state.hasError
    },
    getProcessAuth(state){
      return state.processAuth
    },
    getUsers(state){
      return state.users
    },
    getAuthLogin(state){
      return state.authLogin
    }
  },
  mutations: {
    setIsAuth(state, bool){
      state.isAuth = bool
    },
    setShowPopup(state, bool){
      state.showPopup = bool
    },
    setLoginValue(state, loginValue){
      state.loginValue = loginValue
    },
    setPasswordValue(state, passwordValue){
      state.passwordValue = passwordValue
    },
    setHasError(state, bool){
      state.hasError = bool
    },
    setProcessAuth(state, bool){
      state.processAuth = bool
    },
    setAuthLogin(state, authLogin){
      state.authLogin = authLogin
    }
  },
  actions: {
    open({commit}){
      commit('setShowPopup', true)
    },
    leave({commit}){
      commit('setIsAuth', false)
      if(localStorage.getItem('isAuth')){
        localStorage.removeItem('isAuth')
      }
    },
    close({commit}){
      commit('setShowPopup', false)
      commit('setHasError', false)
      commit('setLoginValue', '')
      commit('setPasswordValue', '')
    },
    updateLogin({commit}, event){
      commit('setHasError', false);
      commit('setLoginValue', event.target.value)
    },
    updatePassword({commit}, event){
      commit('setHasError', false);
      commit('setPasswordValue', event.target.value)
    },
    submitForm({commit, getters}){
      let successAuth = false
      getters.getUsers.forEach(user => {
        if(user.login === getters.getLoginValue && user.password === getters.getPasswordValue){
          successAuth = true
          commit('setAuthLogin', getters.getLoginValue)
          commit('setLoginValue', '')
          commit('setPasswordValue', '')
          commit('setIsAuth', true)
          localStorage.setItem('isAuth', user.id)
          commit('setProcessAuth', false)
          setTimeout(() => {
            commit('setShowPopup', false)
            commit('setProcessAuth', true)
          }, 2500);
        }
      });
      if(!successAuth){
        commit('setHasError', true);
      }
    },
    checkLocalStorage({ commit, getters }){
      if(localStorage.getItem('isAuth')){
        let userId = localStorage.getItem('isAuth')
        getters.getUsers.forEach(user => {
          if(user.id == userId)
          commit('setAuthLogin', user.login)
        })
        commit('setIsAuth', true)
      }
    }
  },
  namespaced: true
}