// 全局通用组件
import ActionTool from "@components/ActionTool";
import Breadcrumb from "@components/Breadcrumb";
import CommTable from "@components/CommTable";
import Currencyrate from "@components/Diolog/Currencyrate"; // 币种列表组件
import Departmental from "@components/Diolog/Departmental"; // 部门组件
import DocStatusImg from "@components/DocStatusImg";
import EditTable from "@components/EditTable";
import Gopcodesystem from "@components/Diolog/Gopcodesystem"; // 客户对照系统列表组件
import Gsettlemethod from "@components/Diolog/Gsettlemethod"; // 重量结算方式列表组件
import Ocompany from "@components/Diolog/Ocompany"; // 公司列表组件
import Osdgroup from "@components/Diolog/Osdgroup"; // 业务员列表组件
import Ostorage from "@components/Diolog/Ostorage"; // 仓库列表组件
import QMSlevel from "@components/Diolog/QMSlevel"; // 质量码清单列表组件
import Scltgeneral from "@components/Diolog/Scltgeneral"; // 客户列表组件
import Slscontracthd from "@components/Diolog/Slscontracthd"; // 合同组件
import Slscltproject from "@components/Diolog/Slscltproject"; // 客户项目组件
import Spricelist from "@components/Diolog/Spricelist"; // 物料价目表  
import Vcltcompany from "@components/Diolog/Vcltcompany"; // 经销商列表组件
// import Typedata from "@components/Diolog/Typedata";//机型
// import Pvndgeneral from "@components/Diolog/Pvndgeneral"; // 供应商列表组件
// import Gpaytype from "@components/Diolog/Gpaytype"; // 付款方式列表组件
// import Gvattype from "@components/Diolog/Gvattype"; // 税票列表组件
// import Picktype from "@components/Diolog/Picktype"; // 收货方式
// import Reference from "@components/Diolog/Reference";//可收货的采购订单
// import ReadBaoFeiMatcode from "@components/Diolog/ReadBaoFeiMatcode";//可报废模具信息
// import MdReason from "@components/Diolog/MdReason";//可报废模具信息
// import Ostoragebin from "@components/Diolog/Ostoragebin";//查询库位
// import Workcenter from "@components/Diolog/Workcenter";//查询车间
// import Machine from "@components/Diolog/Machine";//查询车间机台
// import GetMjMatStOragelots from "@components/Diolog/GetMjMatStOragelots";//查询可用模具
// import Frequency from "@components/Diolog/Frequency";//查询班次组件
// import Factoryinformation from "@components/Diolog/Factoryinformation";//查询班次组件
// import Accountcanbemodified from "@components/Diolog/Accountcanbemodified";//查询可修改的台账
// import XdXatCaseBox from "@components/Diolog/XdXatCaseBox";//查询模框组件
// import UsreNvironment from "@components/Diolog/UsreNvironment";//查询模框组件
// import GetDtData from "@components/Diolog/GetDtData";//查询模框组件




//首页组件
// import ChartCard from "@components/Diolog/homepage/ChartCard";//卡片组件
// import Trend from "@components/Diolog/homepage/Trend";//头部图片组件
// import RankList from "@components/Diolog/homepage/RankList";//中部表格组件



export default (Vue) => {
        Vue.component("ActionTool", ActionTool);
        Vue.component("Breadcrumb", Breadcrumb);
        Vue.component("CommTable", CommTable);
        Vue.component("Currencyrate", Currencyrate);
        Vue.component("Departmental", Departmental);
        Vue.component("DocStatusImg", DocStatusImg);
        Vue.component("EditTable", EditTable);
        Vue.component("Gopcodesystem", Gopcodesystem);
        Vue.component("Gsettlemethod", Gsettlemethod);
        Vue.component("Ocompany", Ocompany);
        Vue.component("Osdgroup", Osdgroup);
        Vue.component("Ostorage", Ostorage);
        Vue.component("QMSlevel", QMSlevel);
        Vue.component("Scltgeneral", Scltgeneral);
        Vue.component("Slscontracthd", Slscontracthd);
        Vue.component("Slscltproject", Slscltproject);
        Vue.component("Spricelist", Spricelist);
        Vue.component("Vcltcompany", Vcltcompany);
        // Vue.component("Typedata", Typedata),
        // Vue.component("Pvndgeneral", Pvndgeneral),
        // Vue.component("Gpaytype", Gpaytype),
        // Vue.component("Gvattype", Gvattype),
        // Vue.component("Currencyrate", Currencyrate),
        // Vue.component("Picktype", Picktype),                
        // Vue.component("Reference", Reference),
        // Vue.component("ReadBaoFeiMatcode", ReadBaoFeiMatcode),
        // Vue.component("MdReason", MdReason),
        // Vue.component("Ostoragebin", Ostoragebin)
        // Vue.component("GetMjMatStOragelots", GetMjMatStOragelots)
        // Vue.component("Workcenter",Workcenter)
        // Vue.component("Machine",Machine)
        // Vue.component("Frequency",Frequency)
        // Vue.component("XdXatCaseBox",XdXatCaseBox)
        // Vue.component("UsreNvironment",UsreNvironment)
        // Vue.component("GetDtData",GetDtData)

        // Vue.component("Accountcanbemodified",Accountcanbemodified)
        // Vue.component("Factoryinformation",Factoryinformation)

        // Vue.component("ChartCard", ChartCard),
        // Vue.component("Trend", Trend),
        // Vue.component("RankList", RankList)



}