import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        name:'原值'
    },
    mutations:{
        setname(state,newValue){
            state.name = newValue;
        }
    },
    getters:{
        getname(state){
            return '替代值'
        }
    },
    actions:{
        name(context,name){
            context.commit('setname',name)
        }
    }
})