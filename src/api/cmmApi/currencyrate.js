import base from '@utils/base';
import service from '@utils/request';

const currency = {
    getGLCurrencyRate(searchform) {
        return service.get(`${base.iCMMUrl}/currency/GetGLCurrencyRate?dateStr=` + searchform.settlemethodid);
    },
}
export default currency;