<template>
    <div class="header-container">
        <div class="left-content">
            <el-button size="small" @click="handleMenu">
                 <el-icon :size="20">
                 <Menu />
                 </el-icon>
            </el-button>    
         <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.path }" style="margin-left: 10px;">{{item.label}}</el-breadcrumb-item>
         </el-breadcrumb>
       </div>
       <div class="right-content">
                    <el-dropdown>
                <span class="el-dropdown-link">
                <img class="userImg" src="../assets/headphoto.jpeg" alt="">
                </span>
                <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>Personal Center</el-dropdown-item>
                    <el-dropdown-item @click="logout">Log Out</el-dropdown-item>
                </el-dropdown-menu>
                </template>
  </el-dropdown>
       </div>         
    </div>


</template>
<script>
import{useStore} from 'vuex'
import{mapState} from 'vuex'
import Cookie from 'js-cookie'

export default{
    
    data(){
        return{
            value : false,
            store :useStore()
        }
    },
    methods:{
        handleMenu(){
            this.$store.commit('tab/clickMenu')
        },
        logout(){
            Cookie.remove('token')
            Cookie.remove('menu')
            this.$router.push('login')
        }
    },
    computed:{
        ...mapState({
            tags:state=>state.tab.tabsList
        })
    },
}




</script>


<style lang ="less" scoped>

.left-content{
    display: flex;
    align-items: center;
    height: 100%;
}
.right-content{
    display: flex;
 
}
.main-content{
    display: block;
    color:#fff;
    margin-left:10px;
    font-size: 10px;
}
.header-container{
    padding: 0 20px;
    background-color: #333;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.userImg{
    width: 40px;
    border-radius: 50%;
    height: 40px;
    cursor: pointer;
}


</style>