import base from '@utils/base';
import service from '@utils/request';

const slssaledoctype = {
    getAllLeftJoinOCompany() {
        return service.get(`${base.iSalesUrl}/sls_saledoctype/GetAllLeftJoinOCompany`);
    },
}
export default slssaledoctype;