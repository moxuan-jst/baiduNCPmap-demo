<template>
  <div class="container">
    <c-header/>
    <m-header />
    <div class="hello">
      <div ref="charts" style="width: 800px;height:800px;"></div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
import CHeader from "./CHeader.vue"
import MHeader from "./MHeader.vue"

import "../..//node_modules/echarts/map/js/china.js";

let option = {
  title: {
    text: "百度疫情地图练习",
    subtext: "数据来源自CSDN-DengZY926",
    sublink: "http://www.dzyong.top:3005/yiqing/total"
  },
  series: [
    {
      name: "确证人数:",
      type: "map",
      map: "china",
      label: {
        show: true
        // fontStyle: 'oblique',
        // fontSize: 10,
      },
      itemStyle: {
        // areaColor: 'blue' //地图颜色
        // borderColor: 'red' // 边框颜色
      },
      zoom: 1.2,
      data: []
    }
  ],
  tooltip: {
    show: true,
    trigger: "item"
  },
  toolbox: {
    show: true,
    orient: "vertical",
    left: "right",
    top: "center",
    feature: {
      dataView: { readOnly: false },
      restore: {},
      saveAsImage: {}
    }
  },
  visualMap: [
    {
      type: "piecewise",
      splitNumber: 6,
      pieces: [
        { min: 100000 },
        { min: 10000, max: 99999 },
        { min: 1000, max: 9999 },
        { min: 100, max: 999 },
        { min: 10, max: 99 },
        { min: 1, max: 9 }
      ]
    }
  ],
  backgroundColor: "#eef7f2"
};

export default {
  name: "HelloWorld",
  methods: {
    getData() {
      var url = "http://www.dzyong.top:3005/yiqing/province";
      this.axios.get(url).then(data => {
        let chartData = data.data.data;
        console.log(chartData);
        let list = chartData.map(val => ({
          name: val.provinceName,
          value: val.confirmedNum
        }));
        // console.log(list)
        option.series[0].data = list;
        this.myCharts.setOption(option);
      });
    }
  },
  mounted() {
    this.getData();
    this.myCharts = echarts.init(this.$refs.charts);
    this.myCharts.setOption(option);
  },
  components: {
    CHeader,
    MHeader
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
