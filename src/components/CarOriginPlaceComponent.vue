<template>
  <h1>产地</h1>
  <el-form :model="originPlace" label-position="center">
    <el-row :gutter="20">
      <el-col :span="5">
        <el-form-item label="ID:">
          <el-input v-model="originPlace.id" readonly />
        </el-form-item>
      </el-col>
      <el-col :span="3">
        <el-form-item label="编号:">
          <el-input
            v-model="originPlace.code"
            minlength="1"
            maxlength="3"
            show-word-limit
          />
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="名称:">
          <el-input
            v-model="originPlace.caption"
            minlength="1"
            maxlength="20"
            show-word-limit
          />
        </el-form-item>
      </el-col>
      <el-form-item>
        <el-button type="success" @click="doAdd(API_URLs.originPlace.add)">
          <el-icon>
            <Plus />
          </el-icon>
          新增
        </el-button>
        <el-button type="primary" @click="doSave(API_URLs.originPlace.save)">
          <el-icon>
            <check />
          </el-icon>
          保存
        </el-button>
      </el-form-item>
    </el-row>
  </el-form>
  <el-row>
    <el-table :data="originPlaces" style="width: 100%" height="600px">
      <el-table-column
        prop="id"
        label="ID"
        width="180"
        header-align="center"
        align="center"
      />
      <el-table-column
        prop="code"
        label="编号"
        width="180"
        header-align="center"
        align="center"
      />
      <el-table-column prop="caption" label="产地" header-align="center" />
      <el-table-column label="操作" header-align="center" align="center">
        <template #default="scope">
          <el-button type="primary" @click="doModify(scope.row)">
            <el-icon>
              <Edit />
            </el-icon>
            修改
          </el-button>
          <el-button
            type="danger"
            @click="doDelete(scope.row, API_URLs.originPlace.delete)"
          >
            <el-icon>
              <Delete />
            </el-icon>
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-row>
</template>
<!-- setup语法糖 -->
<script setup lang="ts">
import { inject, onMounted, ref } from "vue";
import { ElMessageBox, ElNotification } from "element-plus";
import axios from "axios";
import { Check } from "@element-plus/icons-vue";
const global: any = inject("global");
const token = global.token;
const API_URLs = {
  originPlace: {
    list: `http://wsmooc.jxufe.edu.cn/data/json/carBrand/originPlace/list?token=${token}`,
    add: `http://wsmooc.jxufe.edu.cn/data/json/carBrand/originPlace/add?token=${token}`,
    save: `http://wsmooc.jxufe.edu.cn/data/json/carBrand/originPlace/save?token=${token}`,
    delete: `http://wsmooc.jxufe.edu.cn/data/json/carBrand/originPlace/delete?token=${token}`,
  },
};
let originPlace = ref({
  id: 0,
  code: "001",
  caption: "无",
});
let originPlaces = ref([]);
onMounted(() => {
  fetchFuelTypeData();
});
const fetchFuelTypeData = () => {
  axios({
    method: "POST",
    url: API_URLs.originPlace.list,
    data: {},
  })
    .then((res) => {
      originPlaces.value = [];
      if (res.data.code == 0) {
        originPlaces.value = res.data.data;
      }
      showMessage(res.data);
    })
    .catch((err) => {
      originPlaces.value = [];
      reportError(err);
    });
};
const doAction = (actionURL: string) => {
  axios({
    method: "POST",
    url: actionURL,
    data: originPlace.value,
  })
    .then((res) => {
      if (res.data.code == 0) {
        fetchFuelTypeData();
      }
      showMessage(res.data);
    })
    .catch((err) => {
      originPlaces.value = [];
      reportError(err);
    });
};
const doAdd = (actionURL: string) => {
  doAction(actionURL);
};
const doSave = (actionURL: string) => {
  doAction(actionURL);
};
const doModify = (row: any) => {
  originPlace.value = JSON.parse(JSON.stringify(row));
};
const doDelete = (row: any, actionURL: string) => {
  ElMessageBox.confirm(`确实要删除 ${row.caption} 的数据么？`, "确认", {
    confirmButtonText: "确认",
    cancelButtonText: "取消",
  }).then(() => {
    //删除所在行的数据
    originPlace.value = row;
    doAction(actionURL);
  });
};
const showMessage = (entityData: any) => {
  let msgType = "";
  switch (entityData.code) {
    case 0:
      msgType = "success";
      break;
    case -1:
      msgType = "warning";
      break;
    case -2:
      msgType = "error";
      break;
    default:
      msgType = "info";
  }
  ElNotification({
    title: "消息",
    message: entityData.msg,
    type: msgType,
  });
};
const reportError = (err: any) => {
  let errMessage = `err.code:${err.code}\nerr.message:${err.message}\nerr.response.data:${err.response.data}\nerr.response.status:${err.response.status}\nerr.response.statusText:${err.response.statusText}`;
  showMessage({ code: -2, msg: errMessage });
};
</script>
<style scoped>
h1 {
  font-size: 22px;
}
form {
  margin: 10px;
}
table {
  margin: 10px;
}
.el-table :nth-child(n) {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
.el-table :nth-child(2n) {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>
