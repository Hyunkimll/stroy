<template>
  <div>
      <p>用户名：{{this.$route.params.id || '无'}}</p>
      <p>
          这是登录页
      </p>
      <p>{{this.$store.state.name}}</p>
      <p>{{this.$store.getters.getname}}</p>
      <p>{{this.$store.commit('setname','新值')}}</p>
      <!-- <p>{{this.$store.dispatch('name','新值1')}}</p> -->
      <p>{{name}}</p>
    <input type="text" />
    <button @click="login">登录</button>
    <router-view></router-view>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import axios from 'axios';
export default {
    computed:{
        ...mapState(['name'])
    },
    methods:{
        login(){
            debugger;
            this.$axios.requests.get('/api/login').then((res)=>{
                console.log(res)
            }).catch((err)=>{
                console.log(err)
            })
            axios.get('/api/login')
            this.$cookies.set('name','哈哈')
            this.$router.push('/home').catch(() =>{})

        }
    }
}
</script>

<style>

</style>