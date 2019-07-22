<template>
    <div>
        <center>
            <v-flex class="not_full_width">
                <v-text-field label="Regular"/>
            </v-flex>
            <v-data-table :headers="headers" :items="visits" class="not_full_width">
                <template v-slot:items="visits">
                    <td class="text-xs-right"> {{ visits.item.id }} </td>
                    <td class="text-xs-right"> {{ visits.item.visit_date }} </td>
                    <td class="text-xs-right"> {{ visits.item.start_time }} </td>
                    <td class="text-xs-right"> {{ visits.item.end_time }} </td>
                    <td class="text-xs-right"> {{ visits.item.guest }} </td>
                    <td class="text-xs-right"> <button> X </button> </td>
                </template>
            </v-data-table>
        </center>
    </div>
</template>

<script>
import VisitService from '../../domain/visit/Visit.service.ts';
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