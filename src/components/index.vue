<template>
  <div class="index">
    <!-- 顶部 -->
    <el-row>
        <el-col :span="24">
            <div class="index_title_wrap">
               <span class="index_title"> {{title}} </span>
               <span class="index_logout"> [退出] </span>
               <span class="index_user"> {{user}} </span>
             </div>
        </el-col>
    </el-row>

    <!-- 导航栏 -->
    <el-row>
       <el-col :span="3">
          <el-menu default-active="1" class="" @open="handleOpen" @close="handleClose" theme="light" router>

              <el-submenu index="1">
                  <template slot="title">用户信息</template>
                    <el-menu-item style="min-width:150px;" index="/index/userMsg/display">展示用户信息</el-menu-item>
                    <el-menu-item style="min-width:150px;" index="/index/userMsg/add">添加用户信息</el-menu-item>
              </el-submenu>

              <!--  <el-submenu index="2" >
                  <template slot="title">用户管理</template>
                    <el-menu-item style="min-width:150px;" index="/index/userMana/delete">删除用户</el-menu-item> -->
                    <el-menu-item index="/index/userMana/modify">修改密码</el-menu-item>
              <!-- </el-submenu> -->

              <el-menu-item index="/index/about">关于我们</el-menu-item>
          </el-menu>
       </el-col>
       
       <router-view></router-view>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      title: '通讯录管理系统',
      user:"admin"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .index_title_wrap{
      width: 100%;
      background: #00cd66;
      height: 70px;
   }
   .index_title {
    color: white;
    margin-left: 20px;
    font-family: 微软雅黑;
    font-size: 30px;
    line-height: 70px;
    height:100%;
   }
   .index_user {
    color: white;
    height:100%;
    float: right;  
    margin-right:10px;
    line-height: 70px;
   }
   .index_logout {
    height:100%;
    margin-right: 20px;
    color: white;
    float: right;
    line-height: 70px;
   }
   .index_menu {
    background: #4eee94;
   }
</style>
