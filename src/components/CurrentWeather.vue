<template>
  <div class="container">
    <div class="current-city"> {{city}} </div>
    <div class="secondary">
      <div v-if="current.weather" class="current-temp">
        {{ current.temp | temperature(unit) }}
        <span class="degree-symbol">{{ unit.getDegreeSymbol() }}</span>
        <WeatherIcon :weatherType="current.weather[0].main" />
      </div>
      <div class="air-details">
        HUMIDITY <span>{{ current.humidity }}%</span>
      </div>
      <div class="air-details">
        WIND <span>{{ current.wind_speed | km }} km/h</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import WeatherIcon from "@/components/WeatherIcon";
export default {
  name: "CurrentWeather",
  data() {
    return {
      selectedCity: "Amsterdam",
    };
  },
  components: {
    WeatherIcon,
  },
  computed: {
    ...mapState(["current", "city", "unit"]),
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.main {
  padding-top: 100px;
}

.current-city {
  font-size: 40px;
  color: white;
  width: fit-content;
}

.current-temp {
  font-size: 48px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.degree-symbol {
  font-size: 16px;
  padding-bottom: 18px;
}
.secondary {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.air-details {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
}
</style>