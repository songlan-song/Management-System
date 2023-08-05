<template>
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn0" :class="active===0?'btn-primary':'btn-secondary'" @click="changeActive(0)">All</button>
  <button type="button" class="btn" :class="active===1?'btn-primary':'btn-secondary'" @click="changeActive(1)">Completed</button>
  <button type="button" class="btn" :class="active===2?'btn-primary':'btn-secondary'" @click="changeActive(2)">Uncompleted</button>
</div>
</template>

<script>
export default{
    name:"todoButton",
    data(){
        return{
            active:2,
        }
    },
    emits:["changeActive"],
    methods:{
        changeActive(index){
            this.active = index;
            this.$emit("changeActive",index);
        }
    }
}
</script>

<style scoped>
.btn-group{
    margin:0 auto;
    width: 500px;
    position: relative;
    left:32.4%;
    top: 10px;
}

</style>