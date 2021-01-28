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
                <el-form :rules="validrules" label-width="100px" size="mini" class="formDatastyle" style="padding-left: 10px">
                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-form-item label="单号" prop="doccode">
                                <el-input disabled v-model="HDData.doccode"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="项次" prop="docitem">
                                <el-input disabled v-model="HDData.docitem"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="标识" prop="rowid">
                                <el-input disabled v-model="HDData.rowid"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-form-item label="贷方科目编号" prop="accountid">
                                <!-- 整合下面方法，fieldname为字段名称，用于区分 -->
                                <PrcAccctCodeAccessList
                                    ref="accountid"
                                    :modelname="HDData.accountid"
                                    fieldname="accountid"
                                    :companyid="headerFormData.companyid"
                                    @selectData="inputEnterEvent"
                                    @inputChangeEvent="inputChangeEvent"
                                ></PrcAccctCodeAccessList>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="贷方科目名称" prop="accountname">
                                <el-input disabled v-model="HDData.accountname"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="贷方科目全称" prop="acctfullname">
                                <el-input disabled v-model="HDData.acctfullname"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-form-item label="金额" prop="money">
                                <el-input class="entertrue" v-model="HDData.money" @keyup.enter.native="getNatMoney"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="本币金额" prop="natmoney">
                                <el-input disabled v-model="HDData.natmoney"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="币种" prop="dtcurrency">
                                <!-- 整合下面方法，fieldname为字段名称，用于区分 -->
                                <PrcCurrency
                                    ref="dtcurrency"
                                    :modelname="HDData.dtcurrency"
                                    fieldname="dtcurrency"
                                    @selectData="inputEnterEvent"
                                    @inputChangeEvent="inputChangeEvent"
                                ></PrcCurrency>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="汇率" prop="dtexchange_rate">
                                <el-input disabled v-model="HDData.dtexchange_rate"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col>
                            <el-form-item label="贷方摘要" prop="resume">
                                <el-input v-model="HDData.resume" placeholder="贷方摘要"></el-input>
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
                doccode: this.headerFormData.doccode,
                docitem: '',
                rowid: '',
                accountid: '113101',
                accountname: '应收帐款－销售往来',
                acctfullname: '应收帐款_应收帐款－销售往来',
                money: '',
                natmoney: '',
                dtcurrency: this.headerFormData.hdcurrency,
                dtexchange_rate: this.headerFormData.hdexchange_rate,
                resume: '',
                usercode: JSON.parse(localStorage.eleUser || '[]').username
            },

            validrules: {}
        };
    },

    // 父页面传递过来的参数
    props: {
        dialog: Object,
        headerFormData: Object,
        hdData: Object
    },

    // 加载完成
    created() {
        console.log(this.headerFormData);
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
                case 'accountid':
                    this.$refs.accountid.str = data.row.acctcode;
                    this.HDData.accountid = data.row.acctcode;
                    this.HDData.accountname = data.row.acctname;
                    this.HDData.acctfullname = data.row.acctfullname;
                    this.$refs.dtcurrency.str = data.row.currency;
                    this.HDData.currency = data.row.currency;
                    this.HDData.dtexchange_rate = data.row.exchange_rate;
                    break;
                case 'dtcurrency':
                    this.$refs.dtcurrency.str = data.row.currency;
                    this.HDData.dtcurrency = data.row.currency;
                    this.HDData.dtexchange_rate = data.row.exchange_rate;
                    break;
            }
            this.getNatMoney();
        },

        // 监听input事件
        inputChangeEvent(fieldname) {
            switch (fieldname) {
                case 'accountid':
                    this.HDData.accountid = '';
                    this.HDData.accountname = '';
                    this.HDData.acctfullname = '';
                    break;
                case 'dtcurrency':
                    this.HDData.dtcurrency = '';
                    this.HDData.dtexchange_rate = '';
                    break;
            }
        },

        save() {
            this.HDData.docitem = Number(this.HDData.docitem);
            this.HDData.money = Number(this.HDData.money);
            this.HDData.natmoney = Number(this.HDData.natmoney);
            this.HDData.dtexchange_rate = Number(this.HDData.dtexchange_rate);
            this.$api.fcashdocitem
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
                    this.$message.error('保存出错：' + error);
                    // alert('保存出错：' + error);
                    console.log(error);
                });
        },

        getNatMoney() {
            this.HDData.natmoney = 0;
            var mytotalmoney = this.HDData.money * this.HDData.dtexchange_rate;
            this.HDData.natmoney = mytotalmoney;
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