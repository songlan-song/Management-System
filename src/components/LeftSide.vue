<template>
    <el-aside :width = "$store.state.tab.isCollpse ? '60px':'200px'"  height = "100%" class="el-aside">
        <!-- <h3 class="system-name">Universal Back-office Management System</h3> -->
        <el-menu
        class="el-menu-vertical-demo"
        text-color="#fff"
        background-color="#545c64"
        :collapse = $store.state.tab.isCollpse
        :collapse-transition = false
      >
         <el-menu-item @click=clickMenu(item) v-for="item in noChildren" :key="item.name" :index="item.name">
          <component class="icons" :is="item.icon"></component>
          <span>{{ item.label }}</span>
        </el-menu-item>
        <el-sub-menu v-for="item in hasChildren" :key="item.name" :index="item.name">
            <template #title>
                <el-icon >
                    <location />
                </el-icon>
                <span>{{ item.label }}</span>
            </template>
            <el-menu-item @click= clickMenu(subItem) v-for="(subItem,SubName) in item.children" :key="SubName" :index="SubName">
                <component class="icons" :is="subItem.icon"></component>
                <span>{{ subItem.label }}</span>
            </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-aside>
</template>

<script>
import{useStore} from 'vuex'
import Cookie from 'js-cookie'

export default {
    data() {
        return {
            store :useStore(),
        }
    },
    methods:{
        clickMenu(item){
            if(this.$route !== item.path && !(this.$route.path ==='/home' && (item.path === '/'))){
                this.$router.push(item.path);
            }
            this.$store.commit('tab/selectMenu',item)


        }
    },
    computed:{
        //no submenu
        noChildren(){
            return this.menuData.filter(item=>!item.children)
        },
        //has submenu
        hasChildren(){
            return this.menuData.filter(item=>item.children)
        },
        menuData(){
            return JSON.parse(Cookie.get('menu')) ||this.$store.state.tab.menu
        }

    },
}
</script>
<style  scoped>
.icons{
    width: 1em;
    height: 1em;
    margin-right: 8px;
}
.el-sub-menu_title{
    padding: 15px;
}

.el-menu{
    border-right: none;

}
.system-name{
    background-color: #333;
    text-align: center;
    line-height: 38px;
    margin: 0;
    padding: 0;
    font-size: 16px;
    color: #fff;
}
.el-aside{
    overflow: hidden;
}
</style>