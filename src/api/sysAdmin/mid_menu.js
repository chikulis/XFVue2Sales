/**
 * mid_menu 接口
 */

import base from '@utils/base'; // 导入接口域名列表
// import service from '@service/https'; // 导入http中创建的service实例
import service from '@utils/request'; // 导入http中创建的service实例

const mid_menu = {
    // 获取目录数据
    getall() {
        return service.get(`${base.sysAdminUrl}/mid_menu/getall?dbid=a.weberp`);
    },
    getdata(applicationid) {
        return service.get(`${base.sysAdminUrl}/mid_menu/getdata?dbid=a.weberp&applicationid=`+applicationid);
    },
    // 获取目录数据
    getbyUsr(applicationid, usercode, moduleid = '') {
        return service.get(`${base.sysAdminUrl}/mid_menu/GetbyUsr?applicationid=` + applicationid + '&usercode=' + usercode + '&moduleid=' + moduleid);
    },

    // 查询菜单数据
    getjoingform(applicationid, moduleid) {
        return service.get(`${base.sysAdminUrl}/mid_menu/getjoingform?moduleid=` + moduleid + '&applicationid=' + applicationid);
    },

    // 查询单条数据
    getSingle(applicationid, menuid) {
        return service.get(`${base.sysAdminUrl}/mid_menu?menuid=` + menuid + '&applicationid=' + applicationid);
    },

    // 新增数据
    addMenu(DtoMid_MenuAdd) {
        return service.post(`${base.sysAdminUrl}/mid_menu/`, DtoMid_MenuAdd);
    },

    // 保存数据
    saveMenu(formdata) {
        return service.put(`${base.sysAdminUrl}/mid_menu/`, formdata);
    },

    // 删除数据
    delMenu(applicationid, menuid) {
        return service.delete(`${base.sysAdminUrl}/mid_menu/deldata?menuid=` + menuid + '&applicationid=' + applicationid);
    },

    // 新增实体类
    DtoMid_MenuAdd: {
        menuname: '',
        formid: 0,
        parentmenu: 0,
        moduleid: '',
        memo: '',
        seq: 0,
        iconclass: '',
        applicationid: ''
    },

    // 修改实体类
    DtoMid_MenuUpdate: {
        menuid: '',
        menuname: '',
        formid: 0,
        parentmenu: 0,
        moduleid: '',
        memo: '',
        seq: 0,
        iconclass: '',
        applicationid: ''
    },
}

export default mid_menu;