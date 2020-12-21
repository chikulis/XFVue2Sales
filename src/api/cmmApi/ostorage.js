import base from '@utils/base';
import service from '@utils/request';

const ostorage = {
    getVoStorage(searchform) {
        return service.get(`${base.iCMMUrl}/ostorage/GetVoStorage?stcode=` + searchform.stcode
            + `&stname=` + searchform.stname + `&plantid=` + searchform.plantid);
    },
}
export default ostorage;