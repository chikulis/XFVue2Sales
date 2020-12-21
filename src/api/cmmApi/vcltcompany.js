import base from '@utils/base';
import service from '@utils/request';

const vcltcompany = {
    getdata(searchform) {
        return service.get(`${base.sysAdminUrl}/scltgeneral/GetVcltCompanyData?companyid=` + searchform.companyid
            + `&parentcltcode=` + searchform.parentcltcode + `&parentcltname=` + searchform.parentcltname
            + `&cltcode=` + searchform.cltcode);
    },
}
export default vcltcompany;