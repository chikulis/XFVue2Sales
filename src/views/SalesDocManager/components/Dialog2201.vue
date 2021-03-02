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
                                        <el-input class="entertrue" disabled v-model="HDData.doccode" placeholder=""></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="单据状态" prop="docstatus">
                                        <el-input class="entertrue" disabled v-model="HDData.docstatus" placeholder="单据状态"></el-input>
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
                                        <el-input
                                            class="entertrue"
                                            disabled
                                            v-model="HDData.companyname"
                                            placeholder="请输入销售公司名称"
                                        ></el-input>
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
                                        <OSDGroup
                                            ref="sdgroup"
                                            :modelname="HDData.sdgroup"
                                            fieldname="sdgroup"
                                            placeholder="请输入销售公司编号"
                                            @selectData="inputEnterEvent"
                                            @inputChangeEvent="inputChangeEvent"
                                        ></OSDGroup>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="业务员姓名" prop="sdgroupname">
                                        <el-input
                                            class="entertrue"
                                            disabled
                                            v-model="HDData.sdgroupname"
                                            placeholder="请输入业务员姓名"
                                        ></el-input>
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
                                            placeholder="请选择铝锭取价方式"
                                            @change="alPriceMethodChangeEvent"
                                            style="width: 100%"
                                        >
                                            <el-option
                                                v-for="item in alPriceMethodOptions"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value"
                                            >
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="制单公司" prop="usertxthd3">
                                        <el-input
                                            class="entertrue"
                                            v-model="HDData.usertxthd3"
                                            disabled
                                            placeholder="请输入制单公司编号"
                                        ></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>

                            <el-divider content-position="left">开票资料</el-divider>

                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="客户编号" prop="cltcode">
                                        <!-- 整合下面方法，fieldname为字段名称，用于区分 -->
                                        <SaleCltGeneral
                                            ref="cltcode"
                                            :modelname="HDData.cltcode"
                                            fieldname="cltcode"
                                            placeholder="请输入客户编号"
                                            @selectData="inputEnterEvent"
                                            @inputChangeEvent="inputChangeEvent"
                                        ></SaleCltGeneral>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="客户名称" prop="cltname">
                                        <el-input
                                            class="entertrue"
                                            disabled
                                            v-model="HDData.cltname"
                                            placeholder="请输入客户名称"
                                        ></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="经销商编号" prop="cltcode2">
                                        <!-- 整合下面方法，fieldname为字段名称，用于区分 -->
                                        <SaleCltCompany
                                            ref="cltcode2"
                                            :modelname="HDData.cltcode2"
                                            fieldname="cltcode2"
                                            placeholder="请输入经销商编号"
                                            @getSearchValue="getSearchValue"
                                            @selectData="inputEnterEvent"
                                            @inputChangeEvent="inputChangeEvent"
                                        ></SaleCltCompany>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="经销商名称" prop="cltname2">
                                        <el-input
                                            class="entertrue"
                                            disabled
                                            v-model="HDData.cltname2"
                                            placeholder="请输入经销商名称"
                                        ></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>

                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="开票编号" prop="prncltcode">
                                        <!-- 整合下面方法，fieldname为字段名称，用于区分 -->
                                        <SaleCltGeneral
                                            ref="prncltcode"
                                            :modelname="HDData.prncltcode"
                                            fieldname="prncltcode"
                                            placeholder="请输入开票公司编号"
                                            @selectData="inputEnterEvent"
                                            @inputChangeEvent="inputChangeEvent"
                                        ></SaleCltGeneral>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="开票名称" prop="prncltname">
                                        <el-input class="entertrue" v-model="HDData.prncltname" placeholder="请输入开票公司名称"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="销售组织编号" prop="sdorgid">
                                        <el-input
                                            class="entertrue"
                                            disabled
                                            v-model="HDData.sdorgid"
                                            placeholder="请输入销售组织编号"
                                        ></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="销售组织名称" prop="sdorgname">
                                        <el-input
                                            class="entertrue"
                                            disabled
                                            v-model="HDData.sdorgname"
                                            placeholder="请输入销售组织名称"
                                        ></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>

                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="提货仓库编号" prop="stcode">
                                        <!-- 整合下面方法，fieldname为字段名称，用于区分 -->
                                        <SaleStorage
                                            ref="stcode"
                                            :modelname="HDData.stcode"
                                            fieldname="stcode"
                                            placeholder="请输入仓库编号"
                                            @selectData="inputEnterEvent"
                                            @inputChangeEvent="inputChangeEvent"
                                        ></SaleStorage>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="提货仓库名称" prop="stname">
                                        <el-input
                                            class="entertrue"
                                            disabled
                                            v-model="HDData.stname"
                                            placeholder="请输入仓库名称"
                                        ></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="供货公司编号" prop="supplycompanyid">
                                        <el-input
                                            class="entertrue"
                                            disabled
                                            v-model="HDData.supplycompanyid"
                                            placeholder="请输入供货公司编号"
                                        ></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="供货公司名称" prop="supplycompanyname">
                                        <el-input
                                            class="entertrue"
                                            disabled
                                            v-model="HDData.supplycompanyname"
                                            placeholder="请输入供货公司名称"
                                        ></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>

                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="工厂编号" prop="supplyabbrname">
                                        <el-input
                                            class="entertrue"
                                            disabled
                                            v-model="HDData.supplyabbrname"
                                            placeholder="请输入工厂编号"
                                        ></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>

                            <el-divider content-position="left">合同相关</el-divider>

                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="价目表编号" prop="plistid">
                                        <!-- 整合下面方法，fieldname为字段名称，用于区分 -->
                                        <Spricelist
                                            ref="plistid"
                                            :modelname="HDData.plistid"
                                            fieldname="plistid"
                                            placeholder="请输入价目表编号"
                                            @selectData="inputEnterEvent"
                                            @inputChangeEvent="inputChangeEvent"
                                        ></Spricelist>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="价目表名称" prop="plistname">
                                        <el-input
                                            class="entertrue"
                                            disabled
                                            v-model="HDData.plistname"
                                            placeholder="请输入价目表名称"
                                        ></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="结算方式编号" prop="settlemethodid">
                                        <!-- 整合下面方法，fieldname为字段名称，用于区分 -->
                                        <Gsettlemethod
                                            ref="settlemethodid"
                                            :modelname="HDData.settlemethodid"
                                            fieldname="settlemethodid"
                                            placeholder="请输入结算方式编号"
                                            @selectData="inputEnterEvent"
                                            @inputChangeEvent="inputChangeEvent"
                                        ></Gsettlemethod>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="结算方式名称" prop="settlemethodname">
                                        <el-input
                                            class="entertrue"
                                            disabled
                                            v-model="HDData.settlemethodname"
                                            placeholder="请输入结算方式名称"
                                        ></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>

                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="币种编号" prop="hdcurrency">
                                        <!-- 整合下面方法，fieldname为字段名称，用于区分 -->
                                        <SaleCurrency
                                            ref="hdcurrency"
                                            :modelname="HDData.hdcurrency"
                                            fieldname="hdcurrency"
                                            placeholder="请输入币种编号"
                                            @selectData="inputEnterEvent"
                                            @inputChangeEvent="inputChangeEvent"
                                        ></SaleCurrency>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="币种名称" prop="hdcurrencyname">
                                        <el-input
                                            class="entertrue"
                                            disabled
                                            v-model="HDData.hdcurrencyname"
                                            placeholder="请输入币种名称"
                                        ></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="汇率" prop="hdcurrencyrate">
                                        <el-input
                                            class="entertrue"
                                            disabled
                                            v-model="HDData.hdcurrencyrate"
                                            placeholder="请输入币种汇率"
                                        ></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>

                            <el-divider content-position="left">备注说明</el-divider>

                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="质量码" prop="qmcode">
                                        <!-- 整合下面方法，fieldname为字段名称，用于区分 -->
                                        <QMSLevel
                                            ref="qmcode"
                                            :modelname="HDData.qmcode"
                                            fieldname="qmcode"
                                            placeholder="请输入质量码"
                                            @selectData="inputEnterEvent"
                                            @inputChangeEvent="inputChangeEvent"
                                        ></QMSLevel>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="质量体系" prop="qmname">
                                        <el-input
                                            class="entertrue"
                                            disabled
                                            v-model="HDData.qmname"
                                            placeholder="请输入质量体系名称"
                                        ></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-tab-pane>
                        <el-tab-pane label="选填信息" name="second">
                            <el-divider content-position="left">单据信息</el-divider>

                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="订单类型2" prop="doctype2">
                                        <el-select v-model="HDData.doctype2" clearable placeholder="请选择订单类型2" style="width: 100%">
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
                                    <el-form-item label="跟单员" prop="followcode">
                                        <!-- 整合下面方法，fieldname为字段名称，用于区分 -->
                                        <OSDGroup
                                            ref="followcode"
                                            :modelname="HDData.followcode"
                                            fieldname="followcode"
                                            placeholder="请输入跟单员编号"
                                            :entertrue="false"
                                            @selectData="inputEnterEvent"
                                            @inputChangeEvent="inputChangeEvent"
                                        ></OSDGroup>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="跟单员姓名" prop="followname">
                                        <el-input disabled v-model="HDData.followname" placeholder="请输入跟单员姓名"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="标签类别编号" prop="labeltype">
                                        <!-- <OSDGroup
                                            ref="sdgroup"
                                            v-model="HDData.sdgroup"
                                            :modelname="HDData.sdgroup"
                                            @inputEnterEvent="inputEnterEvent"
                                            @cellDBLClickEvent="inputEnterEvent"
                                            @importClickEvent="inputEnterEvent"
                                            @inputChangeEvent="inputChangeEvent"
                                        ></OSDGroup> -->
                                    </el-form-item>
                                </el-col>
                            </el-row>

                            <el-divider content-position="left">开票资料</el-divider>

                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="工程编号" prop="projectno">
                                        <!-- 整合下面方法，fieldname为字段名称，用于区分 -->
                                        <SLSCltProject
                                            ref="projectno"
                                            :modelname="HDData.projectno"
                                            fieldname="projectno"
                                            placeholder="请输入工程编号"
                                            :entertrue="false"
                                            @getSearchValue="getSearchValue"
                                            @selectData="inputEnterEvent"
                                            @inputChangeEvent="inputChangeEvent"
                                        ></SLSCltProject>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="工程名称" prop="projectname">
                                        <el-input disabled v-model="HDData.projectname" placeholder="请输入工程名称"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="项目号" prop="cprj">
                                        <el-input disabled v-model="HDData.cprj" placeholder="请输入项目号"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>

                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="客户接收损耗率" prop="scraprate">
                                        <el-input-number
                                            v-model="HDData.scraprate"
                                            :precision="2"
                                            :step="0.01"
                                            style="width: 100%"
                                        ></el-input-number>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="客编体系编号" prop="citt">
                                        <!-- 整合下面方法，fieldname为字段名称，用于区分 -->
                                        <GOPCodeSystem
                                            ref="citt"
                                            :modelname="HDData.citt"
                                            fieldname="citt"
                                            placeholder="请输入客编体系编号"
                                            :entertrue="false"
                                            @selectData="inputEnterEvent"
                                            @inputChangeEvent="inputChangeEvent"
                                        ></GOPCodeSystem>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="客编体系名称" prop="cittname">
                                        <el-input disabled v-model="HDData.cittname" placeholder="请输入客编体系名称"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>

                            <el-divider content-position="left">合同相关</el-divider>

                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="合同号" prop="ContractNo">
                                        <!-- 整合下面方法，fieldname为字段名称，用于区分 -->
                                        <SaleContractHD
                                            ref="ContractNo"
                                            :modelname="HDData.ContractNo"
                                            fieldname="ContractNo"
                                            placeholder="请输入客编体系编号"
                                            :entertrue="false"
                                            @selectData="inputEnterEvent"
                                            @inputChangeEvent="inputChangeEvent"
                                        ></SaleContractHD>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="支付方式编号" prop="paymentCode">
                                        <OSDGroup
                                            ref="paymentCode"
                                            :modelname="HDData.paymentCode"
                                            :entertrue="false"
                                            @inputEnterEvent="FollowCodeEnterEvent"
                                            @cellDBLClickEvent="FollowCodeEnterEvent"
                                            @importClickEvent="FollowCodeEnterEvent"
                                            @inputChangeEvent="FollowCodeChangeEvent"
                                        ></OSDGroup>
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
                                            value-format="yyyy-MM-dd"
                                        ></el-date-picker>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="铝锭价" prop="AlPrice">
                                        <el-input :disabled="this.AlPriceDiabled" v-model="HDData.AlPrice"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-button :disabled="this.btnCalcAlPriceDisabled" size="mini" @click="calcAlPrice"
                                        >计算铝锭价</el-button
                                    >
                                </el-col>
                            </el-row>

                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="提货方式编号" prop="picktype">
                                        <OSDGroup
                                            ref="picktype"
                                            :modelname="HDData.picktype"
                                            :entertrue="false"
                                            @inputEnterEvent="FollowCodeEnterEvent"
                                            @cellDBLClickEvent="FollowCodeEnterEvent"
                                            @importClickEvent="FollowCodeEnterEvent"
                                            @inputChangeEvent="FollowCodeChangeEvent"
                                        ></OSDGroup>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="提货方式名称" prop="PicktypeName">
                                        <el-input disabled v-model="HDData.PicktypeName"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="铝锭来源编号" prop="ProcMethodId">
                                        <OSDGroup
                                            ref="ProcMethodId"
                                            :modelname="HDData.ProcMethodId"
                                            :entertrue="false"
                                            @inputEnterEvent="FollowCodeEnterEvent"
                                            @cellDBLClickEvent="FollowCodeEnterEvent"
                                            @importClickEvent="FollowCodeEnterEvent"
                                            @inputChangeEvent="FollowCodeChangeEvent"
                                        ></OSDGroup>
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
import { isEmpty, isNull, now } from 'xe-utils/methods';

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
                cltcode: '',
                cltname: '',
                cltcode2: '',
                cltname2: '',
                prncltcode: '',
                prncltname: '',
                sdorgid: '',
                sdorgname: '',
                stcode: '',
                stname: '',
                supplycompanyid: '',
                supplycompanyname: '',
                supplyabbrname: '',
                plistid: '',
                plistname: '',
                settlemethodid: '',
                settlemethodname: '',
                hdcurrency: '',
                hdcurrencyname: '',
                hdcurrencyrate: '',
                qmcode: '',
                qmname: '',

                //选填部分
                doctype2: '',
                followcode: '',
                followname: '',
                labeltype: '',
                projectno: '',
                projectname: '',
                cprj: '',
                scraprate: '',
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
            alPriceMethodOptions: [],
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
                case 'cltcode':
                    this.$refs.cltcode.str = data.row.cltcode;
                    this.HDData.cltcode = data.row.cltcode;
                    this.HDData.cltname = data.row.cltname;
                    this.$refs.cltcode2.str = data.row.parentcltcode;
                    this.HDData.cltcode2 = data.row.parentcltcode;
                    this.HDData.cltname2 = data.row.parentcltname;
                    this.$refs.prncltcode.str = data.row.cltcode;
                    this.HDData.prncltcode = data.row.cltcode;
                    this.HDData.prncltname = data.row.cltname;
                    this.HDData.sdorgid = data.row.sdorgid;
                    this.HDData.sdorgname = data.row.sdorgname;
                    this.HDData.scraprate = data.row.scraprate;
                    break;
                case 'cltcode2':
                    this.$refs.cltcode2.str = data.row.parentcltcode;
                    this.HDData.cltcode2 = data.row.parentcltcode;
                    this.HDData.cltname2 = data.row.parentcltname;
                    break;
                case 'prncltcode':
                    this.$refs.prncltcode.str = data.row.cltcode;
                    this.HDData.prncltcode = data.row.cltcode;
                    this.HDData.prncltname = data.row.cltname;
                    break;
                case 'stcode':
                    this.$refs.stcode.str = data.row.stcode;
                    this.HDData.stcode = data.row.stcode;
                    this.HDData.stname = data.row.stname;
                    this.HDData.supplycompanyid = data.row.companyid;
                    this.HDData.supplycompanyname = data.row.companyname;
                    this.HDData.supplyabbrname = data.row.plantid;
                    break;
                case 'plistid':
                    this.$refs.plistid.str = data.row.plistid;
                    this.HDData.plistid = data.row.plistid;
                    this.HDData.plistname = data.row.plistname;
                    this.calcAlPrice();
                    break;
                case 'settlemethodid':
                    this.$refs.settlemethodid.str = data.row.settlemethodid;
                    this.HDData.settlemethodid = data.row.settlemethodid;
                    this.HDData.settlemethodname = data.row.settlemethodname;
                    break;
                case 'hdcurrency':
                    this.$refs.hdcurrency.str = data.row.currency;
                    this.HDData.hdcurrency = data.row.currency;
                    this.HDData.hdcurrencyname = data.row.currencyname;
                    this.HDData.hdcurrencyrate = data.row.exchange_rate;
                    break;
                case 'qmcode':
                    this.$refs.qmcode.str = data.row.levelcode;
                    this.HDData.qmcode = data.row.levelcode;
                    this.HDData.qmname = data.row.levelname;
                    break;
                case 'followcode':
                    this.$refs.followcode.str = data.row.sdgroup;
                    this.HDData.followcode = data.row.sdgroup;
                    this.HDData.followname = data.row.sdgroupname;
                    break;
                case 'projectno':
                    this.$refs.projectno.str = data.row.projectcode;
                    this.HDData.projectno = data.row.projectcode;
                    this.HDData.projectname = data.row.projectname;
                    this.HDData.cprj = data.row.cprj;
                    this.getDocType2();
                    break;
                case 'citt':
                    this.$refs.citt.str = data.row.citt;
                    this.HDData.citt = data.row.citt;
                    this.HDData.cittname = data.row.cittname;
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
                case 'cltcode':
                    this.HDData.cltcode = '';
                    this.HDData.cltname = '';
                    this.getDocType2();
                    break;
                case 'cltcode2':
                    this.$api.salecltgeneral
                        .getDataLeftJoinOSDOrgByPage(1, 1, '', '', { parentcltcode: this.$refs.cltcode2.str })
                        .then((res) => {
                            if (res.total > 0) {
                                this.$refs.cltcode2.str = res.rows[0].parentcltcode;
                                this.HDData.cltcode2 = res.rows[0].parentcltcode;
                                this.HDData.cltname2 = res.rows[0].parentcltname;
                            } else {
                                this.HDData.cltcode2 = '';
                                this.HDData.cltname2 = '';
                            }
                        });
                    break;
                case 'prncltcode':
                    this.HDData.prncltcode = '';
                    break;
                case 'stcode':
                    this.HDData.stcode = '';
                    this.HDData.stname = '';
                    break;
                case 'plistid':
                    this.HDData.plistid = '';
                    this.HDData.plistname = '';
                    break;
                case 'settlemethodid':
                    this.HDData.settlemethodid = '';
                    this.HDData.settlemethodname = '';
                    break;
                case 'hdcurrency':
                    this.HDData.hdcurrency = '';
                    this.HDData.hdcurrencyname = '';
                    this.HDData.hdcurrencyrate = '';
                    break;
                case 'qmcode':
                    this.HDData.qmcode = '';
                    this.HDData.qmname = '';
                    break;
                case 'followcode':
                    this.HDData.followcode = '';
                    this.HDData.followname = '';
                    break;
                case 'projectno':
                    this.HDData.projectno = '';
                    this.HDData.projectname = '';
                    break;
                case 'citt':
                    this.HDData.citt = '';
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
                    this.$refs.ContractNo.$refs.cltcode.str = '';
                    this.$refs.ContractNo.$refs.cltcode.searchform.cltcode = '';
                    this.$refs.ContractNo.$refs.cltcode.searchform.cltname = '';
                    this.$refs.ContractNo.$refs.cltcode.searchform.parentcltcode = '';
                    this.$refs.ContractNo.searchform.cltcode = '';
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

            // 获取铝锭取价方式
            this.$api.salesysdict.getDataByDictId('-275105').then((res) => {
                for (var index in res.rows) {
                    this.alPriceMethodOptions.push({ label: res.rows[index].dictvalue, value: res.rows[index].intervalue });
                }
            });

            //获取省份
            axios.get(`${base.is}/oprovince/GetAll`).then((res) => {
                for (var i in res.rows) {
                    this.alPriceMethodOptions.push({ label: res.rows[i].dictvalue, value: res.rows[i].intervalue });
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

        alPriceMethodChangeEvent(value) {
            this.controlAlPrice(this.HDData.doctype, this.HDData.alpricemethod);
        },

        controlAlPrice(doctype, alpricemethod) {
            if (alpricemethod == '1') {
                this.HDData.AlPriceDate = '';
                this.AlPriceDateDiabled = true;
                if (doctype == '32') this.AlPriceDiabled = false;
                else this.AlPriceDiabled = true;
                this.btnCalcAlPriceDisabled = true;
            } else if (alpricemethod == '2' || alpricemethod == '6') {
                if (this.HDData.AlPriceDate == '') this.HDData.AlPriceDate = this.HDData.docdate;
                this.AlPriceDateDiabled = false;
                if (doctype == '32') this.AlPriceDiabled = false;
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
            this.$api.slssalesorderhd.getDocType2(this.HDData.projectname, this.$refs.cltcode.str, this.HDData.cltname).then((res) => {
                // console.log(res.rows[0].doctype2);
                if (res.rows[0].doctype2 != null) {
                    this.HDData.doctype2 = res.rows[0].doctype2;
                }
            });
        },

        getSearchValue(fieldname) {
            switch (fieldname) {
                case 'cltcode2':
                    this.$refs.cltcode2.searchform.companyid = this.$refs.companyid.str;
                    this.$refs.cltcode2.searchform.cltcode = this.$refs.cltcode.str;
                    break;
                case 'projectno':
                    this.$refs.projectno.searchform.cltcode = this.$refs.cltcode.str;
                    break;
            }
        },

        calcAlPrice() {
            let alpricemethod = this.HDData.alpricemethod;
            if (isEmpty(alpricemethod)) {
                this.$message.warning('请选择铝锭取价方式！');
                return;
            }

            if (alpricemethod == '2') {
                if (isEmpty(this.HDData.hdcurrency)) {
                    this.$message.warning('请先输入币种信息！');
                    return;
                }
                this.$api.spricingmetaprice
                    .getBilledPrice({ plistid: '', purdate: '', currency: '' })
                    .then((res) => {
                        if (res.total > 0) {
                            // this.HDData.AlPrice = res.rows[0].avgvalue;
                        }
                    })
                    .catch(() => {});
            } else if (alpricemethod == '6') {
                // 对monment.week设置星期日为第一天，与后端同步
                this.$moment.updateLocale('en', {
                    week: {
                        dow: 0, // 星期的第一天是星期日
                        doy: 6 // 年份的第一周必须包含1月1日 (7 + 0 - 1)
                    }
                });
                // 定义一个铝锭取价日期
                let alPriceDate = this.$moment(this.HDData.AlPriceDate);
                // 获取铝锭取价日期所在星期属于第几天
                let asad = alPriceDate.weekday();
                // 获取铝锭取价日期所在星期的第一天
                let begindate = alPriceDate.subtract(asad, 'days').format('YYYY-MM-DD');
                // 获取铝锭取价日期所在星期最后一天，由于moment源数据会改变，直接+6就好
                let enddate = alPriceDate.add(6, 'days').format('YYYY-MM-DD');
                // 获取铝锭周平均价
                this.$api.spricingmetaprice
                    .getBilledPriceAvg({ begindate, enddate, plistid: '001' })
                    .then((res) => {
                        if (res.total > 0) {
                            this.HDData.AlPrice = res.rows[0].avgvalue;
                        }
                    })
                    .catch(() => {});
            }
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