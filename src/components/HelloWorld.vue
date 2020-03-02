<template>
  <div class="container">
    <div class="row">
      <c-header />
      <m-header />
      <div class="img-rounded col-md-8">
        <div class="table">
          <ul class="table-header">
            <li>
              <a href="#">疫情动态</a>
            </li>
            <li>
              <a href="#">迁徙地图</a>
            </li>
            <li>
              <a href="#">全民热搜</a>
            </li>
            <li>
              <a href="#">实时播报</a>
            </li>
          </ul>
          <table class="table-content">
            <th class="th-l">更新至 2020.03.02 14:18</th>
            <th></th>
            <th class="th-r text-right"><i class="glyphicon glyphicon-globe"></i>数据说明</th>
            <tr class="tr">
              <td class="td">
                <p class="text-center">现有确诊<i class="glyphicon glyphicon-globe"></i></p>
                <h3 class="text-center">32700</h3>
                <p class="text-center small">昨日<span>-2679</span></p>
              </td>
              <td class="td">
                <p class="text-center">现有疑似<i class="glyphicon glyphicon-globe"></i></p>
                <h3 class="text-center" style="color: #b78b26">32700</h3>
                <p class="text-center small">昨日<span>-2679</span></p>
              </td>
              <td class="td">
                <p class="text-center">现有重症</p>
                <h3 class="text-center" style="color: #134857">32700</h3>
                <p class="text-center small">昨日<span>-2679</span></p>
              </td>
            </tr>
            <tr class="tr">
              <td class="td">
                <p class="text-center">累计确诊</p>
                <h3 class="text-center" style="color: #de1c31">32700</h3>
                <p class="text-center small">昨日<span>-2679</span></p>
              </td>
             <td class="td">
                <p class="text-center">累计治愈</p>
                <h3 class="text-center" style="color: #5698c3">32700</h3>
                <p class="text-center small">昨日<span>-2679</span></p>
              </td>
              <td class="td">
                <p class="text-center">累计死亡</p>
                <h3 class="text-center" style="color: #000">32700</h3>
                <p class="text-center small">昨日<span>-2679</span></p>
              </td>
            </tr>
          </table>
        </div>
        <div class="echart">
          <div ref="charts" style="width: 760px;height:760px;"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
import CHeader from "./Header/CHeader.vue";
import MHeader from "./Header/MHeader.vue";

import "../..//node_modules/echarts/map/js/china.js";

let option = {
  title: {
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
  ]
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
/* 背景-start */
.img-rounded {
  background-color: #ffffff;
}
/* 背景-end */

/* table-start */
.table {
  width: 800px;
  /* height: 300px; */
  /* background-color: #eef7f2; */
  margin: 0;
}
.table-header {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #d8e3e7;
}
.table-header li {
  list-style: none;
  display: inline;
  text-align: center;
  line-height: 60px;
  margin-left: 35px;
  margin-right: 60px;
  /* background-color: red; */
}
.table-header li a {
  text-decoration: none;
  font-size: 19px;
  font-family: "Microsoft YaHei", Courier, monospace;
  color: black;
  border-bottom: 3px solid #10aeb5;
}

.table-content {
  width: 100%;
  height: 230px;
  /* background-color: red; */
}
.table-content .th-l {
  color: #b0d5df;
  width: 200px;

  /* background-color: red; */
}
.table-content .th-r {
  color: #b0d5df;

  /* background-color: red; */
}

.table-content .tr{
    margin: 0;
}

.table-content .td p,
.table-content .td h3{
    margin: 5px;
}

.table-content .td h3{
  font-family: 'Microsoft YaHei';
  color: #ed5a65;
  
}

/* table-end */

/* echart-start */

/* echart-end */
</style>
