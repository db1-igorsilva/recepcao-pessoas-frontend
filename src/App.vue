<template>
  <div id="app">
    <header class="menu__header menu__header_color">
    </header>

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
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="sass">

  @import './sass/main.sass'

</style>
