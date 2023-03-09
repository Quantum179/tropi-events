import axios from 'axios'
import {
  Module, VuexModule, Mutation, MutationAction, getModule
} from 'vuex-module-decorators'

export interface IState {
  token: string,
  user: object,
  events: Array<object>,
  selectedEvent: object
}

@Module({ name: 'state' })
export default class StateModule extends VuexModule implements IState {
  token = ''
  user = {}
  events = []
  selectedEvent = {}

  @Mutation
  setToken(token: string) {
    this.token = token
  }

  @Mutation
  setEvents(events: []) {
    this.events = events
  }

  @Mutation
  selectEvent(event: object) {
    this.selectedEvent = event
  }

  @Mutation
  setUser(user: object) {
    this.user = user
  }

  @MutationAction
  async login(form: object) {
    try {
      const result: { token: string, user: object } = await axios.post('http://localhost:3333/auth/login', form)
      return { ...result }
    } catch (error) {
      console.log(error)
      return undefined
    }
  }

  @MutationAction
  async signup(form: object) {
    const result: { token: string, user: object } = await axios.post('http://localhost:3333/auth/signup', form)
    if (!result.token) { return undefined }
    return { ...result }
  }

  @MutationAction
  async fetchEvents() {
    const result: { events: Array<object>, code: number } = await axios.get('http://localhost:3333/events')
    return { events: result.events }
  }

  @MutationAction
  async fetchEvent(id: number) {
    const result: { event: object, code: number } = await axios.get(`http://localhost:3333/events/${id}`)
    if (result.code !== 200) { return undefined }
    return { selectedEvent: result.event }
  }

  @MutationAction
  async createEvent(form: object) {
    const result: { event: object, code: number } = await axios.post('http://localhost:3333/events', form)
    if (result.code !== 201) { return undefined }
    return { events: [...this.events, result.event], selectedEvent: result.event }
  }
}

// export default getModule(StateModule)
