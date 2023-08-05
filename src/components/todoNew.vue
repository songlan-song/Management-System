<template>
    <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Add new task</span>
        <input type="text" class="form-control" placeholder="Enter your task" aria-label="Username"
            aria-describedby="basic-addon1" v-model="taskname">
        <button class="btn btn-success" @click="onsubmit">Add</button>
    </div>
</template>

<script>
export default {
    name: "todoNew",
    data(){
        return{
            taskname:'',
        }
    },
    emits:["addTask"],
    methods:{
        onsubmit(){
            
            this.$emit("addTask",this.taskname)
            this.taskname = '';
        }
    },
    
}

</script>

<style scoped>
.input-group{
    width: 500px;
    margin:0px auto;
}
.form-control{
    transition: '';
}
</style>