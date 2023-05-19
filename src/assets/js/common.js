export default {
    install(Vue) {
        //这里是示例方法 getTime是方法名 function()可以携带参数
        
        //判断用户登录凭证存不存在
        Vue.prototype.isCookie = function () {
            let sessionID = this.$cookies.get('name');
            if (!sessionID) {
                return false;
            }
            return true;
        }
        //时间处理格式方法
        Vue.prototype.timeFun=function(time){
            let time1=new Date(time*1000).toLocaleTimeString();
            let time2=new Date(time*1000).toLocaleDateString();
            let Y=time2.split("/")[0];
            let M=time2.split("/")[1];
            M=M<10?"0"+M:M;
            let D=time2.split("/")[2];
            D=D<10?"0"+D:D;
            let h=time1.split(":")[0];
            h=h<10?"0"+h:h
            let m=time1.split(":")[1];
            // m=m<10?"0"+m:m
            if(new Date().getTime()-new Date(time*1000).getTime()<60*1000*5){
              return "刚刚";
            }else if(new Date(time*1000).getDate()==new Date().getDate()){
              return h+":"+m;
            }else if(new Date(time*1000).getFullYear()==new Date().getFullYear()){
              return M+"-"+D;
            }else{
              return Y+"-"+M+"-"+D;
            }
          }
    }
}