<!-- 机型资料 组件 -->
<template>
  <div class="dialog">
    <!-- input框 -->
    <el-input
      class="entertrue"
      v-model="str"
      @keyup.enter.native="inputEnterEvent"
      @input="inputChangeEvent"
    >
      <i
        slot="suffix"
        @click="showdiolog"
        style="font-weight: bold;color:rgb(143, 142, 142);"
        class="el-input__icon el-icon-search"
      ></i>
    </el-input>
    <!-- dialog组件 -->
    <el-dialog
      ref="dialogs"
      title="机型资料列表"
      append-to-body
      :visible.sync="show"
      :close-on-click-modal="false"
      width="45%"
    >
      <div style="margin-top: -20px;">
        <el-button
          type="primary"
          size="mini"
          icon="el-icon-eleme"
          @click="fetchTableData"
        >查询</el-button>
        <el-button
          type="primary"
          size="mini"
          @click="importClickEvent"
          icon="el-icon-thumb"
        >选定</el-button>
        <el-button
          type="info"
          icon="
          el-icon-switch-button"
          @click="show = false"
          size="mini"
        >关闭</el-button>
      </div>
      <!-- 查询区域 -->
      <el-form
        :show-message="false"
        label-width="100px"
        size="mini"
        class="formDatastyle"
      >
        <el-row :gutter="20">
          <el-col :span="9">
            <el-form-item
              label="机型代码："
              prop="searchform.machtype"
            >
              <el-input v-model="searchform.machtype"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="9">
            <el-form-item
              label="机型名称："
              prop="searchform.machtypename"
            >
              <el-input v-model="searchform.machtypename"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

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
        { field: "machtype", width: 230, title: "机型代码" },
        { field: "machtypename", width: 250, title: "机型名称" }
      ],
      searchform: {
        machtype: "",
        machtypename: ""
      },
      // 选中的数据
      clickrow: []
    };
  },

  // 传递参数
  props: {
    modelname: ""
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
      this.$api.basedata.getmdmachtype(this.searchform.machtype).then(res => {
        this.tableData = res.data.rows;
        this.commEntity.pagination.total = res.data.total;
        this.commEntity.options.loading = false;
      });
    },

    // 打开diolog
    showdiolog() {
      //一条数据直接赋值
      if (this.tableData.length <= 1) {
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
      this.$api.basedata.getmdmachtype(this.searchform.machtype).then(res => {
        if (res.data.total != 1) {
          this.fetchTableData();
          this.show = true;
          return;
        }
        this.$emit("inputEnterEvent", res.data.rows[0]);
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