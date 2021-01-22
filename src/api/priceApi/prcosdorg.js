import base from '@utils/base';
import service from '@utils/request';

const prcosdorg = {
    getDataByPage(index, size, sort, order, searchform) {
        return service.post(`${base.iPriceUrl}/osdorg/GetDataByPage?page=` + index + '&rows=' + size + '&sort=' + sort + '&order=' + order, searchform);
    },
}
export default prcosdorg;