<template>
      <el-col :span="20" :offset="1">
           <!-- 标题 -->
           <el-row>
                <el-col :span="4" :offset="8"><h3>添加个人信息</h3></el-col>
           </el-row>

           <el-form :inline="true" :label-position="left" label-width="80px">
                <el-form-item label="学号">
                    <el-input v-model="id" placeholder="请输入学号"></el-input>
                </el-form-item>
                <el-form-item label="姓名">
                    <el-input v-model="name" placeholder="请输入姓名"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <!-- <el-input v-model="sex" placeholder="请输入性别"></el-input> -->
                    <el-select v-model="sex" placeholder="请选择性别" style="width:192px;" >
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="电话">
                    <el-input  v-model="tel" placeholder="请输入电话"></el-input>
                </el-form-item>
                <el-form-item label="工作/行业">
                    <el-input v-model="work" placeholder="请输入工作/行业"></el-input>
                </el-form-item>
                <el-form-item label="工作地址">
                    <el-input v-model="workAddress" placeholder="请输入工作地址"></el-input>
                </el-form-item>
                <el-form-item label="个性签名">
                    <el-input v-model="sign" placeholder="请输入个性签名"></el-input>
                </el-form-item>
                <el-form-item label="吃大餐">
                    <el-input v-model="eat" placeholder="请输入吃大餐"></el-input>
                </el-form-item>
                <el-row>
                    <el-col :offset="8">
                        <el-button id="btn" @click="addMessage()" type='primary' :disabled='btn_display'>提交</el-button>
                        <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
                    </el-col>
                </el-row>
           </el-form>


      </el-col>
</template>

<script>
  export default {
    data() {
      return {
        id:'',
        name:'',
        sex:'',
        tel:'',
        work:'',
        workAddress:'',
        sign:'',
        eat:'',
        btn_display:false,

        options:[{
          value:"1",
          label:"男"
        },{
          value:'2',
          label:'女'
        }
      ],
      }
    },

    methods: {
      addMessage() {
        var id = this.id;
        var name = this.name;
        var sex = this.sex;
        var tel = this.tel;
        var work = this.work;
        var workAddress = this.workAddress;
        var sign = this.sign;
        var eat = this.eat;

        this.btn_display = "true";

        if (sex == 1) {
          sex = "男";
        }else {
          sex = '女';
        }

        this.$http.post('/api/addmessage',{
          id:id,
          name:name,
          sex:sex,
          tel:tel,
          work:work,
          workAddress:workAddress,
          eat:eat,
          sign:sign
        },{})
        .then((res) => {
          console.log(res);
          alert("添加成功");
        })
        .catch(function(res){
          console.log(res);
          //alert(res);
        });
        window.location.reload();
      },


    }
  }
</script>
