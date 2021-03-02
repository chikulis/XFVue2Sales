import base from '@utils/base';
import service from '@utils/request';

const mid_actiontype={
    getall(){
        return service.get(`${base.sysAdminUrl}/mid_actiontype/getall?dbid=a.weberp`);
    },
    getdata(applicationid){
        return service.get(`${base.sysAdminUrl}/mid_actiontype/getdata?dbid=a.weberp&applicationid=`+applicationid);
    },
}
export default  mid_actiontype;