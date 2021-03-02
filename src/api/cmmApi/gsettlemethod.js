import base from '@utils/base';
import service from '@utils/request';

const gsettlemethod = {
    getDataByPage(index, size, sort, order, searchform) {
        return service.post(`${base.iCMMUrl}/gsettlemethod/GetDataByPage?page=` + index + '&rows=' + size + '&sort=' + sort + '&order=' + order, searchform);
    },
}
export default gsettlemethod;