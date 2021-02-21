/** 
 * api接口的统一出口
 */
import currency from '../api/cmmApi/currency';
import fcashdoc from '../api/priceApi/fcashdoc';
import fcashdocitem from '../api/priceApi/fcashdocitem';
import gopcodesystem from '../api/cmmApi/gopcodesystem';
import gsettlemethod from '../api/cmmApi/gsettlemethod';
import identity from '../api/sysAdmin/identity';
import mid_actiontype from '../api/sysAdmin/mid_actiontype';
import mid_gform from '../api/sysAdmin/mid_gform';
import mid_menu from '../api/sysAdmin/mid_menu';
import mid_module from '../api/sysAdmin/mid_module';
import ocompany from '../api/cmmApi/ocompany';
import osdgroup from '../api/cmmApi/osdgroup';
import osdorg from '../api/cmmApi/osdorg';
import ostorage from '../api/cmmApi/ostorage';
import prccltcompany from '../api/priceApi/prccltcompany';
import prccompany from '../api/priceApi/prccompany';
import prccostcenter from '../api/priceApi/prccostcenter';
import prcsdgroup from '../api/priceApi/prcsdgroup';
import prcsdorg from '../api/priceApi/prcsdorg';
import qmslevel from '../api/cmmApi/qmslevel';
import scltgeneral from '../api/cmmApi/scltgeneral';
import slscltproject from '../api/SalesApi/slscltproject';
import slscontracthd from '../api/SalesApi/slscontracthd';
import slssalesorderhd from '../api/SalesApi/slssalesorderhd';
import slssalesorderitem from '../api/SalesApi/slssalesorderitem';
import spricelist from '../api/cmmApi/spricelist';
import vcltcompany from '../api/SalesApi/vcltcompany';

export default {
    currency,
    fcashdoc,
    fcashdocitem,
    gopcodesystem,
    gsettlemethod,
    identity,
    mid_actiontype,
    mid_gform,
    mid_menu,
    mid_module,
    ocompany,
    osdgroup,
    osdorg,
    ostorage,
    prccltcompany,
    prccompany,
    prccostcenter,
    prcsdgroup,
    prcsdorg,
    qmslevel,
    scltgeneral,
    slscontracthd,
    slscltproject,
    slssalesorderhd,
    slssalesorderitem,
    spricelist,
    vcltcompany
}