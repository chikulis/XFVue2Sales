<template>
  <div class="dialog">
    <!-- 弹出层 -->
    <el-dialog
      :title="dialog.title"
      :visible.sync="dialog.show"
      width="60%"
      :close-on-click-modal="false"
      :close-on-press-eacape="false"
      :modal-append-to-body="false"
      :validate-on-rule-change="false"
    >
      <template>
        <el-form label-width="100px" size="mini" class="formDatastyle" style="padding-left:10px;">
          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="单据号" prop="doccode">
                <el-input disabled v-model="HDData.doccode"></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="6">
              <el-form-item label="单据日期" prop="docdate">
                <el-date-picker
                  v-model="HDData.docdate"
                  class="entertrue"
                  style="width:100%;"
                  type="date"
                ></el-date-picker>
              </el-form-item>
            </el-col>

            <el-col :span="6">
              <el-form-item label="单据类型" prop="doctype">
                <el-input disabled v-model="HDData.doctype"></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="6">
              <el-form-item label="单据状态" prop="docstatus">
                <el-input disabled v-model="HDData.docstatus"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="20">
               <el-col :span="6">
              <el-form-item label="公司代码" prop="companyid">
                <Ocompany
                  ref="companyid"
                  :modelname="HDData.companyid"
                  @inputEnterEvent="inputEnterEvent"
                  @cellDBLClickEvent="inputEnterEvent"
                  @importClickEvent="inputEnterEvent"
                  @inputChangeEvent="inputChangeEvent"
                ></Ocompany>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="公司名称" prop="companyname">
                <el-input disabled v-model="HDData.companyname"></el-input>
              </el-form-item>
            </el-col>
            
            <el-col :span="6">
              <el-form-item label="业务员" prop="stcode">
                <Ostorage
                  ref="stcode"
                  v-model="HDData.stcode"
                  :modelname="HDData.stcode"
                  @inputEnterEvent="stcodeEvent"
                  @cellDBLClickEvent="stcodeEvent"
                  @importClickEvent="stcodeEvent"
                  @inputChangeEvent="stcodeChangeEvent"
                ></Ostorage>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="业务员名称" prop="stname">
                <el-input disabled v-model="HDData.stname"></el-input>
              </el-form-item>
            </el-col>

           
          </el-row>

          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="转入仓库代码" prop="stcode2">
                <Ostorage
                  ref="stcode2"
                  v-model="HDData.stcode2"
                  :modelname="HDData.stcode2"
                  @inputEnterEvent="stcodeEvent2"
                  @cellDBLClickEvent="stcodeEvent2"
                  @importClickEvent="stcodeEvent2"
                  @inputChangeEvent="stcodeChangeEvent2"
                ></Ostorage>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="转入仓库名称" prop="stname2">
                <el-input disabled v-model="HDData.stname2"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="入仓原因代码" prop="reasonid">
                <el-input v-model="HDData.reasonid" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="入仓原因名称" prop="reasonname">
                <el-input v-model="HDData.reasonname" disabled></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="转入库位代码" prop="whcode2">
                <Ostoragebin
                  ref="whcode2"
                  v-model="HDData.whcode2"
                  :modelname="HDData.whcode2"
                  :stcode="HDData.stcode2"
                  @inputEnterEvent="whcodeEvent"
                  @cellDBLClickEvent="whcodeEvent"
                  @importClickEvent="whcodeEvent"
                  @inputChangeEvent="whcodeChangeEvent"
                ></Ostoragebin>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="转入库位名称" prop="whname2">
                <el-input v-model="HDData.whname2" disabled></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="12">
              <el-form-item label="备注" prop="hdusertxt1">
                <el-input v-model="HDData.hdusertxt1"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="模管员代码">
                <el-input v-model="HDData.hdusrtxt1"></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="6">
              <el-form-item label="模管员名称">
                <el-input v-model="HDData.hdusrtxt2"></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="6">
              <el-form-item label="引用单号">
                <el-input ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </template>
      <!-- 弹出层操作按钮 -->
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialog.show = false">取 消</el-button>
        <el-button type="primary" @click="save()">保 存</el-button>
      </div>
    </el-dialog>
  </div>
</template>


<script>
import base from "@utils/base"; // 导入接口域名列表

export default {
  // 数据
  data() {
    return {
      // 通用数据
      commEntity: this.$api.identity.getCommEntity(),
      // 数据
      HDData: {
        doccode: "",
        doctype: "销售订单",
        formid: 21101,
        docdate: this.$moment()
          .subtract("days", 7)
          .format("YYYY-MM-DD"),
       
        companyid: JSON.parse(localStorage.eleUser || "[]").companyid,
        companyname: JSON.parse(localStorage.eleUser || "[]").companyname,
     
        docstatus: 0,
        entername: JSON.parse(localStorage.eleUser || "[]").username,
        enterdate: this.$moment().format("YYYY-MM-DD"),
      
      }
    };
  },
  // 父页面传递过来的参数
  props: {
    dialog: Object,
    list: Object,
    hdData: Object
  },
  // 加载完成
  created() {
    if (this.hdData != "" && this.hdData != null) {
      this.HDData = this.hdData;
    }
    console.log(this.hdData);
  },
  // 操作方法
  methods: {
    // 选择公司事件
    inputEnterEvent(row) {
      this.$refs.companyid.str = row.companyid;
      this.HDData.companyid = row.companyid;
      this.HDData.companyname = row.companyname;
    },
    // 监听input事件
    inputChangeEvent() {
      this.searchform.companyid = "";
      this.searchform.companyname = "";
    },

    // 选择仓库事件
    stcodeEvent(row) {
      this.$refs.stcode.str = row.stcode;
      this.HDData.stcode = row.stcode;
      this.HDData.stname = row.stname;
    },
    // 监听仓库事件
    stcodeChangeEvent() {
      this.HDData.stcode = "";
      this.HDData.stcode = "";
    },

    // 选择仓库事件2
    stcodeEvent2(row) {
      this.$refs.stcode2.str = row.stcode;
      this.HDData.stcode2 = row.stcode;
      this.HDData.stname2 = row.stname;
    },

    // 监听仓库事件2
    stcodeChangeEvent2() {
      this.HDData.stcode2 = "";
      this.HDData.stcode2 = "";
      this.HDData.whcode2 = "";
      this.HDData.whname2 = "";
    },

    // 选择库位事件
    whcodeEvent(row) {
      this.$refs.whcode2.str = row.whcode;
      this.HDData.whcode2 = row.whcode;
      this.HDData.whname2 = row.whname;
    },

    // 监听库位事件
    whcodeChangeEvent() {
      this.HDData.whcode2 = "";
      this.HDData.whname2 = "";
    },

    save() {
    //   if (this.dialog.options == "add") {
    //     // this.$api.mj_imatdochd.add(this.HDData).then(res => {
    //     //   if (res.data.doccode != "" && res.data.doccode != null) {
    //     //     this.$message.success("新增成功");
    //     //     this.dialog.show = false;
    //     //     this.$router.push({
    //     //       name: "4032",
    //     //       params: {
    //     //         formid: 4032,
    //     //         multipleSelection: res.data,
    //     //         type: "fetch"
    //     //       }
    //     //     });
    //     //   } else {
    //     //     this.$message.warning(res.data.message);
    //     //   }
    //     // });
        
    //   } else if (this.dialog.options == "updata") {
    //     this.$api.mj_imatdochd.update(this.HDData).then(res => {
    //       if ((res.code = 200)) {
    //         this.$message.success("修改成功");
    //         this.dialog.show = false;
    //         this.$router.push({
    //           name: "4032",
    //           params: {
    //             formid: 4032,
    //             multipleSelection: res.data,
    //             type: "fetch"
    //           }
    //         });
    //       } else {
    //         this.$message.warning("修改失败:" + res.message);
    //       }
    //     });
    //   }
    // }
    this.$api.slssalesorderhd.save(this.HDData).then((res) => {
                // if (res.status == 201) {
                //   // this.$message.success("保存成功");
                //  this.addFormData=res.data;
                if(res!=undefined){
                  this.HDData=res;
                  alert('保存成功');
                  this.dialog.show = false;
                    this.$router.push({
                    name: "11010",
                    params: {
                    formid: 11010,
                    multipleSelection: res.data,
                    type: "fetch"
                }
                });
                  
                } else {
                    this.$alert(res.data.message);
                }
                
            })
            .catch(function(error){
                    // this.$message.success('修改出错：'+error);
                    alert('保存出错：'+error);
                    console.log(error)
                });
    }
  }
};
</script>


<style type="text/css">
el-row {
  margin-top: 10px;
}

/* 表格选择框的样式 */
.vxe-checkbox > input + .vxe-checkbox--icon {
  position: relative;
  display: inline-block;
  width: 1em;
  height: 1em;
  border: 1px solid #918f90;
  background-color: #fff;
  vertical-align: middle;
  border-radius: 0.2em;
  font-size: 16px;
}
</style>