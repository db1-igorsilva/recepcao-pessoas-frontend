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

@Component({
  components: {
    Menu
  }
})

export default class App extends Vue {
}
</script>

<style lang="sass">
#app
  font-family: "Flexo", sans-serif
</style>
