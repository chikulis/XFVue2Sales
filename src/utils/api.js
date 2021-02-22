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
import osdgroup from '../api/cmmApi/osdgroup';
import osdorg from '../api/cmmApi/osdorg';
import ostorage from '../api/cmmApi/ostorage';
import prccltcompany from '../api/priceApi/prccltcompany';
import prccompany from '../api/priceApi/prccompany';
import prccostcenter from '../api/priceApi/prccostcenter';
import prcsdgroup from '../api/priceApi/prcsdgroup';
import prcsdorg from '../api/priceApi/prcsdorg';
import qmslevel from '../api/cmmApi/qmslevel';
import salecltcompany from '../api/SalesApi/salecltcompany';
import salecltgeneral from '../api/SalesApi/salecltgeneral';
import salecompany from '../api/SalesApi/salecompany';
import slscltproject from '../api/SalesApi/slscltproject';
import slscontracthd from '../api/SalesApi/slscontracthd';
import slssaledoctype from '../api/SalesApi/slssaledoctype';
import slssalesorderhd from '../api/SalesApi/slssalesorderhd';
import slssalesorderitem from '../api/SalesApi/slssalesorderitem';
import slssaletype from '../api/SalesApi/slssaletype';
import spricelist from '../api/cmmApi/spricelist';

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
    osdgroup,
    osdorg,
    ostorage,
    prccltcompany,
    prccompany,
    prccostcenter,
    prcsdgroup,
    prcsdorg,
    qmslevel,
    salecltcompany,
    salecltgeneral,
    salecompany,
    slscontracthd,
    slscltproject,
    slssaledoctype,
    slssalesorderhd,
    slssalesorderitem,
    slssaletype,
    spricelist
}