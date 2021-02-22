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
                    <el-tabs v-model="activeName">
                        <el-tab-pane label="主要信息" name="first">
                            <el-divider content-position="left">单据信息</el-divider>

                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="单据号" prop="doccode">
                                        <el-input disabled v-model="HDData.doccode" placeholder=""></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="单据状态" prop="docstatus">
                                        <el-input disabled v-model="HDData.docstatus" placeholder="单据状态"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="销售公司编号" prop="companyid">
                                        <!-- 整合下面方法，fieldname为字段名称，用于区分 -->
                                        <SaleCompany
                                            ref="companyid"
                                            :modelname="HDData.companyid"
                                            fieldname="companyid"
                                            placeholder="请输入销售公司编号"
                                            @selectData="inputEnterEvent"
                                            @inputChangeEvent="inputChangeEvent"
                                        ></SaleCompany>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="销售公司名称" prop="companyname">
                                        <el-input disabled v-model="HDData.companyname" placeholder="请输入销售公司名称"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>

                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="订单类别" prop="slstype">
                                        <el-select
                                            class="entertrue"
                                            v-model="HDData.slstype"
                                            disabled
                                            placeholder="请选择订单类别"
                                            style="width: 100%"
                                        >
                                            <el-option
                                                v-for="item in slsTypeOptions"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value"
                                            >
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="单据类型" prop="doctype">
                                        <el-select
                                            class="entertrue"
                                            v-model="HDData.doctype"
                                            placeholder="请选择单据类型"
                                            @change="docTypeChangeEvent"
                                            style="width: 100%"
                                        >
                                            <el-option
                                                v-for="item in docTypeOptions"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value"
                                            >
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="业务员" prop="sdgroup">
                                        <!-- 整合下面方法，fieldname为字段名称，用于区分 -->
                                        <Osdgroup
                                            ref="sdgroup"
                                            :modelname="HDData.sdgroup"
                                            fieldname="sdgroup"
                                            placeholder="请输入销售公司编号"
                                            @selectData="inputEnterEvent"
                                            @inputChangeEvent="inputChangeEvent"
                                        ></Osdgroup>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="业务员姓名" prop="sdgroupname">
                                        <el-input disabled v-model="HDData.sdgroupname" placeholder="请输入业务员姓名"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>

                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="单据日期" prop="docdate">
                                        <el-date-picker
                                            v-model="HDData.docdate"
                                            class="entertrue"
                                            style="width: 100%"
                                            type="date"
                                            value-format="yyyy-MM-dd"
                                            placeholder="请选择单据日期"
                                        ></el-date-picker>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="提货交货" prop="deldate">
                                        <el-date-picker
                                            v-model="HDData.deldate"
                                            class="entertrue"
                                            style="width: 100%"
                                            type="date"
                                            value-format="yyyy-MM-dd"
                                            placeholder="请选择提货交货日期"
                                        ></el-date-picker>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="铝锭取价" prop="alpricemethod">
                                        <el-select
                                            class="entertrue"
                                            v-model="HDData.alpricemethod"
                                            placeholder="请选择"
                                            @change="alpriceMethodChangeEvent"
                                            style="width: 100%"
                                        >
                                            <el-option
                                                v-for="item in AlpriceMethodOptions"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value"
                                            >
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="制单公司">
                                        <el-input v-model="HDData.usertxthd3" disabled></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>

                            <el-divider content-position="left">开票资料</el-divider>

                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="客户编号" prop="cltCode">
                                        <!-- 整合下面方法，fieldname为字段名称，用于区分 -->
                                        <Scltgeneral
                                            ref="cltCode"
                                            :modelname="HDData.cltCode"
                                            fieldname="cltCode"
                                            @inputEnterEvent="inputEnterEvent"
                                            @cellDBLClickEvent="inputEnterEvent"
                                            @importClickEvent="inputEnterEvent"
                                            @inputChangeEvent="inputChangeEvent"
                                        ></Scltgeneral>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="客户名称" prop="cltName">
                                        <el-input disabled v-model="HDData.cltName"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="经销商编号" prop="Cltcode2">
                                        <!-- 整合下面方法，fieldname为字段名称，用于区分 -->
                                        <SaleCltCompany
                                            ref="Cltcode2"
                                            :modelname="HDData.Cltcode2"
                                            fieldname="Cltcode2"
                                            @inputEnterEvent="inputEnterEvent"
                                            @cellDBLClickEvent="inputEnterEvent"
                                            @importClickEvent="inputEnterEvent"
                                            @inputChangeEvent="inputChangeEvent"
                                        ></SaleCltCompany>
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
                                    <el-form-item label="开票编号" prop="prncltcode">
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
                                    <el-form-item label="销售组织编号" prop="sdorgid">
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
                                    <el-form-item label="提货仓库编号" prop="stcode">
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
                                    <el-form-item label="供货公司编号" prop="SupplyCompanyid">
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
                                    <el-form-item label="工厂编号" prop="SupplyAbbrName">
                                        <el-input disabled v-model="HDData.SupplyAbbrName"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>

                            <el-divider content-position="left">合同相关</el-divider>

                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="价目表编号" prop="Plistid">
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
                                    <el-form-item label="结算方式编号" prop="settlemethodid">
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
                                    <el-form-item label="币种编号" prop="hdcurrency">
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

                            <el-divider content-position="left">备注说明</el-divider>

                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="质量码" prop="QMCode">
                                        <!-- 整合下面方法，fieldname为字段名称，用于区分 -->
                                        <QMSlevel
                                            ref="QMCode"
                                            :modelname="HDData.QMCode"
                                            fieldname="QMCode"
                                            @inputEnterEvent="inputEnterEvent"
                                            @cellDBLClickEvent="inputEnterEvent"
                                            @importClickEvent="inputEnterEvent"
                                            @inputChangeEvent="inputChangeEvent"
                                        ></QMSlevel>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="质量体系" prop="QMName">
                                        <el-input disabled v-model="HDData.QMName"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-tab-pane>
                        <el-tab-pane label="选填信息" name="second">
                            <el-divider content-position="left">单据信息</el-divider>

                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="订单类型2" prop="DocType2">
                                        <el-select v-model="HDData.DocType2" clearable placeholder="请选择" style="width: 100%">
                                            <el-option
                                                v-for="item in docType2Options"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value"
                                                :disabled="item.disabled"
                                            >
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="跟单员" prop="FollowCode">
                                        <!-- 整合下面方法，fieldname为字段名称，用于区分 -->
                                        <Osdgroup
                                            ref="FollowCode"
                                            :modelname="HDData.FollowCode"
                                            :entertrue="false"
                                            fieldname="FollowCode"
                                            @inputEnterEvent="inputEnterEvent"
                                            @cellDBLClickEvent="inputEnterEvent"
                                            @importClickEvent="inputEnterEvent"
                                            @inputChangeEvent="inputChangeEvent"
                                        ></Osdgroup>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="跟单员姓名" prop="FollowName">
                                        <el-input disabled v-model="HDData.FollowName"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>

                            <!-- <el-row :gutter="20">
                                <el-col :span="6" :offset="6">
                                    <el-form-item label="标签类别编号" prop="sdgroup">
                                        <Osdgroup
                                            ref="sdgroup"
                                            v-model="HDData.sdgroup"
                                            :modelname="HDData.sdgroup"
                                            @inputEnterEvent="inputEnterEvent"
                                            @cellDBLClickEvent="inputEnterEvent"
                                            @importClickEvent="inputEnterEvent"
                                            @inputChangeEvent="inputChangeEvent"
                                        ></Osdgroup>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="标签类别名称" prop="sdgroupname">
                                        <el-input disabled v-model="HDData.sdgroupname"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row> -->

                            <el-divider content-position="left">开票资料</el-divider>

                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="工程编号" prop="ProjectNo">
                                        <!-- 整合下面方法，fieldname为字段名称，用于区分 -->
                                        <Slscltproject
                                            ref="ProjectNo"
                                            :modelname="HDData.ProjectNo"
                                            :entertrue="false"
                                            fieldname="ProjectNo"
                                            :cltcode="HDData.cltCode"
                                            @inputEnterEvent="inputEnterEvent"
                                            @cellDBLClickEvent="inputEnterEvent"
                                            @importClickEvent="inputEnterEvent"
                                            @inputChangeEvent="inputChangeEvent"
                                        ></Slscltproject>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="工程名称" prop="ProjectName">
                                        <el-input disabled v-model="HDData.ProjectName"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="项目号" prop="cprj">
                                        <el-input disabled v-model="HDData.cprj"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>

                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="客户接收损耗率" prop="ScrapRate">
                                        <el-input-number
                                            v-model="HDData.ScrapRate"
                                            :precision="2"
                                            :step="0.01"
                                            style="width: 100%"
                                        ></el-input-number>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="客编体系编号" prop="citt">
                                        <!-- 整合下面方法，fieldname为字段名称，用于区分 -->
                                        <Gopcodesystem
                                            ref="citt"
                                            :modelname="HDData.citt"
                                            :entertrue="false"
                                            fieldname="citt"
                                            @inputEnterEvent="inputEnterEvent"
                                            @cellDBLClickEvent="inputEnterEvent"
                                            @importClickEvent="inputEnterEvent"
                                            @inputChangeEvent="inputChangeEvent"
                                        ></Gopcodesystem>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="客编体系名称" prop="cittname">
                                        <el-input disabled v-model="HDData.cittname"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>

                            <el-divider content-position="left">合同相关</el-divider>

                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="合同号" prop="ContractNo">
                                        <!-- 整合下面方法，fieldname为字段名称，用于区分 -->
                                        <Slscontracthd
                                            ref="ContractNo"
                                            :modelname="HDData.ContractNo"
                                            :entertrue="false"
                                            fieldname="ContractNo"
                                            @inputEnterEvent="inputEnterEvent"
                                            @cellDBLClickEvent="inputEnterEvent"
                                            @importClickEvent="inputEnterEvent"
                                            @inputChangeEvent="inputChangeEvent"
                                        ></Slscontracthd>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="支付方式编号" prop="paymentCode">
                                        <Osdgroup
                                            ref="paymentCode"
                                            :modelname="HDData.paymentCode"
                                            :entertrue="false"
                                            @inputEnterEvent="FollowCodeEnterEvent"
                                            @cellDBLClickEvent="FollowCodeEnterEvent"
                                            @importClickEvent="FollowCodeEnterEvent"
                                            @inputChangeEvent="FollowCodeChangeEvent"
                                        ></Osdgroup>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="支付方式名称" prop="PaymentName">
                                        <el-input disabled v-model="HDData.PaymentName"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>

                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="铝锭取价日" prop="AlPriceDate">
                                        <el-date-picker
                                            :disabled="this.AlPriceDateDiabled"
                                            v-model="HDData.AlPriceDate"
                                            style="width: 100%"
                                            type="date"
                                        ></el-date-picker>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="铝锭价" prop="AlPrice">
                                        <el-input :disabled="this.AlPriceDiabled" v-model="HDData.AlPrice"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-button :disabled="this.btnCalcAlPriceDisabled" size="mini">计算铝锭价</el-button>
                                </el-col>
                            </el-row>

                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="提货方式编号" prop="picktype">
                                        <Osdgroup
                                            ref="picktype"
                                            :modelname="HDData.picktype"
                                            :entertrue="false"
                                            @inputEnterEvent="FollowCodeEnterEvent"
                                            @cellDBLClickEvent="FollowCodeEnterEvent"
                                            @importClickEvent="FollowCodeEnterEvent"
                                            @inputChangeEvent="FollowCodeChangeEvent"
                                        ></Osdgroup>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="提货方式名称" prop="PicktypeName">
                                        <el-input disabled v-model="HDData.PicktypeName"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="铝锭来源编号" prop="ProcMethodId">
                                        <Osdgroup
                                            ref="ProcMethodId"
                                            :modelname="HDData.ProcMethodId"
                                            :entertrue="false"
                                            @inputEnterEvent="FollowCodeEnterEvent"
                                            @cellDBLClickEvent="FollowCodeEnterEvent"
                                            @importClickEvent="FollowCodeEnterEvent"
                                            @inputChangeEvent="FollowCodeChangeEvent"
                                        ></Osdgroup>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="铝锭来源名称" prop="ProcMethodName">
                                        <el-input disabled v-model="HDData.ProcMethodName"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>

                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="税费类型编号" prop="VatType">
                                        <Ocompany
                                            ref="VatType"
                                            :modelname="HDData.VatType"
                                            :entertrue="false"
                                            @inputEnterEvent="inputEnterEvent"
                                            @cellDBLClickEvent="inputEnterEvent"
                                            @importClickEvent="inputEnterEvent"
                                            @inputChangeEvent="inputChangeEvent"
                                        ></Ocompany>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="税费类型名称" prop="VatName">
                                        <el-input disabled v-model="HDData.VatName"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="税率" prop="vatrate">
                                        <el-input v-model="HDData.vatrate"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>

                            <el-divider content-position="left">目的地</el-divider>

                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="省份" prop="a">
                                        <el-select
                                            v-model="HDData.shipstate"
                                            filterable
                                            clearable
                                            placeholder="请选择省份"
                                            style="width: 100%"
                                        >
                                            <el-option
                                                v-for="item in shipstateOptions"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value"
                                                :disabled="item.disabled"
                                            >
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="城市" prop="b">
                                        <el-select v-model="HDData.b" filterable clearable placeholder="请选择城市" style="width: 100%">
                                            <el-option
                                                v-for="item in docType2Options"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value"
                                                :disabled="item.disabled"
                                            >
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row>

                            <el-row :gutter="20">
                                <el-col :span="12">
                                    <el-form-item label="地址1" prop="shipaddr1">
                                        <el-input v-model="HDData.shipaddr1"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="地址2" prop="shipaddr2">
                                        <el-input v-model="HDData.shipaddr2"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>

                            <el-divider content-position="left">备注说明</el-divider>

                            <el-row :gutter="20">
                                <el-col :span="12">
                                    <el-form-item label="生产备注" prop="usertxthd1">
                                        <el-input v-model="HDData.usertxthd1"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="客户PO" prop="CustPOOrder">
                                        <el-input v-model="HDData.CustPOOrder"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>

                            <el-row :gutter="20">
                                <el-col :span="12">
                                    <el-form-item label="开票备注" prop="usertxthd2">
                                        <el-input v-model="HDData.usertxthd2"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="客户PO" prop="shipaddr2">
                                        <el-input v-model="HDData.shipaddr2"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-tab-pane>
                    </el-tabs>
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

export default {
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
                formid: 21101,
                doccode: '',
                docstatus: 0,
                companyid: JSON.parse(localStorage.eleUser || '[]').companyid,
                companyname: JSON.parse(localStorage.eleUser || '[]').companyName,
                slstype: 'P',
                doctype: '',
                sdgroup: '',
                sdgroupname: '',
                docdate: this.$moment().format('YYYY-MM-DD'),
                deldate: '',
                alpricemethod: '',
                usertxthd3: JSON.parse(localStorage.eleUser || '[]').companyid,
                cltCode: '',
                cltName: '',
                Cltcode2: '',
                CltName2: '',
                prncltcode: '',
                prncltName: '',
                sdorgid: '',
                sdorgname: '',
                stcode: '',
                stname: '',
                SupplyCompanyid: '',
                SupplyCompanyname: '',
                SupplyAbbrName: '',
                Plistid: '',
                PlistName: '',
                settlemethodid: '',
                settlemethodname: '',
                hdcurrency: '',
                hdCurrencyName: '',
                hdcurrencyrate: '',
                QMCode: '',
                QMName: '',

                //选填部分
                DocType2: '',
                FollowCode: '',
                FollowName: '',
                ProjectNo: '',
                ProjectName: '',
                cprj: '',
                ScrapRate: '',
                citt: '',
                cittname: '',
                ContractNo: '',

                AlPriceDate: '',
                AlPrice: '',
                shipstate: '',

                entername: JSON.parse(localStorage.eleUser || '[]').username,
                enterdate: this.$moment().format('YYYY-MM-DD')
            },
            slsTypeOptions: [],
            docTypeOptions: [],
            AlpriceMethodOptions: [],
            docType2Options: [
                {
                    value: '工程订单',
                    label: '工程订单'
                },
                {
                    value: '零售订单',
                    label: '零售订单'
                },
                {
                    value: '集采订单',
                    label: '集采订单'
                }
            ]
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
        inputEnterEvent(data) {
            console.log(data);
            switch (data.fieldname) {
                case 'companyid':
                    this.$refs.companyid.str = data.row.companyid;
                    this.HDData.companyid = data.row.companyid;
                    this.HDData.companyname = data.row.companyname;
                    break;
                case 'sdgroup':
                    this.$refs.sdgroup.str = data.row.sdgroup;
                    this.HDData.sdgroup = data.row.sdgroup;
                    this.HDData.sdgroupname = data.row.sdgroupname;
                    break;
                case 'cltCode':
                    this.$refs.cltCode.str = row.cltcode;
                    this.HDData.cltCode = row.cltcode;
                    this.HDData.cltName = row.cltname;
                    this.$refs.Cltcode2.str = row.parentcltcode;
                    this.HDData.Cltcode2 = row.parentcltcode;
                    this.HDData.CltName2 = row.parentcltname;
                    this.$refs.prncltcode.str = row.cltcode;
                    this.HDData.prncltcode = row.cltcode;
                    this.HDData.prncltName = row.cltname;
                    this.HDData.sdorgid = row.sdorgid;
                    this.HDData.sdorgname = row.sdorgname;
                    this.HDData.ScrapRate = row.scraprate;
                    this.getDocType2();
                    break;
                case 'Cltcode2':
                    this.$refs.Cltcode2.str = row.parentcltcode;
                    this.HDData.Cltcode2 = row.parentcltcode;
                    this.HDData.CltName2 = row.parentcltname;
                    break;
                case 'prncltcode':
                    this.$refs.prncltcode.str = row.cltcode;
                    this.HDData.prncltcode = row.cltcode;
                    this.HDData.prncltName = row.cltname;
                    break;
                case 'stcode':
                    this.$refs.stcode.str = row.stcode;
                    this.HDData.stcode = row.stcode;
                    this.HDData.stname = row.stname;
                    this.HDData.SupplyCompanyid = row.companyid;
                    this.HDData.SupplyCompanyname = row.companyname;
                    this.HDData.SupplyAbbrName = row.plantid;
                    break;
                case 'Plistid':
                    this.$refs.Plistid.str = row.plistid;
                    this.HDData.Plistid = row.plistid;
                    this.HDData.PlistName = row.plistname;
                    break;
                case 'settlemethodid':
                    this.$refs.settlemethodid.str = row.settlemethodid;
                    this.HDData.settlemethodid = row.settlemethodid;
                    this.HDData.settlemethodname = row.settlemethodname;
                    break;
                case 'hdcurrency':
                    this.$refs.hdcurrency.str = row.currency;
                    this.HDData.hdcurrency = row.currency;
                    this.HDData.hdCurrencyName = row.currencyname;
                    this.HDData.hdcurrencyrate = row.exchange_rate;
                    break;
                case 'QMCode':
                    this.$refs.QMCode.str = row.levelcode;
                    this.HDData.QMCode = row.levelcode;
                    this.HDData.QMName = row.levelname;
                    break;
                case 'FollowCode':
                    this.$refs.FollowCode.str = row.sdgroup;
                    this.HDData.FollowCode = row.sdgroup;
                    this.HDData.FollowName = row.sdgroupname;
                    break;
                case 'ProjectNo':
                    this.$refs.ProjectNo.str = row.projectno;
                    this.HDData.ProjectNo = row.projectno;
                    this.HDData.ProjectName = row.projectname;
                    this.HDData.cprj = row.cprj;
                    this.getDocType2();
                    break;
                case 'citt':
                    this.$refs.citt.str = row.citt;
                    this.HDData.citt = row.citt;
                    this.HDData.cittname = row.cittname;
                    break;
                case 'ContractNo':
                    this.$refs.ContractNo.str = row.doccode;
                    this.HDData.ContractNo = row.doccode;
                    this.$refs.settlemethodid.str = row.settlemethodid;
                    this.HDData.settlemethodid = row.settlemethodid;
                    this.HDData.settlemethodname = row.settlemethodname;
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
                case 'sdgroup':
                    this.HDData.sdgroup = '';
                    this.HDData.sdgroupname = '';
                    break;
                // case 'stcode':
                //     this.searchform.stcode = '';
                //     this.searchform.stname = '';
                //     this.searchform.plantid = '';
                //     break;
                case 'settlemethodid':
                    this.$refs.settlemethodid.searchform.settlemethodid = '';
                    this.$refs.settlemethodid.searchform.settlemethodname = '';
                    this.HDData.settlemethodname = '';
                    break;
                case 'QMCode':
                    this.$refs.QMCode.searchform.levelcode = '';
                    this.$refs.QMCode.searchform.levelname = '';
                    this.HDData.QMName = '';
                    break;
                case 'FollowCode':
                    this.$refs.FollowCode.searchform.sdgroup = '';
                    this.$refs.FollowCode.searchform.sdgroupname = '';
                    this.HDData.FollowName = '';
                    break;
                case 'citt':
                    this.$refs.citt.searchform.citt = '';
                    this.$refs.citt.searchform.cittname = '';
                    this.HDData.cittname = '';
                    break;
                case 'ContractNo':
                    console.log(this.$refs.ContractNo);
                    this.$refs.ContractNo.searchform.docBeginDate = this.$moment().subtract(3, 'y').format('YYYY-MM-DD');
                    this.$refs.ContractNo.searchform.docEndDate = this.$moment().format('YYYY-MM-DD');
                    this.$refs.ContractNo.$refs.companyId.str = '';
                    this.$refs.ContractNo.$refs.companyId.searchform.companyid = '';
                    this.$refs.ContractNo.$refs.companyId.searchform.companyname = '';
                    this.$refs.ContractNo.searchform.companyId = '';
                    this.$refs.ContractNo.$refs.cltCode.str = '';
                    this.$refs.ContractNo.$refs.cltCode.searchform.cltcode = '';
                    this.$refs.ContractNo.$refs.cltCode.searchform.cltname = '';
                    this.$refs.ContractNo.$refs.cltCode.searchform.parentcltcode = '';
                    this.$refs.ContractNo.searchform.cltCode = '';
                    this.$refs.ContractNo.$refs.settleMethodId.str = '';
                    this.$refs.ContractNo.$refs.settleMethodId.searchform.settlemethodid = '';
                    this.$refs.ContractNo.$refs.settleMethodId.searchform.settlemethodname = '';
                    this.$refs.ContractNo.searchform.settleMethodId = '';
                    this.$refs.ContractNo.searchform.settleMethodName = '';
                    this.$refs.ContractNo.searchform.isNew = false;
                    this.$refs.ContractNo.searchform.isAll = false;
                    break;
            }
            console.log(fieldname);
        },
        // 选择跟单员事件
        FollowCodeEnterEvent(row) {
            this.$refs.FollowCode.str = row.sdgroup;
            this.HDData.FollowCode = row.sdgroup;
            this.HDData.FollowName = row.sdgroupname;
        },
        // 监听跟单员员事件
        FollowCodeChangeEvent() {
            this.searchform.FollowCode = '';
            this.searchform.FollowName = '';
        },

        getOptionsData() {
            // 获取订单类别
            this.$api.slssaletype.getAll().then((res) => {
                for (var index in res.rows) {
                    this.slsTypeOptions.push({ label: res.rows[index].saletypename, value: res.rows[index].saletypecode });
                }
            });

            // 获取单据类型
            this.$api.slssaledoctype.getAllLeftJoinOCompany().then((res) => {
                for (var index in res.rows) {
                    this.docTypeOptions.push({
                        label: res.rows[index].doctypename,
                        value: res.rows[index].doccodetype,
                        defcompanyid: res.rows[index].defcompanyid,
                        defcompanyname: res.rows[index].defcompanyname
                    });
                }
            });

            axios.get(`${base.iSalesUrl}/_sysdict/GetData?dictid=-275105`).then((res) => {
                for (var i in res.rows) {
                    this.AlpriceMethodOptions.push({ label: res.rows[i].dictvalue, value: res.rows[i].intervalue });
                }
            });

            //获取省份
            axios.get(`${base.is}/oprovince/GetAll`).then((res) => {
                for (var i in res.rows) {
                    this.AlpriceMethodOptions.push({ label: res.rows[i].dictvalue, value: res.rows[i].intervalue });
                }
            });
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

        docTypeChangeEvent(value) {
            for (var index in this.docTypeOptions) {
                if (this.docTypeOptions[index].value == value) {
                    this.$refs.companyid.str = this.docTypeOptions[index].defcompanyid;
                    this.HDData.companyid = this.docTypeOptions[index].defcompanyid;
                    this.HDData.companyname = this.docTypeOptions[index].defcompanyname;
                }
            }

            if (value == '32') {
                this.HDData.alpricemethod = '1';
            }

            this.controlAlPrice(this.HDData.doctype, this.HDData.alpricemethod);
        },

        alpriceMethodChangeEvent(value) {
            this.controlAlPrice(this.HDData.DocType, this.HDData.alpricemethod);
        },

        controlAlPrice(docType, alpricemethod) {
            if (alpricemethod == '1') {
                this.HDData.AlPriceDate = '';
                this.AlPriceDateDiabled = true;
                if (docType == '32') this.AlPriceDiabled = false;
                else this.AlPriceDiabled = true;
                this.btnCalcAlPriceDisabled = true;
            } else if (alpricemethod == '2' || alpricemethod == '6') {
                if (this.HDData.AlPriceDate == '') this.HDData.AlPriceDate = this.HDData.docdate;
                this.AlPriceDateDiabled = false;
                if (docType == '32') this.AlPriceDiabled = false;
                else this.AlPriceDiabled = true;
                this.btnCalcAlPriceDisabled = false;
            } else {
                this.HDData.AlPriceDate = '';
                this.HDData.AlPrice = 0;
                this.AlPriceDateDiabled = true;
                this.AlPriceDiabled = true;
                this.btnCalcAlPriceDisabled = false;
            }
        },

        getDocType2() {
            axios
                .get(
                    `${base.iSalesUrl}/sls_salesorderhd/GetDocType2?projectname=` +
                        this.HDData.ProjectName +
                        `&cltcode=` +
                        this.HDData.cltCode +
                        `&cltname=` +
                        this.HDData.cltName
                )
                .then((res) => {
                    // console.log(res.rows[0].doctype2);
                    if (res.rows[0].doctype2 != null) {
                        this.HDData.DocType2 = res.rows[0].doctype2;
                    }
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