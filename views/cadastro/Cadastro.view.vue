<template>
    <center>
        <v-form v-model="valid" class="not_full_width">
            <v-text-field
                label="Nome do Convidado"
                :counter="160"
                required/>
            <v-text-field
                label="Texto de Boas-Vindas"
                :counter="500"/>
            <div class="datetime">
                <label class="datetime time_label"> Data da Visita </label>
                <input type="date" name="visit_date"/>
                <label class="datetime time_label"> Início da Apresentação </label>
                <input type="time" name="start_time"/>
                <label class="datetime time_label"> Fim da Apresentação </label>
                <input type="time" name="end_time"/>
            </div>
        </v-form>
    </center>
</template>

<script>
export default {
    
}
</script>

<style lang="sass" scoped>
.not_full_width
    width: 95%
    height: 100%
.datetime
    width: 100%
    height: 75%
    display: flex
    flex-direction: column
    text-align: left
    .time_label
        padding-bottom: 10px
        padding-top: 10px
</style>