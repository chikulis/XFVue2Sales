import base from '@utils/base';
import service from '@utils/request';

const qmslevel = {
    getData(searchform) {
        return service.get(`${base.iCMMUrl}/qmslevel/GetData?levelcode=` + searchform.levelcode + `&levelname=` + searchform.levelname);
    },
}
export default qmslevel;