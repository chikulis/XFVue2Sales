<!-- 4206 -- 收款审核明细 -->
<template>
    <div class="container">
        <!-- 面包屑 -->
        <Breadcrumb></Breadcrumb>
        <div class="container2">
            <!-- 工具栏-->
            <el-row class="self-margin-down" :gutter="20">
                <ActionTool
                    :disTools="disTools"
                    :ifdistools="ifdistools"
                    @fetchTableData="fetchTableData(headerFormData.doccode)"
                    @Confirm="Confirm"
                    @cancelTableData="cancelTableData"
                    @Headerchange="Headerchange"
                ></ActionTool>
            </el-row>

            <!-- 表头信息 -->
            <template>
                <el-form
                    ref="headerFormData"
                    :model="headerFormData"
                    label-width="100px"
                    size="mini"
                    class="formDatastyle"
                    style="width: 85%"
                >
                    <el-tabs tab-position="bottom" type="border-card">
                        <el-tab-pane label="基本">
                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="单号" prop="doccode">
                                        <el-input disabled v-model="headerFormData.doccode"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="日期" prop="docdate">
                                        <el-date-picker
                                            v-model="headerFormData.docdate"
                                            style="width: 100%"
                                            type="date"
                                            value-format="yyyy-MM-dd"
                                        ></el-date-picker>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="单据类型" prop="doctype">
                                        <el-input disabled v-model="headerFormData.doctype"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="结算类型" prop="paymethod">
                                        <el-input disabled v-model="headerFormData.paymethod"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="公司编号" prop="companyid">
                                        <el-input disabled v-model="headerFormData.companyid"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="公司名称" prop="companyname">
                                        <el-input disabled v-model="headerFormData.companyname"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="销售组织编号" prop="orgid">
                                        <el-input disabled v-model="headerFormData.orgid"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="销售组织名称" prop="orgname">
                                        <el-input disabled v-model="headerFormData.orgname"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="往来方编号" prop="oppocompanyid">
                                        <el-input disabled v-model="headerFormData.oppocompanyid"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="往来方名称" prop="oppocompanyname">
                                        <el-input disabled v-model="headerFormData.oppocompanyname"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="往来类型" prop="objtype">
                                        <el-input disabled v-model="headerFormData.objtype"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="单据状态" prop="docstatus">
                                        <el-input disabled v-model="headerFormData.docstatus"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="资金账户编号" prop="cashcode">
                                        <el-input disabled v-model="headerFormData.cashcode"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="资金账户名称" prop="cashname">
                                        <el-input disabled v-model="headerFormData.cashname"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="币种编号" prop="hdcurrency">
                                        <el-input disabled v-model="headerFormData.hdcurrency"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="汇率" prop="hdexchange_rate">
                                        <el-input disabled v-model="headerFormData.hdexchange_rate"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-tab-pane>
                        <el-tab-pane label="结算条款">
                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="业务组编号" prop="sdgroup">
                                        <el-input disabled v-model="headerFormData.sdgroup"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="业务组名称" prop="sdgroupname">
                                        <el-input disabled v-model="headerFormData.sdgroupname"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="合同" prop="contractno">
                                        <el-input disabled v-model="headerFormData.contractno"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="工程" prop="projectno">
                                        <el-input disabled v-model="headerFormData.projectno"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="总金额" prop="summoney">
                                        <el-input disabled v-model="headerFormData.summoney"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="本币金额" prop="natsummoney">
                                        <el-input disabled v-model="headerFormData.natsummoney"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="引用单据" prop="refcode">
                                        <el-input disabled v-model="headerFormData.refcode"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="实际收款日期" prop="pricedate">
                                        <el-date-picker
                                            v-model="headerFormData.pricedate"
                                            style="width: 100%"
                                            type="date"
                                            value-format="yyyy-MM-dd"
                                        ></el-date-picker>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row :gutter="20">
                                <el-col :span="24">
                                    <el-form-item label="备注" prop="hdtext">
                                        <el-input disabled v-model="headerFormData.hdtext"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-tab-pane>
                    </el-tabs>
                </el-form>
            </template>

            <!-- 状态图片 -->
            <DocStatusImg :docstatus="headerFormData.docstatus"></DocStatusImg>

            <br />

            <!-- 表格数据-->
            <EditTable
                ref="table"
                :dataSource="tableData"
                :tableColumn="tableColumn"
                :pagination="commEntity.pagination"
                :options="commEntity.options"
                :fetch="fetchTableData"
                :showfooter="true"
                :operationstate="operationstate"
                :showindex="true"
                :footerMethod="footerMethod"
            ></EditTable>
        </div>

        <Dialog4201
            :dialog="docDialog.dialog"
            :hdData="headerFormData"
            @Refresh="refreshHeader(headerFormData.doccode)"
            v-if="docDialog.dialog.show"
        ></Dialog4201>

        <Dialog4203
            :dialog="docItemDialog.dialog"
            :headerFormData="headerFormData"
            :hdData="rowdata"
            @Refresh="fetchTableData(headerFormData.doccode)"
            v-if="docItemDialog.dialog.show"
        ></Dialog4203>
    </div>
</template>

<script>
import Dialog4201 from '@views/PriceDocManager/components/Dialog4201';
import Dialog4203 from '@views/PriceDocManager/components/Dialog4203';
import XEUtils from 'xe-utils';

export default {
    // 数据
    data() {
        return {
            // 通用数据
            commEntity: this.$api.identity.getCommEntity(),

            rowdata: null,

            // 主表实体
            headerFormData: {
                doccode: '',
                docdate: this.$moment().format('YYYY-MM-DD'),
                doctype: '收款单',
                paymethod: '',
                companyid: '',
                companyname: '',
                orgid: '',
                orgname: '',
                oppocompanyid: '',
                oppocompanyname: '',
                objtype: '客户',
                docstatus: 0,
                cashcode: '',
                cashname: '',
                hdcurrency: '',
                hdexchange_rate: 0,
                sdgroup: '',
                sdgroupname: '',
                contractno: '',
                projectno: '',
                summoney: 0,
                natsummoney: 0,
                refcode: '',
                pricedate: this.$moment().format('YYYY-MM-DD'),
                hdtext: '',
                entername: JSON.parse(localStorage.eleUser || '[]').username,
                modifyname: JSON.parse(localStorage.eleUser || '[]').username
            },

            // 修改实体
            // FormData: this.$api.slssalesorderitem.FormData(),

            // 表格字段
            tableColumn: [
                {
                    field: 'docitem',
                    title: '项次'
                },
                {
                    field: 'accountid',
                    title: '贷方科目编号',
                    edit: { name: 'input' }
                },
                {
                    field: 'accountname',
                    title: '贷方科目名称',
                    align: 'left',
                    edit: { name: 'input' }
                },
                {
                    field: 'resume',
                    title: '摘要',
                    edit: { name: 'input' }
                },
                {
                    field: 'money',
                    title: '金额',
                    edit: { name: 'input' }
                },
                {
                    field: 'natmoney',
                    title: '本币金额',
                    edit: { name: 'input' }
                },
                {
                    field: 'acctfullname',
                    title: '科目全称'
                },
                {
                    field: 'dtcurrency',
                    title: '币种',
                    edit: { name: 'input' }
                },
                {
                    field: 'dtexchange_rate',
                    title: '汇率'
                }
            ],

            // 表格数据
            tableData: [],

            // 表格操作栏状态
            operationstate: true,

            // 工具栏动态操作
            disTools: [
                {
                    name: 'Confirm',
                    value: false
                },
                {
                    name: 'cancelTableData',
                    value: true
                }
            ],

            // 是否启用按钮验证
            ifdistools: '',

            docDialog: this.$api.identity.getCommEntity(),
            docItemDialog: this.$api.identity.getCommEntity()
        };
    },

    // 加载完成
    created() {
        console.log(this.$route.params.multipleSelection);
        // 渲染表头数据
        if (this.$route.params.multipleSelection) {
            this.headerFormData = this.$route.params.multipleSelection;
            // 如果状态大于等于50，隐藏 新增，修改，确认
            if (this.headerFormData.docstatus >= 100) {
                this.ifdistools = 'true';
            }
            this.fetchTableData(this.headerFormData.doccode);
        }
    },
    // 引用组件
    components: {
        Dialog4201,
        Dialog4203
    },

    // 操作方法
    methods: {
        // 查询按钮
        fetchTableData(doccode) {
            this.refreshHeader(doccode);
            console.log(this.commEntity);
            this.rowdata = null;
            this.$api.fcashdocitem
                .getDataByDocCode(
                    this.commEntity.pagination.pageIndex,
                    this.commEntity.pagination.pageSize,
                    this.commEntity.sort,
                    this.commEntity.order,
                    doccode
                )
                .then((res) => {
                    this.tableData = res.rows;
                    this.commEntity.pagination.total = res.total;
                });
        },

        // 表尾合计
        footerMethod({ columns, data }) {
            return [
                columns.map((column, columnIndex) => {
                    if (columnIndex === 0) {
                        return '和值';
                    }
                    if (['money', 'natmoney'].includes(column.property)) {
                        return XEUtils.sum(data, column.property);
                    }
                    return null;
                })
            ];
        },

        // 确认按钮
        Confirm() {
            if (this.headerFormData.doccode == '') {
                this.$message.warning('单号为空，请检查是否为新单！');
                return;
            }
            if (this.headerFormData.blclosed != -1) {
                if (this.headerFormData.docstatus < 50) {
                    this.$message.warning('单据状态未确认，不能进行审核，请检查！');
                    return;
                }
            }
            if (this.headerFormData.docstatus >= 100) {
                this.$message.warning('单据状态已经确认，不能再进行确认，请检查！');
                return;
            }
            if (this.tableData.length == 0) {
                this.$message.warning('当前单据不存在明细数据，请检查！');
                return;
            }

            // 由于不能同时连续用两个confirm，第二个会覆盖掉第一个，只能把第二个提取出来封装重用，然后日期相同跟不修改日期，就调用封装方法就可以了
            if (!this.$moment().isSame(this.headerFormData.docdate, 'month')) {
                this.$confirm('当前单据日期不在本月中，是否不返回修改？', '单据日期检查')
                    .then(() => {
                        this.confirmOk();
                    })
                    .catch(() => {
                        return;
                    });
            } else {
                this.confirmOk();
            }
        },

        confirmOk() {
            this.$confirm('是否确认本单据？一旦确认，单据将无法进行修改！', '单据确认')
                .then(() => {
                    // 设定单据状态
                    const docstatus = 100;
                    this.$api.fcashdoc
                        .confirmDoc(this.headerFormData.doccode, JSON.parse(localStorage.eleUser || '[]').username, docstatus)
                        .then((res) => {
                            if (res.code == 200) {
                                this.headerFormData.docstatus = docstatus;
                                this.ifdistools = 'true';
                                this.$message.success('单据确认成功！');
                                return;
                            } else {
                                this.$message.warning('单据确认失败：' + res.message);
                                return;
                            }
                        });
                })
                .catch(() => {
                    return;
                });
        },

        // 取消按钮
        cancelTableData() {
            if (this.headerFormData.doccode == '') {
                this.$message.warning('单号为空，请检查是否为新单！');
                return;
            }
            if (this.headerFormData.docstatus < 100) {
                this.$message.warning('单据状态未确认，不能再进行冲销，请检查！');
                return;
            }
            if (this.headerFormData.docstatus > 100) {
                this.$message.warning('单据状态已经进行后续确认，不能再进行冲销，请检查！');
                return;
            }

            this.$api.fcashdoc
                .cancelConfirmDoc(this.headerFormData.doccode, JSON.parse(localStorage.eleUser || '[]').username)
                .then((res) => {
                    if (res.code == 200) {
                        if (res.total > 0) {
                            
                        } else {
                            this.$message.warning('冲销失败，请检查！');
                            return;
                        }
                    } else {
                        this.$message.warning('单据取消确认失败：' + res.message);
                        return;
                    }
                });
        },

        Headerchange() {
            this.$nextTick(() => {
                this.docDialog.dialog.options = 'update';
                this.docDialog.dialog.title = '修改';
                this.docDialog.dialog.show = true;
            });
        },

        refreshHeader(doccode) {
            this.$api.fcashdoc.getDataByDocCode(doccode).then((res) => {
                if (res.total > 0) {
                    this.headerFormData = res.rows[0];
                }
            });
        }
    }
};
</script>