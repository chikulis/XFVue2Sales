import base from '@utils/base';
import service from '@utils/request';

const prccompany = {
    getDataByPage(index, size, sort, order, searchform) {
        return service.post(`${base.iPriceUrl}/ocompany/GetDataByPage?page=` + index + '&rows=' + size + '&sort=' + sort + '&order=' + order, searchform);
    },
    getDataByCompanyid(searchform) {
        return service.post(`${base.iPriceUrl}/ocompany/GetDataByCompanyid`, searchform);
    },
}
export default prccompany;