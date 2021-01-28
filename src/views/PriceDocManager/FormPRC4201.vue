<!-- 4201 -- 收款凭证 -->
<template>
    <div class="container">
        <!-- 面包屑 -->
        <Breadcrumb></Breadcrumb>

        <div class="container2">
            <!-- 工具栏 -->
            <el-row class="self-margin-down" :gutter="20">
                <ActionTool @addTableData="addTableData" @aleTableData="aleTableData" @fetchTableData="fetchTableData"></ActionTool>
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
                            <el-form-item label="客户编号" prop="oppocompanyid">
                                <!-- <el-input v-model="searchform.cccode" @keyup.enter.native="fetchTableData"></el-input> -->
                                <Scltgeneral
                                    ref="scltgeneral"
                                    :modelname="searchform.oppocompanyid"
                                    @inputEnterEvent="inputEnterEvent"
                                    @cellDBLClickEvent="inputEnterEvent"
                                    @importClickEvent="inputEnterEvent"
                                    @inputChangeEvent="inputChangeEvent"
                                ></Scltgeneral>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="客户名称" prop="oppocompanyname">
                                <el-input v-model="searchform.oppocompanyname" disabled @keyup.enter.native="fetchTableData"></el-input>
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
                                    <el-radio-group v-model="searchform.statusindex" @change="fetchTableData">
                                        <el-radio :label="0">本阶段</el-radio>
                                        <el-radio :label="1">未确定</el-radio>
                                        <el-radio :label="2">已确定</el-radio>
                                        <el-radio :label="3">未送达</el-radio>
                                        <el-radio :label="4">已处理</el-radio>
                                        <el-radio label>所有</el-radio>
                                    </el-radio-group>
                                    <el-divider direction="vertical"></el-divider>
                                    <span style="padding-left: 20px">
                                        <el-checkbox
                                            v-model="searchform.isselfmade"
                                            @change="fetchTableData"
                                            label="仅含自制单"
                                        ></el-checkbox>
                                        <el-checkbox
                                            v-model="searchform.isunconfirmed"
                                            @change="fetchTableData"
                                            label="含未确认单据"
                                        ></el-checkbox>
                                        <el-checkbox
                                            v-model="searchform.isblscrap"
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
                @cellClickEvent="cellClickEvent"
                @cellDBLClickEvent="cellDBLClickEvent"
            ></CommTable>
        </div>

        <Dialog4201 :dialog="commEntity.dialog" :hdData="rowdata" @Refresh="fetchTableData" v-if="commEntity.dialog.show"></Dialog4201>
    </div>
</template>

<script>
import Dialog4201 from '@views/PriceDocManager/components/Dialog4201'; //引用 Dialog
export default {
    // 数据
    data() {
        return {
            commEntity: this.$api.identity.getCommEntity(),

            rowdata: null,

            tableData: [],

            // 查询参数
            searchform: {
                startdate: this.$moment().subtract('days', 1).format('YYYY-MM-DD'),
                enddate: this.$moment().subtract('days', 0).format('YYYY-MM-DD'),
                companyid: '',
                companyname: '',
                oppocompanyid: '',
                oppocompanyname: '',
                doccode: '',
                statusindex: '',
                isselfmade: false,
                isunconfirmed: false,
                isblscrap: true
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
                    title: '币种编号',
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
        Dialog4201
    },

    // 操作方法
    methods: {
        // 查询按钮事件
        fetchTableData() {
            this.commEntity.options.loading = true;

            // this.searchform.blscrap = this.searchform.ifblscrap ? 'true' : 'false';

            this.$api.fcashdoc
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

        // 点击行事件
        cellClickEvent(row) {
            this.rowdata = row.row;
        },

        // 表格双击事件
        cellDBLClickEvent(row) {
            this.$router.push({
                name: '565020',
                params: {
                    formid: 565020,
                    multipleSelection: row.row,
                    type: 'fetch'
                }
            });
        },

        // 新增按钮事件
        addTableData() {
            this.commEntity.dialog.show = false;
            this.$nextTick(() => {
                this.commEntity.dialog.options = 'add';
                this.commEntity.dialog.title = '新增';
                this.commEntity.dialog.show = true;
            });
        },

        // 修改按钮事件
        aleTableData() {
            if (this.rowdata == null) {
                this.$message.warning('请选中数据');
                return;
            }
            this.$nextTick(() => {
                this.commEntity.dialog.options = 'update';
                this.commEntity.dialog.title = '修改';
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
            this.searchform.oppocompanyid = row.cltcode;
            this.searchform.oppocompanyname = row.cltname;
        },

        // 监听input事件
        inputChangeEvent() {
            this.searchform.oppocompanyid = '';
            this.searchform.oppocompanyname = '';
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