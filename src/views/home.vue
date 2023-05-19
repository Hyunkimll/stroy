<template>
  <div>
    <p>{{ msg }}</p>
    <one ref='one'></one>
    <button ref="myRef" @click="login">按钮</button>
  </div>
</template>

<script>
import one from '../components/HelloWorld.vue'
export default {
  data() {
    return {
      msg: "这是首页",
    };
  },
  components:{
    one
  },
  methods: {
    login() {
      console.log(this.$refs.myRef)
      this.msg = "这是首页1";
    },
  },
  mounted(){
      console.log(this.$refs.myRef)
      console.log(this.$refs.one.login())
  },
  created(){
      console.log(this.$refs.myRef)
  }
};
</script>

<style>
</style>