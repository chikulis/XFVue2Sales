//用户验证接口

import base from '@utils/base';// 导入接口域名列表
import axios from '@utils/request';// 导入http中创建的axios实例

let identity={
    getCommEntity(){
        return {
            formid:"",// 功能号
            formname:"",
            ifdistools:"",//是否启用按钮验证
            sort:"",
            order:'desc',
            hackReset:false,
            multipleSelection:[],// 选中行的数据
            pagination:{
                total:0,
                pageIndex:1,
                pageSize:100
            },
            dialog:{
                show:false,
                title:"",
                option:""
            },
            options:{
                border:true,//是否开启表格边框
                loading:false,//加载动画
                height:0,//表格高度
                subheight:0 //表格减除高度
            }
        }
    },
    
    getToken(params){
        return axios.post(`${base.identityUrl}`,params);
    }
}
export default identity;
