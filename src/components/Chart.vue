<template>
  <div class="chart-container">
    <canvas ref="canvas" id="chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
export default {
  name: "Chart",
  props: ["data"],
  data() {
    return {
      chartData: {
        type: "line",
        data: {
          labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
          datasets: [
            {
              data: this.data,
              backgroundColor: ["hsla(320, 100%, 20%, 0.5)"],
              borderColor: ["hsla(320, 100%, 20%, 0.5)"],
            },
          ],
        },
        options: {
          legend: {
            display: false,
          },
          elements: {
            point: {
              radius: 0,
            },
          },
          scales: {
            xAxes: [
              {
                display: false,
              },
            ],
            yAxes: [
              {
                display: false,
                ticks: {
                  //   beginAtZero: true,
                  stepSize: 3,
                },
              },
            ],
          },
        },
      },
    };
  },
  mounted() {
    const ctx = document.getElementById("chart");
    new Chart(ctx, this.chartData);
  },
};
</script>

<style scoped>
.chart-container {
  position: absolute;
  width: 922px;
  z-index: 1000;
  left: 300px;
  bottom: 460px;
}
#chart {
  position: absolute;
}
</style>