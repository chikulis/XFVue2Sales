import base from '@utils/base';
import service from '@utils/request';

const scltgeneral = {
    getDataLeftJoinOSDOrg(searchform) {
        return service.get(`${base.iCMMUrl}/scltgeneral/GetDataLeftJoinOSDOrg?cltcode=` + searchform.cltcode + `&cltname=` + searchform.cltname + `&parentcltcode=` + searchform.parentcltcode);
    },
}
export default scltgeneral;