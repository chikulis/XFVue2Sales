<!-- 公司列表 组件 -->
<template>
    <div class="dialog">
        <!-- input框 -->
        <el-input
            :class="{ entertrue: isEntertrue }"
            :disabled="isDisable"
            v-model="str"
            @keyup.enter.native="inputEnterEvent"
            @input="inputChangeEvent"
        >
            <i
                slot="suffix"
                @click="showdiolog"
                style="font-weight: bold; color: rgb(143, 142, 142)"
                class="el-input__icon el-icon-search"
            ></i>
        </el-input>
        <!-- dialog组件 -->
        <el-dialog ref="dialogs" title="公司列表" append-to-body :visible.sync="show" :close-on-click-modal="false" width="800px">
            <el-row :gutter="10">
                <el-col :span="9">
                    <el-form-item label="公司代码" prop="companyid">
                        <el-input v-model="searchform.companyid" @input="fetchTableData"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="9">
                    <el-form-item label="公司名称" prop="companyname">
                        <el-input v-model="searchform.companyname" @input="fetchTableData"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

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
            <div style="margin-bottom: 50px; margin-top: 20px">
                <el-button type="primary" style="float: right; margin-right: 0px" size="mini" @click="importClickEvent">选定</el-button>
                <el-button type="info" style="float: right; margin-right: 20px" @click="show = false" size="mini">关闭</el-button>
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

            tablePage: {
                currentPage: 1,
                pageSize: 10,
                total: 0
            },

            //搜索
            searchform: {
                companyid: '',
                companyname: '',
            },

            // 表格字段
            tableColumn: [
                { field: 'companyid', title: '公司代码' },
                { field: 'companyname', title: '公司名称' }
            ],

            // 选中的数据
            clickrow: []
        };
    },

    // 传递参数
    props: {
        modelname: '',
        fieldname: '',
        entertrue: { default: true },
        disable: { default: false }
    },

    // 创建完成
    created() {
        this.fetchTableData();
    },

    // 执行方法
    methods: {
        // 查询方法
        fetchTableData() {
            console.log(this.commEntity.pagination);
            this.commEntity.options.loading = true;
            //this.str 查询参数
            this.$api.ocompany.getData(this.searchform).then((res) => {
                this.tableData = res.rows;
                this.commEntity.pagination.total = res.total;
                this.commEntity.options.loading = false;
            });
        },

        // 打开diolog
        showdiolog() {
            if (!this.disable) {
                //一条数据直接赋值
                if (this.tableData.length == 1) {
                    this.show = false;
                    this.$emit('importClickEvent', this.tableData[0]);
                    this.tableData = [];
                } else {
                    this.show = true;
                }
                this.fetchTableData();
            }
        },

        // 回车事件
        inputEnterEvent() {
            this.$api.ocompany.getData(this.searchform).then((res) => {
                this.tableData = res.rows;
                this.commEntity.pagination.total = res.total;
                this.commEntity.options.loading = false;
                if (res.total != 1) {
                    this.show = true;
                    return;
                }
                this.$emit('inputEnterEvent', res.rows[0], this.fieldname);
            });
        },

        // 单击事件
        cellClickEvent(row) {
            this.clickrow = row.row;
        },

        // 双击事件
        cellDBLClickEvent(row) {
            this.show = false;
            this.$emit('cellDBLClickEvent', row.row, this.fieldname);
        },

        // 选定操作
        importClickEvent() {
            if (this.clickrow.length == 0) {
                this.$message.warning('请先选中数据');
                return;
            }
            this.show = false;
            this.$emit('importClickEvent', this.clickrow, this.fieldname);
        },
        // input值监听
        inputChangeEvent() {
            this.$emit('inputChangeEvent', this.fieldname);
        }
    },
    computed: {
        isEntertrue() {
            return this.entertrue;
        },
        isDisable() {
            return this.disable;
        }
    }
};
</script>