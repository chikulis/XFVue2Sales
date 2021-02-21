import base from '@utils/base';
import service from '@utils/request';

const vcltcompany = {
    getDataByPage(index, size, sort, order, searchform) {
        return service.post(`${base.iSalesUrl}/vcltcompany/GetDataByPage?page=` + index + '&rows=' + size + '&sort=' + sort + '&order=' + order, searchform);
    },
}
export default vcltcompany;