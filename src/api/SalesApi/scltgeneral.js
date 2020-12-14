import base from '@utils/base';
import service from '@utils/request';

const ocompany={
    getdata(cltcode){
        return service.get(`${base.sysadminurl}/scltgeneral/getdata?cltcode=`+cltcode);
    },
    getall(){
        return service.get(`${base.sysadminurl}/scltgeneral/getdata`);
    },
}
export default  ocompany;