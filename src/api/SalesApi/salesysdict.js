import base from '@utils/base';
import service from '@utils/request';

const salesysdict = {
    getDataByDictId(dictid) {
        return service.post(`${base.iSalesUrl}/_sysdict/GetDataByDictId`, { dictid });
    },
}
export default salesysdict;