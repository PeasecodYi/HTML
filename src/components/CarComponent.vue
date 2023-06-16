<template>
  <h1>
    品牌设计
    <el-button size="small" type="success" @click="showNewCarDialog()">
      <el-icon>
        <Plus />
      </el-icon>
      新增
    </el-button>
  </h1>

  <el-dialog
    v-model="carDialogShow"
    title="信息卡"
    width="1150px"
    style="height: 380px"
  >
    <!-- 表单 -->

    <el-form
      ref="catForm"
      :model="car"
      :rules="checkRules"
      label-position="right"
      style="height: 170px"
    >
      <!-- 第一行 -->

      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="ID:">
            <el-input v-model="car.id" readonly />
          </el-form-item>
        </el-col>

        <el-col :span="5">
          <el-form-item label="编号:" prop="code">
            <el-input
              v-model="car.code"
              minlength="5"
              maxlength="5"
              show-word-limit
            />
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="名牌名称:" prop="caption">
            <el-input
              v-model="car.caption"
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
        <el-col :span="2">
          <el-form-item label="颜色:">
            <el-color-picker v-model="car.color" size="small" />
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="座位数:" prop="sit">
            <el-input-number
              v-model="car.sit"
              :step="1"
              :max="100"
              :min="1"
              style="width: 130px"
            />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="首售日期:" prop="birth">
            <el-date-picker
              v-model="car.birth"
              type="date"
              placeholder="请选择日期"
              value-format="YYYY-MM-DD"
              style="width: 100%"
            />
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="结构:" prop="bodyStyleCode">
            <el-select v-model="car.bodyStyleCode" placeholder="请选择">
              <el-option
                v-for="(option, index) in bodyStyles"
                :key="index"
                :value="option.code"
                :label="option.caption"
              />
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="5">
          <el-form-item label="价格（万元）:" prop="price">
            <el-input-number
              v-model="car.price"
              :step="1"
              :max="100"
              :min="1"
              style="width: 130px"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <!--第三行-->
      <el-row :gutter="10">
        <el-col :span="4">
          <el-form-item label="变速箱:" prop="transCode">
            <el-select v-model="car.transCode" placeholder="请选择">
              <el-option
                v-for="(option, index) in transmissions"
                :key="index"
                :value="option.code"
                :label="option.caption"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="排量:" prop="displacementCode">
            <el-select v-model="car.displacementCode" placeholder="请选择">
              <el-option
                v-for="(option, index) in displacements"
                :key="index"
                :value="option.code"
                :label="option.caption"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="车系:" prop="serialCode">
            <el-select v-model="car.serialCode" placeholder="请选择">
              <el-option
                v-for="(option, index) in serials"
                :key="index"
                :value="option.code"
                :label="option.caption"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="产地:" prop="originPlaceCode">
            <el-select v-model="car.originPlaceCode" placeholder="请选择">
              <el-option
                v-for="(option, index) in originPlaces"
                :key="index"
                :value="option.code"
                :label="option.caption"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="能源类型:" prop="fuelTypeCode">
            <el-select v-model="car.fuelTypeCode" placeholder="请选择">
              <el-option
                v-for="(option, index) in fuelTypes"
                :key="index"
                :value="option.code"
                :label="option.caption"
              />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col>
          <el-form-item label="选配件:" prop="features">
            <el-checkbox-group v-model="car.features">
              <el-checkbox
                v-for="feature in features"
                :key="feature.code"
                :label="feature.caption"
                >{{ feature.code }}:{{ feature.caption }}
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row> </el-row>
      <el-row :gutter="10" justify="end">
        <el-form-item>
          <el-button
            v-if="newRecord"
            type="success"
            @click="doAdd(API_URLs.car.add)"
          >
            <el-icon>
              <Plus />
            </el-icon>
            新增
          </el-button>
          <el-button v-else type="primary" @click="doSave(API_URLs.car.save)">
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
    <el-table :data="cars">
      <el-table-column prop="id" label="ID" width="150" header-align="center" />

      <el-table-column
        prop="code"
        label="编号"
        width="70"
        header-align="center"
      />

      <el-table-column
        prop="caption"
        label="品牌名称"
        header-align="center"
        align="center"
      />

      <el-table-column
        prop="color"
        label="颜色"
        header-align="center"
        align="center"
        width="60"
      >
        <template #default="scope">
          <el-color-picker v-model="scope.row.color" />
        </template>
      </el-table-column>

      <el-table-column
        prop="sit"
        label="座位数"
        header-align="center"
        align="center"
        width="70"
      />
      <el-table-column
        prop="displacementCode"
        label="排量"
        header-align="center"
        align="center"
      >
        <template #default="scope">
          {{ displacementsDic[scope.row.displacementCode] }}
        </template>
      </el-table-column>
      <el-table-column
        prop="bodyStyleCode"
        label="结构"
        header-align="center"
        align="center"
        width="70"
      >
        <template #default="scope">
          {{ bodyStylesDic[scope.row.bodyStyleCode] }}
        </template>
      </el-table-column>
      <el-table-column
        prop="transCode"
        label="变速箱"
        header-align="center"
        align="center"
        width="70"
      >
        <template #default="scope">
          {{ transmissionsDic[scope.row.transCode] }}
        </template>
      </el-table-column>
      <el-table-column
        prop="features"
        label="选配件"
        header-align="center"
        align="center"
        width="120"
      >
        <template #default="scope">
          <el-tag
            v-for="feature in scope.row.features"
            :key="feature"
            effect="primary"
          >
            {{ feature }}<br
          /></el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="serialCode"
        label="车系"
        header-align="center"
        align="center"
        width="60"
      >
        <template #default="scope">
          {{ serialsDic[scope.row.serialCode] }}
        </template>
      </el-table-column>
      <el-table-column
        prop="originPlaceCode"
        label="产地"
        header-align="center"
        align="center"
        width="60"
      >
        <template #default="scope">
          {{ originPlacesDic[scope.row.originPlaceCode] }}
        </template>
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格"
        header-align="center"
        align="center"
        width="60"
      />
      <el-table-column
        prop="fuelTypeCode"
        label="能源"
        header-align="center"
        align="center"
      >
        <template #default="scope">
          {{ fuelTypesDic[scope.row.fuelTypeCode] }}
        </template>
      </el-table-column>
      <el-table-column
        prop="birth"
        label="首售日期"
        width="120"
        header-align="center"
        align="center"
      />
      <el-table-column
        label="操作"
        header-align="center"
        align="center"
        width="200"
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
            @click="doDelete(scope.row, API_URLs.car.delete)"
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
const colorpicker = ref("#409EFF");
const global: any = inject("global");

const token = global.token;

const API_URLs = {
  car: {
    list: `http://wsmooc.jxufe.edu.cn/data/json/carBrand/list?token=${token}`,

    add: `http://wsmooc.jxufe.edu.cn/data/json/carBrand/add?token=${token}`,

    save: `http://wsmooc.jxufe.edu.cn/data/json/carBrand/save?token=${token}`,

    delete: `http://wsmooc.jxufe.edu.cn/data/json/carBrand/delete?token=${token}`,
  },

  bodyStyle: {
    list: `http://wsmooc.jxufe.edu.cn/data/json/carBrand/bodyStyle/list?token=${token}`,
  },
  transmission: {
    list: `http://wsmooc.jxufe.edu.cn/data/json/carBrand/transmission/list?token=${token}`,
  },
  displacement: {
    list: `http://wsmooc.jxufe.edu.cn/data/json/carBrand/displacement/list?token=${token}`,
  },
  fuelType: {
    list: `http://wsmooc.jxufe.edu.cn/data/json/carBrand/fuelType/list?token=${token}`,
  },
  originPlace: {
    list: `http://wsmooc.jxufe.edu.cn/data/json/carBrand/originPlace/list?token=${token}`,
  },
  serial: {
    list: `http://wsmooc.jxufe.edu.cn/data/json/carBrand/serial/list?token=${token}`,
  },
  feature: {
    list: `http://wsmooc.jxufe.edu.cn/data/json/carBrand/features/list?token=${token}`,
  },
};

let carDialogShow = ref(false);

let newRecord = ref(false);

//数据存储
let ini_car = {
  id: 0,
  code: "",
  caption: "",
  bodyStyleCode: "",
  transCode: " ",
  displacementCode: " ",
  fuelTypeCode: " ",
  originPlaceCode: " ",
  serialCode: " ",
  features: [],
  color: "409EFF",
  birth: "2023-01-01",
  sit: 4,
  price: 14,
  gender: true,
};

let car = ref(ini_car);

let cars = ref([]);
//+s
let bodyStyles = ref([]);
let transmissions = ref([]);
let displacements = ref([]);
let fuelTypes = ref([]);
let originPlaces = ref([]);
let serials = ref([]);
let features = ref([]);
//bodyStyles
let bodyStylesDic = computed(() => {
  let data = {};

  for (let key in bodyStyles.value) {
    let item = bodyStyles.value[key];

    let obj = {};

    obj[item["code"]] = item["caption"];

    Object.assign(data, obj);
  }

  return data;
});
//transmissions
let transmissionsDic = computed(() => {
  let data = {};

  for (let key in transmissions.value) {
    let item = transmissions.value[key];

    let obj = {};

    obj[item["code"]] = item["caption"];

    Object.assign(data, obj);
  }

  return data;
});
//displacements
let displacementsDic = computed(() => {
  let data = {};

  for (let key in displacements.value) {
    let item = displacements.value[key];

    let obj = {};

    obj[item["code"]] = item["caption"];

    Object.assign(data, obj);
  }

  return data;
});
//serials
let serialsDic = computed(() => {
  let data = {};

  for (let key in serials.value) {
    let item = serials.value[key];

    let obj = {};

    obj[item["code"]] = item["caption"];

    Object.assign(data, obj);
  }

  return data;
});
//fuelTypes
let fuelTypesDic = computed(() => {
  let data = {};

  for (let key in fuelTypes.value) {
    let item = fuelTypes.value[key];

    let obj = {};

    obj[item["code"]] = item["caption"];

    Object.assign(data, obj);
  }

  return data;
});
//features
let featuresDic = computed(() => {
  let data = {};
  for (let key in features.value) {
    let item = features.value[key];

    let obj = {};

    obj[item["code"]] = item["caption"];

    Object.assign(data, obj);
  }
  return data;
});
//originPlaces
let originPlacesDic = computed(() => {
  let data = {};

  for (let key in originPlaces.value) {
    let item = originPlaces.value[key];

    let obj = {};

    obj[item["code"]] = item["caption"];

    Object.assign(data, obj);
  }

  return data;
});

onMounted(async () => {
  await fetchbodyStyleData();
  await fetchtransData();
  await fetchdisplacementData();
  await fetchfuelTypeData();
  await fetchoriginPlaceData();
  await fetchserialData();
  await fetchFeaturesData();
  await fetchCarData();
});

const showNewCarDialog = () => {
  car = ref(JSON.parse(JSON.stringify(ini_car)));

  carDialogShow.value = true;

  newRecord.value = true;
};

const fetchCarData = () => {
  axios({
    method: "POST",

    url: API_URLs.car.list,

    data: {},
  })
    .then((res) => {
      cars.value = [];

      if (res.data.code == 0) {
        cars.value = res.data.data;
      }

      showMessage(res.data);
    })

    .catch((err) => {
      cars.value = [];

      reportError(err);
    });
};

//bodyStyle
const fetchbodyStyleData = () => {
  axios({
    method: "POST",

    url: API_URLs.bodyStyle.list,

    data: {},
  })
    .then((res) => {
      bodyStyles.value = [];

      if (res.data.code == 0) {
        bodyStyles.value = res.data.data;
      }

      showMessage(res.data);
    })

    .catch((err) => {
      bodyStyles.value = [];

      reportError(err);
    });
};
//transmission
const fetchtransData = () => {
  axios({
    method: "POST",

    url: API_URLs.transmission.list,

    data: {},
  })
    .then((res) => {
      transmissions.value = [];

      if (res.data.code == 0) {
        transmissions.value = res.data.data;
      }

      showMessage(res.data);
    })

    .catch((err) => {
      transmissions.value = [];

      reportError(err);
    });
};
//displacement
const fetchdisplacementData = () => {
  axios({
    method: "POST",

    url: API_URLs.displacement.list,

    data: {},
  })
    .then((res) => {
      displacements.value = [];

      if (res.data.code == 0) {
        displacements.value = res.data.data;
      }

      showMessage(res.data);
    })

    .catch((err) => {
      displacements.value = [];

      reportError(err);
    });
};
//fuelType
const fetchfuelTypeData = () => {
  axios({
    method: "POST",

    url: API_URLs.fuelType.list,

    data: {},
  })
    .then((res) => {
      fuelTypes.value = [];

      if (res.data.code == 0) {
        fuelTypes.value = res.data.data;
      }

      showMessage(res.data);
    })

    .catch((err) => {
      fuelTypes.value = [];

      reportError(err);
    });
};
//features
const fetchFeaturesData = () => {
  axios({
    method: "POST",

    url: API_URLs.feature.list,

    data: {},
  })
    .then((res) => {
      features.value = [];

      if (res.data.code == 0) {
        features.value = res.data.data;
      }

      showMessage(res.data);
    })

    .catch((err) => {
      features.value = [];

      reportError(err);
    });
};
//originPlace
const fetchoriginPlaceData = () => {
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
//serial
const fetchserialData = () => {
  axios({
    method: "POST",

    url: API_URLs.serial.list,

    data: {},
  })
    .then((res) => {
      serials.value = [];

      if (res.data.code == 0) {
        serials.value = res.data.data;
      }

      showMessage(res.data);
    })

    .catch((err) => {
      serials.value = [];

      reportError(err);
    });
};

const doAction = (actionURL: string) => {
  axios({
    method: "POST",

    url: actionURL,

    data: car.value,
  })
    .then((res) => {
      if (res.data.code == 0) {
        fetchCarData();

        carDialogShow.value = false;
      }

      showMessage(res.data);
    })

    .catch((err) => {
      cars.value = [];

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
  car.value = JSON.parse(JSON.stringify(row));

  carDialogShow.value = true;

  newRecord.value = false;
};

const doDelete = (row: any, actionURL: string) => {
  ElMessageBox.confirm(`确实要删除 ${row.caption} 的数据么？`, "确认", {
    confirmButtonText: "确认",

    cancelButtonText: "取消",
  }).then(() => {
    car.value = row;

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
//表单检验
const checkRules = {
  code: [
    { required: true, message: "不得为空" },

    { min: 5, max: 5, message: "须为5个字符" },
  ],

  caption: [
    { required: true, message: "不得为空" },

    { min: 1, max: 10, message: "不超过10个字" },
  ],

  bodyStyleCode: [{ required: true, message: "不得为空", trigger: "change" }],
  transCode: [{ required: true, message: "不得为空", trigger: "change" }],
  displacementCode: [
    { required: true, message: "不得为空", trigger: "change" },
  ],
  fuelTypeCode: [{ required: true, message: "不得为空", trigger: "change" }],
  originPlaceCode: [{ required: true, message: "不得为空", trigger: "change" }],
  serialCode: [{ required: true, message: "不得为空", trigger: "change" }],
  birth: [{ required: true, message: "不得为空" }],
  color: [{ required: true, message: "不得为空" }],
  features: [{ required: true, message: "不得为空" }],
  sit: [{ required: true, message: "不得为空" }],
  price: [{ required: true, message: "不得为空" }],
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
.el-table :nth-child(n) {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
.el-table :nth-child(2n) {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>
