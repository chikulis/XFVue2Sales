<!-- 面包屑组件 -->
<template>
  <el-row class="divToolBar">
    <el-divider direction="vertical"></el-divider>
    <span>业务导航: {{formid}}, {{formname}}</span>
    <span style="color:red;font-size:12px;padding-left:20px;">{{memo}}</span>
  </el-row>
</template>

<script>
import { constants } from "crypto";
export default {
  // 名称
  name: "breadcrumb",

  // 组件
  components: {},

  // 数据
  data() {
    return {
      formid: "",
      formname: "",
      memo: ""
    };
  },

  // 操作方法
  methods: {
    // 根据formid获取面包屑信息
    getFomridMessage(formid) {
      var r = JSON.parse(localStorage.eleRouter || "[]");

      var message = r.filter(x => x.formid === Number(formid));

      this.formid = formid;

      this.formname = message[0].formname;

      this.memo = message[0].memo;
    }
  },

  created() {
    if (this.$route.params.formid == undefined) {
      console.log(this.$route.path);
      this.getFomridMessage(
        // this.$route.path.substr(
        //   this.$route.path.length  -4,
        //   this.$route.path.length
        // )  --- 原来的
        this.$route.path.substr(1)
      );
    } else {
      this.getFomridMessage(this.$route.params.formid);
    }
  }
};
</script>

<style scoped>
.divToolBar {
    height: 35px;
    line-height: 35px;
    background-color: #e5f3fe;
    border-bottom: 1px solid #7ac0da;
    font-size: 13px;
    text-align: left;
    color: #2b50fc;
}
</style>