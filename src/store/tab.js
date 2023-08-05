import Cookie from 'js-cookie'
const tabModule = {
    namespaced: true,
    state:{
        isCollpse:false,
        tabsList:[
          {
            path:"/",
            name:"home",
            label:'Home page',
            icon:'House',
            url:'Home/Home',
        },
        ],
        menu:[]
    },
    mutations: {
      clickMenu (state) {
        state.isCollpse = !state.isCollpse
      },
      //Update breadcrumb
      selectMenu(state,val){
        if(val.name!=='home'){
          const index = state.tabsList.findIndex(item=>item.name===val.name)
          if (index === -1){
            state.tabsList.push(val)
          }
        }
      },
      closeTag(state,item){
          const index =  state.tabsList.findIndex(val=>val.name ===item.name)
          state.tabsList.splice(index,1)
      },
      setMenu(state,val){
        state.menu=val
        Cookie.set('menu',JSON.stringify(val))
      },

    }
}
export default tabModule