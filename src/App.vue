<template>
  <div id="app">
    <menu class="menu__header menu__header_color">
    </menu>

    <section class="menu__body">

      <nav class="menu__nav-bar menu__nav-bar_color">
      </nav>

      <section class="menu__content menu__content_color">
        <div class="menu__text"> CONTENT 1 TEST </div>
        <div class="menu__text"> CONTENT 2 TEST </div>
        <div class="menu__text"> CONTENT 3 TEST </div>
      </section>

    </section>
  </div>
</template>

<script>
import Menu from '../shared/menu/Menu.vue';
export default {
  components: {
    'menu': Menu
  }
}
</script>

<style lang="sass">

  @import './sass/main.sass'

</style>
