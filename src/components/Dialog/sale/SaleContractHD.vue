<!-- 合同列表 组件 -->
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
        <el-dialog ref="dialogs" title="合同列表" append-to-body :visible.sync="show" :close-on-click-modal="false" width="80%">
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-form-item label="合同开始日期" prop="begindate">
                        <el-date-picker
                            v-model="searchform.begindate"
                            style="width: 100%"
                            type="date"
                            value-format="yyyy-MM-dd"
                            placeholder="请选择合同开始日期"
                        ></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="合同结束日期" prop="enddate">
                        <el-date-picker
                            v-model="searchform.enddate"
                            style="width: 100%"
                            type="date"
                            value-format="yyyy-MM-dd"
                            placeholder="请选择合同结束日期"
                        ></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="公司编号" prop="companyid">
                        <!-- 整合下面方法，fieldname为字段名称，用于区分 -->
                        <SaleCompany
                            ref="companyid"
                            :modelname="searchform.companyid"
                            fieldname="companyid"
                            placeholder="请输入公司编号"
                            :entertrue="false"
                            @selectData="searchformInputEnterEvent"
                            @inputChangeEvent="searchformInputChangeEvent"
                        ></SaleCompany>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="客户编号" prop="cltcode">
                        <!-- 整合下面方法，fieldname为字段名称，用于区分 -->
                        <SaleCltGeneral
                            ref="cltcode"
                            :modelname="searchform.cltcode"
                            fieldname="cltcode"
                            placeholder="请输入客户编号"
                            :entertrue="false"
                            @selectData="searchformInputEnterEvent"
                            @inputChangeEvent="searchformInputChangeEvent"
                        ></SaleCltGeneral>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-form-item label="结算方式编号" prop="settlemethodid">
                        <!-- 整合下面方法，fieldname为字段名称，用于区分 -->
                        <Gsettlemethod
                            ref="settlemethodid"
                            :modelname="searchform.settlemethodid"
                            fieldname="settlemethodid"
                            placeholder="请输入结算方式编号"
                            :entertrue="false"
                            @selectData="searchformInputEnterEvent"
                            @inputChangeEvent="searchformInputChangeEvent"
                        ></Gsettlemethod>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="结算方式名称" prop="settlemethodname">
                        <el-input
                            disabled
                            v-model="searchform.settlemethodname"
                            placeholder="请输入结算方式名称"
                            @input="fetchTableData"
                        ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="工程编号" prop="projectno">
                        <el-input v-model="searchform.projectno" placeholder="请输入工程编号" @input="fetchTableData"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="工程名称" prop="projectname">
                        <el-input v-model="searchform.projectname" placeholder="请输入工程名称" @input="fetchTableData"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-form-item label="功能号" prop="formid">
                        <el-input disabled v-model="searchform.formid" placeholder="请输入功能号" @input="fetchTableData"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="18">
                    <el-form-item label="筛选" prop="status">
                        <el-checkbox v-model="searchform.onlynew" label="只显示最新版本"></el-checkbox>
                        <el-checkbox v-model="searchform.showall" label="显示所有合同"></el-checkbox>
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
            searchform: this.getSearchFormData(),

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

    // 执行方法
    methods: {
        getSearchFormData() {
            return {
                begindate: this.$moment().subtract(3, 'y').format('YYYY-MM-DD'),
                enddate: this.$moment().format('YYYY-MM-DD'),
                companyid: JSON.parse(localStorage.eleUser || '[]').companyid,
                cltcode: '',
                settlemethodid: '',
                settlemethodname: '',
                projectno: '',
                projectname: '',
                formid: '',
                onlynew: true,
                showall: false,
                isservicedoc: false
            };
        },

        // 查询方法
        fetchTableData() {
            this.commEntity.options.loading = true;
            this.$api.salecontracthd
                .getDataLeftJoinSPriceListByPage(
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
                this.searchform = this.getSearchFormData();
                if (this.$refs.cltcode && this.$refs.cltcode.str != '') {
                    this.$refs.cltcode.str = '';
                }
                if (this.$refs.settlemethodid && this.$refs.settlemethodid.str != '') {
                    this.$refs.settlemethodid.str = '';
                }
                this.show = true;
                this.fetchTableData();
            }
        },

        // 回车事件
        inputEnterEvent() {
            this.$api.salecontracthd
                .getDataLeftJoinSPriceListByPage(
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
                case 'companyid':
                    this.$refs.companyid.str = data.row.companyid;
                    this.searchform.companyid = data.row.companyid;
                    break;
                case 'cltcode':
                    this.$refs.cltcode.str = data.row.cltcode;
                    this.searchform.cltcode = data.row.cltcode;
                    break;
                case 'settlemethodid':
                    this.$refs.settlemethodid.str = data.row.settlemethodid;
                    this.searchform.settlemethodid = data.row.settlemethodid;
                    this.searchform.settlemethodname = data.row.settlemethodname;
                    break;
            }
            this.fetchTableData();
        },
        // 监听客户编号input事件
        searchformInputChangeEvent(fieldname) {
            switch (fieldname) {
                case 'companyid':
                    this.searchform.companyid = '';
                    break;
                case 'cltcode':
                    this.searchform.cltcode = '';
                    break;
                case 'settlemethodid':
                    this.searchform.settlemethodid = '';
                    this.searchform.settlemethodname = '';
                    break;
            }
        }
    }
};
</script>