<template>
    <div>
        <center>
            <v-flex class="not_full_width">
                <v-text-field label="Regular"/>
            </v-flex>
            <v-data-table :headers="headers" :items="props" class="not_full_width">
                <template v-slot:items="props">
                    <td class="text-xs-right"> {{ props.item.id }} </td>
                    <td class="text-xs-right"> {{ props.item.visit_date }} </td>
                    <td class="text-xs-right"> {{ props.item.start_time }} </td>
                    <td class="text-xs-right"> {{ props.item.end_time }} </td>
                    <td class="text-xs-right"> {{ props.item.guest }} </td>
                    <td class="text-xs-right"> <button> X </button> </td>
                </template>
            </v-data-table>
        </center>
    </div>
</template>

<script>
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
        props: [
            {
                id: 1,
                visit_date: 12,
                start_time: 12,
                end_time: 14,
                guest: 'VISITANTE1'
            },
            {
                id: 2,
                visit_date: 12,
                start_time: 14,
                end_time: 15,
                guest: 'VISITANTE2'
            },
            {
                id: 3,
                visit_date: 15,
                start_time: 10,
                end_time: 15,
                guest: 'VISITANTE3'
            }
        ]
      }
    }
}
</script>

<style lang="sass" scoped>
.not_full_width
    width: 95%
</style>