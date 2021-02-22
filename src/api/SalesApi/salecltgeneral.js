import base from '@utils/base';
import service from '@utils/request';

const salecltgeneral = {
    getDataLeftJoinOSDOrgByPage(index, size, sort, order, searchform) {
        return service.post(`${base.iSalesUrl}/scltgeneral/GetDataLeftJoinOSDOrgByPage?page=` + index + '&rows=' + size + '&sort=' + sort + '&order=' + order, searchform);
    },
}
export default salecltgeneral;