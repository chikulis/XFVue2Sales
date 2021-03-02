<!-- 4203 -- 收款凭证明细 -->
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
                    @addTableData="addTableData"
                    @aleTableData="aleTableData"
                    @delTableData="delTableData"
                    @fetchTableData="fetchTableData(headerFormData.doccode)"
                    @okTableData="okTableData"
                    @freeTableData="freeTableData"
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
                                            value-format="yyyy-MM-dd"
                                            style="width: 100%"
                                            type="date"
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
                                        <el-date-picker v-model="headerFormData.pricedate" style="width: 100%" type="date"></el-date-picker>
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
                @cellClickEvent="cellClickEvent"
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

            // 验证规则
            validrules: {
                matcode: [
                    {
                        required: true,
                        message: '物料编码不能为空',
                        trigger: 'blur'
                    }
                ],
                matname: [
                    {
                        required: true,
                        message: '物料名称不能为空',
                        trigger: 'blur'
                    }
                ],
                matgroup: [
                    {
                        required: true,
                        message: '物料组不能为空',
                        trigger: 'blur'
                    }
                ],
                digit: [
                    {
                        required: true,
                        message: '订单支数不能为空',
                        trigger: 'blur'
                    }
                ],

                cv1: [
                    {
                        required: true,
                        message: '颜色不能为空',
                        trigger: 'blur'
                    }
                ],
                cv1name: [
                    {
                        required: true,
                        message: '颜色名称不能为空',
                        trigger: 'blur'
                    }
                ],
                planddate: [
                    {
                        required: true,
                        message: '计划交期不能为空',
                        trigger: 'blur'
                    }
                ]
            },

            // 工具栏动态操作
            disTools: [
                {
                    name: 'BackTo',
                    value: true
                },
                {
                    name: 'okTableData',
                    value: false
                },
                {
                    name: 'cancelTableData',
                    value: true
                },
                {
                    name: 'addTableData',
                    value: false
                },
                {
                    name: 'exportFrom',
                    value: false
                },
                {
                    name: 'delTableData',
                    value: false
                },
                {
                    name: 'saveRowEvent',
                    value: false
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
        console.log(this.$route.params);
        // 渲染表头数据
        if (this.$route.params.multipleSelection) {
            this.headerFormData = this.$route.params.multipleSelection;
            // 如果状态大于等于50，隐藏 新增，修改，确认
            if (this.headerFormData.docstatus >= 50) {
                this.ifdistools = 'true';
            }
            this.fetchTableData(this.headerFormData.doccode);
        }
    },

    // // 组件重用，如果不要重用，请将watch注释掉，查询方法跟表格双击方法按需注释，数据库里收款审核改回FormPRC4205
    // watch: {
    //     // 路由名称监听
    //     '$route.name': function () {
    //         // 修改顶头导航
    //         this.$children[0].getFomridMessage(this.$route.name);
    //         // 修改顶部按钮
    //         this.$children[1].$children[0].getToolAction();
    //         // 重新执行查询
    //         // this.fetchTableData();
    //     }
    // },

    // 引用组件
    components: {
        Dialog4201,
        Dialog4203
    },

    // 操作方法
    methods: {
        // // 返回按钮
        // BackTo() {
        //     this.$router.push({
        //         name: '2002',
        //         params: {
        //             formid: 2002
        //         }
        //     });
        // },

        // 查询按钮
        fetchTableData(doccode) {
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

        // splitNum(num, n, symbol) {
        //     if (!num) throw new Error('splitNum需要传入一个待转换的数据');
        //     if (typeof num !== 'number') throw new TypeError('num参数应该是一个number类型');
        //     if (n < 0) throw new Error('参数n不应该小于0');
        //     var hasDot = parseInt(num) != num; //这里检测num是否为小数，true表示小数
        //     var m = n != undefined && n != null ? n : 1;
        //     num = m == 0 ? num.toFixed(m) + '.' : hasDot ? (n ? num.toFixed(n) : num) : num.toFixed(m);
        //     symbol = symbol || ',';
        //     num = num.toString().replace(/(\d)(?=(\d{3})+\.)/g, function (match, p1, p2) {
        //         return p1 + symbol;
        //     });
        //     if (n == 0 || (!hasDot && !n)) {
        //         //如果n为0或者传入的num是整数并且没有指定整数的保留位数，则去掉前面操作中的小数位
        //         num = num.substring(0, num.indexOf('.'));
        //     }
        //     return num;
        // },

        // 点击行事件
        cellClickEvent(row) {
            this.rowdata = row.row;
        },

        addTableData() {
            if (this.headerFormData.doccode == null || this.headerFormData.doccode == '') {
                this.$message.warning('请生成单据 才能添加');
            } else {
                // this.$refs.table.insertEvent();
                this.$nextTick(() => {
                    this.docItemDialog.dialog.options = 'add';
                    this.docItemDialog.dialog.title = '新增';
                    this.docItemDialog.dialog.show = true;
                });
            }
        },

        aleTableData() {
            if (this.rowdata == null) {
                this.$message.warning('请选中数据');
                return;
            }
            this.$nextTick(() => {
                this.docItemDialog.dialog.options = 'update';
                this.docItemDialog.dialog.title = '修改';
                this.docItemDialog.dialog.show = true;
            });
        },

        // // 修改明细按钮
        // saveRowEvent(row) {
        //     console.log('111111111111');
        //     if (row.type == 'update') {
        //         this.$api.fcashdocitem
        //             .saveData(row.row)
        //             .then((res) => {
        //                 // if (res.data.code == 200) {
        //                 //     this.$message.success('修改成功');
        //                 //     this.fetchTableData(row.row.doccode);
        //                 //     return;
        //                 // } else {
        //                 //     this.$message.warning('修改失败：' + res.data.message);
        //                 //     this.fetchTableData(row.row.doccode);
        //                 //     return;
        //                 //     this.form.console.warn('hes');
        //                 // }
        //             })
        //             .catch(function (error) {
        //                 this.$message.success('修改出错：' + error);
        //                 console.log(error);
        //             });
        //         return;
        //     } else if (row.type == 'add') {
        //         if (this.headerFormData.doccode != '' && this.headerFormData.doccode != null) {
        //             this.$api.slssalesorderitem
        //                 .add(this.headerFormData.doccode, row.row)
        //                 .then((res) => {
        //                     this.$message.success('新增成功');
        //                     this.fetchTableData(this.headerFormData.doccode);
        //                 })
        //                 .catch(function (error) {
        //                     this.$message.success('新增出错：' + error);
        //                     console.log(error);
        //                 });
        //         } else {
        //             this.$message.warning('请生成单据');
        //         }
        //     }
        // },

        // 删除明细按钮
        delTableData() {
            if (this.rowdata == null) {
                this.$message.warning('请选中数据');
                return;
            } else {
                this.$confirm('是否删除当前记录？一旦删除，单据记录将无法进行恢复！', '单据记录删除').then(() => {
                    this.$api.fcashdocitem.deleteData(this.rowdata.doccode, this.rowdata.rowid).then((res) => {
                        if (res.code == 200) {
                            this.$message.success('记录删除成功');
                            this.fetchTableData(this.headerFormData.doccode);
                            return;
                        } else {
                            this.$message.warning('删除失败：' + res.message);
                            return;
                        }
                    });
                });
            }
        },

        // 确认按钮
        okTableData() {
            if (this.headerFormData.doccode == '') {
                this.$message.warning('单号为空，请检查是否为新单！');
                return;
            }
            if (this.headerFormData.docstatus >= 50) {
                this.$message.warning('单据状态已经确认，不能再进行确认，请检查！');
                return;
            }
            if (this.tableData.length == 0) {
                this.$message.warning('当前单据不存在明细数据，请检查！');
                return;
            }
            if (this.headerFormData.blscrap == 1) {
                this.$message.warning('当前单据已经作废，请检查！');
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
                    const docstatus = 50;
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

        freeTableData() {
            if (this.headerFormData.docstatus >= 50) {
                this.$message.warning('当前单据已经确认，无法保存，请先检查！');
                return;
            }
            if (this.headerFormData.blscrap == 1) {
                this.$message.warning('当前单据已经作废，请检查！');
                return;
            }
            this.$confirm('是否作废本单据？一旦作废，单据将不可以进行修改！', '单据取消作废')
                .then(() => {
                    this.$api.fcashdoc.blscrapDoc(this.headerFormData.doccode).then((res) => {
                        if (res.code == 200) {
                            this.headerFormData.blscrap = 1;
                            this.ifdistools = '';
                            this.$message.success('单据作废成功！');
                            return;
                        } else {
                            this.$message.warning('单据作废失败：' + res.message);
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
            if (this.headerFormData.docstatus < 50) {
                this.$message.warning('单据状态未确认，不能再进行取消确认，请检查！');
                return;
            }
            if (this.headerFormData.docstatus > 50) {
                this.$message.warning('单据状态已经进行后续确认，不能再进行取消确认，请检查！');
                return;
            }
            this.$confirm('是否取消确认本单据？', '单据确认')
                .then(() => {
                    this.$api.fcashdoc
                        .cancelConfirmDoc(this.headerFormData.doccode, JSON.parse(localStorage.eleUser || '[]').username)
                        .then((res) => {
                            if (res.code == 200) {
                                this.headerFormData.docstatus = 0;
                                this.ifdistools = 'false';
                                this.$message.success('单据取消确认成功！');
                                return;
                            } else {
                                this.$message.warning('单据取消确认失败：' + res.message);
                                return;
                            }
                        });
                })
                .catch(() => {
                    return;
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

        // //保存表头
        // savTableData() {
        //     this.$api.slssalesorderhd
        //         .save(this.addFormData)
        //         .then((res) => {
        //             // if (res.status == 201) {
        //             //   // this.$message.success("保存成功");
        //             //  this.addFormData=res.data;
        //             if (res != undefined) {
        //                 this.addFormData = res;
        //                 alert('保存成功');
        //             } else {
        //                 this.$alert(res.data.message);
        //             }
        //         })
        //         .catch(function (error) {
        //             // this.$message.success('修改出错：'+error);
        //             alert('修改出错：' + error);
        //             console.log(error);
        //         });
        // }
    }
};
</script>