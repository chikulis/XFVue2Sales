import base from '@utils/base';
import service from '@utils/request';

const prccostcenter = {
    getDataByPage(index, size, sort, order, searchform) {
        return service.post(`${base.iPriceUrl}/v_ocostcenter/GetDataByPage?page=` + index + '&rows=' + size + '&sort=' + sort + '&order=' + order, searchform);
    },
    getDataByCccode(searchform) {
        return service.post(`${base.iPriceUrl}/v_ocostcenter/GetDataByCccode`, searchform);
    },
}
export default prccostcenter;