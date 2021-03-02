import base from '@utils/base';
import service from '@utils/request';

const prccltcompany = {
    getDataByPage(index, size, sort, order, searchform) {
        return service.post(`${base.iPriceUrl}/vcltcompany/GetDataByPage?page=` + index + '&rows=' + size + '&sort=' + sort + '&order=' + order, searchform);
    },
    getDataByCltcode(searchform) {
        return service.post(`${base.iPriceUrl}/vcltcompany/GetDataByCltcode`, searchform);
    },
}
export default prccltcompany;