import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useRouterStore = defineStore('', {

  state: () => ({
    route: '',
  }),

  actions: {
    setRoute(route: string) {
      this.route = route
    }
  }

})
