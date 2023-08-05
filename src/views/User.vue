<template>
    <div class="user-management">
        <el-button type="primary" @click="dialogVisible=true">+ Add New</el-button>
        <el-table :data="tableData" stripe style="width: 100%;height: 90%;">
        <el-table-column prop="name" label="Name" />
         <el-table-column prop="sex" label="Gender">
        <template #default="scope">
            <span style="margin-left: 10px;">{{ scope.row.sex===1?'Male':'Female' }}</span>
         </template>
        </el-table-column>
         <el-table-column prop="age" label="Age" />
         <el-table-column prop="birth" label="Date of Birth" />
         <el-table-column prop="addr" label="Address" />
         <el-table-column prop="sex" label="Actions">
        <template #default="scope">
           <el-button size="mini" @click="handleDelete(scope.row)" type="danger">Delete</el-button>
         </template>
        </el-table-column>
         </el-table>
        <el-dialog v-model="dialogVisible" title="Creat New User" width="60%" :before-close="resetForm">
            <el-form :inline="true"     
                        ref="ruleFormRef"
                        :model="ruleForm"
                        :rules="rules"
                        label-width="120px"
                        class="demo-ruleForm"
                        status-ico
                        id="myform">
                <el-form-item label="Full Name" prop="name">
                    <el-input v-model="ruleForm.name" placeholder="Please enter the name" clearable />
                </el-form-item>
                <el-form-item label="Age" prop="age">
                    <el-input v-model="ruleForm.age" placeholder="Please enter the age" clearable></el-input>
                </el-form-item>
                 <el-form-item label="Sex" prop="sex">
                    <el-select v-model="ruleForm.sex" placeholder="Please select the sex" clearable>
                        <el-option label="Male" :value="1" />
                        <el-option label="Female" :value="0" />
                    </el-select>
                </el-form-item>
                <el-form-item label="Date of Birth" prop="birth">
                    <el-date-picker v-model="ruleForm.birth" type="date" placeholder="Pick a date" value-format="YYYY-MM-DD" clearable />
                </el-form-item>
                <!-- <el-form-item>
                    <el-button type="primary" @click="onSubmit">Query</el-button>
                </el-form-item> -->
                <el-form-item label="Address" prop="addr">
                    <el-input v-model="ruleForm.addr" placeholder="Please enter the address" clearable></el-input>
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="cancel">Cancel</el-button>
                    <el-button type="primary" @click="submitForm(ruleFormRef)">
                        Confirm
                    </el-button>
                </span>
            </template>
        </el-dialog>
        
    </div>
</template>

<script  lang ='ts' setup>

import { proxyRefs, reactive, ref} from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { onMounted } from 'vue';
import {getUser,addUser,delUser} from '../api'
import { ElMessage, ElMessageBox } from 'element-plus'



const dialogVisible = ref(false);
const tableData = ref([])
const total = ref(0)



interface RuleForm {
  name: string
  age: string
  sex: string
  birth: string
  addr: string
}

const ruleFormRef = ref<FormInstance>()

let ruleForm = reactive<RuleForm>({
  name: '',
  age: '',
  sex: '',
  birth: '',
  addr: '',
})
const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: 'Please input the Full name', trigger: 'blur' },
  ],
  age: [
    {
      required: true,
      message: 'Please enter the age',
      trigger: 'blur',
    },
  ],
  sex: [
    {
      required: true,
      message: 'Please select the sex',
      trigger: 'blur',
    },
  ],
  birth: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a date',
      trigger: 'blur',
    },
],
  addr:[
  {required: true, message: 'Please input the the address', trigger: 'blur'}
  ]
 
})
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
     addUser(ruleForm).then(()=>{
        getList()
     })  
        ruleForm.name = '';
        ruleForm.age = '';
         ruleForm.sex = '';
         ruleForm.birth = '';
          ruleForm.addr = '';
      dialogVisible.value = false
    } else {
      console.log('error submit!', fields)
    }
  })
}
const resetForm = () => {
  ruleForm.name = '';
  ruleForm.age = '';
  ruleForm.sex = '';
  ruleForm.birth = '';
  ruleForm.addr = '';
  dialogVisible.value = false
};
const cancel=()=>{
    ruleForm.name = '';
  ruleForm.age = '';
  ruleForm.sex = '';
  ruleForm.birth = '';
  ruleForm.addr = '';
  dialogVisible.value = false
}

const getList=function(){
    getUser().then(({ data }) => {
    tableData.value = data.list; 
    total.value=data.count || 0
  });
}

onMounted(() => {
    getList()
});

const handleDelete=function(row){
  ElMessageBox.confirm(
    'action will permanently delete the file. Continue?',
    'Warning',
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
    }
  )
    .then(async () => {
       await delUser({id:row.id}).then(()=>{
            ElMessage({
        type: 'success',
        message: 'Delete completed',
      })
        })
        getList()
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Delete canceled',
      })
    })
}

// const handleDelete = (row)=>{
//   ElMessageBox.confirm('action will permanently delete the file. Continue?')
//   .then(async()=>{
//     await proxy.$api.delUser
//   })
// }


</script>


<style scoped>

.dialog-footer button:first-child {
  margin-right: 10px;
}
.user-management{
  height: 90%;
}
</style>