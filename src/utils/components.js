// 全局通用组件

import Breadcrumb from "@components/Breadcrumb";
import ActionTool from "@components/ActionTool";
import CommTable from "@components/CommTable";
import EditTable from "@components/EditTable";
import DocStatusImg from "@components/DocStatusImg";
import Ocompany from "@components/Diolog/Ocompany"; // 公司列表组件
// import Ostorage from "@components/Diolog/Ostorage"; // 
import Departmental from "@components/Diolog/Departmental";//部门组件
import Scltgeneral from "@components/Diolog/Scltgeneral";//部门组件
// import Typedata from "@components/Diolog/Typedata";//机型
// import Pvndgeneral from "@components/Diolog/Pvndgeneral"; // 供应商列表组件
// import Gpaytype from "@components/Diolog/Gpaytype"; // 付款方式列表组件
// import Gvattype from "@components/Diolog/Gvattype"; // 税票列表组件
// import Currencyrate from "@components/Diolog/Currencyrate"; // 币种列表组件
// import Picktype from "@components/Diolog/Picktype"; // 收货方式
// import Plistid from "@components/Diolog/Plistid"; // 价目表  
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
        Vue.component("Breadcrumb", Breadcrumb),
                Vue.component("ActionTool", ActionTool),
                Vue.component("CommTable", CommTable)
                Vue.component("EditTable", EditTable),
                Vue.component("DocStatusImg", DocStatusImg),
                Vue.component("Ocompany", Ocompany),
                // Vue.component("Ostorage", Ostorage),
                Vue.component("Departmental", Departmental),
                Vue.component("Scltgeneral", Scltgeneral)
                // Vue.component("Typedata", Typedata),
                // Vue.component("Pvndgeneral", Pvndgeneral),
                // Vue.component("Gpaytype", Gpaytype),
                // Vue.component("Gvattype", Gvattype),
                // Vue.component("Currencyrate", Currencyrate),
                // Vue.component("Picktype", Picktype),
                // Vue.component("Plistid", Plistid),
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