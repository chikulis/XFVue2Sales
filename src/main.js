import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import VueI18n from 'vue-i18n';
import { messages } from './views/common/i18n';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
// import './assets/css/theme-green/index.css'; // 浅绿色主题
import './assets/css/icon.css';
import './views/common/directives';
import 'babel-polyfill';
import baseurl from "./utils/base"; // 导入接口域名列表
import api from "./utils/api";
import moment from 'moment';
import 'moment/locale/zh-cn';
import components from '@/utils/components.js'

import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'
import VXETablePluginExportXLSX from 'vxe-table-plugin-export-xlsx'

Vue.use(components);
Vue.use(VXETable)
VXETable.use(VXETablePluginExportXLSX)
Vue.config.productionTip = false;
moment.locale('zh-cn');
Vue.use(VueI18n);
Vue.use(ElementUI, {
    size: 'small'
});
const i18n = new VueI18n({
    locale: 'zh',
    messages
});

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | vue-manage-system`;
    const role = localStorage.getItem('ms_usercode');
    if (!role && to.path !== '/login') {
        next('/login');
    } else if (to.meta.permission) {
        // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
        role === 'admin' ? next() : next('/403');
    } else {
        // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
        if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
            Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
                confirmButtonText: '确定'
            });
        } else {
            next();
        }
    }
});


VXETable.setup({
    // 默认尺寸
    size: 'mini',
    // 版本号，对于某些带数据缓存的功能有用到，上升版本号可以用于重置数据
    version: 0,
    // 所有内容超过隐藏
    showAllOverflow: null,
    // 所有表头内容超过隐藏
    showHeaderAllOverflow: null,
    // 默认快捷菜单
    contextMenu: null,
    // 自定义图标配置
    iconMap: {
        sortAsc: 'vxe-icon--caret-top',
        sortDesc: 'vxe-icon--caret-bottom',
        filter: 'vxe-icon--funnel',
        edit: 'vxe-icon--edit-outline',
        tree: 'vxe-icon--caret-right',
        jumpPrev: 'vxe-icon--d-arrow-left',
        jumpNext: 'vxe-icon--d-arrow-right',
        prevPage: 'vxe-icon--arrow-left',
        nextPage: 'vxe-icon--arrow-right'
    },
    // 默认 tooltip 主题样式
    tooltipConfig: {
        zIndex: 3000,
        theme: 'dark'
    },
    // 默认分页参数
    pager: {
        pageSize: 100,
        pagerCount: 7,
        pageSizes: [50, 100, 10000, 100000],
        layouts: ['PrevJump', 'PrevPage', 'Jump', 'PageCount', 'NextPage', 'NextJump', 'Sizes', 'Total']
    },
    // 默认工具栏参数
    toolbar: {
        setting: false,
        buttons: []
    },
    // 默认优化配置项
    optimization: {
        animat: true,
        // 当列大于 40 条时自动启用横向 X 滚动渲染
        scrollX: {
            gt: 40,
            oSize: 5,
            rSize: 16
        },
        // 当数据大于 500 条时自动启用纵向 Y 滚动渲染
        scrollY: {
            gt: 500,
            oSize: 20,
            rSize: 80
        }
    }
})

Vue.prototype.$baseurl = baseurl
Vue.prototype.$api = api
Vue.prototype.$modal = VXETable.modal
Vue.prototype.$moment = moment
// Vue.prototype.$modal = VXETable.modal
// Vue.prototype.$echarts = echarts

new Vue({
    router,
    i18n,
    render: h => h(App)
}).$mount('#app');
