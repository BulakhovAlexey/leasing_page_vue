<template>
<TransitionGroup name="bg">
  <div v-if="show" class="background"></div>
</TransitionGroup>
<TransitionGroup name="popup">
<div v-if="show" class="popup">
  <div class="popup__inner">
    <TransitionGroup name="screens" mode="out-in">
      <div v-if="processAuth" class="popup__body">
        <div class="popup__title">Авторизация</div>
        <TransitionGroup name="error" mode="out-in">
          <div v-if="hasError" class="popup__error">Неверный логин или пароль</div>
        </TransitionGroup>
        <div class="popup__content form">
          <form @submit.prevent="submitForm" class="form__auth">
            <input 
            type="text" 
            placeholder="Login" 
            class="form__input"
            :class="{error: hasError}"
            :value="loginValue"
            @input="updateLogin"
            >
            <input 
            type="text" 
            placeholder="Password" 
            class="form__input"
            :class="{error: hasError}"
            :value="passwordValue"
            @input="updatePassword"
            >
            <button class="form__button" type="submit">Login</button>
          </form>
        </div>
        <div class="test">
          <p class="test__title">Test users List</p>
          <ul class="test__user-list">
            <li v-for="user in users" :key="user.id" class="test__user">
              <p>ID: {{ user.id }}</p>
              <p>LOGIN: {{ user.login }}</p>
              <p>PASS: {{ user.password }}</p>
              <p>IS ADMIN: {{ user.admin }}</p>
            </li>
          </ul>
        </div>
      </div>
      <div v-else class="popup__success success">
        <div class="success__icon">
          <img src="../../assets/img/ok.png" alt="success">
        </div>
        <div class="success__text">Success!</div>
      </div>
    </TransitionGroup>
    <button
    @click="close"
    class="popup__close"></button>
  </div>
</div>
</TransitionGroup>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
  export default {
    mounted() {
      this.checkLocalStorage()
    },
    computed: {
      ...mapGetters({
        show: 'auth/getShowPopup',
        loginValue: 'auth/getLoginValue',
        passwordValue: 'auth/getPasswordValue',
        hasError: 'auth/getHasError',
      }),
      ...mapState({
        loginValue: state => state.auth.loginValue,
        passwordValue: state => state.auth.passwordValue,
        processAuth: state => state.auth.processAuth,
        users: state => state.auth.users,
      }),
    },
    methods: {
      ...mapActions({
        close: 'auth/close',
        updateLogin: 'auth/updateLogin',
        updatePassword: 'auth/updatePassword',
        submitForm: 'auth/submitForm',
        checkLocalStorage: 'auth/checkLocalStorage',
      })
    },
  }
</script>

<style lang="scss" scoped>
@import'../../assets/scss/main.scss';
.popup{
  &__inner{
    max-width: rem(500);
    width: 100%;
    height: 300px;
    position: relative;
    overflow: hidden;
  }

  &__success,
  &__body{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
}
.form {
  &__auth {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: rem(10);
  }

  &__input {
    flex: 1 1 100%;
    width: 100%;
    border: 1px solid black;
    padding: rem(10);
    border-radius: $br;
    transition: all 0.3s ease 0s;
    &.error{
      transition: all 0.3s ease 0s;
      border: 1px solid red;
    }
  }

  &__button {
    align-self: flex-end;
    padding: rem(10);
    margin-top: rem(10);
    border: 1px solid black;
    border-radius: $br;
    max-width: rem(150);
    width: 100%;
    &.disabled{
      pointer-events: none;
      opacity: 0.3;
    }
  }
}
.success {
  padding: rem(20);
  display: flex;
  gap: rem(30);
  flex-direction: column;
  justify-content:center;
  align-items: center;
		&__icon {
      max-width: 50px;
      img{
        max-width: 100%;
        height: auto;
      }
		}
		&__text {
      font-size: rem(23);
		}
}
.error-enter-active,
.error-leave-active {
  transition: opacity 1s ease;
}
.error-enter-from,
.error-leave-to {
  opacity: 0;
}
.screens-enter-active,
.screens-leave-active {
  transition: opacity .4s ease;
}
.screens-enter-from,
.screens-leave-to {
  opacity: 0;
}

//
.test{
  position: fixed;
  right: 0px;
  top: 10px;
  width: 100%;
  height: 200px;
  background-color: #ffffff;
  z-index: 100;
  overflow: scroll;
  text-align: center;
  &__title{
    margin-bottom: 10px;
    text-align: center;
  }
  &__user{
    margin-bottom: 10px;
  }
}
</style>