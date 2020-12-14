import base from '@utils/base';
import service from '@utils/request';

const ocompany={
    getdata(companyid){
        return service.get(`${base.sysadminurl}/ocompany/getdata?companyid=`+companyid);
    },
}
export default  ocompany;