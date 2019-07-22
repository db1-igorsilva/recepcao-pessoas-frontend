<template>
    <v-toolbar>
        <v-toolbar-side-icon> <img src="https://www.andrecelestino.com/wp-content/uploads/2016/12/db1-global-software-logo.png"/> </v-toolbar-side-icon>
        <v-toolbar-title> DB1 Global Software </v-toolbar-title>
            <v-spacer/>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat>
                <router-link> Consulta </router-link>
            </v-btn>
            <v-btn flat>
                <router-link> Cadastro </router-link>
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
// import { routes } from '../../routes.js'
export default {
}
</script>

<style lang="sass">
</style>
