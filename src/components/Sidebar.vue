<template>
  <div class="sidebar">
    <h1 class="title">Authority system</h1>
    <el-menu
      class="sidebarList"
      background-color="#282c34"
      text-color="#ffffff"
    >
      <el-menu-item index="1">
        <router-link class="toAbout" to="/about">
          <i class="el-icon-s-home"></i>
          <h2>主页</h2>
        </router-link>
      </el-menu-item>
      <el-submenu index="2" class="authList">
        <template #title>
          <i class="el-icon-menu"></i>
          <span>权限管理</span>
        </template>
        <el-submenu v-for="item in data" :key="item.name" :index="item.name">
          <template #title>
            <span>{{ item.title }}</span>
          </template>
          <el-menu-item-group
            v-for="child in item.children"
            :index="child.name"
            :key="child.name"
          >
            <el-menu-item-group v-if="child.children">
              <router-link
                v-for="childChild in child.children"
                :index="childChild.name"
                :key="childChild.name"
                :to="childChild.link"
              >
                <el-menu-item :index="child.name">
                  {{ childChild.title }}
                </el-menu-item></router-link
              >
            </el-menu-item-group>
            <el-menu-item-group v-else>
              <router-link :to="child.link"
                ><el-menu-item :index="child.name">
                  {{ child.title }}
                </el-menu-item></router-link
              >
            </el-menu-item-group>
          </el-menu-item-group>
        </el-submenu>
      </el-submenu>

      <el-menu-item index="5">
        <router-link class="toDetail" to="/detail">
          <i class="el-icon-question"></i>
          <h2>关于我们</h2>
        </router-link>
      </el-menu-item>
    </el-menu>

    <!-- <el-tree
      :props="defaultProps"
      :highlight-current="highlight"
      accordion
      :empty-text="emptyText"
      :data="data"
      @node-click="routerPush"
    >
    </el-tree> -->
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const highlight = ref(true);
    const data = store.getters.getMenuArray;
    const routerPush = (data, node) => {
      if (node.isLeaf) {
        router.push(data.link);
      }
    };
    return {
      data,
      highlight,
      routerPush
    };
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
  // padding-top: 75px;
  z-index: 3;
  background-color: #282c34;
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100%;
  color: "#ffffff";
  .title {
    // position: fixed;
    color: #ffffff;
    font-size: 25px;
  }
  .toAbout,
  .toDetail {
    display: flex;
    align-items: center;
  }
  /deep/ .el-menu {
    border-right: none;
  }
  /deep/ .el-submenu__title {
    display: flex;
    align-items: center;
  }

  /deep/ .el-menu-item-group__title {
    padding: 0;
  }
  a {
    text-decoration: none;
    color: #ffffff;
  }
}
/deep/ .el-submenu .el-menu-item {
  line-height: 30px;
  height: 30px;
  color: #409eff !important;
  padding-left: 10px !important;
}
</style>
