import base from '@utils/base';
import service from '@utils/request';

const gopcodesystem = {
    getDataByPage(index, size, sort, order, searchform) {
        return service.post(`${base.iCMMUrl}/gopcodesystem/GetDataByPage?page=` + index + '&rows=' + size + '&sort=' + sort + '&order=' + order, searchform);
    },
}
export default gopcodesystem;