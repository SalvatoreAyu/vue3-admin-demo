<template>
  <el-card class="box-card">
    <table>
      <el-row>
        <el-col v-for="item in technologyList" :key="item.name" :span="8">
          <tr>
            <td class="title">{{ item.name }}</td>
            <td class="version">{{ item.version }}</td>
          </tr>
        </el-col>
      </el-row>
    </table>
  </el-card>
</template>

<script>
export default {
  setup() {
    const technologyList = [
      {
        name: "vue",
        version: "^3.0.0"
      },
      {
        name: "vuex",
        version: "^4.0.0-0"
      },
      {
        name: "vue-router",
        version: "^4.0.0-0"
      },
      {
        name: "element-plus",
        version: "^1.0.2-beta.30"
      },
      {
        name: "mockjs",
        version: "^1.1.0"
      },
      {
        name: "express",
        version: "^4.17.1"
      }
    ];
    return {
      technologyList
    };
  }
};
</script>

<style lang="scss" scoped>
.box-card {
  width: 80%;
  padding: 40px;
  font-size: 20px;
  .el-col {
    padding: 20px;
    border: 1px solid #e6e6e6;
  }
  .title {
    background-color: #e9e8e8;
    width: 150px;
    height: 30px;
    line-height: 30px;
    padding: 10px;
    margin: 10px;
  }
}
</style>
