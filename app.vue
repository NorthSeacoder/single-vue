<template>
    <div class="container-wide">
        <b-layout>
            <div slot="header">
                <b-nav-top :routes="routes">
                    <div slot="left">My App</div>
                </b-nav-top>
            </div>

            <div slot="content">
                <div class="center-block">
                    <b-card size="lg">
                        <b-table 
                            :options="TableOptions"
                            :records="list"
                            :pagination="{pageNo: 1, pageSize: 10}"
                        >
                        </b-table>
                    </b-card>
                </div>
            </div>
        </b-layout>
        
    </div>
</template>

<script>
import TableOptions from './constant/tableOptions';
import list from './static/list'
export default {
    name: 'App',
    data() {
        return {
            TableOptions,
            list,
            routes: [
                {
                    name: 'fmLessonRecord',
                    meta: {
                        navTitle: 'fmLessonRecord'
                    },

                }
            ]
        };
    },


};

</script>
