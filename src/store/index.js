import { createStore } from 'vuex'
import * as api from '../api'

export default createStore({
  state: {
    data: []
  },
  getters: {
    getTrendings (state) {
      return state.data
    },
    getRepoById: (state) => (id) => {
      return state.data.find(item => item.id === id)
    }
  },
  mutations: {
    SET_TRENDINGS: (state, trendings) => {
      state.data = trendings.map((item) => {
        item.following = {
          status: false,
          loading: false,
          error: ''
        }
        return item
      })
    },
    SET_README: (state, payload) => {
      state.data = state.data.map(repo => {
        if (payload.id === repo.id) {
          repo.readme = payload.content
        }
        return repo
      })
    }
  },
  actions: {
    async fetchTrendings ({ state, commit, rootState }) {
      try {
        const { data } = await api.trendings.getTrendings()
        commit('SET_TRENDINGS', data.items)
      } catch (e) {
        console.log(e)
        throw e
      }
    },
    async fetchReadme ({ commit }, { id, owner, repo }) {
      const curRepo = this.getters.getRepoById(id)
      if (curRepo.readme !== undefined) return
      try {
        const { data } = await api.readme.getReadme({ owner, repo })
        commit('SET_README', { id, content: data })
      } catch (error) {
        console.log(error)
        throw error
      }
    }
  },
  modules: {
  }
})
