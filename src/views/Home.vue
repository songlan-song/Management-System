<template>
    <el-row>
        <el-col :span="8">
            <el-card class="box-card" style="height: 300px;">
               <div class="user">
                <img src="../assets/headphoto.jpeg" alt="">
                <div class="user-info">
                    <p class="name">Admin</p>
                    <p class="access">super-administrator</p>
                </div>
               </div>
               <div class="login-info">
                <p>Last login time: <span class="span-info">2023-7-23</span></p>
                <p>Last login from: <span class="span-info">Birmingham</span></p>
               </div>
            </el-card>
            
            <el-card style="margin-top: 20px; height: 460px;">
                <template #header>
                    <div class="card-header">
                        <span>January Sales</span>
                    </div>
                </template>
                <el-table :data='tableData' style="width: 100%; font-size: 8px;">
                <!-- <el-table-column prop="category" label="Category"/>
                <el-table-column prop="buy" label="Buy"/>
                <el-table-column prop="sale" label="Sale"/>
                <el-table-column prop="income" label="Income"/> -->
                <el-table-column v-for="(val,key) in tableLabel" :prop="key" :label="val"/>
                </el-table>
            </el-card>
        </el-col>
        <el-col :span="16" style="margin-left: ">
            <div class="num">
                <el-card class="card" v-for="item in countData" :key="item.name" :body-style="{display:'flex',padding:0}">
                    <component class="icons" :is="item.icon" :style="{background:item.color}"></component>
                    <div class="details">
                        <p class="num2">{{ item.value }}</p>
                        <p class="txt">{{ item.name }}</p>
                    </div>
                </el-card>
            </div>
            <el-card style="height: 280px;margin-left: 20px;">
                <div ref="echarts1" style="height: 280px;"></div>
            </el-card>
            <div class="garph" style="margin-left: 20px;">
                <el-card class="card" style="height: 260px; width: 48%;margin-top: 15px;">
                <div ref="echarts2" style="height: 240px;"></div>
                </el-card>
                <el-card  class = 'card' style="height: 260px; width: 48%;margin-top: 15px; padding:0;">
                    <template #header>
                    <div class="card-header">
                        <span>Item Price($)</span>
                    </div>
                </template>
                <div class="my-card-body" ref="echarts3" style="height: 180px;"></div>
                </el-card>
            </div>
        </el-col>
    </el-row>
</template>

<script>
import { getData } from '../api';
import * as echarts from 'echarts'
export default{
    data(){
        return{
           tableData:[],
             tableLabel:{
                category:'Category',
                buy:'Buy',
                sale:'Sale',
                income:'Income',
             },
             countData:[
                {
                    name:"Today's Completed Orders",
                    value:87,
                    icon:"SuccessFilled",
                    color:"#a8ea68"
                },
                {
                    name:"Today's New Customers",
                    value:13,
                    icon:"UserFilled",
                    color:"#ffb980"
                },
                {
                    name:"Today's Returned Orders",
                    value:8,
                    icon:"Failed",
                    color:"#5ab1ef"
                },
                {
                    name:"Total Sales This Month)",
                    value:2613,
                    icon:"Coin",
                    color:"#2ec7c9"
                },
                {
                    name:"Monthly Sales Growth Rate",
                    value:"1.3%",
                    icon:"Histogram",
                    color:"#ffeb3b"
                },
                {
                    name:"KPI",
                    value:"71%",
                    icon:"StarFilled",
                    color:"#ffb7da"
                },
             ]
        }
    },
    mounted(){
      getData().then(({data})=>{
        const {tableData} =data.data
        this.tableData = tableData



        const echarts1 = echarts.init(this.$refs.echarts1)
        var echarts1Option ={}
        const {orderData} = data.data
        const xAxis1 = Object.keys(orderData.data[0])
        const realxAxis = orderData.date
        echarts1Option.xAxis ={
            data:realxAxis
        }
        echarts1Option.legend ={
            data:xAxis1
        }
        echarts1Option.yAxis={}
        echarts1Option.series=[]
        xAxis1.forEach(key=>{
            echarts1Option.series.push({
                name:key,
                data:orderData.data.map(item=>item[key]),
                type:'line'
            })
        })
        echarts1.setOption(echarts1Option)



        const echarts2 = echarts.init(this.$refs.echarts2)
        const {userData} = data.data
        var echarts2Option={
            legend:{
                textStyle:{
                    color:"#333"
                }
            },
            grid:{
                left:"20%"
            },
            tooltip:{
                trigger:"axis",
            },
            xAxis:{
                type:"category",
                data:userData.map(item=>item.date),
                axis:{
                    lineStyle:{
                        color:"#17b3a3"
                    },
                },
                axisLabel:{
                    interval:0,
                    color:"#333"
                }
            },
            yAxis:[
                {
                    type:"value",
                    axisLine:{
                        lineStyle:{
                            color:"#17b3a3"
                        }
                    }
                }
            ],
            color:["#2ec7c9","#b6a2de"],
            series:[
                {
                    name:'New Customers',
                    data:userData.map(item=>item.new),
                    type:"bar"
                },
                {
                    name:'Active Customers',
                    data:userData.map(item=>item.active),
                    type:'bar'
                }
            ],
        }
        echarts2.setOption(echarts2Option)



        const echarts3 = echarts.init(this.$refs.echarts3)
        const {videoData} = data.data
        var echarts3Option={
            tooltip:{
                trigger:"item"
            },
            color:["#0f78f4","#dd536b","#9462e5","#a6a6a6","#e1bb22","#39c362","#3ed1cf"],
            series:[
               {
                data:videoData,
                type:'pie'
               } 
            ]
        }
        echarts3.setOption(echarts3Option)
      })

    }
}

</script>
<style scoped>
.user{
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
}
.user img{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-right: 40px;
}

.name{
    font-size: 30px;
    margin-bottom: 10px;
    margin-top: 0;
}
.access{
    color: #999999;
}
.login-info p{
    line-height: 28px;
    font-size: 14px;
    color: #999;
}

.span-info{
    color: #666;
    margin-left: 60px;
}
.icons{
    width: 80px;
    height: 80px;
    font-size: 30px;
    text-align: center;
    line-height: 80px;
    color: #fff;
}
.num{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 200px;
    margin-left: 20px;
}
.card{
    width: 32%;
    margin-bottom: 20px;
}
.details{
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.num2{
    font-size: 25px;
    margin-bottom: 0;
    margin-top: 10px;
}
.txt{
    font-size: 10px;
    text-align: center;
    color: #999;
    margin-top: 0;
}
.garph{
    display: flex;
    justify-content: space-between;
}
.card{
    padding: 0;
}
</style>