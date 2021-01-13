import base from '@utils/base';
import service from '@utils/request';

const fcashdoc = {
    getDataByPage(index, size, sort, order, searchform) {
        return service.post(`${base.iPriceUrl}/fcashdoc/GetDataByPage?page=` + index + '&rows=' + size + '&sort=' + sort + '&order=' + order, searchform);
    },
    getDataByDocCode(doccode) {
        return service.get(`${base.iPriceUrl}/fcashdoc/GetDataByDocCode?doccode=` + doccode);
    },
}
export default fcashdoc;