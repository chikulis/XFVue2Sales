<!-- 公司列表 组件 -->
<template>
  <div class="dialog">
    <!-- input框 -->
    <el-input
      class="entertrue"
      v-model="str"
      @keyup.enter.native="inputEnterEvent"
      @input="inputChangeEvent"
    >
      <i slot="suffix" @click="showdiolog" style="font-weight: bold;color:rgb(143, 142, 142);" class="el-input__icon el-icon-search"></i>
    </el-input>
    <!-- dialog组件 -->
    <el-dialog
      ref="dialogs"
      title="公司列表"
      append-to-body
      :visible.sync="show"
      :close-on-click-modal="false"
      width="800px"
    >

      <!-- 表格区域 -->
      <CommTable
        ref="table"
        :height="400"
        :dataSource="tableData"
        :tableColumn="tableColumn"
        :options="commEntity.options"
        :fetch="fetchTableData"
        :pagination="commEntity.pagination"
        :showindex="true"
        @cellClickEvent="cellClickEvent"
        @cellDBLClickEvent="cellDBLClickEvent"
      ></CommTable>
      <div style="margin-bottom:50px;margin-top:20px;">
        <el-button
          type="primary"
          style="float:right;margin-right:0px;"
          size="mini"
          @click="importClickEvent"
        >选定</el-button>
        <el-button
          type="info"
          style="float:right;margin-right:20px"
          @click="show = false"
          size="mini"
        >关闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>
  
  
  <script>
export default {
  data() {
    return {
      // dialog开关
      show: false,

      // 传递的参数
      str: this.modelname,

      // 通用数据 
      commEntity: this.$api.identity.getCommEntity(),

      // 表格数据
      tableData: [],

      // 表格字段
      tableColumn: [
        { field: "companyid", title: "公司代码" },
        { field: "companyname", title: "公司名称" }
      ],

      // 选中的数据
      clickrow: []
    };
  },

  // 传递参数
  props: {
   modelname:"",
  },

  // 创建完成
  created() {
    this.fetchTableData();
  },

  // 执行方法
  methods: {
    // 查询方法
    fetchTableData() {
      this.commEntity.options.loading = true;
      //this.str 查询参数
      this.$api.ocompany.getdata("").then(res => {
        this.tableData = res.rows;
        this.commEntity.pagination.total = res.total;
        this.commEntity.options.loading = false;
      });
    },

    // 打开diolog
    showdiolog() {
      //一条数据直接赋值
      if (this.tableData.length == 1) {
        this.show = false;
        this.$emit("importClickEvent", this.tableData[0]);
        this.tableData = [];
      } else {
        this.show = true;
      }
      this.fetchTableData();
    },

    // 回车事件
    inputEnterEvent() {
      this.$api.ocompany.getdata(this.str).then(res => {
        if (res.data.total != 1) {
          this.fetchTableData();
          this.show = true;
          return;
        }
        this.$emit("inputEnterEvent", res.rows[0]);
      });
    },

    // 单击事件
    cellClickEvent(row) {
      this.clickrow = row.row;
    },

    // 双击事件
    cellDBLClickEvent(row) {
      this.show = false;
      this.$emit("cellDBLClickEvent", row.row);
    },

    // 选定操作
    importClickEvent() {
      if (this.clickrow.length == 0) {
        this.$message.warning("请先选中数据");
        return;
      }
      this.show = false;
      this.$emit("importClickEvent", this.clickrow);
    },
    // input值监听
    inputChangeEvent() {
      this.$emit("inputChangeEvent");
    }
  }
};
</script>