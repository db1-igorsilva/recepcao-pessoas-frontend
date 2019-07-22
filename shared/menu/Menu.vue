<template>
    <v-toolbar>
        <v-toolbar-side-icon> </v-toolbar-side-icon>
        <v-toolbar-title> DB1 Global Software <v-toolbar-title>
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
export default {
    props: {
        routes: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="sass">
</style>
