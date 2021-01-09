import base from '@utils/base';
import service from '@utils/request';

const slscontracthd = {
    getDataLeftJoinSPricelistByPage(index, size, sort, order, searchform) {
        return service.post(`${base.iSalesUrl}/sls_contracthd/GetDataLeftJoinSPricelistByPage?page=` + index + '&rows=' + size + '&sort=' + sort + '&order=' + order, searchform);
    },
}
export default slscontracthd;