<!-- 4001 -- 在途款 -->
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
                            <el-form-item label="公司编号" prop="companyid">
                                <PrcCompany
                                    ref="companyid"
                                    :modelname="searchform.companyid"
                                    fieldname="companyid"
                                    :entertrue="false"
                                    @selectData="inputEnterEvent"
                                    @inputChangeEvent="inputChangeEvent"
                                ></PrcCompany>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="客户编号" prop="oppocompanyid">
                                <el-input v-model="searchform.oppocompanyid" @keyup.enter.native="fetchTableData"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row :gutter="10">
                        <el-col :span="6">
                            <el-form-item label="单据号" prop="doccode">
                                <el-input v-model="searchform.doccode" @keyup.enter.native="fetchTableData"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="单据状态" prop="docstatus">
                                <el-input v-model="searchform.docstatus" @keyup.enter.native="fetchTableData"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="销售金额" prop="amount">
                                <el-input v-model="searchform.amount" @keyup.enter.native="fetchTableData"></el-input>
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
                                        <el-checkbox
                                            v-model="searchform.ispayflag"
                                            @change="fetchTableData"
                                            label="隐藏取消在途"
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
                :showfooter="true"
                @cellClickEvent="cellClickEvent"
                @cellDBLClickEvent="cellDBLClickEvent"
                :footerMethod="footerMethod"
            ></CommTable>
        </div>

        <Dialog4001 :dialog="commEntity.dialog" :hdData="rowdata" @Refresh="fetchTableData" v-if="commEntity.dialog.show"></Dialog4001>
    </div>
</template>

<script>
import Dialog4001 from '@views/PriceDocManager/components/Dialog4001'; // 引用 Dialog
import XEUtils from 'xe-utils';

export default {
    // 数据
    data() {
        return {
            commEntity: this.$api.identity.getCommEntity(),

            rowdata: null,

            tableData: [],

            // 查询参数
            searchform: {
                startdate: this.$moment('2020-05-01').subtract('days', 0).format('YYYY-MM-DD'),
                enddate: this.$moment().subtract('days', 0).format('YYYY-MM-DD'),
                companyid: '',
                oppocompanyid: '',
                doccode: '',
                docstatus: '',
                amount: '',
                statusindex: '',
                isselfmade: false,
                isunconfirmed: false,
                isblscrap: true,
                ispayflag: true,
                usercode: JSON.parse(localStorage.eleUser || '[]').usercode,
                username: JSON.parse(localStorage.eleUser || '[]').username
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
                    field: 'amount',
                    title: '销售金额',
                    width: 100,
                    align: 'right'
                },
                {
                    field: 'payflag',
                    title: '视为到款',
                    width: 100
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
                },
                {
                    field: 'paymethod',
                    title: '结算类型',
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
                    title: '业务员姓名',
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
                    title: '币种汇率',
                    width: 100,
                    align: 'right'
                },
                {
                    field: 'cccode',
                    title: '收款部门编号',
                    width: 100
                },
                {
                    field: 'ccname',
                    title: '收款部门名称',
                    width: 100
                },
                {
                    field: 'blscrap',
                    title: '是否作废',
                    width: 100
                },
                {
                    field: 'blclosed',
                    title: '是否冲销',
                    width: 100
                },
                {
                    field: 'hdtext',
                    title: '备注',
                    width: 150
                },
                {
                    field: 'linkdoccode',
                    title: '收款单号',
                    width: 100
                },
                {
                    field: 'canceldate',
                    title: '取消在途时间',
                    width: 100
                }
            ]
        };
    },

    components: {
        // 创建Dilog
        Dialog4001
    },

    // 操作方法
    methods: {
        // 表尾合计
        footerMethod({ columns, data }) {
            return [
                columns.map((column, columnIndex) => {
                    if (columnIndex === 0) {
                        return '和值';
                    }
                    if (['amount'].includes(column.property)) {
                        return XEUtils.sum(data, column.property);
                    }
                    return null;
                })
            ];
        },

        // 查询按钮事件
        fetchTableData() {
            console.log(this.$route.name);
            this.commEntity.options.loading = true;
            this.$api.fcashdoc
                .getDataOfByPage(
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
            this.$nextTick(() => {
                this.commEntity.dialog.options = 'update';
                this.commEntity.dialog.title = '修改';
                this.commEntity.dialog.show = true;
            });
        },

        // 新增按钮事件
        addTableData() {
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

        // 客户事件
        inputEnterEvent(data) {
            switch (data.fieldname) {
                case 'companyid':
                    this.$refs.companyid.str = data.row.companyid;
                    this.searchform.companyid = data.row.companyid;
                    break;
            }
        },

        // 监听input事件
        inputChangeEvent() {
            this.searchform.companyid = '';
        }
    },

    // 创建完成
    created: function () {
        this.fetchTableData();
    }
};
</script>

<style scoped>
</style>