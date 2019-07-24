<template>
    <div>
        <center>
            <v-flex class="not_full_width" @input="typed_filter = $event.target.value">
                <v-text-field label="Nome do Visitante"/>
            </v-flex>
            <v-data-table :headers="headers" :items="filteredVisits" class="not_full_width">
                <template v-slot:items="filteredVisits">
                    <td class="text-xs-right"> {{ filteredVisits.item.id }} </td>
                    <td class="text-xs-right"> {{ filteredVisits.item.date }} </td>
                    <td class="text-xs-right"> {{ filteredVisits.item.presentationStartTime }} </td>
                    <td class="text-xs-right"> {{ filteredVisits.item.presentationEndTime }} </td>
                    <td class="text-xs-right"> {{ filteredVisits.item.guest }} </td>
                    <td class="text-xs-right"> {{ filteredVisits.item.welcomeText }} </td>
                    <td class="text-xs-right"> <button @click="remove(filteredVisits.item)"> X </button> </td>
                </template>
            </v-data-table>
        </center>
    </div>
</template>

<script>
import VisitService from '../../domain/visit/Visit.service';

export default {
    data () {
      return {
        headers: [
            {
                text: 'ID',
                align: 'left',
                value: 'id'
            },
            {
                text: 'Date',
                value: 'visit_date'
            },
            {
                text: 'Presentation Start',
                value: 'start_time'
            },
            {
                text: 'Presentation End',
                value: 'end_time'
            },
            {
                text: 'Guest',
                value: 'guest'
            },
            {
                text: 'Welcome Text',
                value: 'welcome_text'
            },
            {
                text: 'Delete',
                value: 'remove'
            }
        ],
        visits: [],
        typed_filter: ''
      }
    },
    computed: {
        filteredVisits() {
            if (this.typed_filter) {
                let filtered = new RegExp(this.typed_filter.trim(), 'i')
                return this.visits.filter(visit => filtered.test(visit.guest));
            }
            return this.visits;
        }
    },
    methods: {
        remove (visit) {
            VisitService.delete(visit)
                .then(() => {
                    let index = this.visits.indexOf(visit);
                    this.visits.splice(index, 1);
                },
                error => {
                    console.log(error);
                });
        }
    },
    mounted () {
        VisitService.getAll()
            .then(getResponse => {
                this.visits = getResponse.data;
            });
    }
}
</script>

<style lang="sass" scoped>
.not_full_width
    width: 95%
</style>