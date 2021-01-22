import base from '@utils/base';
import service from '@utils/request';

const fcashdocitem = {
    getDataByDocCode(index, size, sort, order, doccode) {
        return service.post(`${base.iPriceUrl}/fcashdocitem/GetDataByDocCode?page=` + index + '&rows=' + size + '&sort=' + sort + '&order=' + order, { doccode });
    },
    saveData(data) {
        return service.post(`${base.iPriceUrl}/fcashdocitem/SaveData`, data);
    },
    saveData1111(data) {
        return service.post(`${base.iPriceUrl}/fcashdocitem/GetSqlFuncData`, data);
    },
}
export default fcashdocitem;