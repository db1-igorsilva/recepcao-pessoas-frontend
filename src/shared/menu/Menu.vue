<template>
    <v-toolbar color="#8F1C2C" class="menu__header">
        <router-link to="/" class="menu__header_db1info">
            <img class="menu__header" src="https://db1global.sharepoint.com/sites/intranet/Central%20de%20documentos%20PDF/Imagens%20Oficiais/ORG_LOGO_DB1_BRANCO.png"/>
        </router-link>

        <v-spacer/>

        <v-toolbar-items>
            <router-link to="/" class="menu__header">
                <v-btn flat class="menu__header_button" style="color: #FFF"> Visits </v-btn>
            </router-link>
            <router-link to="/new_visit" class="menu__header">
                <v-btn flat class="menu__header_button" style="color: #FFF"> New Visit </v-btn>
            </router-link>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
import { routes } from '../../src/routes.js'
export default {
}
</script>

<style lang="sass">
.menu__header
    height: 100px
    text-decoration: none
    display: flex
    flex-direction: column
    &_db1info
        height: 100%
    &_title
        height: 100%
        font-size: 2em
    &_button
        font-size: 1.5em
</style>
