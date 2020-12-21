import base from '@utils/base';
import service from '@utils/request';

const gsettlemethod = {
    getData(searchform) {
        return service.get(`${base.iCMMUrl}/gsettlemethod/GetData?settlemethodid=` + searchform.settlemethodid + `&settlemethodname=` + searchform.settlemethodname);
    },
}
export default gsettlemethod;