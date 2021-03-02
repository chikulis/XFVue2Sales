import base from '@utils/base';
import service from '@utils/request';

const salestorage = {
    getDataByPage(index, size, sort, order, searchform) {
        return service.post(`${base.iSalesUrl}/vostorage/GetDataByPage?page=` + index + '&rows=' + size + '&sort=' + sort + '&order=' + order, searchform);
    },
}
export default salestorage;