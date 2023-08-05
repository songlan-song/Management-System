<template>
    <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center"
        v-for="item in todolist" :key="item.id">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" :id="item.id" v-model="item.isCompleted">
                <label class="form-check-label" for="flexCheckDefault" :class="item.isCompleted ? 'delete':''">
                    {{item.task}}
                </label>
            </div>
            <span class="badge bg-success rounded-pill" v-if="item.isCompleted">Completed</span>
            <span class="badge bg-danger rounded-pill" v-else>Uncompleted</span>
        </li>
    </ul>
</template>
  
<script>


export default {
    name: 'todolist',
    props:{
        todolist:{
        type:Array,
        required:true,
        default:[]
        }
  
    }
}
</script>
<style scoped>
.list-group {
    width: 500px;
    margin: 0 auto;
}
.delete{
    text-decoration: line-through;
}
</style>