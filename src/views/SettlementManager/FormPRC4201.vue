<!-- 4201 -- 收款凭证 -->
<template>
    <div class="container">
        <!-- 面包屑 -->
        <Breadcrumb></Breadcrumb>

        <div class="container2">
            <!-- 工具栏 -->
            <el-row class="self-margin-down" :gutter="20">
                <ActionTool @fetchTableData="fetchTableData" @addTableData="addTableData"></ActionTool>
            </el-row>

            <template>
                <el-form label-width="100px" size="mini" class="formDatastyle">
                    <el-row :gutter="10">
                        <el-col :span="6">
                            <el-form-item label="凭证开始日期" prop="startdate">
                                <el-date-picker
                                    v-model="searchform.startdate"
                                    class="entertrue"
                                    style="width: 100%"
                                    type="date"
                                    value-format="yyyy-MM-dd"
                                ></el-date-picker>
                            </el-form-item>
                        </el-col>

                        <el-col :span="6">
                            <el-form-item label="凭证结束日期" prop="enddate">
                                <el-date-picker
                                    v-model="searchform.enddate"
                                    class="entertrue"
                                    style="width: 100%"
                                    type="date"
                                    value-format="yyyy-MM-dd"
                                ></el-date-picker>
                            </el-form-item>
                        </el-col>

                        <el-col :span="6">
                            <el-form-item label="公司代码" prop="companyid">
                                <Ocompany
                                    ref="ocompany"
                                    :modelname="searchform.companyid"
                                    @inputEnterEvent="inputEnterEvent1"
                                    @cellDBLClickEvent="inputEnterEvent1"
                                    @importClickEvent="inputEnterEvent1"
                                    @inputChangeEvent="inputChangeEvent1"
                                ></Ocompany>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="公司名称" prop="companyname">
                                <el-input v-model="searchform.companyname" disabled @keyup.enter.native="fetchTableData"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row :gutter="10">
                        <el-col :span="6">
                            <el-form-item label="客户编号" prop="cltcode">
                                <!-- <el-input v-model="searchform.cccode" @keyup.enter.native="fetchTableData"></el-input> -->
                                <Scltgeneral
                                    ref="scltgeneral"
                                    :modelname="searchform.cltcode"
                                    @inputEnterEvent="inputEnterEvent"
                                    @cellDBLClickEvent="inputEnterEvent"
                                    @importClickEvent="inputEnterEvent"
                                    @inputChangeEvent="inputChangeEvent"
                                ></Scltgeneral>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="客户名称" prop="cltname">
                                <el-input v-model="searchform.cltname" disabled @keyup.enter.native="fetchTableData"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="单据号" prop="doccode">
                                <el-input v-model="searchform.doccode" @keyup.enter.native="fetchTableData"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row :gutter="10">
                        <el-col :span="24">
                            <el-form-item label="筛选" prop="status">
                                <div style="padding-left: 20px; padding-top: 3px">
                                    <el-radio-group v-model="searchform.docstatus" @change="fetchTableData">
                                        <el-radio :label="0">本阶段</el-radio>
                                        <el-radio :label="0">未确定</el-radio>
                                        <el-radio :label="50">已确定</el-radio>
                                        <el-radio :label="100">未送达</el-radio>
                                        <el-radio :label="100">已处理</el-radio>
                                        <el-radio label>所有</el-radio>
                                    </el-radio-group>
                                    <el-divider direction="vertical"></el-divider>
                                    <span style="padding-left: 20px">
                                        <el-checkbox v-model="searchform.self" @change="fetchTableData" label="仅含自制单"></el-checkbox>
                                        <el-checkbox v-model="searchform.self" @change="fetchTableData" label="含未确认单据"></el-checkbox>
                                        <el-checkbox
                                            v-model="searchform.ifblscrap"
                                            @change="fetchTableData"
                                            label="隐藏作废单"
                                        ></el-checkbox>
                                    </span>
                                </div>
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
                @cellDBLClickEvent="cellDBLClickEvent"
            ></CommTable>
        </div>
        <!-- <Dialog2201 :dialog="commEntity.dialog" v-if="commEntity.dialog.show" @Refresh="fetchTableData"></Dialog2201> -->
    </div>
</template>

<script>
// import Dialog2201 from '@views/SalesDocManager/components/Dialog2201'; //引用 Dialog
export default {
    // 数据
    data() {
        return {
            commEntity: this.$api.identity.getCommEntity(),
            tableData: [],
            // 查询参数
            searchform: {
                startdate: this.$moment().subtract('days', 1).format('YYYY-MM-DD'),
                enddate: this.$moment().subtract('days', 0).format('YYYY-MM-DD'),
                companyid: '',
                companyname: '',
                cltcode: '',
                cltname: '',
                doccode:'',
                docstatus: '',
                // blscrap: '',
                // self: false,
                // ifblscrap: true
            },
            columns: [
                {
                    field: 'doccode',
                    title: '凭证单号',
                    width: 100
                },
                {
                    field: 'docdate',
                    title: '凭证日期',
                    width: 100
                },
                {
                    field: 'doctype',
                    title: '单据类型',
                    width: 100
                },
                {
                    field: 'pricedate',
                    title: '实际收款日期',
                    width: 100
                },
                {
                    field: 'formid',
                    title: '功能号',
                    width: 100
                },
                {
                    field: 'companyid',
                    title: '公司编号',
                    width: 90
                },
                {
                    field: 'companyname',
                    title: '公司名称',
                    width: 250,
                    align: 'left'
                },
                {
                    field: 'oppocompanyid',
                    title: '客户编号',
                    width: 90
                },
                {
                    field: 'oppocompanyname',
                    title: '客户名称',
                    width: 250,
                    align: 'left'
                },
                {
                    field: 'summoney',
                    title: '款项原币',
                    width: 100,
                    align: 'right'
                },
                {
                    field: 'natsummoney',
                    title: '款项本币',
                    width: 100,
                    align: 'right'
                },
                {
                    field: 'docstatus',
                    title: '单据状态',
                    render: (row, index) => {
                        if (row.docstatus == 0) {
                            return <span>保存中</span>;
                        } else if (row.docstatus == 50) {
                            return <span>已确认</span>;
                        } else if (row.docstatus == 100) {
                            return <span>已审核</span>;
                        }
                    },
                    width: 100
                },
                {
                    field: 'paymethod',
                    title: '结算类型',
                    width: 100
                },
                {
                    field: 'hdtext',
                    title: '备注',
                    width: 100
                },
                {
                    field: 'orgid',
                    title: '销区编号',
                    width: 100
                },
                {
                    field: 'orgname',
                    title: '销区名称',
                    width: 100
                },
                {
                    field: 'sdgroup',
                    title: '业务员编号',
                    width: 100
                },
                {
                    field: 'sdgroupname',
                    title: '业务员名称',
                    width: 100
                },
                {
                    field: 'hdcurrency',
                    title: '币种代码',
                    width: 100
                },
                {
                    field: 'hdcurrencyname',
                    title: '币种名称',
                    width: 100
                },
                {
                    field: 'hdexchange_rate',
                    title: '汇率',
                    width: 100
                },
                {
                    field: 'entername',
                    title: '制单人姓名',
                    width: 100
                },
                {
                    field: 'enterdate',
                    title: '制单日期',
                    width: 100
                },
                {
                    field: 'postname',
                    title: '过账人姓名',
                    width: 100
                },
                {
                    field: 'postdate',
                    title: '过账日期',
                    width: 100
                }
            ]
        };
    },

    components: {
        //创建Dilog
        // Dialog2201
    },

    // 操作方法
    methods: {
        // 查询按钮事件
        fetchTableData() {
            this.commEntity.options.loading = true;

            // this.searchform.blscrap = this.searchform.ifblscrap ? 'true' : 'false';

            this.$api.fcashdoc
                .getDataLeftJoinSPricelistByPage(
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
        // 表格双击事件
        cellDBLClickEvent(row) {
            this.$router.push({
                name: '211010',
                params: {
                    formid: 211010,
                    multipleSelection: row.row,
                    type: 'fetch'
                }
            });
        },

        // 新增按钮事件
        addTableData() {
            // this.$router.push({
            //   name: "211010",
            //   params: {
            //     formid: 211010,
            //     multipleSelection:null
            //   }
            // });
            this.commEntity.dialog.show = false;
            this.$nextTick(() => {
                this.commEntity.dialog.options = 'add';
                this.commEntity.dialog.title = '新增';
                this.commEntity.dialog.show = true;
            });
        },
        // 公司事件
        inputEnterEvent1(row) {
            this.$refs.ocompany.str = row.companyid;
            this.searchform.companyid = row.companyid;
            this.searchform.companyname = row.companyname;
        },
        // 监听input事件
        inputChangeEvent1() {
            this.searchform.companyid = '';
            this.searchform.companyname = '';
        },
        // 客户事件
        inputEnterEvent(row) {
            this.$refs.scltgeneral.str = row.cltcode;
            this.searchform.cltcode = row.cltcode;
            this.searchform.cltname = row.cltname;
        },
        // 监听input事件
        inputChangeEvent() {
            this.searchform.cltcode = '';
            this.searchform.cltname = '';
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