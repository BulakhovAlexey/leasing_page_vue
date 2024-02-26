<template>
<TransitionGroup name="bg">
  <div v-if="show" class="background"></div>
</TransitionGroup>
<TransitionGroup name="popup">
<div v-if="show"
class="popup">
  <div class="popup__inner">
    <div class="popup__body">
      <div class="popup__title">
        <slot name="popupTitle"></slot>
      </div>
      <div class="popup__content">
        <slot name="popupBody"></slot>
      </div>
    </div>
    <button
    @click="close"
    class="popup__close"></button>
  </div>
</div>
</TransitionGroup>
</template>

<script>
  export default {
    props:{
      show:{
        type: Boolean,
        default: false,
      }
    },
    methods: {
      close(){
        this.$emit('needShow', !this.show)
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base/entry.scss';

.background{
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 20;
  display: flex;
  background-color: rgba($color: black, $alpha: 0.8);
}
.popup {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 90;
  display: flex;
  justify-content:center;
  align-items: center;
  padding: rem(10);
		&__inner {
      position: relative;
      z-index: 91;
      background-color: #ffffff;
      max-width: rem(500);
      min-height: rem(200);
      padding: rem(20);
      position: relative;
      border-radius: $br;
		}

		&__body {
      padding: rem(20);
      text-align: center;
		}

    &__title{
      @include adaptiveValue("font-size", 30, 25);
      margin-bottom: 20px;
    }

    &__content{
      @include adaptiveValue("font-size", 18, 16);
    }

		&__close {
      position: absolute;
      right: 25px;
      top: 15px;
      height: 20px;
      width: 20px;
      &::after{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 20px;
        height: 3px;
        background-color: #000000;
        transform: rotate(45deg);
      }
      &::before{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 20px;
        height: 3px;
        background-color: #000000;
        transform: rotate(-45deg);
      }
		}
}
.popup-enter-active,
.popup-leave-active {
  transform: translate(0,0);
  transition: transform 0.7s ease;
}
.popup-enter-from,
.popup-leave-to {
  transform: translate(0,-200%);
}
.background-enter-active,
.background-leave-active {
  transition: opacity 1s ease 0.3s;
}
.background-enter-from,
.background-leave-to {
  opacity: 0;
}
</style>