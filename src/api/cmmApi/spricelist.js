import base from '@utils/base';
import service from '@utils/request';

const spricelist = {
    getAll() {
        return service.get(`${base.iCMMUrl}/spricelist/GetAll`);
    },
}
export default spricelist;