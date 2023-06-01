<template>
  <h1>
    猫咪管理
    <el-button size="small" type="success" @click="showNewCatDialog()">
      <el-icon>
        <Plus />
      </el-icon>
      新增
    </el-button>
  </h1>

  <el-dialog
    v-model="catDialogShow"
    title="信息卡"
    width="850px"
    style="height: 200px"
  >
    <!-- 表单 -->
    <el-form
      ref="catForm"
      :model="cat"
      :rules="checkRules"
      label-position="right"
      style="height: 170px"
    >
      <!-- 第一行 -->
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="ID:">
            <el-input v-model="cat.id" readonly />
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="编号:" prop="code">
            <el-input
              v-model="cat.code"
              minlength="5"
              maxlength="5"
              show-word-limit
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="名字:" prop="caption">
            <el-input
              v-model="cat.caption"
              minlength="1"
              maxlength="10"
              show-word-limit
              style="width: 362px"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 第二行 -->
      <el-row :gutter="10">
        <el-col :span="6">
          <el-form-item label="性别:">
            <el-switch
              v-model="cat.gender"
              size="large"
              style="
                --el-switch-on-color: #007edb;
                --el-switch-off-color: #c800ff;
              "
              active-text="公猫"
              inactive-text="母猫"
            />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="品种:" prop="breedCode">
            <el-select v-model="cat.breedCode" placeholder="请选择品种">
              <el-option
                v-for="(option, index) in breeds"
                :key="index"
                :value="option.code"
                :label="option.caption"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="生日:" prop="birth">
            <el-date-picker
              v-model="cat.birth"
              type="date"
              placeholder="请选择日期"
              value-format="YYYY-MM-DD"
              style="width: 100%"
            />
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item label="身长:" prop="height">
            <el-input-number
              v-model="cat.height"
              :precision="2"
              :step="0.01"
              :max="2"
              :min="0.01"
              style="width: 130px"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>&nbsp;</el-row>
      <el-row :gutter="10" justify="end">
        <el-form-item>
          <el-button
            v-if="newRecord"
            type="success"
            @click="doAdd(API_URLs.cat.add)"
          >
            <el-icon>
              <Plus />
            </el-icon>
            新增
          </el-button>
          <el-button v-else type="primary" @click="doSave(API_URLs.cat.save)">
            <el-icon>
              <Edit />
            </el-icon>
            保存
          </el-button>
        </el-form-item>
      </el-row>
    </el-form>
  </el-dialog>
  <!-- 数据表 -->
  <el-row>
    <el-table :data="cats">
      <el-table-column prop="id" label="ID" width="180" header-align="center" />
      <el-table-column
        prop="code"
        label="编号"
        width="70"
        header-align="center"
      />
      <el-table-column
        prop="caption"
        label="名字"
        header-align="center"
        align="center"
      />
      <el-table-column
        prop="breedCode"
        label="品种"
        header-align="center"
        align="center"
      >
        <template #default="scope">
          {{ breedsDic[scope.row.breedCode] }}
        </template>
      </el-table-column>
      <el-table-column
        prop="birth"
        label="生日"
        width="100"
        header-align="center"
        align="center"
      />
      <el-table-column
        prop="height"
        label="身长"
        width="80"
        header-align="center"
        align="center"
      >
        <template #default="scope"> {{ scope.row.height }}米</template>
      </el-table-column>
      <el-table-column
        prop="gender"
        label="性别"
        width="80"
        header-align="center"
        align="center"
      >
        <template #default="scope">
          <span v-if="scope.row.gender">公猫</span>
          <span v-else>母猫</span>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        header-align="center"
        align="center"
        width="240"
      >
        <template #default="scope">
          <el-button type="primary" @click="loadData2Form(scope.row)">
            <el-icon>
              <Edit />
            </el-icon>
            修改
          </el-button>
          <el-button
            type="danger"
            @click="doDelete(scope.row, API_URLs.cat.delete)"
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
import { onMounted, ref, computed, inject } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import axios from "axios";

import { rules } from "@typescript-eslint/eslint-plugin";

const global: any = inject("global");
const token = global.token;
const API_URLs = {
  cat: {
    list: `http://wsmooc.jxufe.edu.cn/data/json/cat/list?token=${token}`,
    add: `http://wsmooc.jxufe.edu.cn/data/json/cat/add?token=${token}`,
    save: `http://wsmooc.jxufe.edu.cn/data/json/cat/save?token=${token}`,
    delete: `http://wsmooc.jxufe.edu.cn/data/json/cat/delete?token=${token}`,
  },
  breed: {
    list: `http://wsmooc.jxufe.edu.cn/data/json/cat/breed/list?token=${token}`,
  },
};

let catDialogShow = ref(false);
let newRecord = ref(false);
let ini_cat = {
  id: 0,
  code: "",
  caption: "",
  breedCode: "",
  birth: "2023-01-01",
  height: 0.36,
  gender: true,
};

let cat = ref(ini_cat);
let cats = ref([]);
let breeds = ref([]);
let breedsDic = computed(() => {
  let data = {};
  for (let key in breeds.value) {
    let item = breeds.value[key];
    let obj = {};
    obj[item["code"]] = item["caption"];
    Object.assign(data, obj);
  }
  return data;
});
onMounted(async () => {
  await fetchBreedData();
  await fetchCatData();
});
const showNewCatDialog = () => {
  cat = ref(JSON.parse(JSON.stringify(ini_cat)));
  catDialogShow.value = true;
  newRecord.value = true;
};
const fetchCatData = () => {
  axios({
    method: "POST",
    url: API_URLs.cat.list,
    data: {},
  })
    .then((res) => {
      cats.value = [];
      if (res.data.code == 0) {
        cats.value = res.data.data;
      }
      showMessage(res.data);
    })
    .catch((err) => {
      cats.value = [];

      reportError(err);
    });
};
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
    data: cat.value,
  })
    .then((res) => {
      if (res.data.code == 0) {
        fetchCatData();
        catDialogShow.value = false;
      }
      showMessage(res.data);
    })
    .catch((err) => {
      cats.value = [];
      reportError(err);
    });
};
const catForm: any = ref(null);
const doAdd = (actionURL: string) => {
  catForm.value.validate((valid: any) => {
    if (valid) {
      doAction(actionURL);
    } else {
      return false;
    }
  });
};
const doSave = (actionURL: string) => {
  catForm.value.validate((valid: any) => {
    if (valid) {
      doAction(actionURL);
    } else {
      return false;
    }
  });
};
const loadData2Form = (row: any) => {
  cat.value = JSON.parse(JSON.stringify(row));
  catDialogShow.value = true;
  newRecord.value = false;
};
const doDelete = (row: any, actionURL: string) => {
  ElMessageBox.confirm(`确实要删除 ${row.caption} 的数据么？`, "确认", {
    confirmButtonText: "确认",
    cancelButtonText: "取消",
  }).then(() => {
    cat.value = row;
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
  ElMessage({
    message: entityData.msg,
    type: msgType,
    center: true,
  });
};
const reportError = (err: any) => {
  let errMessage = `err.code:${err.code}\nerr.message:${err.message}\nerr.response.data:${err.response.data}\nerr.response.status:${err.response.status}\nerr.response.statusText:${err.response.statusText}`;
  showMessage({ code: -2, msg: errMessage });
};
const checkRules = {
  code: [
    { required: true, message: "不得为空" },
    { min: 5, max: 5, message: "须为5个字符" },
  ],
  caption: [
    { required: true, message: "不得为空" },
    { min: 1, max: 10, message: "不超过10个字" },
  ],
  breedCode: [{ required: true, message: "不得为空", trigger: "change" }],
  birth: [{ required: true, message: "不得为空" }],
  height: [{ required: true, message: "不得为空" }],
};
</script>

<style scoped>
h1 {
  font-size: 22px;
}
form {
  margin: 5px;
}
table {
  margin: 20px;
}
</style>
