import base from '@utils/base';
import service from '@utils/request';

const fcashdoc = {
    getDataLeftJoinSPricelistByPage(index, size, sort, order, searchform) {
        return service.post(`${base.iPriceUrl}/fcashdoc/GetDataByPage?page=` + index + '&rows=' + size + '&sort=' + sort + '&order=' + order, searchform);
    },
}   
export default fcashdoc;