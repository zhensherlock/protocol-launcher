import { describe, expect, test } from 'vitest'
import { timerPlus } from '../src'

describe('timerPlus', () => {
  describe('quickTimer', () => {
    test('should return a quick timer URL with hours, minutes, and seconds', () => {
      const url = timerPlus.quickTimer({
        hours: 1,
        minutes: 23,
        seconds: 45,
      })

      expect(url).toBe('timerplus://app/quick-timers/new?hours=1&minutes=23&seconds=45')
    })

    test('should return a quick timer URL with minutes and name', () => {
      const url = timerPlus.quickTimer({
        minutes: 50,
        name: 'Laundry',
      })

      expect(url).toBe('timerplus://app/quick-timers/new?minutes=50&name=Laundry')
    })

    test('should return a quick timer URL without parameters', () => {
      const url = timerPlus.quickTimer()

      expect(url).toBe('timerplus://app/quick-timers/new')
    })

    test('should return a quick timer x-callback-url with supported callback parameters', () => {
      const url = timerPlus.quickTimer({
        hours: 1,
        minutes: 5,
        seconds: 30,
        name: 'Tea',
        xSource: 'Shortcuts',
        xSuccess: 'shortcuts://callback',
      })

      expect(url).toBe(
        'timerplus://x-callback-url/quick-timers/new?hours=1&minutes=5&seconds=30&name=Tea&x-source=Shortcuts&x-success=shortcuts%3A%2F%2Fcallback',
      )
    })
  })

  describe('quickStopwatch', () => {
    test('should return a quick stopwatch URL without parameters', () => {
      const url = timerPlus.quickStopwatch()

      expect(url).toBe('timerplus://app/quick-stopwatches/new')
    })

    test('should return a quick stopwatch URL with name', () => {
      const url = timerPlus.quickStopwatch({
        name: 'Plank',
      })

      expect(url).toBe('timerplus://app/quick-stopwatches/new?name=Plank')
    })

    test('should return the documented quick stopwatch x-callback-url path', () => {
      const url = timerPlus.quickStopwatch({
        name: 'Plank',
        xSource: 'Shortcuts',
        xSuccess: 'shortcuts://callback',
      })

      expect(url).toBe(
        'timerplus://x-callback-url/quick-stopwatch/new?name=Plank&x-source=Shortcuts&x-success=shortcuts%3A%2F%2Fcallback',
      )
    })
  })
})
