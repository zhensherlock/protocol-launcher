import { describe, expect, test } from 'vitest'
import { tadam } from '../src'

describe('tadam', () => {
  describe('startWork', () => {
    test('should return the documented work timer URL with a duration', () => {
      const url = tadam.startWork({ time: '10min' })

      expect(url).toBe('tadam://start?time=10min')
    })

    test('should return the documented work timer URL with open UI', () => {
      const url = tadam.startWork({ time: '5:30', open: true })

      expect(url).toBe('tadam://start?time=5:30&open=true')
    })

    test('should support the documented numeric open value', () => {
      const url = tadam.startWork({ time: '5:30', open: 1 })

      expect(url).toBe('tadam://start?time=5:30&open=1')
    })

    test('should open the documented start work UI when no duration is supplied', () => {
      const url = tadam.startWork()

      expect(url).toBe('tadam://start')
    })

    test('should support the documented x-callback-url start prefix without callback params', () => {
      const url = tadam.xCallbackStartWork({ time: '10min' })

      expect(url).toBe('tadam://x-callback-url/start?time=10min')
    })

    test('should include only the documented x-success callback parameter', () => {
      const url = tadam.startWork({
        time: '10min',
        xSuccess: 'shortcuts://callback',
      })

      expect(url).toBe('tadam://x-callback-url/start?time=10min&x-success=shortcuts%3A%2F%2Fcallback')
    })
  })

  describe('startBreak', () => {
    test('should return the documented break timer URL with a duration', () => {
      const url = tadam.startBreak({ time: '5' })

      expect(url).toBe('tadam://break?time=5')
    })

    test('should return the documented break timer URL with mini UI', () => {
      const url = tadam.startBreak({ time: '10min', mini: true })

      expect(url).toBe('tadam://break?time=10min&mini=true')
    })

    test('should support the documented numeric mini value', () => {
      const url = tadam.startBreak({ time: '10min', mini: 1 })

      expect(url).toBe('tadam://break?time=10min&mini=1')
    })

    test('should open the documented break UI when no duration is supplied', () => {
      const url = tadam.startBreak()

      expect(url).toBe('tadam://break')
    })

    test('should support the documented x-callback-url break prefix without callback params', () => {
      const url = tadam.xCallbackStartBreak({ time: '5' })

      expect(url).toBe('tadam://x-callback-url/break?time=5')
    })

    test('should include x-success on the x-callback-url break action', () => {
      const url = tadam.startBreak({
        time: '5',
        xSuccess: 'shortcuts://callback',
      })

      expect(url).toBe('tadam://x-callback-url/break?time=5&x-success=shortcuts%3A%2F%2Fcallback')
    })
  })

  test('pause should return the documented pause URL', () => {
    const url = tadam.pause()

    expect(url).toBe('tadam://pause')
  })

  test('resume should return the documented resume URL', () => {
    const url = tadam.resume()

    expect(url).toBe('tadam://resume')
  })

  test('stop should return the documented stop URL', () => {
    const url = tadam.stop()

    expect(url).toBe('tadam://stop')
  })

  test('help should return the documented help URL', () => {
    const url = tadam.help()

    expect(url).toBe('tadam://help')
  })

  test('control actions should support the documented x-callback-url prefix without callback params', () => {
    expect(tadam.xCallbackPause()).toBe('tadam://x-callback-url/pause')
    expect(tadam.xCallbackResume()).toBe('tadam://x-callback-url/resume')
    expect(tadam.xCallbackStop()).toBe('tadam://x-callback-url/stop')
    expect(tadam.xCallbackHelp()).toBe('tadam://x-callback-url/help')
  })

  test('control actions should support the documented x-success callback parameter', () => {
    const url = tadam.stop({ xSuccess: 'shortcuts://callback' })

    expect(url).toBe('tadam://x-callback-url/stop?x-success=shortcuts%3A%2F%2Fcallback')
  })
})
