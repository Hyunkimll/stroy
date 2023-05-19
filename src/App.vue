<template>
  <div id="app">
    <router-link to="/loginhome">登录</router-link>
    <router-link to="/loginhome/homee">登录1</router-link>
    <router-link to="/home">首页</router-link>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  watch:{
    $route(to,from){
      console.log(to,from)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
