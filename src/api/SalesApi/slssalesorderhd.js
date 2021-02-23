/**
 * sls_salesorderhd 接口
 */

import base from '@utils/base'; // 导入接口域名列表
// import axios from '@service/http'; // 导入http中创建的axios实例
import axios from '@utils/request';

const slssalesorderhd = {

	// 分页查询数据
	getbypage(page, rows, sort, order, searchs) {
		return axios.post(`${base.iSalesUrl}/sls_salesorderhd/getbypage?page=` + page +
			'&rows=' + rows + '&sort=' + sort + '&order=' + order, searchs);
	},
	//单条根据条件查询
	getby(doccode) {
		return axios.get(`${base.iSalesUrl}/sls_salesorderhd/GetSingle?doccode=` + doccode);

	},
	// 保存数据
	updatedata(dataform) {
		return axios.put(`${base.iSalesUrl}/sls_salesorderhd`, dataform);
	},

	// 根据收藏篮生成主表和明细表
	quicksave(dataform) {
		return axios.post(`${base.iSalesUrl}/sls_salesorderhd/quicksave`, dataform);
	},

	save(dataform) {
		return axios.post(`${base.iSalesUrl}/sls_salesorderhd/save`, dataform);
	},

	add(dataform) {
		return axios.post(`${base.iSalesUrl}/sls_salesorderhd/add`, dataform);
	},

	update(dataform) {
		return axios.put(`${base.iSalesUrl}/sls_salesorderhd/update`, dataform);
	},

	// 确认申请单
	conifrmdoc(doccode, type, usercode, memo) {
		return axios.post(`${base.iSalesUrl}/sls_salesorderhd/conifrmdoc?doccode=` + doccode + '&type=' + type + '&usercode=' + usercode + '&memo=' + memo);
	},
	//审核/反审核采购申请单
	examinedoc(doccode, usercode, nextdocstatus, memo, dcflag) {
		return axios.post(`${base.iSalesUrl}/sls_salesorderhd/examinedoc?doccode=` + doccode + '&usercode=' + usercode + '&nextdocstatus=' + nextdocstatus + '&memo=' + memo + '&dcflag=' + dcflag);
	},

	// 获取订单类型2
	getDocType2(projectname, cltcode, cltname) {
		return axios.post(`${base.iSalesUrl}/sls_salesorderhd/GetDocType2`, { projectname, cltcode, cltname });
	},

	// 实体类
	addFormData() {
		return {
			DocCode: "",

			/// <summary>
			/// 描述：功能号
			/// 可空：不为空
			/// 默认值：
			/// </summary>
			FormID: "",

			/// <summary>
			/// 描述：单据类型
			/// 可空：空
			/// 默认值：
			/// </summary>
			DocType: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			SLSType: "",

			/// <summary>
			/// 描述：引用单号
			/// 可空：空
			/// 默认值：
			/// </summary>
			Refcode: "",

			/// <summary>
			/// 描述：引用功能号
			/// 可空：空
			/// 默认值：
			/// </summary>
			Refformid: "",

			/// <summary>
			/// 描述：单据日期
			/// 可空：空
			/// 默认值：
			/// </summary>
			DocDate: "",

			/// <summary>
			/// 描述：期间
			/// 可空：空
			/// 默认值：
			/// </summary>
			Periodid: "",

			/// <summary>
			/// 描述：公司代码
			/// 可空：空
			/// 默认值：
			/// </summary>
			Companyid: "",

			/// <summary>
			/// 描述：公司名称
			/// 可空：空
			/// 默认值：
			/// </summary>
			CompanyName: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			SupplyCompanyid: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			SupplyCompanyname: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			SupplyAbbrName: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			DelDate: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			Cprj: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			ProjectNo: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			ProjectName: "",

			/// <summary>
			/// 描述：销售组织
			/// 可空：空
			/// 默认值：
			/// </summary>
			Sdorgid: "",

			/// <summary>
			/// 描述：组织名称
			/// 可空：空
			/// 默认值：
			/// </summary>
			Sdorgname: "",

			/// <summary>
			/// 描述：业务员号
			/// 可空：空
			/// 默认值：
			/// </summary>
			Sdgroup: "",

			/// <summary>
			/// 描述：业务员
			/// 可空：空
			/// 默认值：
			/// </summary>
			Sdgroupname: "",

			/// <summary>
			/// 描述：业务员电话
			/// 可空：空
			/// 默认值：
			/// </summary>
			Sdgroup_tel: "",

			/// <summary>
			/// 描述：客户编号
			/// 可空：空
			/// 默认值：create default [space] as ''

			/// </summary>
			CltCode: "",

			/// <summary>
			/// 描述：客户名称
			/// 可空：空
			/// 默认值：
			/// </summary>
			CltName: "",

			/// <summary>
			/// 描述：发票抬头
			/// 可空：空
			/// 默认值：
			/// </summary>
			PrncltName: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			Cltcode2: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			CltName2: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			ContractNo: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			ContractVer: "",

			/// <summary>
			/// 描述：提货仓库
			/// 可空：空
			/// 默认值：
			/// </summary>
			Stcode: "",

			/// <summary>
			/// 描述：仓库名称
			/// 可空：空
			/// 默认值：
			/// </summary>
			Stname: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			PaymentCode: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			PaymentName: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			Picktype: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			PicktypeName: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			Planpickdate: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			AlPriceDate: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			AlPrice: "",

			/// <summary>
			/// 描述：地区
			/// 可空：空
			/// 默认值：
			/// </summary>
			Areaid: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			Sumtotalmoney: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			Natsumtotalmoney: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			SumTheoryWght: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			Hdcurrency: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			HdCurrencyName: "",

			/// </summary>
			Hdcurrencyrate: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			VatType: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			VatName: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			Vatrate: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			Settlemethodid: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			Settlemethodname: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			ProcMethodId: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			ProcMethodName: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			AlpriceMethod: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			CustPOOrder: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			QMCode: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			QMName: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			TXTID: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			Usertxthd1: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			Usertxthd2: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			ERPCompanyid: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			ERPOrno: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			SLSScheID: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			WOScheID: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			FollowCode: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			FollowName: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			SumIssueTheoryWght: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			Prncltcode: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			AssignedName: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			AssignedDate: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			OfficeAddrcode: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			Officeaddrname: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			OfficeAddr1: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			Officeaddr2: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			Shiptoaddrcode: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			Shiptoaddrname: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			Shiptoaddr1: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			Shiptoaddr2: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			Citt: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			Cittname: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			LockedPriceYn: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			LockedPriceName: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			LockedPriceDate: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			Labeltype: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			ReleaseDate: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			Releasecode: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			ReleaseName: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			MergeYn: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			Checker: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			Checktime: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			Checkmemo: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			Shipcity: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			Shipcityname: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			Shipstate: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			Shipstatename: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			Shipaddr1: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			Shipaddr2: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			ScrapRate: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			Blclosed: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			BlScrap: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			ClearDocCode: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			DocStatus: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			EnterName: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			EnterDate: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			ModifyName: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			ModifyDate: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			PostName: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			PostDate: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：((0))
			/// </summary>
			SelectedYN: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			ReplFlgDelYN: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			Usertxthd3: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			TPPackageType: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			Actioncode: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			ActionLastdate: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			BlockcharnYN: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			Blockerrortimes: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			Plistid: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			PlistName: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			SchDate: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			ATPDate: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			CltDelDate: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			AlLockedYN: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			ApplyForPlanYN: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			ApplyForPlanDate: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			Mould_Available: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			Customer_Priority: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			Evaluate_Priority: "",

			/// <summary>
			/// 描述：
			/// 可空：空
			/// 默认值：
			/// </summary>
			ApplyForPlanName: "",

			ApplyForPlanPostDate: "",

			DocType2: "",

			dtoSalesorderItemadd: [],
		}
	}

}

export default slssalesorderhd;