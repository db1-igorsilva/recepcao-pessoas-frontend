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
                    <td class="text-xs-right"> {{ filteredVisits.item.welcome_text }} </td>
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
                text: 'Welcome Text',
                value: 'welcome_text'
            },
            {
                text: 'Delete',
                value: 'remove'
            }
        ],
        visits: [
            {
                id: '19c0f0ce-b6a7-4dcb-87ad-fea08d2be1c5',
                visit_date: '2019-07-23',
                start_time: '17:30:00.000',
                end_time: '18:30:00.000',
                guest: '0596baaa-1e2a-4ef6-92e0-f8a96d7f8497',
                welcome_text: 'Bem vindo, DB1'
            },
            {
                id: '3162b597-8ba9-479b-b4e7-82538a170ead',
                visit_date: '2019-07-23',
                start_time: '17:30:00.000',
                end_time: '18:30:00.000',
                guest: '7d3ab171-f8c8-4419-976e-134a35a25b6c',
                welcome_text: 'Bem vindo, DB2'
            },
            {
                id: '3f813b17-d7b9-43e6-a78f-da4d37457680',
                visit_date: '2019-07-24',
                start_time: '09:15:00.000',
                end_time: '12:30:00.000',
                guest: '52cf63f1-b3d4-47b0-b55a-e8c0fb0455fa',
                welcome_text: 'Bem vindo, DB3'
            },
            {
                id: '57185085-8346-43df-8fac-7c4b278f1f0b',
                visit_date: '2019-07-24',
                start_time: '15:05:00.000',
                end_time: '18:20:00.000',
                guest: '9df24d9f-41e8-4f20-8877-27fbd0e9e4b0',
                welcome_text: 'Bem vindo, DB4'
            },
            {
                id: 'c6ac7138-a6fe-47ab-9e4d-2db9db7e854e',
                visit_date: '2019-07-30',
                start_time: '08:00:00.000',
                end_time: '18:00:00.000',
                guest: 'ce97b781-04d6-40a4-9efb-9dd781816536',
                welcome_text: 'Bem vindo, DB5'
            }
        ],
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