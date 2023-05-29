<template>
  <h1>猫咪品种管理</h1>
  <!-- 表单 -->
  <el-form :model="breed" label-position="right">
    <el-row :gutter="20">
      <el-col :span="5">
        <el-form-item label="ID:">
          <el-input v-model="breed.id" readonly />
        </el-form-item>
      </el-col>
      <el-col :span="3">
        <el-form-item label="编号:">
          <el-input
            v-model="breed.code"
            minlength="1"
            maxlength="3"
            show-word-limit
          />
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="名称:">
          <el-input
            v-model="breed.caption"
            minlength="1"
            maxlength="10"
            show-word-limit
          />
        </el-form-item>
      </el-col>
      <el-form-item>
        <el-button type="success" @click="doAdd(API_URLs.breed.add)">
          <el-icon>
            <Plus />
          </el-icon>
          新增
        </el-button>
        <el-button type="primary" @click="doSave(API_URLs.breed.save)">
          <el-icon>
            <Edit />
          </el-icon>
          保存
        </el-button>
      </el-form-item>
    </el-row>
  </el-form>
  <!-- 数据表 -->
  <el-row>
    <el-table :data="breeds">
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
      <el-table-column prop="caption" label="标题" header-align="center" />
      <el-table-column label="操作" header-align="center" align="center">
        <template #default="scope">
          <el-button type="primary" @click="loadData2Form(scope.row)">
            <el-icon>
              <Edit />
            </el-icon>
            修改
          </el-button>
          <el-button
            type="danger"
            @click="doDelete(scope.row, API_URLs.breed.delete)"
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

const global: any = inject("global");
const token = global.token;
const API_URLs = {
  breed: {
    list: `http://wsmooc.jxufe.edu.cn/data/json/cat/breed/list?token=${token}`,
    add: `http://wsmooc.jxufe.edu.cn/data/json/cat/breed/add?token=${token}`,
    save: `http://wsmooc.jxufe.edu.cn/data/json/cat/breed/save?token=${token}`,
    delete: `http://wsmooc.jxufe.edu.cn/data/json/cat/breed/delete?token=${token}`,
  },
};

let breed = ref({
  id: 0,

  code: "001",

  caption: "无",
});

let breeds = ref([]);

onMounted(() => {
  fetchBreedData();
});

const fetchBreedData = () => {
  axios({
    method: "POST",

    url: API_URLs.breed.list,

    data: {},
  })
    .then((res) => {
      breeds.value = [];

      if (res.data.code == 0) {
        breeds.value = res.data.data;
      }

      showMessage(res.data);
    })

    .catch((err) => {
      breeds.value = [];

      reportError(err);
    });
};

const doAction = (actionURL: string) => {
  axios({
    method: "POST",

    url: actionURL,

    data: breed.value,
  })
    .then((res) => {
      if (res.data.code == 0) {
        fetchBreedData();
      }

      showMessage(res.data);
    })

    .catch((err) => {
      breeds.value = [];

      reportError(err);
    });
};

const doAdd = (actionURL: string) => {
  doAction(actionURL);
};

const doSave = (actionURL: string) => {
  doAction(actionURL);
};

const loadData2Form = (row: any) => {
  breed.value = JSON.parse(JSON.stringify(row));
};

const doDelete = (row: any, actionURL: string) => {
  ElMessageBox.confirm(`确实要删除 ${row.caption} 的数据么？`, "确认", {
    confirmButtonText: "确认",

    cancelButtonText: "取消",
  }).then(() => {
    breed.value = row;

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
</style>
