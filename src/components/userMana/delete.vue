<template>
   <el-col :span="20">
       <!-- 标题 -->
       <el-row>
           <el-col :span="4" :offset="10">
               <h3>删除用户</h3>
           </el-col>
       </el-row>

       <el-row>
           <el-col :offset="2">
              <el-table :data="tableData" border>
                  <el-table-column prop="id" label="序号"></el-table-column>
                  <el-table-column prop="name" label="姓名"></el-table-column>
                  <el-table-column label="操作">
                      <template scope="scope">
                           <el-button type="danger" size="small" @click="deleteUser()"> {{ scope.row.message }} </el-button>
                      </template>
                  </el-table-column>
              </el-table>
           </el-col>
       </el-row>
   </el-col>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          id: '1',
          name: '王小虎',
          telephone:"18819250000",
          job:'程序员',
          address: '上海市普陀区金沙江路 1518 弄',
          message:'删除',
          sign:'helloWorld!',
          eat:"7"
        }, {
          id: '2',
          name: '王一虎',
          telephone:"18819250000",
          job:'程序员',
          address: '上海市普陀区金沙江路 1518 弄',
          message:'删除',
          sign:'哈哈哈',
          eat:"6"
        }, {
          id: '3',
          name: '王二虎',
          telephone:"18819250000",
          job:'程序员',
          address: '上海市普陀区金沙江路 1518 弄',
          message:'删除',
          sign:'帅',
          eat:"9"
        }, {
          id: '4',
          name: '王三虎',
          telephone:"18819250000",
          job:'程序员',
          address: '上海市普陀区金沙江路 1518 弄',
          message:'删除',
          sign:'good afternoon',
          eat:"8"
        }],
      };
    },

    methods:{
      deleteUser:function() {
          this.$confirm("此操作将永久删除该用户，是否继续？","提示",{
            confirmButtonText:'确定',
            cancelButtonText:'取消',
            type:'warning'
          }).then(() => {
             this.$message({
                type:'success',
                message:'删除成功！'
             });
          }).catch(() => {
             this.$message({
                 type:'info',
                 message:'删除已取消'
             });
          });
      }
    }
  }
</script>
