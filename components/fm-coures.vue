<template>
    <b-card size="lg">
        <b-form v-model="cond" :options="FormOptions" @save="save"></b-form>

        <b-table 
            :options="TableOptions"
            :records="list"
            :pagination="{pageNo: 1, pageSize: 10}"
        >
        <div slot="description" slot-scope="{value}" class="limit-box">
            <span v-b-tooltip="value" class="limit-item">{{value}}</span>
        </div>
        <div slot="downloaded" slot-scope="{record}" class="limit-box">
            <b-switch v-model="record.downloaded" ></b-switch>
        </div>
        <div slot="watched" slot-scope="{record}" class="limit-box">
           <b-switch v-model="record.watched" ></b-switch>
        </div>
        </b-table>
    </b-card>
</template>

<script>
import TableOptions from '../constant/tableOptions';
import FormOptions from '../constant/formOptions';
import InitList from '../static/list'
import Storage from '../utils/NStorages';
export default {
    data() {
        return {
            TableOptions,
            FormOptions,
            cond:{},
            list:[],
        }
    },
    mounted () {
        const vm=this;
        const storagedList=Storage.getCourseInfo();
        if(storagedList){
            vm.list=storagedList
        }else{
            vm.list=InitList
        }
    },
    computed: {
        renderList() {
            const vm =this;
            const {list,cond}=vm;

            return list.filter(item=>Object.keys(cond).every(key=>(item[key]&&item[key].includes(cond[key]))));
        }
    },
    methods: {
        save() {
            const vm =this;
            const {list}=vm;
            Storage.setCourseInfo(list)
        }
    },
}
</script>

<style lang="scss" scoped>
.limit-box{
    white-space: pre;
    max-width: 170px;
    .limit-item{
        text-overflow: ellipsis;
        overflow: hidden;
        display: block;
    }
}
</style>