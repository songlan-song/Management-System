<template>
    <div class="common-layout">
      <el-container class="container">
        <LeftSide></LeftSide>
        <el-container>
            <el-header class="el-header"><CommonHeader ></CommonHeader></el-header>
            <commonTag></commonTag>
          <el-main><router-view></router-view></el-main>
        </el-container>
      </el-container>
    </div>

  </template>


<script>
import { defineComponent } from 'vue';
import CommonHeader from '../components/CommonHeader.vue'
import LeftSide from '../components/LeftSide.vue';
import commonTag from '../components/commonTag.vue';
import '../api/mock'
export default defineComponent({
    components:{
        CommonHeader,
        LeftSide,
        commonTag
    },

})
</script>
<style scoped>
.container{
    display: flex;
    flex-wrap: nowrap;
    height: 100%;
    width: 100%;
}
.common-layout{
  height: 100%;
}
.el-aside{
    background-color:#545c64;
    height: 100%;
}
.el-header{
    padding: 0;
}

</style>