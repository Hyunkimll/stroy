<template>
  <div>
    <p id="header">这是注册页</p>
    <div id="header">
      <p class="logo">
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </p>
    </div>
    <input type="text"/>
    <button @click='login'>注册</button>
  </div>
</template>

<script>
export default {
    methods:{
        login(){
            this.$cookies.set('name','哈哈')
            this.$router.push('/loginhome/11').catch(() =>{})
        }
    }
}
</script>

<style lang="less">
@width:10px;
@height:@width + 10px;
#header{
  width: @width;
  height: @height;
  .colored();
  .logo{
    font-size: 20px;
    color: #000;
  }
}
.colored{
  color: red;
}
</style>