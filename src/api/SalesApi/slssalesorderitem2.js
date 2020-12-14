/**
 * sls_salesorderitem2 接口
 */

import base from '@utils/base'; // 导入接口域名列表
import axios from '@utils/request';

const slssalesorderitem2 = {

    // 根据单号查询明细数据
    getbydoc(doccode) {
        return axios.get(`${base.salesurl}/sls_salesorderitem2/`+ doccode);
    },
    add(doccode,dtos){
        return axios.post(`${base.salesurl}/sls_salesorderitem2/add?doccode=`+doccode, dtos);
    },
    //采购申请单明细编辑
    update(FormData)
    {
        return axios.put(`${base.salesurl}/sls_salesorderitem2/update`, FormData);    
    }, 
      // 删除数据
   delete(doccode, rowid) {
        return axios.delete(`${base.salesurl}/sls_salesorderitem2/deldata?doccode=` + doccode + '&rowid=' + rowid);
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
		 Docitem :'',

		/// <summary>
		/// 描述：
		/// 可空：不为空
		/// 默认值：
		/// </summary>
		 Rowid :'',

		/// <summary>
		/// 描述：
		/// 可空：不为空
		/// 默认值：
		/// </summary>
		 RefDocItem :'',

		/// <summary>
		/// 描述：
		/// 可空：不为空
		/// 默认值：
		/// </summary>
		 Refrowid :'',

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
		 Stcode :'',

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
		 ParentVariantID :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 ParentItemCode :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 ParentMatcode :'',

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
		 ColorGroup :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 CltMatcode :'',

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
		/// 默认值：
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
		 LowLevel :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 VariantYN :'',

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
		 SlsOrigDigit :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 BOMDigit :'',

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
		 CancelDigit :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Poweritem :'',

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
		 Unitwght :'',

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
		 TheoryWght :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 ItemMemo :'',

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
		/// 默认值：((0))
		/// </summary>
		 Alprice :'',

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
		 Projectno :'',

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
		 CustPono :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 RouteGroup :'',

		/// <summary>
		/// 描述：输入订单时，不显示此行记录slspcfinvisible
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Slspcfinvisible :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：((1))
		/// </summary>
		 LinesUpdateYn :'',

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
		 TXTID :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Opendigit :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Contractno :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Contractrowid :'',

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
		 Otherprice :'',

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
		 Alprocessprice :'',

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
		 Othermoney :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 WghtmethodName :'',

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
		 LabelMemo :'',

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
		 ScrapRate :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 HMcreateYN :'',

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
		 Predigit :'',

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
		 Pos :'',

		/// <summary>
		/// 描述：
		/// 可空：空
		/// 默认值：
		/// </summary>
		 Totalmoney2 :'',

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
        

    }
}

}

export default slssalesorderitem2;