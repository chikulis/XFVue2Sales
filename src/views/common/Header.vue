<template>
    <div class="header">
        <!-- 折叠按钮 -->
        <div class="collapse-btn" @click="collapseChage">
            <i v-if="!collapse" class="el-icon-s-fold"></i>
            <i v-else class="el-icon-s-unfold"></i>
        </div>
        <div class="logo">销售系统</div>
        <div class="header-left">
            <el-menu
                default-active="0"
                mode="horizontal"
                background-color="#242f42"
                text-color="#fff"
                active-text-color="#ffd04b"
            >
                <template v-for="(item, i ) in items">
                <el-menu-item
                    v-if="i < 7"
                    :index="''+item.seqn"
                    :key="item.moduleid"
                    @click="handleSelect(item.moduleid)"
                >{{item.modulename}}</el-menu-item>
                </template>
                <el-submenu index="2">
                <template slot="title">更多模块</template>
                <template v-for="(item, i ) in items">
                    <el-menu-item
                    v-if="i > 6"
                    :index="''+item.seqn"
                    :key="item.moduleid"
                    @click="handleSelect(item.moduleid)"
                    >{{item.modulename}}</el-menu-item>
                </template>
                </el-submenu>
            </el-menu>
            </div>
        <div class="header-right">
            <div class="header-user-con">
                  <!-- 输入框 -->
                <el-input
                style="width:150px;padding-right:20px;"
                @keyup.enter.native="go"
                size="mini"
                v-model="searchformid"
                placeholder="请输入功能号"
                ></el-input>
                <!-- 全屏显示 -->
                <div class="btn-fullscreen" @click="handleFullScreen">
                    <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
                        <i class="el-icon-rank"></i>
                    </el-tooltip>
                </div>
                <!-- 消息中心 -->
                <div class="btn-bell">
                    <el-tooltip
                        effect="dark"
                        :content="message?`有${message}条未读消息`:`消息中心`"
                        placement="bottom"
                    >
                        <router-link to="/tabs">
                            <i class="el-icon-bell"></i>
                        </router-link>
                    </el-tooltip>
                    <span class="btn-bell-badge" v-if="message"></span>
                </div>
                <!-- 用户头像 -->
                <div class="user-avator">
                    <img src="../../assets/img/img.jpg" />
                </div>
                <!-- 用户名下拉菜单 -->
                <el-dropdown class="user-name" trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link">
                        {{username}}
                        <i class="el-icon-caret-bottom"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <a href="https://github.com/lin-xin/vue-manage-system" target="_blank">
                            <el-dropdown-item>项目仓库</el-dropdown-item>
                        </a>
                        <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>
<script>
import bus from '../common/bus';
export default {
    data() {
        return {
            collapse: false,
            fullscreen: false,
            name: 'linxin',
            message: 2,
            searchformid:"",
            items:[]
        };
    },
    computed: {
        username() {
            let username = localStorage.getItem('ms_usercode');
            return username ? username : this.name;
        }
    },
    methods: {
        // 用户名下拉菜单选择事件
        handleCommand(command) {
            if (command == 'loginout') {
                localStorage.removeItem('ms_usercode');
                 // 清除token
                localStorage.removeItem("eleToken");
                localStorage.removeItem("eleApplication");
                localStorage.removeItem("eleModule");
                localStorage.removeItem("eleMenu");
                localStorage.removeItem("eleUser");
                localStorage.removeItem("eleRouter");
                localStorage.removeItem("eleAction");
                this.$router.push('/login');
            }
        },
        // 侧边栏折叠
        collapseChage() {
            this.collapse = !this.collapse;
            bus.$emit('collapse', this.collapse);
        },
        // 全屏事件
        handleFullScreen() {
            let element = document.documentElement;
            if (this.fullscreen) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            } else {
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.webkitRequestFullScreen) {
                    element.webkitRequestFullScreen();
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if (element.msRequestFullscreen) {
                    // IE11
                    element.msRequestFullscreen();
                }
            }
            this.fullscreen = !this.fullscreen;
        },
    
      // 主导航点击事件
    handleSelect(index) {
      bus.$emit("tip", index);
    },
    // 路由跳转
    go() {
      if (this.searchformid == "") {
        this.$message.warning("请输入功能号!");
        return;
      }
      var r = JSON.parse(localStorage.eleRouter || "[]");

      var url = r.filter(x => x.formid === Number(this.searchformid));

      this.$router.push({
        name: "" + Number(url[0].formid) + "",
        params: { formid: Number(url[0].formid) }
      });
    },
    // 获取主导航
    getModule() {
      setTimeout(this.pause, 1000);
    },
    pause() {
      this.items = JSON.parse(localStorage.eleModule || "[]");
      bus.$emit("tip", "SalesBase");
    }
    },
    mounted() {
        if (document.body.clientWidth < 1500) {
            this.collapseChage();
        }
        this.items = JSON.parse(localStorage.eleModule || "[]");
    },
    created() {
    this.getModule();
  },
};
</script>
<style scoped>
.header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 22px;
    color: #fff;
}
.collapse-btn {
    float: left;
    padding: 0 21px;
    cursor: pointer;
    line-height: 70px;
}
.header .logo {
    float: left;
    width: 250px;
    line-height: 70px;
}
.header-left {
    float: left;
    padding-right: 50px;
}
.header-right {
    float: right;
    padding-right: 50px;
}
.header-user-con {
    display: flex;
    height: 70px;
    align-items: center;
}
.btn-fullscreen {
    transform: rotate(45deg);
    margin-right: 5px;
    font-size: 24px;
}
.btn-bell,
.btn-fullscreen {
    position: relative;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 15px;
    cursor: pointer;
}
.btn-bell-badge {
    position: absolute;
    right: 0;
    top: -2px;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: #f56c6c;
    color: #fff;
}
.btn-bell .el-icon-bell {
    color: #fff;
}
.user-name {
    margin-left: 10px;
}
.user-avator {
    margin-left: 20px;
}
.user-avator img {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.el-dropdown-link {
    color: #fff;
    cursor: pointer;
}
.el-dropdown-menu__item {
    text-align: center;
}
</style>
