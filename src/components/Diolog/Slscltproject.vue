<!-- 客户项目列表 组件 -->
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
        <el-dialog ref="dialogs" title="客户项目列表" append-to-body :visible.sync="show" :close-on-click-modal="false" width="800px">
            <el-row :gutter="10">
                <el-col :span="8">
                    <el-form-item label="客户代码" prop="cltcode">
                        <!-- 整合下面方法，fieldname为字段名称，用于区分 -->
                        <Scltgeneral
                            ref="cltcode"
                            :modelname="searchform.cltcode"
                            fieldname="cltcode"
                            @inputEnterEvent="searchformInputEnterEvent"
                            @cellDBLClickEvent="searchformInputEnterEvent"
                            @importClickEvent="searchformInputEnterEvent"
                            @inputChangeEvent="searchformInputChangeEvent"
                        ></Scltgeneral>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="客户名称" prop="cltname">
                        <el-input disabled v-model="searchform.cltname"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="工程项目名称" prop="projectname">
                        <el-input v-model="searchform.projectname" @input="fetchTableData"></el-input>
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

            // 搜索
            searchform: {
                cltcode: this.cltcode,
                cltname: '',
                projectno: '',
                projectname: ''
            },

            // 表格字段
            tableColumn: [
                {
                    field: 'projectcode',
                    title: '工程项目编号'
                },
                {
                    field: 'projectname',
                    title: '工程项目名称'
                },
                {
                    field: 'cltcode',
                    title: '客户编号'
                },
                {
                    field: 'cltname',
                    title: '客户名称'
                },
                {
                    field: 'begindate',
                    title: '开始日期'
                },
                {
                    field: 'enddate',
                    title: '结束日期'
                },
                {
                    field: 'entername',
                    title: '输入人员姓名'
                },
                {
                    field: 'enterdate',
                    title: '输入日期'
                },
                {
                    field: 'memo',
                    title: '备注'
                }
            ],

            // 选中的数据
            clickrow: []
        };
    },

    // 传递参数
    props: {
        modelname: '',
        fieldname: '',
        cltcode: '',
        entertrue: { default: true },
        disable: { default: false }
    },

    // 创建完成
    created() {},

    // 执行方法
    methods: {
        asdasda() {
            console.log(this);
            if (this.$refs.cltcode.str == '') {
                this.$message.warning('请先输入客户信息');
                return false;
            } else {
                return true;
            }
        },

        // 查询方法
        fetchTableData() {
            // a = this.asdasda();
            if (!this.asdasda()) {
                return;
            }

            this.commEntity.options.loading = true;
            //this.str 查询参数
            this.$api.slscltproject
                .getDataByPage(
                    this.commEntity.pagination.pageIndex,
                    this.commEntity.pagination.pageSize,
                    this.commEntity.sort,
                    this.commEntity.order,
                    this.searchform
                )
                .then((res) => {
                    this.tableData = res.rows;
                    this.commEntity.pagination.total = res.total;
                    this.commEntity.options.loading = false;
                });
        },

        // 打开diolog
        showdiolog() {
            if (!this.disable) {
                // //一条数据直接赋值
                // if (this.tableData.length == 1) {
                //     this.show = false;
                //     this.$emit('importClickEvent', this.tableData[0]);
                //     this.tableData = [];
                // } else {
                    this.show = true;
                // }
                this.fetchTableData();
            }
        },

        // 回车事件
        inputEnterEvent() {
            this.$api.slscltproject
                .getDataByPage(
                    this.commEntity.pagination.pageIndex,
                    this.commEntity.pagination.pageSize,
                    this.commEntity.sort,
                    this.commEntity.order,
                    this.searchform
                )
                .then((res) => {
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
        },

        // 选择客户编号事件
        searchformInputEnterEvent(row, fieldname) {
            switch (fieldname) {
                case 'cltcode':
                    this.$refs.cltcode.str = row.cltcode;
                    this.searchform.cltcode = row.cltcode;
                    this.searchform.cltname = row.cltname;
                    break;
            }
            this.fetchTableData();
        },

        // 监听客户编号input事件
        searchformInputChangeEvent(fieldname) {
            this.$refs.cltcode.searchform.cltcode = '';
            this.$refs.cltcode.searchform.cltname = '';
            this.$refs.cltcode.searchform.parentcltcode = '';
            this.searchform.cltname = '';
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