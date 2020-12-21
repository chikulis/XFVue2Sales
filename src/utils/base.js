/**
 * 接口域名的管理
 */
const base = {

    // 指向系统标识
    applicationid: 'salesAssets',

    // 通用DBID
    basedata: 'XF.HRMS',

    // 报表文件地址
    report: 'http://192.168.2.204:3001/report',

    // 正式接口
    // sysAdminUrl: 'http://mt.xingfa.com:8501/sysadminapi/api',
    // identityUrl: 'http://mt.xingfa.com:8501/sysadminapi',

    // itoolsurl: 'http://md.xingfa.com:8504/api/api',

    //https://localhost:44333/api/mid_menu/getall?dbid=a.weberp

    // 本地测试接口
    iCMMUrl: 'https://localhost:5003/api',
    sysAdminUrl: 'https://localhost:5001/api',
    identityUrl: 'https://localhost:5001/api',
    iSalesUrl: 'https://localhost:5001/api',
    // itoolsurl: 'http://192.168.2.199:90/api'

}

export default base;