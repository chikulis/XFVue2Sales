import base from '@utils/base';
import service from '@utils/request';

const osdgroup = {
    getData(searchform) {
        return service.get(`${base.iCMMUrl}/osdgroup/GetData?sdgroup=` + searchform.sdgroup + `&sdgroupname=` + searchform.sdgroupname);
    },
}
export default osdgroup;