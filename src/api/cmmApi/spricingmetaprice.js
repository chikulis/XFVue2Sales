import base from '@utils/base';
import service from '@utils/request';

const spricingmetaprice = {
    getBilledPrice(searchform) {
        return service.post(`${base.iCMMUrl}/spricingmetaprice/GetBilledPrice`, searchform);
    },
    getBilledPriceAvg(searchform) {
        return service.post(`${base.iCMMUrl}/spricingmetaprice/GetBilledPriceAvg`, searchform);
    },
}
export default spricingmetaprice;