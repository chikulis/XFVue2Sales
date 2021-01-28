import base from '@utils/base';
import service from '@utils/request';

const fcashdocitem = {
    getDataByDocCode(index, size, sort, order, doccode) {
        return service.post(`${base.iPriceUrl}/fcashdocitem/GetDataByDocCode?page=` + index + '&rows=' + size + '&sort=' + sort + '&order=' + order, { doccode });
    },
    saveData(data) {
        return service.put(`${base.iPriceUrl}/fcashdocitem/SaveData`, data);
    },
    deleteData(doccode, rowid) {
        return service.delete(`${base.iPriceUrl}/fcashdocitem/DeleteData?doccode=` + doccode + '&rowid=' + rowid + '&usercode=');
    },
    getDataOfFGLAccctCodeAccessList(index, size, sort, order, searchform) {
        return service.post(`${base.iPriceUrl}/fcashdocitem/GetDataOfFGLAccctCodeAccessList?page=` + index + '&rows=' + size + '&sort=' + sort + '&order=' + order, searchform);
    },
}
export default fcashdocitem;