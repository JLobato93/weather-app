<template>
  <div class="grid-container">
    <CurrentWeather />
    <TenHourForecast />
    <Chart :data="this.chartData" :key="this.chartData.length"/>
    <div class="settings">
      <DegreeToggle />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Degrees from "@/components/Degrees.vue";
import CurrentWeather from "@/components/CurrentWeather.vue";
import TenHourForecast from "@/components/TenHourForecast.vue";
import DegreeToggle from "@/components/DegreeToggle.vue";
import Chart from "@/components/Chart.vue";
export default {
  name: "MainWeather",
  components: {
    Degrees,
    CurrentWeather,
    TenHourForecast,
    DegreeToggle,
    Chart,
  },
  data() {
    return {
      location: "Amsterdam",
    };
  },
  computed: {
    ...mapState(["chartData"]),
  },
  methods: {
    ...mapActions(["getWeather"]),
  },
  created() {
    this.getWeather();
  },
};
</script>

<style scoped>
.grid-container {
  display: grid;
  position: relative;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 500px;
  grid-auto-flow: column;
  width: fit-content;
  margin: 0 auto;
  background: linear-gradient(
    to top right,
    hsl(320, 100%, 39%),
    hsl(330, 100%, 39%)
  );
  border-radius: 16px 16px 0 0;
}
.settings {
  display: flex;
  position: absolute;
  left: 68px;
  bottom: 20px;
}
</style>
