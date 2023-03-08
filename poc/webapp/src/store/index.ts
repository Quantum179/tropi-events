import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: {},
    user: {},
    events: [],
    selectedEvent: {}
  },
  getters: {
    getToken(state) {
      return state.token
    },
    getEvents(state) {
      return state.events
    }
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    setEvents(state, events) {
      state.events = events
    },
    selectEvent(state, event) {
      state.selectedEvent = event
    },
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    async login({ commit }, form) {
      const result: { jwt: string, user: object } = await axios.post('localhost:3333/auth/login', form)
      if (!result.jwt) { return false }
      commit('setToken', result.jwt)
      commit('setUser', result.user)
      return true
    },
    async signup({ commit }, form) {
      const result: { jwt: string, user: object } = await axios.post('localhost:3333/auth/signup', form)
      if (!result.jwt) { return false }
      commit('setToken', result.jwt)
      commit('setUser', result.user)
      return true
    },
    async fetchEvents({ commit }) {
      const result: { events: [], code: number } = await axios.get('localhost:3333/events')
      commit('setEvents', result.events)
    },
    async fetchEvent({ commit }, id) {
      const result: { event: object, code: number } = await axios.get(`localhost:3333/events/${id}`)
      commit('selectEvent', result.event)
    },
    async createEvent({ state, commit }, form) {
      const result: { event: object, code: number } = await axios.post('localhost:3333/events', form)
      if (result.code !== 201) { return false }
      commit('setEvents', [...state.events, result.event])
      commit('selectEvent', result.event)
      return true
    }
  },
});
