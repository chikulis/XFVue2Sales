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
                                    disabled
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
                            <el-form-item label="业务员编号" prop="sdgroup">
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
                                    @change="effBeginDayChange"
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
                                <el-checkbox
                                    v-model="HDData.payflag"
                                    :checked="loadPayFlag()"
                                    disabled
                                    border
                                    true-label="1"
                                    false-label="0"
                                    style="width: 100%"
                                    >备选项</el-checkbox
                                >
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-form-item label="收款部门编号" prop="cccode">
                                <!-- 整合下面方法，fieldname为字段名称，用于区分 -->
                                <PrcCostCenter
                                    ref="cccode"
                                    :modelname="HDData.cccode"
                                    fieldname="cccode"
                                    @companyidIsNull="companyidIsNull"
                                    @selectData="inputEnterEvent"
                                    @inputChangeEvent="inputChangeEvent"
                                ></PrcCostCenter>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="收款部门名称" prop="ccname">
                                <el-input disabled v-model="HDData.ccname" placeholder="收款部门名称"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="单据状态" prop="docstatus">
                                <el-input disabled v-model="HDData.docstatus" placeholder="单据状态"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="收款单" prop="linkdoccode">
                                <el-input disabled v-model="HDData.linkdoccode" placeholder="收款单"></el-input>
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
                                <el-input class="entertrue" v-model="HDData.hdexchange_rate" placeholder="汇率"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-form-item label="金额" prop="amount">
                                <el-input class="entertrue" v-model="HDData.amount" @keyup.enter.native="calcAmount" placeholder="金额"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="本币金额" prop="natamount">
                                <el-input v-model="HDData.natamount" disabled placeholder="本币金额"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="入账科目" prop="account">
                                <el-input v-model="HDData.account" disabled placeholder="入账科目"></el-input>
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
import base from '@utils/base';
import axios from '@utils/request';

export default {
    // 数据
    data() {
        return {
            // 通用数据
            commEntity: this.$api.identity.getCommEntity(),

            // 数据
            HDData: {
                doccode: '',
                doctype: '在途款',
                docdate: this.$moment().format('YYYY-MM-DD'),
                formid: '33857',
                companyid: '',
                companyname: '',
                orgid: '',
                orgname: '',
                oppocompanyid: '',
                oppocompanyname: '',
                sdgroup: '',
                sdgroupname: '',
                paymethod: this.getPayMethod(),
                effbeginday: this.$moment().format('YYYY-MM-DD'),
                effendday: this.$moment().add(30, 'd').format('YYYY-MM-DD'),
                payflag: 1,
                cccode: '',
                ccname: '',
                docstatus: '0',
                linkdoccode: '',
                hdcurrency: 'RMB',
                hdcurrencyname: '人民币',
                hdexchange_rate: '1',
                amount: '0',
                natamount: '0',
                account: '113101',
                hdtext: '',
                entername: JSON.parse(localStorage.eleUser || '[]').username,
                modifyname: JSON.parse(localStorage.eleUser || '[]').username
            },

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
                    }
                    break;
                case 'sdgroup':
                    this.$refs.sdgroup.str = data.row.sdgroup;
                    this.HDData.sdgroup = data.row.sdgroup;
                    this.HDData.sdgroupname = data.row.sdgroupname;
                    break;
                case 'cccode':
                    this.$refs.cccode.str = data.row.cccode;
                    this.HDData.cccode = data.row.cccode;
                    this.HDData.ccname = data.row.ccname;
                    if (this.HDData.ccname == '') {
                        this.$message.warning('部门未输入，请检查！');
                    }
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
                case 'cccode':
                    this.HDData.cccode = '';
                    this.HDData.ccname = '';
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

        getPayMethod() {
            axios
                .post(`${base.iPriceUrl}/_sysdict/GetDataByDictid`, { dictid: '-3700' })
                .then((res) => {
                    if (res.code == 200) {
                        if (res.total > 0) {
                            let arr = [];
                            for (var i in res.rows) {
                                arr.push({ label: res.rows[i].dictvalue, value: res.rows[i].intervalue });
                            }
                            console.log(arr);
                            this.payMethodOptions = arr;
                        }
                    }
                })
                .catch(() => {});
            return '';
        },

        effBeginDayChange() {
            this.HDData.effendday = this.$moment(this.HDData.effbeginday).add(2, 'd').format('YYYY-MM-DD');
        },

        loadPayFlag() {
            if (this.HDData.payflag == 1) {
                return true;
            } else {
                return false;
            }
        },

        calcAmount(){
            this.HDData.natamount = Number(this.HDData.amount) * Number(this.HDData.hdexchange_rate);
        },

        companyidIsNull(fieldname) {
            if (this.HDData.companyid == '') {
                this.$message.warning('公司编号没有输入，请检查！');
            }
            switch (fieldname) {
                case 'oppocompanyid':
                    this.$refs.oppocompanyid.searchform.companyid = this.HDData.companyid;
                    break;
                case 'cccode':
                    this.$refs.cccode.searchform.companyid = this.HDData.companyid;
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