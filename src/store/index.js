import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import helper from '@/utilities/helper'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    current: {},
    hourly: {},
    daily: {},
    unit: 'celsius',
    city: "Amsterdam",
    chartData: [0, 0, 0, 0, 0],
  },
  getters: {
    getChartData(state) {
      state.chartData
    }
  },
  mutations: {
    setCurrent(state, payload) { state.current = payload },
    setHourly(state, payload) { state.hourly = helper.threeHourForecast(payload) },
    setDaily(state, payload) { state.daily = payload.splice(1, 6) },
    setDegreeUnit(state) { state.unit = state.unit === 'celsius' ? 'fahrenheit' : 'celsius' },
    setChartData(state, payload) { state.chartData = helper.extractProperty(helper.threeHourForecast(payload), 'temp') },
  },
  actions: {
    async getWeather({ commit }) {
      await axios.get("http://localhost:3000/weather").then(({ data }) => {
        commit('setCurrent', data.current);
        commit('setHourly', data.hourly);
        commit('setDaily', data.daily);
        commit('setChartData', data.hourly);
      });
    },
  }
})
