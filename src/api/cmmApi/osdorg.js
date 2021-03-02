import base from '@utils/base';
import service from '@utils/request';

const osdorg = {
    getDataByPage(index, size, sort, order, searchform) {
        return service.post(`${base.iCMMUrl}/osdorg/GetDataByPage?page=` + index + '&rows=' + size + '&sort=' + sort + '&order=' + order, searchform);
    },
}
export default osdorg;