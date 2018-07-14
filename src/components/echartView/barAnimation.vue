<template>
<chart :options="option">
</chart>
</template>

<script>
export default {
  data() {
    return {
      option: {
        title: {
          text: "柱状图动画延迟"
        },
        legend: {
          data: ["bar", "bar2"],
          align: "left"
        },
        toolbox: {
          // y: 'bottom',
          feature: {
            magicType: {
              type: ["stack", "tiled"]
            },
            dataView: {},
            saveAsImage: {
              pixelRatio: 2
            }
          }
        },
        tooltip: {},
        xAxis: {
          data: [],
          silent: false,
          splitLine: {
            show: false
          }
        },
        yAxis: {},
        series: [],
        animationEasing: "elasticOut",
        animationDelayUpdate: function(idx) {
          return idx * 5;
        }
      }
    };
  },
  methods: {
    createdBar() {
      var data1 = [];
      var data2 = [];
      for (var i = 0; i < 100; i++) {
        this.option.xAxis.data.push("类目" + i);
        data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
        data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
      }
      var series1 = {
        name: "bar",
        type: "bar",
        data: data1,
        animationDelay: function(idx) {
          return idx * 10;
        }
      };
      var series2 = {
        name: "bar2",
        type: "bar",
        data: data2,
        animationDelay: function(idx) {
          return idx * 10 + 100;
        }
      };
      this.option.series.push(series1);
      this.option.series.push(series2);
    }
  },
  mounted() {
    this.createdBar();
  }
};
</script>

<style scoped>
</style>
