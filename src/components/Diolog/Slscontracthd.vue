<!-- 合同列表 组件 -->
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
        <el-dialog ref="dialogs" title="合同列表" append-to-body :visible.sync="show" :close-on-click-modal="false" width="80%">
            <el-row class="self-margin-down" :gutter="20">
                <ActionTool @fetchTableData="fetchTableData"></ActionTool>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-form-item label="合同日期(从)" prop="docBeginDate">
                        <el-date-picker
                            v-model="searchform.docBeginDate"
                            style="width: 100%"
                            type="date"
                            placeholder="请选择筛选开始日期"
                        ></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="合同日期(至)" prop="docEndDate">
                        <el-date-picker
                            v-model="searchform.docEndDate"
                            style="width: 100%"
                            type="date"
                            placeholder="请选择筛选结束日期"
                        ></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="公司编号" prop="companyId">
                        <!-- 整合下面方法，fieldname为字段名称，用于区分 -->
                        <Ocompany
                            ref="companyId"
                            :modelname="searchform.companyId"
                            :entertrue="false"
                            fieldname="companyId"
                            @inputEnterEvent="searchformInputEnterEvent"
                            @cellDBLClickEvent="searchformInputEnterEvent"
                            @importClickEvent="searchformInputEnterEvent"
                            @inputChangeEvent="searchformInputChangeEvent"
                        ></Ocompany>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="客户编号" prop="cltCode">
                        <!-- 整合下面方法，fieldname为字段名称，用于区分 -->
                        <Scltgeneral
                            ref="cltCode"
                            :modelname="searchform.cltCode"
                            :entertrue="false"
                            fieldname="cltCode"
                            @inputEnterEvent="searchformInputEnterEvent"
                            @cellDBLClickEvent="searchformInputEnterEvent"
                            @importClickEvent="searchformInputEnterEvent"
                        ></Scltgeneral>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-form-item label="结算方式编号" prop="settleMethodId">
                        <!-- 整合下面方法，fieldname为字段名称，用于区分 -->
                        <Gsettlemethod
                            ref="settleMethodId"
                            :modelname="searchform.settleMethodId"
                            :entertrue="false"
                            fieldname="settleMethodId"
                            @inputEnterEvent="searchformInputEnterEvent"
                            @cellDBLClickEvent="searchformInputEnterEvent"
                            @importClickEvent="searchformInputEnterEvent"
                        ></Gsettlemethod>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="结算方式名称" prop="settleMethodName">
                        <el-input disabled v-model="searchform.settleMethodName"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="筛选" prop="status">
                        <el-checkbox v-model="searchform.isNew" label="只显示最新版本"></el-checkbox>
                        <el-checkbox v-model="searchform.isAll" label="显示所有合同"></el-checkbox>
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
                docBeginDate: this.$moment().subtract(3, 'y').format('YYYY-MM-DD'),
                docEndDate: this.$moment().format('YYYY-MM-DD'),
                companyId: '',
                cltCode: '',
                settleMethodId: '',
                settleMethodName: '',
                isNew: false,
                isAll: false
            },

            // 表格字段
            tableColumn: [
                {
                    field: 'doccode',
                    title: '合同单号',
                    width: '100px'
                },
                {
                    field: 'doctype',
                    title: '合同类型',
                    width: '100px'
                },
                {
                    field: 'costatus',
                    title: '合同状态',
                    width: '100px'
                },
                {
                    field: 'docdate',
                    title: '合同日期',
                    width: '100px'
                },
                {
                    field: 'cltcode',
                    title: '客户编号',
                    width: '100px'
                },
                {
                    field: 'cltname',
                    title: '客户名称',
                    width: '100px'
                },
                {
                    field: 'projectname',
                    title: '项目名称',
                    width: '100px'
                },
                {
                    field: 'hdtext',
                    title: '备注',
                    width: '100px'
                },
                {
                    field: 'settlemethodid',
                    title: '结算方式编号',
                    width: '100px'
                },
                {
                    field: 'settlemethodname',
                    title: '结算方式名称',
                    width: '100px'
                },
                {
                    field: 'begindate',
                    title: '合同生效日',
                    width: '100px'
                },
                {
                    field: 'enddate',
                    title: '合同失效日',
                    width: '100px'
                },
                {
                    field: 'alpricemethod',
                    title: '铝锭取价',
                    width: '100px'
                },
                {
                    field: 'entername',
                    title: '录入人员姓名',
                    width: '100px'
                },
                {
                    field: 'enterdate',
                    title: '录入时间',
                    width: '100px'
                },
                {
                    field: 'postname',
                    title: '过账人员姓名',
                    width: '100px'
                },
                {
                    field: 'postdate',
                    title: '过账日期',
                    width: '100px'
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
        entertrue: { default: true },
        disable: { default: false }
    },

    // 创建完成
    created() {},

    // 执行方法
    methods: {
        // 查询方法
        fetchTableData() {
            this.commEntity.options.loading = true;
            //this.str 查询参数
            this.$api.slscontracthd
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
            this.$api.slscontracthd
                .getDataByPage(
                    this.commEntity.pagination.pageIndex,
                    this.commEntity.pagination.pageSize,
                    this.commEntity.sort,
                    this.commEntity.order,
                    this.searchform
                )
                .then((res) => {
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
                case 'companyId':
                    this.$refs.companyId.str = row.companyid;
                    this.searchform.companyId = row.companyid;
                    break;
                case 'cltCode':
                    this.$refs.cltCode.str = row.cltcode;
                    this.searchform.cltCode = row.cltcode;
                    break;
                // case 'cltCode':
                //     this.$refs.cltCode.str = row.cltCode;
                //     this.searchform.cltCode = row.cltCode;
                //     this.searchform.cltname = row.cltname;
                //     break;
            }
        },
        // 监听客户编号input事件
        searchformInputChangeEvent(fieldname) {
            switch (fieldname) {
                case 'companyId':
                    this.$refs.companyId.searchform.companyid = this.$refs.companyId.str;
                    break;
                case 'cltCode':
                    this.$refs.cltCode.searchform.CltCode = this.$refs.cltCode.str;
                    break;
            }
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