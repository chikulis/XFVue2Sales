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
                                    <el-option key="收款单" label="收款单" value="收款单"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="制单日期" prop="docdate">
                                <el-date-picker v-model="HDData.docdate" class="entertrue" style="width: 100%" type="date"></el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="功能号" prop="formid">
                                <el-input disabled v-model="HDData.formid"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="单据状态" prop="docstatus">
                                <el-input disabled v-model="HDData.docstatus"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-form-item label="公司代码" prop="companyid">
                                <!-- 整合下面方法，fieldname为字段名称，用于区分 -->
                                <Ocompany
                                    ref="companyid"
                                    :modelname="HDData.companyid"
                                    fieldname="companyid"
                                    @inputEnterEvent="inputEnterEvent"
                                    @cellDBLClickEvent="inputEnterEvent"
                                    @importClickEvent="inputEnterEvent"
                                    @inputChangeEvent="inputChangeEvent"
                                ></Ocompany>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="公司名称" prop="companyname">
                                <el-input disabled v-model="HDData.companyname"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="引用单号" prop="refcode">
                                <el-input v-model="HDData.refcode" @input="asss" @keyup.enter.native="aaa"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="引用功能" prop="refformid">
                                <el-input disabled v-model="HDData.refformid"></el-input>
                            </el-form-item>
                        </el-col>

                        <el-col :span="6">
                            <el-form-item label="业务员" prop="sdgroup">
                                <!-- 整合下面方法，fieldname为字段名称，用于区分 -->
                                <Osdgroup
                                    ref="sdgroup"
                                    :modelname="HDData.sdgroup"
                                    fieldname="sdgroup"
                                    @inputEnterEvent="inputEnterEvent"
                                    @cellDBLClickEvent="inputEnterEvent"
                                    @importClickEvent="inputEnterEvent"
                                    @inputChangeEvent="inputChangeEvent"
                                ></Osdgroup>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="业务员姓名" prop="sdgroupname">
                                <el-input disabled v-model="HDData.sdgroupname"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-form-item label="客户编号" prop="oppocompanyid">
                                <!-- 整合下面方法，fieldname为字段名称，用于区分 -->
                                <PrcCustomer
                                    ref="oppocompanyid"
                                    :modelname="HDData.oppocompanyid"
                                    fieldname="oppocompanyid"
                                    @inputEnterEvent="inputEnterEvent"
                                    @cellDBLClickEvent="inputEnterEvent"
                                    @importClickEvent="inputEnterEvent"
                                    @inputChangeEvent="inputChangeEvent"
                                ></PrcCustomer>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="客户名称" prop="oppocompanyname">
                                <el-input disabled v-model="HDData.oppocompanyname"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="经销商代码" prop="Cltcode2">
                                <!-- 整合下面方法，fieldname为字段名称，用于区分 -->
                                <Vcltcompany
                                    ref="Cltcode2"
                                    :modelname="HDData.Cltcode2"
                                    fieldname="Cltcode2"
                                    @inputEnterEvent="inputEnterEvent"
                                    @cellDBLClickEvent="inputEnterEvent"
                                    @importClickEvent="inputEnterEvent"
                                    @inputChangeEvent="inputChangeEvent"
                                ></Vcltcompany>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="经销商名称" prop="CltName2">
                                <el-input disabled v-model="HDData.CltName2"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-form-item label="开票代码" prop="prncltcode">
                                <!-- 整合下面方法，fieldname为字段名称，用于区分 -->
                                <Scltgeneral
                                    ref="prncltcode"
                                    :modelname="HDData.prncltcode"
                                    fieldname="prncltcode"
                                    @inputEnterEvent="inputEnterEvent"
                                    @cellDBLClickEvent="inputEnterEvent"
                                    @importClickEvent="inputEnterEvent"
                                    @inputChangeEvent="inputChangeEvent"
                                ></Scltgeneral>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="开票名称" prop="prncltName">
                                <el-input class="entertrue" v-model="HDData.prncltName"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="销售组织代码" prop="sdorgid">
                                <el-input disabled v-model="HDData.sdorgid"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="销售组织名称" prop="sdorgname">
                                <el-input disabled v-model="HDData.sdorgname"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-form-item label="提货仓库代码" prop="stcode">
                                <!-- 整合下面方法，fieldname为字段名称，用于区分 -->
                                <Ostorage
                                    ref="stcode"
                                    :modelname="HDData.stcode"
                                    fieldname="stcode"
                                    @inputEnterEvent="inputEnterEvent"
                                    @cellDBLClickEvent="inputEnterEvent"
                                    @importClickEvent="inputEnterEvent"
                                    @inputChangeEvent="inputChangeEvent"
                                ></Ostorage>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="提货仓库名称" prop="stname">
                                <el-input disabled v-model="HDData.stname"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="供货公司代码" prop="SupplyCompanyid">
                                <el-input disabled v-model="HDData.SupplyCompanyid"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="供货名称" prop="SupplyCompanyname">
                                <el-input disabled v-model="HDData.SupplyCompanyname"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-form-item label="工厂代码" prop="SupplyAbbrName">
                                <el-input disabled v-model="HDData.SupplyAbbrName"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-form-item label="价目表代码" prop="Plistid">
                                <!-- 整合下面方法，fieldname为字段名称，用于区分 -->
                                <Spricelist
                                    ref="Plistid"
                                    :modelname="HDData.Plistid"
                                    fieldname="Plistid"
                                    @inputEnterEvent="inputEnterEvent"
                                    @cellDBLClickEvent="inputEnterEvent"
                                    @importClickEvent="inputEnterEvent"
                                    @inputChangeEvent="inputChangeEvent"
                                ></Spricelist>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="价目表名称" prop="PlistName">
                                <el-input disabled v-model="HDData.PlistName"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="结算方式代码" prop="settlemethodid">
                                <!-- 整合下面方法，fieldname为字段名称，用于区分 -->
                                <Gsettlemethod
                                    ref="settlemethodid"
                                    :modelname="HDData.settlemethodid"
                                    fieldname="settlemethodid"
                                    @inputEnterEvent="inputEnterEvent"
                                    @cellDBLClickEvent="inputEnterEvent"
                                    @importClickEvent="inputEnterEvent"
                                    @inputChangeEvent="inputChangeEvent"
                                ></Gsettlemethod>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="结算方式名称" prop="settlemethodname">
                                <el-input disabled v-model="HDData.settlemethodname"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-form-item label="币种代码" prop="hdcurrency">
                                <!-- 整合下面方法，fieldname为字段名称，用于区分 -->
                                <Currencyrate
                                    ref="hdcurrency"
                                    :modelname="HDData.hdcurrency"
                                    fieldname="hdcurrency"
                                    @inputEnterEvent="inputEnterEvent"
                                    @cellDBLClickEvent="inputEnterEvent"
                                    @importClickEvent="inputEnterEvent"
                                    @inputChangeEvent="inputChangeEvent"
                                ></Currencyrate>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="币种名称" prop="hdCurrencyName">
                                <el-input disabled v-model="HDData.hdCurrencyName"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="汇率" prop="hdcurrencyrate">
                                <el-input disabled v-model="HDData.hdcurrencyrate"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col>
                            <el-form-item label="文本" prop="QMName">
                                <el-input type="textarea" :rows="5" v-model="HDData.QMName"></el-input>
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
import base from '@utils/base'; // 导入接口域名列表
import axios from '@utils/request';
import PrcCustomer from '../../../components/Diolog/PrcCustomer.vue';

export default {
  components: { PrcCustomer },
    // 数据
    data() {
        return {
            //选项卡默认项
            activeName: 'first',
            // 通用数据
            commEntity: this.$api.identity.getCommEntity(),
            //组件disabled默认值
            AlPriceDateDiabled: false,
            AlPriceDiabled: false,
            btnCalcAlPriceDisabled: false,
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
                oppocompanyname: ''
            }
        };
    },
    // 父页面传递过来的参数
    props: {
        dialog: Object,
        list: Object,
        hdData: Object
    },
    // 加载完成
    created() {
        if (this.hdData != '' && this.hdData != null) {
            this.HDData = this.hdData;
        }
        this.getOptionsData();
        console.log(this.hdData);
    },
    // 操作方法
    methods: {
        // 选择公司事件
        inputEnterEvent(row, fieldname) {
            console.log(row);
            switch (fieldname) {
                case 'companyid':
                    this.$refs.companyid.str = row.companyid;
                    this.HDData.companyid = row.companyid;
                    this.HDData.companyname = row.companyname;
                    break;
                case 'oppocompanyid':
                    this.$refs.oppocompanyid.str = row.cltcode;
                    this.HDData.oppocompanyid = row.cltcode;
                    this.HDData.oppocompanyname = row.cltname;
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
                case 'oppocompanyid':
                    this.HDData.oppocompanyid = '';
                    this.HDData.oppocompanyname = '';
                    break;
            }
        },
        save() {
            //   if (this.dialog.options == "add") {
            //     // this.$api.mj_imatdochd.add(this.HDData).then(res => {
            //     //   if (res.data.doccode != "" && res.data.doccode != null) {
            //     //     this.$message.success("新增成功");
            //     //     this.dialog.show = false;
            //     //     this.$router.push({
            //     //       name: "4032",
            //     //       params: {
            //     //         formid: 4032,
            //     //         multipleSelection: res.data,
            //     //         type: "fetch"
            //     //       }
            //     //     });
            //     //   } else {
            //     //     this.$message.warning(res.data.message);
            //     //   }
            //     // });

            //   } else if (this.dialog.options == "updata") {
            //     this.$api.mj_imatdochd.update(this.HDData).then(res => {
            //       if ((res.code = 200)) {
            //         this.$message.success("修改成功");
            //         this.dialog.show = false;
            //         this.$router.push({
            //           name: "4032",
            //           params: {
            //             formid: 4032,
            //             multipleSelection: res.data,
            //             type: "fetch"
            //           }
            //         });
            //       } else {
            //         this.$message.warning("修改失败:" + res.message);
            //       }
            //     });
            //   }
            // }
            this.$api.slssalesorderhd
                .save(this.HDData)
                .then((res) => {
                    // if (res.status == 201) {
                    //   // this.$message.success("保存成功");
                    //  this.addFormData=res.data;
                    if (res != undefined) {
                        this.HDData = res;
                        alert('保存成功');
                        this.dialog.show = false;
                        this.$router.push({
                            name: '11010',
                            params: {
                                formid: 11010,
                                multipleSelection: res.data,
                                type: 'fetch'
                            }
                        });
                    } else {
                        this.$alert(res.data.message);
                    }
                })
                .catch(function (error) {
                    // this.$message.success('修改出错：'+error);
                    alert('保存出错：' + error);
                    console.log(error);
                });
        },

        asss() {
            console.log('1');
        },
        aaa() {
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
        }
    }
};
</script>


<style type="text/css">
el-row {
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