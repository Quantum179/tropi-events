import axios from 'axios'
import {
  Module, VuexModule, Mutation, MutationAction
} from 'vuex-module-decorators'

export interface IUser {
  id: number
  username: string,
  type: number,
  email: string,
  phoneNumber: string
}
export interface IState {
  token: string,
  user: IUser,
  events: Array<object>,
  selectedEvent: object,
  lastStatus: number
}

@Module({ name: 'state' })
export default class StateModule extends VuexModule implements IState {
  token = ''
  user = {
    id: -1,
    username: '',
    type: -1,
    email: '',
    phoneNumber: ''
  }
  events = []
  selectedEvent = {}
  lastStatus = 0

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
  setUser(user: IUser) {
    this.user = user
  }

  @MutationAction
  async login(form: object) {
    try {
      const result = await axios.post('http://localhost:3333/auth/login', form)
      return { ...result.data, lastStatus: result.status }
    } catch (error) {
      return error
    }
  }

  @MutationAction
  async signup(form: object) {
    try {
      const result = await axios.post('http://localhost:3333/auth/signup', form)
      return { ...result.data, lastStatus: result.status }
    } catch (error) {
      return error
    }
  }

  @MutationAction
  async fetchEvents() {
    const result = await axios.get('http://localhost:3333/events')
    return { ...result.data }
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
