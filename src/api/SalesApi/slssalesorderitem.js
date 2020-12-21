/**
 * sls_salesorderitem 接口
 */

import base from '@utils/base'; // 导入接口域名列表
import axios from '@utils/request';


const slssalesorderitem = {

    // 根据单号查询明细数据
    getbydoc(doccode) {
        return axios.get(`${base.iSalesUrl}/sls_salesorderitem/GetSingle?doccode=`+ doccode);
    },
    add(doccode,dtos){
        return axios.post(`${base.iSalesUrl}/sls_salesorderitem/add?doccode=`+doccode, dtos);
    },
    //采购申请单明细编辑
    update(FormData)
    {
        return axios.put(`${base.iSalesUrl}/sls_salesorderitem/update`, FormData);    
    }, 
      // 删除数据
   delete(doccode, rowid) {
        return axios.delete(`${base.iSalesUrl}/sls_salesorderitem/deldata?doccode=` + doccode + '&rowid=' + rowid);
    },
    //修改实体类
    FormData(){
        return {
             DocCode :'',

		/// <summary>
		/// 描述：
		/// 可空：不为空
		/// 默认值：
		/// </summary>
		 DocItem :'',

		/// <summary>
		/// 描述：
		/// 可空：不为空
		/// 默认值：
		/// </summary>
		 Rowid :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Stcode :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 MatCode :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 MatName :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 BatchCode :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 WHBatchCode :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Cprj :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Cltmatcode :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Cltmatname :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 ItemCode :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 VariantID :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 ColorGroup :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 MatGroup :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 PGroupCode :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 PGroupName :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 RouteGroup :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Cv1 :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Cv1Name :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Cv2 :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Cv2Name :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Cv3 :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Cv3Name :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：((0))
		/// </summary>
		 Cv4 :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Cv4Name :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Cv5 :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Cv5name :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Cv6 :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Cv6Name :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Cv7 :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Cv7Name :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Cv8 :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Cv8Name :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Cv9 :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Cv9Name :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Cv10 :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Cv10Name :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Cv99 :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Cv99Name :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 PvcitemCode :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 PVCItemType :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 UOM :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		Uomrate :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Digit :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 PreDigit :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 PriceDigit :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Alprice :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 AlProcessPrice :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Price :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Totalmoney :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Otherdigit :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Otherprice :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Othermoney :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Otherprice2 :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Otherprice3 :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 TtlPrice :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Totalmoney2 :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Totalmoney3 :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Nattotalmoney :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Nattotalmoney2 :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Natprice :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Natotherprice :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 BaseDigit :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Netprice :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Netmoney :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Vatrate :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Vatmoney :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Prc1 :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Prc2 :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Prc3 :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Prc4 :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Prc5 :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 BasePrice :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 BaseNetprice :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Canceldigit :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Pickdigit :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Returndigit :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 OpenDigit :'',

		/// <summary>
		/// 描述：已打单出货数
		/// 可空：空
		/// 默认值：
		/// </summary>
		 AllocDigit :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Unitwght :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 UnitArea :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 PrdArea :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Theorywght :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Itemmemo :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		LowLevel :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 OrderDate :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 DelDate :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 WghtMethod :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 WghtMethodName :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 MainMatName :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 QMCode :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 QMName :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 ContractNo :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 ContractRowid :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 ItemRefcode :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Refrowid :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 ProjectNO :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 PowerItem :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 PowderDigit :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 CustPOCode :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 CustPONO :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 ERPMatcode :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 ERPDfit :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		ERPOpts :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 ERPCPVR :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 LabelMemo :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 TxtID :'',

		/// <summary>
		/// 描述：长度值生产是否可变
		/// 可空：空
		/// 默认值：
		/// </summary>
		CV4VaryYN :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 NoCV4Batchcode :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		LinesUpdateYn :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：((0))
		/// </summary>
		MatBOMYn :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		PcfcreateYN :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		PcsCreateYN :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		Sfcpdnoid :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Sfcdigit :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		SelectedYn :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 DiscountType :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 DiscountTypeName :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		ReplFlgDelYN :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Actsqm :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Actunitsqm :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Userdigit1 :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 ScrapRate :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Packcode :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Packname :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Cltcv1 :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Cltcv1name :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Unitsqm :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Theorysqm :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Refslsbatchcode :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		LockedPriceYn :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 LockedPrice :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 LockedPriceDate :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 ModifyPriceDate :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 JYRouteGroup :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 JYRouteGroupName :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：((0))
		/// </summary>
		PriceManualYN :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		Isptyn :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		TPPackageType :'',

		
		Pkyn :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Min_Digit :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Max_Digit :'',
        }
    }

}

export default slssalesorderitem;