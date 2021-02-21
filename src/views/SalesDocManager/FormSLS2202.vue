<!-- 2202 -- 销售订单明细 -->
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
                    @BackTo="BackTo"
                    @okTableData="okTableData"
                    @addTableData="addTableData"
                    @cancelTableData="cancelTableData"
                    @delTableData="delTableData"
                    @exportFrom="exportFrom"
                    @savTableData="savTableData"
                ></ActionTool>
            </el-row>

            <!-- 表头信息 -->
            <template>
                <el-form ref="addFormData" :model="addFormData" label-width="100px" size="mini" class="formDatastyle" style="width: 85%">
                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-form-item label="单据号" prop="doccode">
                                <el-input disabled v-model="addFormData.doccode"></el-input>
                            </el-form-item>
                        </el-col>

                        <el-col :span="6">
                            <el-form-item label="单据类型" prop="doctype">
                                <el-input disabled v-model="addFormData.doctype"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-form-item label="单据日期" prop="docdate">
                                <el-date-picker
                                    v-model="addFormData.docdate"
                                    class="entertrue"
                                    style="width: 100%"
                                    type="date"
                                ></el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="单据状态" prop="docstatus">
                                <el-input disabled v-model="addFormData.docstatus"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="申购人工号" prop="hrcode">
                                <el-input disabled v-model="addFormData.hrcode"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="申购人姓名" prop="hrname">
                                <el-input disabled v-model="addFormData.hrname"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-form-item label="公司代码" prop="companyid">
                                <Ocompany
                                    ref="ocompany"
                                    :modelname="addFormData.companyid"
                                    @inputEnterEvent="inputEnterEvent"
                                    @cellDBLClickEvent="inputEnterEvent"
                                    @importClickEvent="inputEnterEvent"
                                ></Ocompany>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="公司名称" prop="companyname">
                                <el-input disabled v-model="addFormData.companyname"></el-input>
                            </el-form-item>
                        </el-col>

                        <el-col :span="6">
                            <el-form-item label="客户代码" prop="cltcode">
                                <el-input disabled v-model="addFormData.cltcode"></el-input>
                            </el-form-item>
                        </el-col>

                        <el-col :span="6">
                            <el-form-item label="客户名称" prop="cltname">
                                <el-input disabled v-model="addFormData.cltname"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
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
                @saveRowEvent="saveRowEvent"
                :operationstate="operationstate"
                @cv1_edit="cv1_edit"
                :showindex="true"
                :entercolumn="entercolumn"
                :footerMethod="footerMethod"
            ></EditTable>
        </div>

        <Dialog2003
            :dialog="commEntity.dialog"
            :list="list"
            @Refresh="fetchTableData(addFormData.doccode)"
            v-if="commEntity.dialog.show"
        ></Dialog2003>
    </div>
</template>

<script>
import Dialog2003 from '@views/SalesDocManager/components/Dialog2003';

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

            list: {
                doccode: '' //传入dialog的条件
            },

            operationstate: false, //操作栏状态

            tableData2: [], //获取第一次输入框的数据

            // 表格数据
            tableData: [],

            entercolumn: ['digit', 'cv1', 'cv1name'],

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
                    title: '项次',
                    width: 100
                    // edit: { name: 'input' }
                },
                {
                    field: 'stcode',
                    title: '仓库',
                    width: 100
                    // edit: { name: 'input' }
                },
                {
                    field: 'matcode',
                    title: '代码',
                    width: 100
                    // edit: { name: 'input' }
                },
                {
                    field: 'docitem',
                    title: '项次',
                    width: 100
                    // edit: { name: 'input' }
                },
                {
                    field: 'docitem',
                    title: '项次',
                    width: 100
                    // edit: { name: 'input' }
                },
                {
                    field: 'docitem',
                    title: '项次',
                    width: 100
                    // edit: { name: 'input' }
                },
                {
                    field: 'docitem',
                    title: '项次',
                    width: 100
                    // edit: { name: 'input' }
                },
                {
                    field: 'docitem',
                    title: '项次',
                    width: 100
                    // edit: { name: 'input' }
                },
                {
                    field: 'docitem',
                    title: '项次',
                    width: 100
                    // edit: { name: 'input' }
                },
                {
                    field: 'docitem',
                    title: '项次',
                    width: 100
                    // edit: { name: 'input' }
                },
                {
                    field: 'docitem',
                    title: '项次',
                    width: 100
                    // edit: { name: 'input' }
                },
                {
                    field: 'docitem',
                    title: '项次',
                    width: 100
                    // edit: { name: 'input' }
                },
                {
                    field: 'docitem',
                    title: '项次',
                    width: 100
                    // edit: { name: 'input' }
                },
                {
                    field: 'docitem',
                    title: '项次',
                    width: 100
                    // edit: { name: 'input' }
                },
                {
                    field: 'docitem',
                    title: '项次',
                    width: 100
                    // edit: { name: 'input' }
                },
                {
                    field: 'docitem',
                    title: '项次',
                    width: 100
                    // edit: { name: 'input' }
                },
                {
                    field: 'docitem',
                    title: '项次',
                    width: 100
                    // edit: { name: 'input' }
                },
                {
                    field: 'docitem',
                    title: '项次',
                    width: 100
                    // edit: { name: 'input' }
                },
                {
                    field: 'docitem',
                    title: '项次',
                    width: 100
                    // edit: { name: 'input' }
                },
                {
                    field: 'docitem',
                    title: '项次',
                    width: 100
                    // edit: { name: 'input' }
                },
                {
                    field: 'matcode',
                    title: '物料型号',
                    width: 100,
                    edit: { name: 'input' }
                },
                {
                    field: 'matname',
                    title: '物料名称',
                    width: 100,
                    align: 'left',
                    edit: { name: 'input' }
                },
                {
                    field: 'matgroup',
                    title: '物料组',
                    width: 80,
                    edit: { name: 'input' }
                },
                {
                    field: 'uom',
                    title: '单位',
                    width: 85,
                    edit: { name: 'input' }
                },
                {
                    field: 'digit',
                    title: '订单支数',
                    width: 100,
                    edit: { name: 'input' }
                },
                {
                    field: 'cv1',
                    title: '颜色代码',
                    width: 100,
                    edit: { name: 'input', attrs: { type: 'input', disabled: 'true' } },
                    editrender: true
                },
                {
                    field: 'cv1name',
                    title: '颜色名称',
                    width: 100
                },
                {
                    field: 'cv2',
                    title: '材质代码',
                    width: 100,
                    edit: { name: 'input', attrs: { type: 'input', disabled: 'true' } },
                    editrender: true
                },
                {
                    field: 'cv2name',
                    title: '材质名称',
                    width: 100
                },

                {
                    field: 'cv3',
                    title: '膜厚代码',
                    width: 120
                },
                {
                    field: 'cv3name',
                    title: '膜厚名称',
                    width: 100
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
                this.operationstate = true;
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
        Dialog2003
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

        // 选择公司事件
        inputEnterEvent(row) {
            this.$refs.ocompany.str = row.companyid;
            this.addFormData.companyid = row.companyid;
            this.addFormData.companyname = row.companyname;
        },

        // 选择部门事件
        ocostcenterEvent(row) {
            this.$refs.ocostcenter.str = row.cccode;
            this.addFormData.cccode = row.cccode;
            this.addFormData.ccname = row.ccname;
        },

        // 选择仓库事件
        stcodeEvent(row) {
            this.$refs.stcode.str = row.stcode;
            this.addFormData.stcode = row.stcode;
            this.addFormData.stname = row.stname;
        },

        // 查询按钮
        fetchTableData(doccode) {
            this.rowdata = null;
            this.$api.slssalesorderitem.getbydoc(doccode).then((res) => {
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
        // 新增按钮
        exportFrom() {
            this.commEntity.dialog.show = false;
            this.$nextTick(() => {
                this.list.doccode = this.addFormData.doccode;
                this.commEntity.dialog.options = 'Assign';
                this.commEntity.dialog.title = '物料';
                this.commEntity.dialog.show = true;
            });
        },
        splitNum(num, n, symbol) {
            if (!num) throw new Error('splitNum需要传入一个待转换的数据');
            if (typeof num !== 'number') throw new TypeError('num参数应该是一个number类型');
            if (n < 0) throw new Error('参数n不应该小于0');
            var hasDot = parseInt(num) != num; //这里检测num是否为小数，true表示小数
            var m = n != undefined && n != null ? n : 1;
            num = m == 0 ? num.toFixed(m) + '.' : hasDot ? (n ? num.toFixed(n) : num) : num.toFixed(m);
            symbol = symbol || ',';
            num = num.toString().replace(/(\d)(?=(\d{3})+\.)/g, function (match, p1, p2) {
                return p1 + symbol;
            });
            if (n == 0 || (!hasDot && !n)) {
                //如果n为0或者传入的num是整数并且没有指定整数的保留位数，则去掉前面操作中的小数位
                num = num.substring(0, num.indexOf('.'));
            }
            return num;
        },
        // 点击行事件
        cellClickEvent(row) {
            this.rowdata = row.row;
        },
        addTableData() {
            console.log(this.addFormData.doccode);
            if (this.addFormData.doccode == null || this.addFormData.doccode == '') {
                this.$message.warning('请生成单据 才能添加');
            } else {
                this.$refs.table.insertEvent();
            }
        },
        // 修改明细按钮
        saveRowEvent(row) {
            this.FormData.doccode = row.row.doccode;
            this.FormData.rowid = row.row.rowid;
            this.FormData.matcode = row.row.matcode;
            this.FormData.matgroup = row.row.matgroup;
            this.FormData.matname = row.row.matname;
            this.FormData.cv1 = row.row.cv1;
            this.FormData.cv1name = row.row.cv1name;
            this.FormData.cv2 = row.row.cv2;
            this.FormData.cv2name = row.row.cv2name;
            this.FormData.cv3 = row.row.cv3;
            this.FormData.cv3name = row.row.cv3name;
            this.FormData.cv4 = row.row.cv4;
            this.FormData.cv5 = row.row.cv5;
            this.FormData.digit = row.row.digit;

            const array = [];
            array.push(this.FormData);
            if (row.type == 'update') {
                this.$api.slssalesorderitem
                    .update(row.row)
                    .then((res) => {
                        if (res.data.code == 200) {
                            this.$message.success('修改成功');
                            this.fetchTableData(row.row.doccode);
                            return;
                        } else {
                            this.$message.warning('修改失败：' + res.data.message);
                            this.fetchTableData(row.row.doccode);
                            return;
                            this.form.console.warn('hes');
                        }
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
        },
        //机型弹窗 获取数据
        cv1_edit(row, nul) {
            if (nul.isTrusted == true) {
                this.tableData2 = row;
                this.$nextTick(() => {
                    this.$refs.Log.showdiolog();
                });
            } else {
                row.row.cv1 = nul;
            }
        },
        cv1name_edit(row, nul) {
            row.row.cv1name = nul;
        }
    }
};
</script>