<!-- 表格组件      show-summary-->
<template>
    <div>
        <vxe-table
            ref="table"
            border
            :show-footer="showfooter"
            :footer-method="footerMethod"
            highlight-current-row
            resizable
            :data.sync="dataSource"
            :height="height || this.tableHeight"
            :loading="options.loading"
            :max-height="options.maxHeight"
            :row-class-name="rowClassName"
            :edit-rules="validrules"
            :edit-config="{ trigger: 'manual', mode: 'row', autoClear: false, showStatus: true }"
            :header-cell-class-name="headerCellClassName"
            @header-cell-click="headerCellClickEvent"
            @header-cell-dblclick="headerCellDBLClickEvent"
            @cell-click="cellClickEvent"
            @cell-dblclick="cellDBLClickEvent"
            @cell-mouseenter="cellMouseenterEvent"
            @cell-mouseleave="cellMouseleaveEvent"
            :immediate="true"
            :Operation-status="operationstate"
            :copystate="copystate"
        >
            <vxe-table-column v-if="showindex || false" type="index" align="center" width="50"></vxe-table-column>
            <vxe-table-column v-if="showradio || false" type="radio" title="单选" align="center" width="50"></vxe-table-column>
            <vxe-table-column v-if="showselect || false" type="selection" align="center" width="50"></vxe-table-column>

            <template v-for="(column, index) in tableColumn">
                <vxe-table-column
                    show-header-overflow
                    show-overflow
                    :sortable="column.sortable || true"
                    :key="index"
                    :field="column.field"
                    :type="column.type"
                    :title="column.title"
                    :align="column.align || 'center'"
                    :width="column.width"
                    :formatter="column.formatter"
                    :slots="column.slots"
                    :fixed="column.fixed"
                    :edit-render="column.edit"
                    :Operation-status="operationstate"
                    :copystate="copystate"
                    :immediate="true"
                >
                    <template slot-scope="scope">
                        <template v-if="!column.render">{{ scope.row[column.field] }}</template>

                        <!-- render 自定义渲染Dom -->
                        <template v-else>
                            <RenderDom :row="scope.row" :index="index" :render="column.render" />
                        </template>

                        <!-- render button -->
                        <template v-if="column.button">
                            <template v-for="(btn, i) in column.group">
                                <el-button
                                    :key="i"
                                    :type="btn.type"
                                    :size="btn.size || 'mini'"
                                    :icon="btn.icon"
                                    :disabled="btn.disabled"
                                    :plain="btn.plain"
                                    @click.stop="btn.onClick(scope.row, scope.$index)"
                                    >{{ btn.name }}</el-button
                                >
                            </template>
                        </template>

                        <!-- slot 你可以其他常用项 -->
                    </template>

                    <!-- render 自定义三点控件调用组件 -->
                    <!-- 每一个控件应该调用对应的自定义方法 field + - editfunc -->
                    <template v-if="column.editrender" v-slot:edit="{ row }">
                        <el-input v-model="row[column.field]">
                            <i slot="suffix" @click="editfunc(column.field, row)" class="el-input__icon el-icon-search"></i>
                        </el-input>
                    </template>
                </vxe-table-column>
            </template>
            <vxe-table-column v-if="operationstate == false" fixed="right" title="操作" width="180">
                <template v-slot="{ row }">
                    <template v-if="$refs.table.isActiveByRow(row)">
                        <el-button type="success" plain icon="el-icon-check" @click="fullValidEvent(row)">保存</el-button>
                        <el-button type="info" plain icon="el-icon-circle-close" @click="cancelRowEvent(row)">取消</el-button>
                    </template>
                    <template v-else>
                        <el-button type="primary" plain icon="el-icon-edit" @click="editRowEvent(row)">编辑</el-button>
                        <el-button v-if="copystate == true" type="warning" plain icon="el-icon-camera" @click="copyRowEvent(row)"
                            >复制</el-button
                        >
                    </template>
                </template>
            </vxe-table-column>
        </vxe-table>

        <!-- 分页组件 -->
        <vxe-pager
            v-if="pagination"
            :current-page="pagination.pageIndex"
            :page-size="pagination.pageSize"
            :total="pagination.total"
            style="text-align: right; color: black; height: 50px"
            :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
        ></vxe-pager>
    </div>
</template>

<script>
export default {
    // 数据
    data() {
        return {
            tableHeight: 300, //高度
            type: 'update',
            canceltype: ''
        };
    },

    // 计算属性
    components: {
        RenderDom: {
            functional: true, // 函数式组件 - 无 data 和 this 上下文 => better render
            props: {
                row: Object,
                index: Number,
                render: Function
            },
            render(createElement, ctx) {
                const { row, index } = ctx.props;
                return ctx.props.render(row, index);
            }
        }
    },

    // 传递参数
    props: {
        dataSource: Array, // 表格数据（必传）
        tableColumn: Array, // 表格字段（必传）
        fetch: Function, // 获取数据的函数
        pagination: Object, // 分页，不传则不显示
        showindex: Boolean, // 是否显示序号
        showradio: Boolean,
        showselect: Boolean,
        showfooter: Boolean, // 是否显示底部
        footerMethod: Function,
        height: Number,
        validrules: Object, // 验证规则
        options: Object, // 表格参数控制 maxHeight、stripe 等等...
        operationstate: Boolean, //操作栏状态   false为打开  true为关闭
        copystate: Boolean // true 为显示复制按钮
    },

    // 装载完成
    mounted: function () {
        this.$nextTick(function () {
            this.tableHeight = window.innerHeight - this.$refs.table.$el.offsetTop - 200;

            // 监听窗口大小变化
            let self = this;
            window.onresize = function () {
                self.tableHeight = window.innerHeight - self.$refs.table.$el.offsetTop - 200;
            };
        });
    },

    // 创建完成
    created() {
        // 传入的options覆盖默认设置
        this.$parent.options = Object.assign(
            {
                maxHeight: 300,
                stripe: true, // 是否为斑马纹
                border: true
            },
            this.options
        );

        this.options.initTable && this.fetch();
    },
    // 操作方法
    methods: {
        // 调用父页面的方法
        editfunc(field, row) {
            this.$emit(field + '_edit', { field, row }, event);
        },

        // 行颜色样式
        rowClassName({ row, rowIndex }) {
            switch (row.docstatus) {
                case 0:
                    return '';
                    break;
                case 50:
                    return '';
                case 80:
                    return 'row-small-blue';
                case 100:
                    return 'row-yellow';
                case 150:
                    return 'row-green';
                default:
                    break;
            }
            // if (row.docstatus >= 50) {
            //   return "row-yellow";
            // } else {
            //   return "";
            // }
        },

        // 表头样式
        headerCellClassName({ column, columnIndex }) {
            return 'col-style';
        },

        // 分页
        searchEvent() {
            this.pagination.pageIndex = 1;
            this.fetch();
        },

        // 页码更改
        handleSizeChange(pageSize) {
            this.pagination.pageSize = pageSize;
            this.fetch();
        },

        // 页数更改
        handleCurrentChange(currentPage) {
            this.pagination.pageIndex = currentPage;
            this.fetch();
        },

        // 表头单元格点击
        headerCellClickEvent({ row, rowIndex, column, columnIndex }, event) {
            this.$emit('headerCellClickEvent', { row, rowIndex, column, columnIndex }, event);
        },

        // 表头单元格双击
        headerCellDBLClickEvent({ row, rowIndex, column, columnIndex }, event) {
            this.$emit('headerCellDBLClickEvent', { row, rowIndex, column, columnIndex }, event);
        },

        // 单元格点击
        cellClickEvent({ row, rowIndex, column, columnIndex }, event) {
            this.$emit('cellClickEvent', { row, rowIndex, column, columnIndex }, event);
        },

        // 单元格双击
        cellDBLClickEvent({ row, rowIndex, column, columnIndex }, event) {
            this.$emit('cellDBLClickEvent', { row, rowIndex, column, columnIndex }, event);
        },

        // 鼠标进入单元格
        cellMouseenterEvent({ row, rowIndex, column, columnIndex }, event) {
            this.$emit('cellMouseenterEvent', { row, rowIndex, column, columnIndex }, event);
        },

        // 鼠标离开单元格
        cellMouseleaveEvent({ row, rowIndex, column, columnIndex }, event) {
            this.$emit('cellMouseleaveEvent', { row, rowIndex, column, columnIndex }, event);
        },

        // 全选数据
        setAllSelection() {
            this.$refs.table.setAllSelection(true);
        },

        // 取消全选
        clearSelection() {
            this.$refs.table.clearSelection();
        },

        // 获取已经选中的数据
        getSelectRecords() {
            return this.$refs.table.getSelectRecords();
        },

        // 导出csv文件
        exportCsvEvent() {
            this.$refs.table.exportCsv();
        },

        // 编辑按钮
        editRowEvent(row) {
            this.type = 'update';

            this.$refs.table.setActiveRow(row);
            this.canceltype = 'update';
        },

        // 复制按钮
        copyRowEvent(row) {
            this.$emit('copyRowEvent', { row }, event);
        },

        // 保存按钮
        saveRowEvent(row, type) {
            type = this.type;
            this.$refs.table.clearActived().then(() => {
                this.$emit('saveRowEvent', { row, type }, event);
            });
        },

        // 取消按钮
        cancelRowEvent(row) {
            const xTable = this.$refs.table;
            xTable.clearActived().then(() => {
                // 还原行数据
                if (this.type == 'add') {
                    xTable.remove(row);
                } else if (this.type == 'update') {
                    xTable.revertData(row);
                }
            });
        },

        // 获取单选的数据
        getRadioRow() {
            return JSON.stringify(this.$refs.table.getRadioRow());
        },

        // 获取高亮行
        getCurrentEvent() {
            return this.$refs.table.getCurrentRow();
        },

        a() {
            this.$message.success('成功');
        },

        // 新增数据
        insertEvent(row, type) {
            this.type = 'add';
            this.$refs.table.insertAt(row, -1).then(({ row }) => this.$refs.table.setActiveRow(row));
            this.canceltype = 'add';
        },
        // 验证
        fullValidEvent(row) {
            if (this.validrules == undefined) {
                this.saveRowEvent(row);
                return;
            }
            this.$refs.table.fullValidate((valid, errMap) => {
                if (valid) {
                    this.saveRowEvent(row);
                } else {
                    let msgList = [];
                    Object.values(errMap).forEach((errList) => {
                        errList.forEach((params) => {
                            let { rowIndex, column, rules } = params;
                            rules.forEach((rule) => {
                                msgList.push(`第 ${rowIndex} 行 ${column.title} 校验错误：${rule.message}`);
                            });
                        });
                    });
                    this.$XModal.message({
                        status: 'error',
                        message: () => {
                            return [
                                <div class="red" style="max-height: 400px;overflow: auto;">
                                    {msgList.map((msg) => {
                                        return <div>{msg}</div>;
                                    })}
                                </div>
                            ];
                        }
                    });
                }
            });
        }
    }
};
</script>

<style>
</style>