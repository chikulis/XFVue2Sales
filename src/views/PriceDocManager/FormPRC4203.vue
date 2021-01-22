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
                    @fetchTableData="fetchTableData(addFormData.doccode)"
                ></ActionTool>
            </el-row>

            <!-- 表头信息 -->
            <template>
                <el-form ref="addFormData" :model="addFormData" label-width="100px" size="mini" class="formDatastyle" style="width: 85%">
                    <el-tabs tab-position="bottom" type="border-card">
                        <el-tab-pane label="基本">
                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="单号" prop="doccode">
                                        <el-input disabled v-model="addFormData.doccode"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="日期" prop="docdate">
                                        <el-date-picker
                                            v-model="addFormData.docdate"
                                            class="entertrue"
                                            style="width: 100%"
                                            type="date"
                                        ></el-date-picker>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="单据类型" prop="doctype">
                                        <el-input disabled v-model="addFormData.doctype"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="结算类型" prop="paymethod">
                                        <el-input disabled v-model="addFormData.paymethod"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="公司编号" prop="companyid">
                                        <el-input disabled v-model="addFormData.companyid"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="公司名称" prop="companyname">
                                        <el-input disabled v-model="addFormData.companyname"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="销售组织编号" prop="orgid">
                                        <el-input disabled v-model="addFormData.orgid"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="销售组织名称" prop="orgname">
                                        <el-input disabled v-model="addFormData.orgname"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="往来方编号" prop="oppocompanyid">
                                        <el-input disabled v-model="addFormData.oppocompanyid"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="往来方名称" prop="oppocompanyname">
                                        <el-input disabled v-model="addFormData.oppocompanyname"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="往来类型" prop="objtype">
                                        <el-input disabled v-model="addFormData.objtype"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="单据状态" prop="docstatus">
                                        <el-input disabled v-model="addFormData.docstatus"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="资金账户编号" prop="cashcode">
                                        <el-input disabled v-model="addFormData.cashcode"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="资金账户名称" prop="cashname">
                                        <el-input disabled v-model="addFormData.cashname"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="币种编号" prop="hdcurrency">
                                        <el-input disabled v-model="addFormData.hdcurrency"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="汇率" prop="hdexchange_rate">
                                        <el-input disabled v-model="addFormData.hdexchange_rate"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-tab-pane>
                        <el-tab-pane label="结算条款">
                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="业务组编号" prop="sdgroup">
                                        <el-input disabled v-model="addFormData.sdgroup"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="业务组名称" prop="sdgroupname">
                                        <el-input disabled v-model="addFormData.sdgroupname"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="合同" prop="contractno">
                                        <el-input disabled v-model="addFormData.contractno"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="工程" prop="projectno">
                                        <el-input disabled v-model="addFormData.projectno"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="总金额" prop="summoney">
                                        <el-input disabled v-model="addFormData.summoney"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="本币金额" prop="natsummoney">
                                        <el-input disabled v-model="addFormData.natsummoney"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="引用单据" prop="refcode">
                                        <el-input disabled v-model="addFormData.refcode"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="实际收款日期" prop="pricedate">
                                        <el-date-picker v-model="addFormData.pricedate" style="width: 100%" type="date"></el-date-picker>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row :gutter="20">
                                <el-col :span="24">
                                    <el-form-item label="备注" prop="hdtext">
                                        <el-input disabled v-model="addFormData.hdtext"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-tab-pane>
                    </el-tabs>
                </el-form>
            </template>

            <!-- 状态图片 -->
            <DocStatusImg :docstatus="addFormData.docstatus"></DocStatusImg>

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

        <Dialog4203
            :dialog="commEntity.dialog"
            :headerData="headerData"
            :hdData="rowdata"
            @Refresh="fetchTableData(addFormData.doccode)"
            v-if="commEntity.dialog.show"
        ></Dialog4203>
    </div>
</template>

<script>
import base from '@utils/base'; // 导入接口域名列表
import Dialog4203 from '@views/PriceDocManager/components/Dialog4203';
export default {
    // 数据
    data() {
        return {
            // 通用数据
            commEntity: this.$api.identity.getCommEntity(),

            rowdata: null,

            // 主表实体
            addFormData: this.$api.slssalesorderhd.addFormData(),

            //修改实体
            FormData: this.$api.slssalesorderitem.FormData(),

            //传入dialog数据
            headerData: {},

            operationstate: true, //操作栏状态

            tableData2: [], //获取第一次输入框的数据

            // 表格数据
            tableData: [],

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
            ifdistools: ''
        };
    },

    // 加载完成
    created() {
        console.log(this.$route.params.multipleSelection);
        // 渲染表头数据
        if (this.$route.params.multipleSelection) {
            this.addFormData = this.$route.params.multipleSelection;
            // 如果状态大于等于50，隐藏 新增，修改，确认
            if (this.addFormData.docstatus >= 50) {
                this.ifdistools = 'true';
            }
            this.fetchTableData(this.addFormData.doccode);
        } else {
            // var dateNow=,
            (this.addFormData.DocDate = this.$moment().subtract('days', 0).format('YYYY-MM-DD')),
                (this.addFormData.DelDate = this.$moment().subtract('days', 0).format('YYYY-MM-DD')),
                (this.addFormData.AlPriceDate = this.$moment().subtract('days', 0).format('YYYY-MM-DD')),
                (this.addFormData.AlPrice = 0),
                (this.addFormData.FormID = 21101),
                (this.addFormData.DocStatus = 0),
                (this.addFormData.SLSType = 'P'),
                (this.addFormData.EnterName = JSON.parse(localStorage.eleUser || '[]').usercode),
                (this.addFormData.EnterDate = this.$moment().subtract('days', 0).format('YYYY-MM-DD')),
                (this.addFormData.Companyid = JSON.parse(localStorage.eleUser || '[]').companyid),
                (this.addFormData.CompanyName = JSON.parse(localStorage.eleUser || '[]').companyname),
                (this.addFormData.Usertxthd3 = JSON.parse(localStorage.eleUser || '[]').companyid),
                (this.addFormData.Hdcurrency = 'RMB'),
                (this.addFormData.HdCurrencyName = '人民币'),
                (this.addFormData.Hdcurrencyrate = 1),
                (this.addFormData.ProcMethodId = 'H003'),
                (this.addFormData.ProcMethodName = ''),
                (this.addFormData.AlpriceMethod = 1),
                (this.addFormData.QMCode = '001'),
                (this.addFormData.QMName = ''),
                (this.addFormData.TPPackageType = 0);
        }
    },
    // 引用组件
    components: {
        Dialog4203
    },
    // 操作方法
    methods: {
        // 返回按钮
        BackTo() {
            this.$router.push({
                name: '2002',
                params: {
                    formid: 2002
                }
            });
        },

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
                    // if (["digit", "totalmoney"].includes(column.property)) {
                    //   return XEUtils.sum(data, column.property);
                    // }
                    return '';
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
            if (this.addFormData.doccode == null || this.addFormData.doccode == '') {
                this.$message.warning('请生成单据 才能添加');
            } else {
                // this.$refs.table.insertEvent();
                this.headerData = this.addFormData;
                this.commEntity.dialog.show = true;
            }
        },

        aleTableData() {
            this.commEntity.dialog.show = true;
        },

        // 修改明细按钮
        saveRowEvent(row) {
            console.log('111111111111');
            if (row.type == 'update') {
                this.$api.fcashdocitem
                    .saveData(row.row)
                    .then((res) => {
                        // if (res.data.code == 200) {
                        //     this.$message.success('修改成功');
                        //     this.fetchTableData(row.row.doccode);
                        //     return;
                        // } else {
                        //     this.$message.warning('修改失败：' + res.data.message);
                        //     this.fetchTableData(row.row.doccode);
                        //     return;
                        //     this.form.console.warn('hes');
                        // }
                    })
                    .catch(function (error) {
                        this.$message.success('修改出错：' + error);
                        console.log(error);
                    });
                return;
            } else if (row.type == 'add') {
                if (this.addFormData.doccode != '' && this.addFormData.doccode != null) {
                    this.$api.slssalesorderitem
                        .add(this.addFormData.doccode, row.row)
                        .then((res) => {
                            this.$message.success('新增成功');
                            this.fetchTableData(this.addFormData.doccode);
                        })
                        .catch(function (error) {
                            this.$message.success('新增出错：' + error);
                            console.log(error);
                        });
                } else {
                    this.$message.warning('请生成单据');
                }
            }
        },

        // 删除明细按钮
        delTableData() {
            if (this.rowdata == null) {
                this.$message.warning('请选中数据');
                return;
            } else {
                this.$api.slssalesorderitem.delete(this.rowdata.doccode, this.rowdata.rowid).then((res) => {
                    if (res.data.code == 200) {
                        this.$message.success('删除成功');
                        this.fetchTableData(this.rowdata.doccode);
                        return;
                    } else {
                        this.$message.warning('删除失败：' + res.data.message);
                        return;
                        this.form.console.warn('hes');
                    }
                });
            }
        },

        // 确认按钮
        okTableData() {
            this.$api.slssalesorderhd.conifrmdoc(this.addFormData.doccode, 1, this.addFormData.hrcode, '').then((res) => {
                if (res.data.code == 200) {
                    this.$message.success('确认成功');
                    this.ifdistools = 'true';
                    this.operationstate = true;
                    this.addFormData.docstatus = 50;
                    return;
                } else {
                    this.$alert(
                        '确认失败:' + JSON.parse(res.data.message)[0].Memo == null
                            ? res.data.message
                            : JSON.parse(res.data.message)[0].Memo,
                        '错误提示',
                        {
                            confirmButtonText: '确定',
                            callback: (action) => {
                                //方法
                            }
                        }
                    );
                    return;
                    this.form.console.warn('hes');
                }
            });
        },

        // 取消按钮
        cancelTableData() {
            if (this.addFormData.docstatus == 50) {
                this.$api.slssalesorderhd.conifrmdoc(this.addFormData.doccode, -1, this.addFormData.hrcode, '').then((res) => {
                    if (res.data.code == 200) {
                        this.$message.success('取消确认成功');
                        this.ifdistools = 'false';
                        this.operationstate = false;
                        this.addFormData.docstatus = 0;
                        return;
                    } else {
                        this.$alert('取消确认失败:' + res.data.message, '错误提示', {
                            confirmButtonText: '确定',
                            callback: (action) => {}
                        });
                        return;
                        this.form.console.warn('hes');
                    }
                });
            } else {
                this.$message({
                    message: '单据已审核,不能做取消操作',
                    type: 'warning'
                });
            }
        },

        //保存表头
        savTableData() {
            this.$api.slssalesorderhd
                .save(this.addFormData)
                .then((res) => {
                    // if (res.status == 201) {
                    //   // this.$message.success("保存成功");
                    //  this.addFormData=res.data;
                    if (res != undefined) {
                        this.addFormData = res;
                        alert('保存成功');
                    } else {
                        this.$alert(res.data.message);
                    }
                })
                .catch(function (error) {
                    // this.$message.success('修改出错：'+error);
                    alert('修改出错：' + error);
                    console.log(error);
                });
        }
    }
};
</script>