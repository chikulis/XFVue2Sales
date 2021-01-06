import base from '@utils/base';
import service from '@utils/request';

const scltgeneral = {
    getDataLeftJoinOSDOrgByPage(index, size, sort, order, searchform) {
        return service.post(`${base.iCMMUrl}/scltgeneral/GetDataLeftJoinOSDOrgByPage?page=` + index +
            '&rows=' + size + '&sort=' + sort + '&order=' + order,  searchform );
    },
}
export default scltgeneral;