import base from '@utils/base';
import service from '@utils/request';

const salecontracthd = {
    getDataLeftJoinSPriceListByPage(index, size, sort, order, searchform) {
        return service.post(`${base.iSalesUrl}/sls_contracthd/GetDataLeftJoinSPriceListByPage?page=` + index + '&rows=' + size + '&sort=' + sort + '&order=' + order, searchform);
    },
}
export default salecontracthd;