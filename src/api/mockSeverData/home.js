import Mock from 'mockjs'

let List=[]
export default {
    getStaticticalData:()=>{
    //Mock.Random.float produces random number from 100 to 2000 
    for(let i = 0;i<7;i++){
        List.push(
            Mock.mock({
                Toys:Mock.Random.float(50,1000,0,0),
                Fruits:Mock.Random.float(50,1000,0,0),
                Vegetables:Mock.Random.float(50,1000,0,0),
                Appliances:Mock.Random.float(50,1000,0,0),
                Beverages:Mock.Random.float(50,1000,0,0),
                Snacks:Mock.Random.float(50,1000,0,0),
            })
        )
    }
    return{
        code:20000,
        data:{
            videoData:[
                {
                    name:'Toys',
                    value:40
                },
                {
                    name:'Fruits',
                    value:+3
                },
                {
                    name:'Vegetables',
                    value:1.5
                },
                {
                    name:'Appliances',
                    value:70
                },
                {
                    name:'Beverages',
                    value:1.5
                },
                {
                    name:'Snack',
                    value:3.5
                },
            ],
            userData:[
                {
                    date:'Mon.',
                    new:13,
                    active:200
                },
                {
                    date:'Tue.',
                    new:21,
                    active:240
                },
                {
                    date:'Wed.',
                    new:12,
                    active:273
                },
                {
                    date:'Thur.',
                    new:46,
                    active:347
                },
                {
                    date:'Fri.',
                    new:88,
                    active:459
                },
                {
                    date:'Sat.',
                    new:123,
                    active:603
                },
                {
                    date:'Sun.',
                    new:142,
                    active:783
                },
            ],
            orderData:{
                date:["January","February","March","April","May","June","July",],
                data:List
            },
            tableData : 
            [
                {
                    category: 'Toys',
                    buy: '1000',
                    sale: List[0].Toys,
                    income:'$' + ((List[0].Toys) * 40 - 1000 * 10),
                },
                {
                    category: 'Fruits',
                    buy: '1000',
                    sale: List[0].Fruits ,
                    income:'$' + ((List[0].Fruits) * 3 - 1000 * 0.5),
                },
                {
                    category: 'Vegetables',
                    buy: '1000',
                    sale: List[0].Vegetables ,
                    income:'$' + ((List[0].Vegetables) * 1.5 - 1000 * 0.2),
                },
                {
                    category: 'Appliances',
                    buy: '1000',
                    sale: List[0].Appliances,
                    income: '$' + ((List[0].Appliances) * 70 - 1000 * 50),
                },
                {
                    category: 'Beverages',
                    buy: '1000',
                    sale: List[0].Beverages ,
                    income: '$' + ((List[0].Beverages) * 1.5 - 1000 * 0.2),
                },
                {
                    category: 'Snacks',
                    buy: '1000',
                    sale: List[0].Snacks ,
                    income: '$' + ((List[0].Snacks) * 3.5 - 1000 * 1.2),
                },
             ],
        }
    }
    }
}