import base from '@utils/base'; // 导入接口域名列表
// import service from '@service/https'; // 导入http中创建的service实例
import service from '@utils/request'; // 导入http中创建的service实例

const mid_gform = {
    // 获取目录数据
    getall() {
        return service.get(`${base.sysAdminUrl}/mid_gform/getall?dbid=a.weberp`);
    },
    getdata(applicationid) {
        return service.get(`${base.sysAdminUrl}/mid_gform/getdata?dbid=a.weberp&applicationid=`+applicationid);
    },
}
export default mid_gform;