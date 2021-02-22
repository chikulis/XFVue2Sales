import base from '@utils/base';
import service from '@utils/request';

const salecompany = {
    getDataByPage(index, size, sort, order, searchform) {
        return service.post(`${base.iSalesUrl}/ocompany/GetDataByPage?page=` + index + '&rows=' + size + '&sort=' + sort + '&order=' + order, searchform);
    },
}
export default salecompany;