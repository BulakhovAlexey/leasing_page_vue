<template>
  <section class="about">
    <div class="about__container">
      <h1 class="about__title title center">About Page</h1>
      <div class="about__inner">
        <div class="about__group">
          <h2 class="about__list-title">{{ stack.title }}</h2>
          <ul class="about__list">
            <li v-for="(item, index) in stack.items" :key="index" class="about__item"><a :href="item.link" class="about__link" target="_blank">{{ item.name }}</a></li>
          </ul>
        </div>
        <div class="about__group">
          <h3 class="about__list-title">{{ plugins.title }}</h3>
          <ul class="about__list">
            <li v-for="(plugin, index) in plugins.items" :key="index" class="about__item"><a :href="plugin.link" class="about__link" target="_blank">{{ plugin.name }}</a></li>
          </ul>
        </div>
        <div class="about__group">
          <h2 class="about__list-title">Общее</h2>
          <ul class="about__list">
            <li class="about__item">Responsive верстка</li>
            <li class="about__item">Простая авторизация(записывается в локальное хранилище)</li>
            <li class="about__item">Блок преимущества(сноски рендерятся автоматически при наличии текста)</li>
            <li class="about__item">Калькулятор лизинга(результат выводится в попап)</li>
            <li class="about__item">Выгодные программы - реализована подгрузка с jsonplaceholder, поиск, сортировка, детальная программы</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import data from '@/seeders/about.js'
  export default {
    data(){
      return{
        stack: data.stack,
        plugins: data.plugins
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>