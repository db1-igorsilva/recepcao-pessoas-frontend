<template>
    <div>
        <center>
            <v-flex class="not_full_width">
                <v-text-field label="Nome do Visitante" @input="typed_filter = $event.target.value"/>
            </v-flex>
            <v-data-table :headers="headers" :items="filteredVisits" class="not_full_width">
                <template v-slot:items="filteredVisits">
                    <td class="text-xs-right"> {{ filteredVisits.item.id }} </td>
                    <td class="text-xs-right"> {{ filteredVisits.item.visit_date }} </td>
                    <td class="text-xs-right"> {{ filteredVisits.item.start_time }} </td>
                    <td class="text-xs-right"> {{ filteredVisits.item.end_time }} </td>
                    <td class="text-xs-right"> {{ filteredVisits.item.guest }} </td>
                    <td class="text-xs-right"> <button> X </button> </td>
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
                let filtered = new RegExp(this.typed_filter.trim, 'i')
                return this.visits.filter(visit => filtered.test(visit.title));
            }
            return this.visits;
        }
    },
    created () {
        this.service = new VisitService(this.$resource);
        this.service.getAll()
            .then(allVisits => this.visits = allVisits,
            error => console.log(error));
    }
}
</script>

<style lang="sass" scoped>
.not_full_width
    width: 95%
</style>