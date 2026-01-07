import Bowser from 'bowser'
import { defineStore } from 'pinia'

const useAppStore = defineStore('app', {
  state: () => {
    const osName = Bowser.getParser(navigator.userAgent).getOSName()
    return {
      osName,
      isWindows: osName === 'Windows',
    }
  },
  getters: {},
  actions: {},
})

export { useAppStore }
