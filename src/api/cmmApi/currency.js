import base from '@utils/base';
import service from '@utils/request';

const currency = {
    getDataLeftJoinCurrencySet(searchform) {
        return service.get(`${base.iCMMUrl}/currency/GetDataLeftJoinCurrencySet?dateStr=` + searchform.currencydate + "&currency=" + searchform.currency);
    },
}
export default currency;