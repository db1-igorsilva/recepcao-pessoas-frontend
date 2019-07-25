<template>
    <v-toolbar color="#8F1C2C" class="menu__header">
        <v-toolbar-side-icon> <v-img src="https://db1global.sharepoint.com/sites/intranet/Central%20de%20documentos%20PDF/Imagens%20Oficiais/ORG_LOGO_DB1_BRANCO.png"/> </v-toolbar-side-icon>
        <v-toolbar-title class="title"> DB1 Global Software </v-toolbar-title>
        <v-spacer/>
        <v-toolbar-items>
            <v-btn flat class="menu__header">
                <router-link to="/consulta" class="menu__header_button"> Consulta </router-link>
            </v-btn>
            <v-btn flat class="menu__header">
                <router-link to="/cadastro" class="menu__header_button"> Cadastro </router-link>
            </v-btn>
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
    &_db1infos
        width: 75%
    &_title
        display: flex
        flex-direction: row
    &_button
        display: flex
        flex-direction: row
        font-size: 1.5em
        text-decoration: none
        color: #000
</style>
