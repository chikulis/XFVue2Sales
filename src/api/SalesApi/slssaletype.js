import base from '@utils/base';
import service from '@utils/request';

const slssaletype = {
    getAll() {
        return service.get(`${base.iSalesUrl}/sls_saletype/GetAll`);
    },
}
export default slssaletype;