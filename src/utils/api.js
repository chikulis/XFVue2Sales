/** 
 * api接口的统一出口
 */

import mid_menu from '../api/sysAdmin/mid_menu'; 
import mid_module from '../api/sysAdmin/mid_module'; 
import mid_gform from '../api/sysAdmin/mid_gform'; 
import mid_actiontype from '../api/sysAdmin/mid_actiontype'; 
import ocompany from '../api/SalesApi/ocompany'; 
import scltgeneral from '../api/SalesApi/scltgeneral';
import identity from '../api/sysAdmin/identity'; 
import slssalesorderhd from '../api/SalesApi/slssalesorderhd'; 
import slssalesorderitem from '../api/SalesApi/slssalesorderitem'; 
export default {
    mid_menu,
    mid_module,
    mid_gform,
    mid_actiontype,
    ocompany,
    scltgeneral,
    identity,
    slssalesorderhd,
    slssalesorderitem
}