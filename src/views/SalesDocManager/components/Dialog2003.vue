<!-- 委托类别 新增编辑组件 -->
<template>
    <div class="dialog">
        <!-- 弹出层 -->
        <el-dialog
            :title="dialog.title"
            :visible.sync="dialog.show"
            width="69.4%"
            :close-on-click-modal="false"
            :close-on-press-eacape="false"
            :modal-append-to-body="false"
            :validate-on-rule-change="false"
        >
            <!-- 弹出层操作按钮 -->
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialog.show = false">取 消</el-button>
                <el-button type="primary" @click="Importdata()">导入</el-button>
            </div>
            <el-row class="self-margin-down" :gutter="20">
                <div style="margin-left: 10px">
                    <el-button type="primary" icon="el-icon-eleme" @click="fetchTableData()">查询</el-button>
                    <el-form label-width="100px" size="mini" class="formDatastyle">
                        <el-row :gutter="10">
                            <el-col :span="6">
                                <el-form-item label="物料组代码" prop="matgroup">
                                    <el-input v-model="searchform.matgroup" @change="fetchTableData()"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="物料代码" prop="matcode">
                                    <el-input v-model="searchform.matcode" @change="fetchTableData()"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="物料名称" prop="matname" @change="fetchTableData()">
                                    <el-input v-model="searchform.matname"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </div>

                <div style="padding-top: 5px">
                    <CommTable
                        ref="table"
                        :height="400"
                        :tableColumn="tableColumn2"
                        :dataSource="tableData"
                        :showselect="true"
                        :options="commEntity.options"
                        :fetch="fetchTableData"
                        :pagination="commEntity.pagination"
                    ></CommTable>
                </div>
            </el-row>
        </el-dialog>
    </div>
</template>
  
  <script>
import base from '@utils/base'; // 导入接口域名列表
export default {
    // 数据
    data() {
        return {
            // dialog开关
            show: false,
            // 通用数据
            commEntity: this.$api.identity.getCommEntity(),
            //实体类
            dtos: {
                matcode: '',
                matname: '',
                matgroup: ''
            },
            // 表格数据
            tableData: [],

            formid: 0,

            typename: '',

            // 表格字段
            tableColumn2: [
                {
                    field: 'matcode',
                    title: '物料代码',
                    width: 100
                },
                {
                    field: 'matname',
                    title: '物料名称',
                    width: 150
                },
                {
                    field: 'matgroup',
                    title: '物料组代码',
                    width: 150
                },
                {
                    field: 'matgroupname',
                    title: '物料组名称',
                    width: 150
                },
                {
                    field: 'baseuom',
                    title: '基本单位',
                    width: 150
                }
            ],

            // 选中的数据
            clickrow: [],
            // 模块列表信息
            options: [],
            // 查询参数
            searchform: {
                matgroup: '',
                matcode: '',
                matname: '',
                doccode: '' //单据号
            }
        };
    },
    // 页面创建后执行
    created() {
        this.fetchTableData();
    },
    // 父页面传递过来的参数
    props: {
        dialog: Object,
        list: Object
    },

    // 方法
    methods: {
        // 查询按钮事件
        fetchTableData() {
            this.commEntity.options.loading = true;
            this.$api.md_imatgeneral
                .getbypage(
                    this.commEntity.pagination.pageIndex,
                    this.commEntity.pagination.pageSize,
                    this.commEntity.sort,
                    this.commEntity.order,
                    this.searchform.matgroup,
                    this.searchform.matcode,
                    this.searchform.matname
                )
                .then((res) => {
                    this.tableData = res.data.rows;
                    this.commEntity.pagination.total = res.data.total;
                    this.commEntity.options.loading = false;
                });
        },
        //导入数据
        Importdata() {
            var row = this.$refs.table.getSelectRecords();
            if (row[0] == null) {
                //判断是否选中数据
                this.$message({
                    message: '警告哦，未选择数据',
                    type: 'warning',
                    customClass: 'zZindex'
                });
            } else {
                const array = [];
                //实体批量导入需要在里面创建对象
                for (let index = 0; index < row.length; index++) {
                    var dataObj = {};
                    dataObj.matgroup = row[index].matgroup;
                    dataObj.matcode = row[index].matcode;
                    dataObj.matname = row[index].matname;
                    array.push(dataObj);
                }
                this.$api.ppritem.add(this.list.doccode, array).then((res) => {
                    if (res.data.code == 200) {
                        this.$emit('Refresh'); //子组件对父进行刷新方法
                        this.$message.success('成功：' + res.data.message);
                        // return;
                    } else {
                        this.$message.warning('失败：' + res.data.message);
                        // return;
                    }
                    this.dialog.show = false;
                });
            }
        }
    }
};
</script>
  
  