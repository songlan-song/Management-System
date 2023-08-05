<template>
    <div class=" tabs">
        <el-tag v-for="(item,index) in tags" 
        :key="item.path" 
        :closable="item.name!=='home'" 
        class="mx-1"
        :effect="$route.name === item.name?'dark':'plain'"
        @click="changeMenu(item)"
        @close = "handleClose(item,index)"
        size="large">
            {{ item.label }}
        </el-tag>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import {useStore} from 'vuex'
export default{
    name:'CommonTag',
    data(){
        return{
            store:useStore()
        }
    },
    computed:{
        ...mapState({
            tags:state=>state.tab.tabsList
        })
    },
    methods:{
        changeMenu(item){
            // console.log(item);
            this.$router.push({name:item.name})
        },
        handleClose(item,index){
            this.$store.commit('tab/closeTag',item)
            const length = this.tags.length
            if (item.name !==this.$route.name){
                return
            }
            //表示删除的是最后一项
            if (index === length){
                this.$router.push({
                    name:this.tags[index-1].name
                })
            }else{this.$router.push({
                name:this.tags[index].name
            })}
        },

    }
    
}
</script>
<style scoped>
.tabs {
    padding: 10px;
}
.el-tag{
    margin-right: 15px;
    cursor: pointer;
}
</style>