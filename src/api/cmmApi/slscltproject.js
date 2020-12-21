import base from '@utils/base';
import service from '@utils/request';

const slscltproject = {
    getData(searchform) {
        return service.get(`${base.iCMMUrl}/slscltproject/GetData?cltcode=` + searchform.cltcode + `&projectno=` + searchform.projectno + `&projectname=` + searchform.projectname);
    },
}
export default slscltproject;