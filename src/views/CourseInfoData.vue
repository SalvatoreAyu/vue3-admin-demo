<template>
  <h3>课程信息</h3>
  <div id="courseData" style="width: 600px; height: 400px"></div>
</template>

<script>
import { inject, onMounted } from "vue";
export default {
  name: "CourseInfoData",
  setup() {
    const chart = inject("chart");
    onMounted(() => {
      let myChart = chart.init(document.getElementById("courseData"));
      myChart.setOption({
        title: { text: "总用户量" },
        tooltip: {},
        xAxis: {
          data: ["12-3", "12-4", "12-5", "12-6", "12-7", "12-8"]
        },
        yAxis: {},
        series: [
          {
            name: "用户量",
            type: "line",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
    });
  }
};
</script>

<style></style>
