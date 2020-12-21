import base from '@utils/base';
import service from '@utils/request';

const ocompany = {
    getData(searchform) {
        return service.get(`${base.iCMMUrl}/ocompany/GetData?companyid=` + searchform.companyid + `&companyname=` + searchform.companyname);
    },
}
export default ocompany;