<template>
    <div class="dialog">
        <!-- 弹出层 -->
        <el-dialog
            :title="dialog.title"
            :visible.sync="dialog.show"
            width="70%"
            :close-on-click-modal="false"
            :close-on-press-eacape="false"
            :modal-append-to-body="false"
            :validate-on-rule-change="false"
        >
            <template>
                <el-form label-width="100px" size="mini" class="formDatastyle" style="padding-left: 10px">
                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-form-item label="单据号" prop="doccode">
                                <el-input disabled v-model="HDData.doccode" placeholder="单据号自动生成"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="单据类型" prop="doctype">
                                <el-select v-model="HDData.doctype" clearable placeholder="请选择单据类型" style="width: 100%">
                                    <el-option key="在途款" label="在途款" value="在途款"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="制单日期" prop="docdate">
                                <el-date-picker
                                    v-model="HDData.docdate"
                                    class="entertrue"
                                    type="date"
                                    value-format="yyyy-MM-dd"
                                    placeholder="请选择"
                                    style="width: 100%"
                                ></el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="功能号" prop="formid">
                                <el-input disabled v-model="HDData.formid" placeholder="功能号"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-form-item label="公司编号" prop="companyid">
                                <!-- 整合下面方法，fieldname为字段名称，用于区分 -->
                                <PrcCompany
                                    ref="companyid"
                                    :modelname="HDData.companyid"
                                    fieldname="companyid"
                                    @selectData="inputEnterEvent"
                                    @inputChangeEvent="inputChangeEvent"
                                ></PrcCompany>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="公司名称" prop="companyname">
                                <el-input disabled v-model="HDData.companyname" placeholder="公司名称"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="组织编号" prop="orgid">
                                <!-- 整合下面方法，fieldname为字段名称，用于区分 -->
                                <PrcSDOrg
                                    ref="orgid"
                                    :modelname="HDData.orgid"
                                    fieldname="orgid"
                                    :entertrue="false"
                                    @selectData="inputEnterEvent"
                                    @inputChangeEvent="inputChangeEvent"
                                ></PrcSDOrg>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="组织名称" prop="orgname">
                                <el-input disabled v-model="HDData.orgname" placeholder="组织名称"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-form-item label="客户编号" prop="oppocompanyid">
                                <!-- 整合下面方法，fieldname为字段名称，用于区分 -->
                                <PrcCltCompany
                                    ref="oppocompanyid"
                                    :modelname="HDData.oppocompanyid"
                                    fieldname="oppocompanyid"
                                    @companyidIsNull="companyidIsNull"
                                    @selectData="inputEnterEvent"
                                    @inputChangeEvent="inputChangeEvent"
                                ></PrcCltCompany>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="客户名称" prop="oppocompanyname">
                                <el-input disabled v-model="HDData.oppocompanyname" placeholder="客户名称"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="业务员" prop="sdgroup">
                                <!-- 整合下面方法，fieldname为字段名称，用于区分 -->
                                <PrcSDGroup
                                    ref="sdgroup"
                                    :modelname="HDData.sdgroup"
                                    fieldname="sdgroup"
                                    :entertrue="false"
                                    @selectData="inputEnterEvent"
                                    @inputChangeEvent="inputChangeEvent"
                                ></PrcSDGroup>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="业务员姓名" prop="sdgroupname">
                                <el-input disabled v-model="HDData.sdgroupname" placeholder="业务员姓名"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-form-item label="结算类型" prop="paymethod">
                                <el-select v-model="HDData.paymethod" clearable placeholder="请选择结算类型" style="width: 100%">
                                    <el-option
                                        v-for="item in payMethodOptions"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                    ></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="有效开始日期" prop="effbeginday">
                                <el-date-picker
                                    v-model="HDData.effbeginday"
                                    type="date"
                                    value-format="yyyy-MM-dd"
                                    placeholder="请选择有效开始日期"
                                    style="width: 100%"
                                ></el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="有效结束日期" prop="effendday">
                                <el-date-picker
                                    v-model="HDData.effendday"
                                    type="date"
                                    value-format="yyyy-MM-dd"
                                    placeholder="请选择有效结束日期"
                                    style="width: 100%"
                                ></el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="视为到款" prop="payflag">
                                <el-checkbox v-model="HDData.payflag" border true-label="1" false-label="0">备选项</el-checkbox>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-form-item label="收款部门编号" prop="cccode">
                                <!-- 整合下面方法，fieldname为字段名称，用于区分 -->
                                <PrcSDGroup
                                    ref="cccode"
                                    :modelname="HDData.cccode"
                                    fieldname="cccode"
                                    @selectData="inputEnterEvent"
                                    @inputChangeEvent="inputChangeEvent"
                                ></PrcSDGroup>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="收款部门名称" prop="ccname">
                                <el-input disabled v-model="HDData.ccname" placeholder="收款部门名称"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-form-item label="币种编号" prop="hdcurrency">
                                <!-- 整合下面方法，fieldname为字段名称，用于区分 -->
                                <PrcCurrency
                                    ref="hdcurrency"
                                    :modelname="HDData.hdcurrency"
                                    fieldname="hdcurrency"
                                    @selectData="inputEnterEvent"
                                    @inputChangeEvent="inputChangeEvent"
                                ></PrcCurrency>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="币种名称" prop="hdcurrencyname">
                                <el-input disabled v-model="HDData.hdcurrencyname" placeholder="币种名称"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="汇率" prop="hdexchange_rate">
                                <el-input disabled v-model="HDData.hdexchange_rate" placeholder="汇率"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="单据状态" prop="docstatus">
                                <el-input disabled v-model="HDData.docstatus" placeholder="单据状态"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-form-item label="实际收款日期" prop="pricedate">
                                <el-date-picker
                                    v-model="HDData.pricedate"
                                    style="width: 100%"
                                    type="date"
                                    value-format="yyyy-MM-dd"
                                    placeholder="请选择实际收款日期"
                                ></el-date-picker>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row :gutter="20">
                        <el-col>
                            <el-form-item label="文本" prop="hdtext">
                                <el-input type="textarea" :rows="5" v-model="HDData.hdtext" placeholder="其他文本信息"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </template>
            <!-- 弹出层操作按钮 -->
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialog.show = false">取 消</el-button>
                <el-button type="primary" @click="save()">保 存</el-button>
            </div>
        </el-dialog>
    </div>
</template>


<script>
export default {
    // 数据
    data() {
        return {
            // 通用数据
            commEntity: this.$api.identity.getCommEntity(),

            // 数据
            HDData: {
                doccode: '',
                doctype: '收款单',
                docdate: this.$moment().format('YYYY-MM-DD'),
                formid: '',
                companyid: '',
                companyname: '',
                refcode: '',
                refformid: '',
                oppocompanyid: '',
                oppocompanyname: '',
                objtype: '客户',
                paymethod: '',
                orgid: '',
                orgname: '',
                cashcode: '',
                cashname: '',
                sdgroup: '',
                sdgroupname: '',
                payflag: 1,
                contractno: '',
                projectno: '',
                hdcurrency: '',
                hdcurrencyname: '',
                hdexchange_rate: '',
                docstatus: '',
                pricedate: this.$moment().format('YYYY-MM-DD'),
                hdtext: '',
                entername: JSON.parse(localStorage.eleUser || '[]').username,
                modifyname: JSON.parse(localStorage.eleUser || '[]').username
            },

            objTypeOptions: [
                { label: '客户', value: '客户' },
                { label: '供应商', value: '供应商' },
                { label: '部门', value: '部门' }
            ],

            payMethodOptions: [
                { label: '现金', value: '现金' },
                { label: '支票', value: '支票' },
                { label: '汇款', value: '汇款' },
                { label: '银行汇票', value: '银行汇票' },
                { label: '转账', value: '转账' },
                { label: '同城结算', value: '同城结算' },
                { label: '进账', value: '进账' },
                { label: '承兑', value: '承兑' },
                { label: '刷卡', value: '刷卡' },
                { label: '直通车', value: '直通车' }
            ]
        };
    },
    // 父页面传递过来的参数
    props: {
        dialog: Object,
        hdData: Object
    },

    // 加载完成
    created() {
        console.log(this.hdData);
        if (this.hdData != '' && this.hdData != null && this.dialog.options == 'update') {
            //复制源数据出来，再赋值，否则会修改列表源数据
            const copyArray = JSON.parse(JSON.stringify(this.hdData));
            this.HDData = copyArray;
        }
    },

    // 操作方法
    methods: {
        // 选择公司事件
        inputEnterEvent(data) {
            console.log(data);
            switch (data.fieldname) {
                case 'companyid':
                    this.$refs.companyid.str = data.row.companyid;
                    this.HDData.companyid = data.row.companyid;
                    this.HDData.companyname = data.row.companyname;
                    break;
                case 'orgid':
                    this.$refs.orgid.str = data.row.sdorgid;
                    this.HDData.orgid = data.row.sdorgid;
                    this.HDData.orgname = data.row.sdorgname;
                    break;
                case 'oppocompanyid':
                    this.$refs.oppocompanyid.str = data.row.cltcode;
                    this.HDData.oppocompanyid = data.row.cltcode;
                    this.HDData.oppocompanyname = data.row.cltname;
                    this.$refs.orgid.str = data.row.sdorgid;
                    this.HDData.orgid = data.row.sdorgid;
                    this.HDData.orgname = data.row.sdorgname;
                    this.$refs.sdgroup.str = data.row.sdgroup;
                    this.HDData.sdgroup = data.row.sdgroup;
                    this.HDData.sdgroupname = data.row.sdgroupname;
                    if (this.HDData.oppocompanyname == '') {
                        this.$message.warning('当前公司不存在当前客户，请先检查！');
                        break;
                    }
                    break;
                case 'sdgroup':
                    this.$refs.sdgroup.str = data.row.sdgroup;
                    this.HDData.sdgroup = data.row.sdgroup;
                    this.HDData.sdgroupname = data.row.sdgroupname;
                    break;
                case 'cashcode':
                    this.$refs.cashcode.str = data.row.cashacctcode;
                    this.HDData.cashcode = data.row.cashacctcode;
                    this.HDData.cashname = data.row.cashacctname;
                    break;
                case 'hdcurrency':
                    this.$refs.hdcurrency.str = data.row.currency;
                    this.HDData.hdcurrency = data.row.currency;
                    this.HDData.hdcurrencyname = data.row.currencyname;
                    this.HDData.hdexchange_rate = data.row.exchange_rate;
                    break;
            }
        },

        // 监听input事件
        inputChangeEvent(fieldname) {
            switch (fieldname) {
                case 'companyid':
                    this.HDData.companyid = '';
                    this.HDData.companyname = '';
                    break;
                case 'orgid':
                    this.HDData.orgid = '';
                    this.HDData.orgname = '';
                    break;
                case 'oppocompanyid':
                    this.HDData.oppocompanyid = '';
                    this.HDData.oppocompanyname = '';
                    break;
                case 'sdgroup':
                    this.HDData.sdgroup = '';
                    this.HDData.sdgroupname = '';
                    break;
                case 'cashcode':
                    this.HDData.cashcode = '';
                    this.HDData.cashname = '';
                    break;
                case 'hdcurrency':
                    this.HDData.hdcurrency = '';
                    this.HDData.hdcurrencyname = '';
                    this.HDData.hdexchange_rate = '';
                    break;
            }
        },

        save() {
            this.$api.fcashdoc
                .saveData(this.HDData)
                .then((res) => {
                    console.log(res);
                    if (res.code == 200) {
                        this.$message.success('保存成功');
                        this.dialog.show = false;
                    } else {
                        this.$alert(res.message);
                    }
                    this.$emit('Refresh');
                })
                .catch(function (error) {
                    alert('保存出错：' + error);
                    console.log(error);
                });
        },

        refCodeChange() {
            this.$refs.companyid.str = '';
            this.HDData.companyid = '';
            this.HDData.companyname = '';
            this.$refs.orgid.str = '';
            this.HDData.orgid = '';
            this.HDData.orgname = '';
            this.$refs.oppocompanyid.str = '';
            this.HDData.oppocompanyid = '';
            this.HDData.oppocompanyname = '';
            this.$refs.sdgroup.str = '';
            this.HDData.sdgroup = '';
            this.HDData.sdgroupname = '';
            this.$refs.hdcurrency.str = '';
            this.HDData.hdcurrency = '';
            this.HDData.hdcurrencyname = '';
            this.HDData.hdexchange_rate = '';
        },

        refCodeEnter() {
            if (this.HDData.refcode == '') {
                this.$message.warning('请输入正确的单据号，请检查！');
                return;
            }
            this.$api.fcashdoc.getDataByDocCode(this.HDData.refcode).then((res) => {
                if (res.total == 0) {
                    this.$message.warning('请输入正确的单据号，请检查！');
                    return;
                }
                this.HDData.refcode = res.rows[0].doccode;
                this.HDData.refformid = res.rows[0].formid;
                this.$refs.companyid.str = res.rows[0].companyid;
                this.HDData.companyid = res.rows[0].companyid;
                this.HDData.companyname = res.rows[0].companyname;
                this.$refs.orgid.str = res.rows[0].orgid;
                this.HDData.orgid = res.rows[0].orgid;
                this.HDData.orgname = res.rows[0].orgname;
                this.$refs.oppocompanyid.str = res.rows[0].oppocompanyid;
                this.HDData.oppocompanyid = res.rows[0].oppocompanyid;
                this.HDData.oppocompanyname = res.rows[0].oppocompanyname;
                this.$refs.sdgroup.str = res.rows[0].sdgroup;
                this.HDData.sdgroup = res.rows[0].sdgroup;
                this.HDData.sdgroupname = res.rows[0].sdgroupname;
                this.$refs.hdcurrency.str = res.rows[0].hdcurrency;
                this.HDData.hdcurrency = res.rows[0].hdcurrency;
                this.HDData.hdcurrencyname = res.rows[0].hdcurrencyname;
                this.HDData.hdexchange_rate = res.rows[0].hdexchange_rate;
            });
        },

        companyidIsNull(fieldname) {
            if (this.HDData.companyid == '') {
                this.$message.warning('公司编号没有输入，请检查！');
            }
            switch (fieldname) {
                case 'oppocompanyid':
                    this.$refs.oppocompanyid.searchform.companyid = this.HDData.companyid;
                    break;
                case 'cashcode':
                    this.$refs.cashcode.searchform.companyid = this.HDData.companyid;
                    if (this.HDData.formid == '') {
                        this.$refs.cashcode.searchform.formid = this.HDData.formid = 3105;
                    }
                    break;
            }
        }
    }
};
</script>


<style type="text/css">
.el-row {
    margin-top: 10px;
}

/* 表格选择框的样式 */
.vxe-checkbox > input + .vxe-checkbox--icon {
    position: relative;
    display: inline-block;
    width: 1em;
    height: 1em;
    border: 1px solid #918f90;
    background-color: #fff;
    vertical-align: middle;
    border-radius: 0.2em;
    font-size: 16px;
}
</style>