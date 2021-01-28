import base from '@utils/base';
import service from '@utils/request';

const fcashdoc = {
    getDataByPage(index, size, sort, order, searchform) {
        return service.post(`${base.iPriceUrl}/fcashdoc/GetDataByPage?page=` + index + '&rows=' + size + '&sort=' + sort + '&order=' + order, searchform);
    },
    getDataByDocCode(doccode) {
        return service.get(`${base.iPriceUrl}/fcashdoc/GetDataByDocCode?doccode=` + doccode);
    },
    saveData(data) {
        return service.post(`${base.iPriceUrl}/fcashdoc/SaveData`, data);
    },
    confirmDoc(doccode, username) {
        return service.post(`${base.iPriceUrl}/fcashdoc/ConfirmDoc`, { doccode, username });
    },
    blscrapDoc(doccode) {
        return service.post(`${base.iPriceUrl}/fcashdoc/BlscrapDoc`, { doccode });
    },
    cancelConfirmDoc(doccode, username) {
        return service.post(`${base.iPriceUrl}/fcashdoc/CancelConfirmDoc`, { doccode, username });
    },
    getDataOfCashAcctount(index, size, sort, order, searchform) {
        return service.post(`${base.iPriceUrl}/fcashdoc/GetDataOfCashAcctount?page=` + index + '&rows=' + size + '&sort=' + sort + '&order=' + order, searchform);
    },
    getDataOfGLCurrencyRate(index, size, sort, order, searchform) {
        return service.post(`${base.iPriceUrl}/fcashdoc/GetDataOfGLCurrencyRate?page=` + index + '&rows=' + size + '&sort=' + sort + '&order=' + order, searchform);
    },
}
export default fcashdoc;