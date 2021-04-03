<template>
  <div class="about">
    <el-row class="underlineWrapper">
      <el-col :span="12">
        <el-card class="guestCard">
          <div
            id="guestCount"
            style="width: 600px; height: 280px"
          ></div> </el-card
      ></el-col>
      <el-col :span="8" :offset="2">
        <el-card class="guestCard">
          <ul>
            <li>春风轻吹点点火花衬月夜</li>
            <li>人人开开心心说说故事</li>
            <li>终于倾出这小子的往事</li>
            <li>长年累月为你怎再自持</li>
          </ul>
        </el-card>
      </el-col>
    </el-row>

    <el-row
      class="cardList"
      :gutter="20"
      style="width: 100%"
      type="flex"
      justify="space-between"
    >
      <el-col
        v-for="item in cardList"
        :key="item.name"
        :class="item.name"
        :span="4"
      >
        <el-card
          class="menuList"
          shadow="hover"
          :body-style="{ padding: '0px' }"
        >
          <router-link :to="item.link">
            <div class="cardMainBody">
              <el-row type="flex" justify="center">
                <i :class="item.class" :style="{ color: item.color }"></i>
              </el-row>
              <div class="menuListTitle">{{ item.title }}</div>
            </div>
          </router-link>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { inject, onMounted } from "vue";
export default {
  setup() {
    const chart = inject("chart");
    const cardList = [
      {
        class: "el-icon-bell",
        title: "课程管理",
        name: "course",
        link: "course",
        color: "rgb(149, 222, 100)",
        offset: 0
      },
      {
        class: "el-icon-user",
        title: "学生管理",
        name: "student",
        link: "student",
        color: "rgb(24, 144, 255)",
        offset: 1
      },
      {
        class: "el-icon-sunny",
        title: "关于我们",
        name: "aboutUs",
        link: "detail",
        color: "rgb(255, 192, 105)",
        offset: 1
      },
      {
        class: "el-icon-potato-strips",
        title: "火钳留名",
        name: "fuckU",
        link: "/about",
        color: "rgb(179, 127, 235)",
        offset: 1
      },
      {
        class: "el-icon-position",
        title: "未完待续",
        name: "more",
        link: "/about",
        color: "rgb(10, 6, 235)",
        offset: 1
      }
    ];
    onMounted(() => {
      const guestChart = chart.init(document.getElementById("guestCount"));
      guestChart.setOption({
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        title: {
          text: "访客周报"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            smooth: true,
            areaStyle: {
              opacity: 0.8,
              color: new chart.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(0, 221, 255)"
                },
                {
                  offset: 1,
                  color: "rgba(77, 119, 255)"
                }
              ])
            }
          }
        ]
      });
    });
    return {
      cardList
    };
  }
};
</script>

<style lang="scss" scoped>
img {
  overflow: hidden;
  width: 200px;
  height: 200px;
}
a {
  text-decoration: none;
}
.about {
  /deep/ .el-row {
    margin-bottom: 60px;
    // height: 80px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .cardList {
    /deep/ .el-col {
      .menuList {
        .el-row {
          margin-bottom: 20px;
        }
        i {
          font-size: 100px;
          text-decoration: transparent;
        }
        .menuListTitle {
          text-decoration: none;
          color: #333;
        }
        .cardMainBody {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
        }
      }
      .menuList:hover .menuListTitle {
        color: #409eff;
      }
    }
  }
}
</style>
