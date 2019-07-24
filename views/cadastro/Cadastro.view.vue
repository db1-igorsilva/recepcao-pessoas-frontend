<template>
    <center>
        <v-form class="not_full_width" @submit.prevent="save()">
            <v-text-field
                label="Nome do Convidado"
                :counter="160"
                v-validate="'required'"
                id="guest"
                name="guest"
                v-model="visit.guest"/>
            <span v-show="errors.has('guest')"> Field Nome do Convidado can't be null </span>
            <v-text-field
                label="Texto de Boas-Vindas"
                :counter="500"
                v-validate="'required'"
                id="welcomeText"
                name="welcomeText"
                v-model="visit.welcomeText"/>
            <span v-show="errors.has('welcomeText')"> Field Texto de Boas-Vindas can't be null </span>
            <div class="datetime">
                <label class="datetime time_label"> Data da Visita </label>
                <input type="date" id="date" name="date" v-model="visit.date"/>
                <label class="datetime time_label"> Início da Apresentação </label>
                <input type="time" id="presentationStartTime" name="presentationStartTime" v-model="visit.presentationStartTime"/>
                <label class="datetime time_label"> Fim da Apresentação </label>
                <input type="time" id="presentationEndTime" name="presentationEndTime" v-model="visit.presentationEndTime"/>
            </div>

            <button type="submit"> SUBMIT </button>
        </v-form>
    </center>
</template>

<script>
import Visit from '../../domain/visit/Visit.entity';
import VisitService from '../../domain/visit/Visit.service.ts';

export default {
    data() {
        return {
            visit: new Visit(),
            id: this.$route.params.id
        }
    },
    methods: {
        save() {
            VisitService.save(this.visit)
                .then(() => {
                    this.$router.push({ name: 'consulta' })
                })
            
        }
    },
    created() {
        if (this.id) {
            VisitService.find(this.id)
                .then(visit => {
                    this.visit = visit.data;
                })
        }
    }
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