import base from '@utils/base';
import service from '@utils/request';

const prcsdgroup = {
    getDataByPage(index, size, sort, order, searchform) {
        return service.post(`${base.iPriceUrl}/osdgroup/GetDataByPage?page=` + index + '&rows=' + size + '&sort=' + sort + '&order=' + order, searchform);
    },
    getDataBySdgroup(searchform) {
        return service.post(`${base.iPriceUrl}/osdgroup/GetDataBySdgroup`, searchform);
    },
}
export default prcsdgroup;