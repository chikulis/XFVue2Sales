import base from '@utils/base';
import service from '@utils/request';

const gopcodesystem = {
    getData(searchform) {
        return service.get(`${base.iCMMUrl}/gopcodesystem/GetData?citt=` + searchform.citt + `&cittname=` + searchform.cittname);
    },
}
export default gopcodesystem;