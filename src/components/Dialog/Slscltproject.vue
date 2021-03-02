<!-- 客户项目列表 组件 -->
<template>
    <div class="dialog">
        <!-- input框 -->
        <el-input
            :class="{ entertrue: entertrue }"
            :disabled="disable"
            v-model="str"
            @keyup.enter.native="inputEnterEvent"
            @input="inputChangeEvent"
            :placeholder="placeholder"
        >
            <i
                slot="suffix"
                @click="showdiolog"
                style="font-weight: bold; color: rgb(143, 142, 142)"
                class="el-input__icon el-icon-search"
            ></i>
        </el-input>
        <!-- dialog组件 -->
        <el-dialog
            ref="dialogs"
            title="客户项目列表"
            append-to-body
            :visible.sync="show"
            :close-on-click-modal="false"
            @opened="handleOpened"
            width="70%"
        >
            <el-row :gutter="10">
                <el-col :span="8">
                    <el-form-item label="客户编号" prop="cltcode">
                        <!-- 整合下面方法，fieldname为字段名称，用于区分 -->
                        <SaleCltGeneral
                            ref="cltcode"
                            :modelname="searchform.cltcode"
                            fieldname="cltcode"
                            placeholder="请输入客户编号"
                            @selectData="searchformInputEnterEvent"
                            @inputChangeEvent="searchformInputChangeEvent"
                        ></SaleCltGeneral>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="客户名称" prop="cltname">
                        <el-input disabled v-model="searchform.cltname" placeholder="请输入客户名称"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="工程项目名称" prop="projectname">
                        <el-input v-model="searchform.projectname" placeholder="请输入工程项目名称" @input="fetchTableData"></el-input>
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
                cltcode: '',
                cltname: '',
                projectcode: '',
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
        modelname: String,
        fieldname: String,
        placeholder: String,
        //是否必填
        entertrue: { type: Boolean, default: true },
        //是否禁用
        disable: { type: Boolean, default: false }
    },

    // 创建完成
    created() {},

    watch: {
        //对seachform.clrcode进行监听，以便修改组件里已经初始化的str
        'searchform.cltcode'(newVal) {
            this.$refs.cltcode.str = newVal;
        }
    },

    // 执行方法
    methods: {
        // dialogs动画结束时查询
        handleOpened() {
            this.fetchTableData();
        },

        // 查询方法
        fetchTableData() {
            if (this.searchform.cltcode == '') {
                // 清空列表
                this.tableData = [];
                this.$message.warning('请先输入客户信息');
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
                for (var item in this.searchform) {
                    this.searchform[item] = '';
                }
                this.$emit('getSearchValue', this.fieldname);
                this.show = true;
                // 由于查询中判断弹message处于dialogs动画前，所以改为动画结束时再查询
                // this.fetchTableData();
            }
        },

        // 回车事件
        inputEnterEvent() {
            this.$emit('getSearchValue', this.fieldname);
            if (this.searchform.cltcode == '') {
                this.$message.warning('请先输入客户信息！');
                return;
            }
            this.searchform.projectcode = this.str;
            this.$api.slscltproject
                .getDataByPage(
                    this.commEntity.pagination.pageIndex,
                    this.commEntity.pagination.pageSize,
                    this.commEntity.sort,
                    this.commEntity.order,
                    this.searchform
                )
                .then((res) => {
                    if (res.total != 1) {
                        this.tableData = res.rows;
                        this.commEntity.pagination.total = res.total;
                        this.commEntity.options.loading = false;
                        this.show = true;
                        return;
                    }
                    this.$emit('selectData', { row: res.rows[0], fieldname: this.fieldname });
                });
        },

        // 单击事件
        cellClickEvent(row) {
            this.clickrow = row.row;
        },

        // 双击事件
        cellDBLClickEvent(row) {
            this.show = false;
            this.$emit('selectData', { row: row.row, fieldname: this.fieldname });
        },

        // 选定操作
        importClickEvent() {
            if (this.clickrow.length == 0) {
                this.$message.warning('请先选中数据');
                return;
            }
            this.show = false;
            this.$emit('selectData', { row: this.clickrow, fieldname: this.fieldname });
        },

        // input值监听
        inputChangeEvent() {
            this.$emit('inputChangeEvent', this.fieldname);
        },

        // 选择客户编号事件
        searchformInputEnterEvent(data) {
            switch (data.fieldname) {
                case 'cltcode':
                    this.$refs.cltcode.str = data.row.cltcode;
                    this.searchform.cltcode = data.row.cltcode;
                    this.searchform.cltname = data.row.cltname;
                    break;
            }
            this.fetchTableData();
        },

        // 监听客户编号input事件
        searchformInputChangeEvent(fieldname) {
            switch (fieldname) {
                case 'cltcode':
                    this.searchform.cltcode = '';
                    this.searchform.cltname = '';
                    break;
            }
        }
    }
};
</script>