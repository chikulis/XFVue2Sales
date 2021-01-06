import base from '@utils/base';
import service from '@utils/request';

const slscontracthd = {
    getDataByPage(index, size, sort, order, searchform) {
        return service.post(`${base.iSalesUrl}/sls_contracthd/GetDataByPage?page=` + index +
            '&rows=' + size + '&sort=' + sort + '&order=' + order, searchform);
    },
}
export default slscontracthd;