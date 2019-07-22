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
        visits: [],
        typed_filter: ''
      }
    }
}
</script>

<style lang="sass" scoped>
.not_full_width
    width: 95%
</style>