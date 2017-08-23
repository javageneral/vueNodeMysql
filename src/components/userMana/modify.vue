<template>
    <el-col :span="20" :offset="1">
        <!-- 标题 -->
        <el-row>
            <el-col :span="4" :offset="10">
                <h3>修改密码</h3>
            </el-col>
        </el-row>
        <el-row>
             <el-col :span="6" :offset="1">
                  <el-form :span="8">
                      <el-form-item label="帐号">
                          <el-input :disabled="true"></el-input>
                      </el-form-item>
                      <el-form-item label="原密码">
                           <el-input placeholder="请输入原密码"></el-input>
                      </el-form-item>
                      <el-form-item label="新密码">
                            <el-input placeholder="请输入新密码"></el-input>
                      </el-form-item>
                  </el-form>

                  <el-button >确定</el-button>
              </el-col>
        </el-row>
    </el-col>
</template>

<script>
  export default {

  }
</script>