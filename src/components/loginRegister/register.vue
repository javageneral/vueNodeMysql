<template>

  <el-row>
      <el-row>
          <el-col :span="4" :offset="10">
              <h2 style="color:#00cd66;margin-bottom:50px;">通讯管理</h2>
          </el-col>
      </el-row>
      <el-col :span="5" :offset="14" class="wrap">
        <template>
           <el-tabs v-model="activeName" type="border-card" @tab-click='handleClick'>
               <el-tab-pane label="登录" name='login'>  
                  <el-form :inline="true" >

                    <el-form-item label="学号">
                         <el-input id="lid" v-model="lid" onkeydown="lid()" v-validate:lid="['required']" placeholder="请输入两位学号"></el-input>
                         <p id="lid_err"></p>
                     </el-form-item>

                     <el-form-item label="密码">
                         <el-input v-model="lpasswd" type="password"  placeholder="请输入密码"></el-input>
                     </el-form-item>

                     <el-button type="default" @click="login()">登录</el-button>
                  </el-form> 
               </el-tab-pane>

               <el-tab-pane label="注册" name='register'>
                     <el-form :inline="true" >
                        <el-form-item label="学号">
                           <el-input v-model="id" placeholder="请输入两位学号"></el-input>
                        </el-form-item>
                        <el-form-item label="姓名">
                           <el-input v-model="name" placeholder="请输入姓名"></el-input>
                        </el-form-item>
                        <el-form-item label="密码">
                           <el-input v-model="passwd" type="password" placeholder="请输入密码"></el-input>
                        </el-form-item>
                        <el-button type="defalut" @click="register()">注册</el-button>
                    </el-form> 
               </el-tab-pane>
           </el-tabs>
        </template>
      </el-col>
  </el-row>
</template>

<script>
   export default {
       data() {
           return {
              activeName:'register',
              //注册
              id:'',
              name:'',
              passed:'',
              //登录
              lid:'',
              lpasswd:''
           };
       },

       methods:{
           handleClick(tab,event) {
               console.log(tab,event);
           },
          //注册请求
           register() {
                var id = this.id;
                var name = this.name;
                var passwd = this.passwd;

               this.$http.post('/api/register',{
                  id:id,
                  passwd:passwd 
               })
               .then((res) => {
                   console.log(res);
               })
               .catch((res) => {
                   console.log(res);
               })
           },
           //登录请求
           login() {
               this.$http.get('/api/login')
               .then((res) => {
                  console.log(res);
               })
               .catch((res) => {
                   console.log(res);
               })
           },

           lid() {
               var lid_err = document.getElementById("lid_err");
               var lid = document.getElementById('lid');

              if(lid.vaule == ""){
                 lid_err.innerHTML = "学号不能为空";
              }
           }
       }
   }
</script>

<style>

</style>
