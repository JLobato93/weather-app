<template>
  <span>
    <span v-if="celsius">
      <span class="number">{{ weather | celsius(weather) }}</span>
      <span class="symbol">°C</span>
    </span>
    <span v-if="fahrenheit">
      <span class="number">{{ weather | fahrenheit(weather) }}</span>
      <span class="symbol">°F</span>
    </span>
  </span>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["weather", "fontSize"],
  computed: {
    ...mapState(["fahrenheit", "celsius"]),
  },
};
</script>

<style>
.number {
  font-size: 60px;
  color: white;
}

.symbol {
  font-size: fontSize;
  color: white;
  vertical-align: top;
}
</style>