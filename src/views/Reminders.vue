 <template>
    <div class="app">
      <div class="title"><h1>Reminders</h1></div>
      <todoNew @addTask="addTask"></todoNew>
      <todolist :todolist = "todolist"></todolist>
      <todoButton @changeActive="changeActive"></todoButton>
  
    </div>
    
  </template>
  
  <script>
  import todoButton from '../components/todobutton.vue';
  import todolist from '../components/todolist.vue';
  import todoNew from '../components/todoNew.vue';
  let id = 0;
  
  export default {
    name: 'Reminders',
    components: {
      todolist,
      todoButton,
      todoNew,
    },
    data(){
      return{
        todolist:[],
        active : 2,
      }
    },
    methods:{
      changeActive(active){
        this.active = active;
      },
      addTask(taskname){
        if (taskname !== ''){
        this.todolist.push({
          id:id++,
          task:taskname,
          isCompleted:false,
        });}
      }
    },
    computed:{
      todolist(){
        if(this.active===0){
          return this.todolist;
        }
        else if(this.active ===1){
          return this.todolist.filter(item=>item.isCompleted);      
        }
        else{return this.todolist.filter(item=>!item.isCompleted);
        }
      }
    },
  
  }
  </script>
  
  <style scoped>
.title{
  display: flex;
  justify-content: center;
  align-items: center;
}
  </style>

