<template>
   <el-col :span="21">
       <!-- 页面标题 -->
       <el-row>
       	   <el-col :span="4" :offset="10"><h3>用户信息展示</h3></el-col>
       </el-row>
       <!-- 搜索用户输入框 -->
       <el-row>
       	  <el-col :span="4" :offset="2" class="display_search_user">
       	  	   <el-input class="display_input" v-model="input" icon="search" :on-icon-click="displayClick" placeholder="请输入用户姓名"></el-input>
       	  </el-col>
       </el-row>
       <!-- 表格 -->
       <el-row>
	   	  <el-col :span="20" :offset="2">
	   	  	  <el-table :data="tableData" border>
	   	  	    <el-table-column prop="id" label="学号"></el-table-column>
	   	  	    <el-table-column prop="name" label="姓名"></el-table-column>
	   	  	    <el-table-column prop="sex" label="性别"></el-table-column>
	   	  	    <el-table-column prop="tel" label="电话"></el-table-column>
	   	  	    <el-table-column prop="work" label="工作/行业">	</el-table-column>
	   	  	    <el-table-column prop="workAddress" label="工作地址"></el-table-column>
	   	  	    <el-table-column label="详细信息">
	                <template scope="scope" style="text-align:center;">
	                	<el-button @click="opendialog(scope.row)" size="small" type="primary"> 更多 </el-button>
	                </template>
	   	  	    </el-table-column>
	   	  	  </el-table>
	   	  </el-col>
   	  </el-row>

      <!-- 分页 -->
   	  <el-row class="display_page">
   	  	  <el-col span="10" :offset="2">
   	  	  	  <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"  :page-sizes="[5,10,20]" :page-size="5" layout="prev,pager,next,sizes" :total="200"></el-pagination>
   	  	  </el-col>
   	  </el-row>

    <!-- 个人信息模态框 -->
   	<el-dialog title="个人详细信息" :visible.sync="dialogVisible" >
   	     <el-col>
            <ul>
	   	     	<li><span>姓名：</span>{{name}}</li>
	   	     	<li><span>吃饭：</span>{{eat}}</li>
	   	     	<li><span>个性签名：</span>{{sign}}</li>
	   	     </ul>
   	     </el-col>
   	     <div slot="footer" class="dialog-footer">
   	     	 <!-- <el-button @click.native="dialogVisible=false">取消</el-button> -->
   	     	 <!-- <el-button type="primary" @click.native="dialogVisible=false">保存</el-button> -->
   	     	 <el-button type="primary" @click.native="dialogVisible=false">确定</el-button>
   	     </div>
   </el-dialog>

   </el-col>
</template>

<script>
  export default {
    data() {
      return {
        tableData:[],
        dialogVisible:false,
      };
    },
    //加载后调用该方法
    created(){
      this.usermessage();
    },
   
    methods:{
      //打开模态框
    	opendialog:function(row) {
    		this.dialogVisible = true;
            this.name = row.name;
            this.eat = row.eat;
            this.sign = row.sign;
      },
      //获取表格数据
      usermessage() {
        this.$http.get('/api/usermessage')
        .then((res) => {
          console.log(res);
          this.tableData = res.body;
          //alert("ok");
        })
        .catch(function(response){
          console.log(response);
          //alert(response);
        })
      }

    }
  }
</script>

<style type="text/css">
	.display_search_user {
		margin-bottom: 15px;
	}
	.display_input {
        border-radius: 15px;
	}
	.display_page {
		margin-top: 20px;
	}
</style>
