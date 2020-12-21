<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">销售系统</div>
            <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
                <el-form-item prop="usercode">
                    <el-input v-model="param.usercode" placeholder="usercode">
                        <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        type="password"
                        placeholder="password"
                        v-model="param.password"
                        @keyup.enter.native="submitForm()"
                    >
                        <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm()">登录</el-button>
                </div>
                <p class="login-tips">Tips : 使用用户名和密码登录。</p>
            </el-form>
        </div>
    </div>
</template>

<script>
// import baseurl from '../../utils/base'; // 导入接口域名列表
// import api from '../../api/sysAdmin/mid_menu'; 
// import service from '../../utils/request'; // 导入http中创建的service实例
import axios from 'axios';
import jwt_decode from "jwt-decode";


export default {
    data: function() {
        return {
            param: {
                usercode: 'xf106664',
                password: '123456',
            },
            rules: {
                usercode: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
            },
           
        };
    },
    computed:{
        userInfo:function(){
            const params=new URLSearchParams();
            // params.append("client_id","password");
            // params.append("client_secret","secret");
            // params.append("grant_type","password");
            params.append("usercode",this.param.usercode);
            params.append("password",this.param.password);
            return params;
        }
    },
    methods: {
        submitForm() {
            this.$refs.login.validate(valid => {
            if(valid){
                var usercode=this.param.usercode;
                var password=this.param.password;
                axios.post(`${this.$baseurl.identityurl}/identity?usercode=`+usercode+'&password='+password)
                .then(res=>{
                    const token=res.data.access_token;
                    if(token== undefined || token == "")
                    {
                         this.$message.error('用户名或密码不正确');
                         return false;
                    }
                    this.jwtToken(token);
                   this.$router.push('/');
                }).catch(function(error){
                    this.$message.success('登录失败');
                    console.log(error)
                });
            }
                else{
                    this.$message.error("请输入账号和密码");
                    console.log("error submit");
                    return false;
                }
            });
        },

                // if (valid) {
                //     this.$message.success('登录成功');
                //     localStorage.setItem('ms_usercode', this.param.usercode);
                //     //localStorage.setItem("eleUser", JSON.stringify(decode || "[]"));
                //     localStorage.setItem("eleUser", this.param.usercode);
                //     localStorage.setItem("eleApplication", this.$baseurl.applicationid);
                //      // this.test(this.param.usercode);

                //     this.saveMenuToLs(this.param.usercode);
                //     this.saveMouleToLs(this.param.usercode);
                //     this.saveActionTypr(this.param.usercode);
                //     this.saveRouters(this.param.usercode);
                //     this.$router.push('/');
                // } else {
                //     this.$message.error('请输入账号和密码');
                //     console.log('error submit!!');
                //     return false;
                // }
          
    jwtToken(token){
        localStorage.setItem("eleToken",token);
        // 解析token
        const decode=jwt_decode(token);
        localStorage.setItem('eleUser',JSON.stringify(decode||"[]"));
        localStorage.setItem("eleApplication",this.$baseurl.applicationid);
        localStorage.setItem("ms_usercode",this.param.usercode);
        this.saveMenuToLs(this.param.usercode);
                        this.saveMouleToLs(this.param.usercode);
                        this.saveActionTypr(this.param.usercode);
                        this.saveRouters(this.param.usercode);
                        
    },


        // 将目录存储到ls中
    saveMenuToLs(usercode) {
        //     var url ='https://localhost:44333/api/mid_module/GetMid_Module?dbid=a.weberp&applicationid=ToolsAssets';
        //     var p = axios.get(url);
        //     p.then((response)=>{
        //     console.log(response);
        //     // 这里是响应成功返回的数据，把上面的response打印出来的时候，就会得到以下结果
        //     // config: {url: "请求的地址"}，这是一个配置文件
        //     //  headers: 请求头信息
        //     // data: (100) 返回响应的数据
        //     // request: ajax相关的请求信息
        //     // status: 200；响应状态
        //     // statusText: "OK"
        //     // 判断响应状态
        //     if(response.status === 200){
        //         //获得成功响应返回的数据
        //         console.log(response.data);
        //         localStorage.setItem("eleModule", JSON.stringify(response.data || "[]"));
        //     }
        // },(error)=>{
        //     //错误返回错误信息
        // });
        // console.log(p);

        this.$api.mid_menu.getdata(this.$baseurl.applicationid).then(res => {
            // console.log(res.rows);
            var datas=listToTree(res.rows,{
                idKey:"menuid",
                parentKey:"parentmenu",
                childrenKey:"children"
            })
         localStorage.setItem("eleMenu", JSON.stringify(datas || "[]"));
      });

    //     service.get('https://localhost:44333/api/mid_menu/getall?dbid=a.weberp').then(res => {
    //     var datas = listToTree(res.data, {
    //       idKey: "menuid",
    //       parentKey: "parentmenu",
    //       childrenKey: "children"
    //     });
    //     localStorage.setItem("eleMenu", JSON.stringify(datas || "[]"));
    //   });


    //   api.mid_menu.getbyUsr(baseurl.applicationid, usercode).then(res => {
    //     var datas = listToTree(res.data, {
    //       idKey: "menuid",
    //       parentKey: "parentmenu",
    //       childrenKey: "children"
    //     });
    //     localStorage.setItem("eleMenu", JSON.stringify(datas || "[]"));
    //   });
    },

    // test(usercode) {   
    //     var vm = this
    //         axios
    //         .get('https://jsonplaceholder.typicode.com/users')
    //         .then(function (response) {
    //             vm.users = response.data
    //         })
    // },

    // 将按钮信息存储到ls中
    saveActionTypr(usercode) {
      this.$api.mid_actiontype
        .getdata(this.$baseurl.applicationid)
        .then(res => {
          localStorage.setItem("eleAction", JSON.stringify(res.rows || "[]"));
        });
    },

    // 将模块信息保存到ls
    saveMouleToLs(usercode) {
      this.$api.mid_module
        .getdata(this.$baseurl.applicationid)
        .then(res => {
          localStorage.setItem("eleModule", JSON.stringify(res.rows || "[]"));
        });
    },

    // 将路由信息保存到ls
    saveRouters(usercode) {
      this.$api.mid_gform
        .getdata(this.$baseurl.applicationid)
        .then(res => {
          var datas = res.rows;

          localStorage.setItem("eleRouter", JSON.stringify(datas || "[]")); //存储动态路由到ls
        });
    },
    },
    
};
</script>

<style scoped>
.login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(../assets/img/login-bg.jpg);
    background-size: 100%;
}
.ms-title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    border-bottom: 1px solid #ddd;
}
.ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    overflow: hidden;
}
.ms-content {
    padding: 30px 30px;
}
.login-btn {
    text-align: center;
}
.login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
}
.login-tips {
    font-size: 12px;
    line-height: 30px;
    color: #fff;
}
</style>