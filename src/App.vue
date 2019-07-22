<template>
  <div id="app">
    <project-menu>
    </project-menu>

    <section>
      <router-view/>
    </section>
  </div>
</template>

<script>
import Menu from '../shared/menu/Menu.vue';
export default {
  components: {
    'project-menu': Menu
  }
}
</script>

<style lang="sass">
</style>
