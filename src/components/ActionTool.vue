<!-- 工具栏按钮组件 -->
<template>
  <div style="padding-left:10px;padding-top:3px;padding-bottom:1px;">
    <el-button-group>
      <template v-for="citem in actiondata">
        <el-button
          style="margin-right:10px;"
          :key="citem.id"
          size="mini"
          :icon="citem.icon"
          :ifdistools="ifdistools"
          :type="citem.backcolor"
          @click="toolsfunc(citem.functionid)"
          v-if="showtools(citem.functionid)"
        >{{citem.name}}</el-button>
      </template>
    </el-button-group>
  </div>
</template>

<script>
export default {
  // 名称
  name: "actionTool",

  // 数据
  data() {
    return {
      actiondata: [], //按钮数据集
      formid: ""
    };
  },

  // 计算属性
  computed: {},

  //创建完成
  created() {
    this.getToolAction();
  },

  // 装载完成
  mounted() { },

  // 传递参数
  props: {
    disTools: Array, // 按钮显示信息 name:按钮名称 values: boolean（是否隐藏）
    ifdistools: "" // 是否启用隐藏按钮功能,传递为 true 则启用
  },

  // 操作方法
  methods: {
    // 获取按钮数据集(内存中获取)
    getToolAction() {
      if (this.$route.params.formid == undefined) {
        // this.formid = this.$route.path.substr(
        //   this.$route.path.length - 4,
        //   this.$route.path.length
        this.formid = this.$route.path.replace('/',''
        );
      } else {
        this.formid = this.$route.params.formid;
      }

      var alldatas = JSON.parse(localStorage.eleAction || "[]");
      this.actiondata = alldatas
        .filter(x => x.formid === Number(this.formid))
        .sort();
    },

    // 按钮回调方法
    toolsfunc(funcid) {
      this.$emit(funcid);
    },

    // 按钮隐藏方法
    showtools(value) {
      if (this.ifdistools === "true") {
        var datas = this.disTools.filter(x => x.value === true);
        if (datas.filter(x => x.name === value).length <= 0) {
          return false;
        }
        return true;
      } else {
        return true;
      }
    }
  }
};
</script>

<style scoped>
/* .el-button--mini,
.el-button--mini.is-round {
  padding: 5px 10px;
} */
</style>
