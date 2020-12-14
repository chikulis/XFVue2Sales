<!-- 功能列表 -->
<template>
  <div class="container">
    <!--面包屑导航-->
    <Breadcrumb></Breadcrumb>
    <div class="container2">
      <!-- 工具栏 -->
      <el-row
        class="self-margin-down"
        :gutter="20"
      >
        <ActionTool @fetchTableData="fetchTableData"></ActionTool>
      </el-row>

      <template>
        <el-form
          label-width="100px"
          size="mini"
          class="formDatastyle"
        >
          <el-row :gutter="10">
            <el-col :span="6">
              <el-form-item
                label="公司代码"
                prop="companyid"
              >
                <el-input
                  v-model="searchform.companyid"
                  placeholder="请输入内容"
                  @input="fetchTableData"
                ></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="6">
              <el-form-item
                label="公司名称"
                prop="companyname"
              >
                <el-input
                  v-model="searchform.companyname"
                  placeholder="请输入内容"
                  @input="fetchTableData"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </template>
      <!-- 表格区域 -->
      <CommTable
        :tableColumn="columns"
        :dataSource="tableData"
        :options="commEntity.options"
        :fetch="fetchTableData"
        :pagination="commEntity.pagination"
        :showindex="true"
      ></CommTable>
    </div>
  </div>
</template>
  
  <script>
export default {
  // 数据
  data() {
    return {
      commEntity: this.$api.identity.getCommEntity(), // 通用数据

      tableData: [], //表格数据

      columns: [
        {
          field: "companyid",
          title: "公司代码",
          width: 100
        },
        {
          field: "parentsupplycompanyid",
          title: "父级公司",
          width: 100
        },
        {
          field: "companyname",
          title: "公司名称",
          align: "left",
          width: 300
        },
        {
          field: "aliasname",
          title: "公司简介",
          align: "left",
          width: 300
        }
      ],

      searchform: {
        companyid: "",
        companyname: ""
      }
    };
  },

  // 方法
  methods: {
    // search
    fetchTableData() {
      this.commEntity.options.loading = true;

      this.$api.ocompany.getdata(this.searchform.companyid).then(res => {
        var plength=0;
        if(res!=undefined)
        {
          plength=res.total;
          this.tableData = res.rows;
        }
        this.commEntity.pagination.total =plength;
        this.commEntity.options.loading = false;
      });
    }
  },

  //创建完成
  created: function () {
    this.fetchTableData();
  }
};
</script>
  
  <style scoped>
</style>