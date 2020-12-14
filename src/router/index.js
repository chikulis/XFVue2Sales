// import Vue from 'vue';
// import Router from 'vue-router';

// Vue.use(Router);

// export default new Router({
//     routes: [
//         {
//             path: '/',
//             redirect: '/dashboard'
//         },
//         {
//             path: '/',
//             component: () => import(/* webpackChunkName: "home" */ '../views/common/Home.vue'),
//             meta: { title: '自述文件' },
//             children: [
//                 {
//                     path: '/dashboard',
//                     component: () => import(/* webpackChunkName: "dashboard" */ '../views/page/Dashboard.vue'),
//                     meta: { title: '系统首页' }
//                 },
//                 {
//                     path: '/icon',
//                     component: () => import(/* webpackChunkName: "icon" */ '../views/page/Icon.vue'),
//                     meta: { title: '自定义图标' }
//                 },
//                 {
//                     path: '/table',
//                     component: () => import(/* webpackChunkName: "table" */ '../views/page/BaseTable.vue'),
//                     meta: { title: '基础表格' }
//                 },
//                 {
//                     path: '/tabs',
//                     component: () => import(/* webpackChunkName: "tabs" */ '../views/page/Tabs.vue'),
//                     meta: { title: 'tab选项卡' }
//                 },
//                 {
//                     path: '/form',
//                     component: () => import(/* webpackChunkName: "form" */ '../views/page/BaseForm.vue'),
//                     meta: { title: '基本表单' }
//                 },
//                 {
//                     // 富文本编辑器组件
//                     path: '/editor',
//                     component: () => import(/* webpackChunkName: "editor" */ '../views/page/VueEditor.vue'),
//                     meta: { title: '富文本编辑器' }
//                 },
//                 {
//                     // markdown组件
//                     path: '/markdown',
//                     component: () => import(/* webpackChunkName: "markdown" */ '../views/page/Markdown.vue'),
//                     meta: { title: 'markdown编辑器' }
//                 },
//                 {
//                     // 图片上传组件
//                     path: '/upload',
//                     component: () => import(/* webpackChunkName: "upload" */ '../views/page/Upload.vue'),
//                     meta: { title: '文件上传' }
//                 },
//                 {
//                     // vue-schart组件
//                     path: '/charts',
//                     component: () => import(/* webpackChunkName: "chart" */ '../views/page/BaseCharts.vue'),
//                     meta: { title: 'schart图表' }
//                 },
//                 {
//                     // 拖拽列表组件
//                     path: '/drag',
//                     component: () => import(/* webpackChunkName: "drag" */ '../views/page/DragList.vue'),
//                     meta: { title: '拖拽列表' }
//                 },
//                 {
//                     // 拖拽Dialog组件
//                     path: '/dialog',
//                     component: () => import(/* webpackChunkName: "dragdialog" */ '../views/page/DragDialog.vue'),
//                     meta: { title: '拖拽弹框' }
//                 },
//                 {
//                     // 国际化组件
//                     path: '/i18n',
//                     component: () => import(/* webpackChunkName: "i18n" */ '../views/page/I18n.vue'),
//                     meta: { title: '国际化' }
//                 },
//                 {
//                     // 权限页面
//                     path: '/permission',
//                     component: () => import(/* webpackChunkName: "permission" */ '../views/page/Permission.vue'),
//                     meta: { title: '权限测试', permission: true }
//                 },
//                 {
//                     path: '/404',
//                     component: () => import(/* webpackChunkName: "404" */ '../views/page/404.vue'),
//                     meta: { title: '404' }
//                 },
//                 {
//                     path: '/403',
//                     component: () => import(/* webpackChunkName: "403" */ '../views/page/403.vue'),
//                     meta: { title: '403' }
//                 },
//                 {
//                     path: '/donate',
//                     component: () => import(/* webpackChunkName: "donate" */ '../views/page/Donate.vue'),
//                     meta: { title: '支持作者' }
//                 }
//             ]
//         },
//         {
//             path: '/login',
//             component: () => import(/* webpackChunkName: "login" */ '../views/page/Login.vue'),
//             meta: { title: '登录' }
//         },
//         {
//             path: '*',
//             redirect: '/404'
//         }
//     ]
// });


import Vue from 'vue';
import Router from 'vue-router';
import api from "@utils/api";
import base from "@utils/base"; // 导入接口域名列表

Vue.use(Router);

// 设置通用引用组件
const _import = (file,) => require('@views/' + file + '.vue').default

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

//全局路由(无需嵌套)
const globalRoutes = [
    {
        path: '/',
        redirect: '/dashboard'
    },
    {
        name: 'login',
        path: '/login',
        component: _import('Login'),
        meta: { title: '登录页' }
    },
]

//主入口路由(需嵌套整体布局页面)
const mainRoutes = {
    path: '/',
    component: () => import('../views/common/Home.vue'),
    meta: { title: '主入口' },
    children: []
}
//实例化
const router = new Router({
    mode: 'hash',
    scrollBehavior: () => ({ y: 0 }),
    isAdd: false, //是否已经添加动态(菜单)路由
    routes: globalRoutes.concat(mainRoutes)
})

// 动态加载菜单路由
router.beforeEach((to, from, next) => { //添加动态(菜单)路由

    // 登录的时候重新加载路由
    if (from.name == "login") {
        // var user = JSON.parse(localStorage.eleUser || "[]");
        var user=localStorage.ms_usercode;
        if (user == undefined || user == "") {
            router.push("/login");
        } else {
            var eleRouter=localStorage.eleRouter;
            if(eleRouter==undefined||user=="")
            {
               // api.mid_gform.getjoinusercode(base.applicationid, user.usercode).then(res => {
                api.mid_gform.getdata(base.applicationid).then(res => {

                    var datas = res.rows;
                    localStorage.setItem("eleRouter", JSON.stringify(datas || "[]"));

                addDynamicMenu(datas)

                next({ ...to, replace: true })


            }).catch(function (error) {

                console.log(error)

            });
        }
        // else
        // {
        //     addDynamicMenu(eleRouter)

        //     next({ ...to, replace: true }) 
        // }
        }

    }

    if ((router.options.isAdd || isGlobalRoutes(to))) { //判断是否已经添加动态路由,或者当前为全局路由的时候。 直接访问
        next()
    } else {

        // var user = JSON.parse(localStorage.eleUser || "[]");
        var user=localStorage.ms_usercode;
        if (user == undefined || user == "") {
            router.push("/login");
        } else {

                api.mid_gform.getdata(base.applicationid).then(res => {
                //api.ocompany.getsingle("xf50").then(res => {

                var datas = res.rows;
                localStorage.setItem("eleRouter", JSON.stringify(datas || "[]"));
                    addDynamicMenu(datas)
    
                    next({ ...to, replace: true })
    
                }).catch(function (error) {
    
                    console.log(error)
    
                });
            // api.mid_gform.getjoinusercode(base.applicationid, user.usercode).then(res => {

            //     var datas = res.data;

            //     localStorage.setItem("eleRouter", JSON.stringify(datas || '[]')); //存储动态路由到ls

            //     addDynamicMenu(datas)

            //     next({ ...to, replace: true })

            // }).catch(function (error) {

            //     console.log(error)

            // });
        }


    }

})


// 判断当前是否全局路由
function isGlobalRoutes(to) {
    for (let i in globalRoutes) {
        if (globalRoutes[i].path == to.path) {
            return true;
        }
    }
    return false;
}

// 添加动态(菜单)路， 参数menu：菜单列表
function addDynamicMenu(menu = []) {

    var routes = [];

    // 添加路由
    // routes.push({ name: 'home', path: '/home', component: _import('Home'), name: 'home', meta: { title: '工作台' } });
    routes.push({ name: '404', path: '/404', component: _import('404'), name: '404', meta: { title: '未知页' } });
    routes.push({ path: '/dashboard', component: () => import('../views/Dashboard.vue'), meta: { title: '系统首页' } })
    // routes.push({ path: '/', redirect: '/home'});

    for (let i in menu) {
        var route = {
            name: menu[i].formid,
            path: '/' + menu[i].formid,
            component: _import(menu[i].moduleid + '/' + menu[i].progformname),
            meta: { title: menu[i].formname }
        }

        routes.push(route)
    }

    mainRoutes.children = routes
    router.addRoutes([ //vue-routers2.2版本以上才支持。
        mainRoutes,
        { path: '*', redirect: '/404' }
    ])
    router.options.isAdd = true
}

export default router