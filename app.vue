<template>
    <b-table 
        :options="TableOptions"
        :records="list"
    >
    </b-table>
</template>

<script>
import TableOptions from './constant/tableOptions';
import list from './static/list'
export default {
    name: 'App',
    data() {
        return {
            TableOptions,
            list
        };
    },


};

</script>
