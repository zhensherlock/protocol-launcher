import { describe, expect, test } from 'vitest'
import { multiTimer } from '../src'

describe('multiTimer', () => {
  describe('startTimer', () => {
    test('should return a URL with name only', async () => {
      const url = multiTimer.startTimer({
        name: 'Lunch',
      })
      expect(url).toBe('multitimer://api/start-timer?name=Lunch')
    })

    test('should return a URL with name and board', async () => {
      const url = multiTimer.startTimer({
        name: 'Lunch',
        board: 'Work',
      })
      expect(url).toBe('multitimer://api/start-timer?name=Lunch&board=Work')
    })
  })

  describe('stopTimer', () => {
    test('should return a URL with name only', async () => {
      const url = multiTimer.stopTimer({
        name: 'Lunch',
      })
      expect(url).toBe('multitimer://api/stop-timer?name=Lunch')
    })

    test('should return a URL with name and board', async () => {
      const url = multiTimer.stopTimer({
        name: 'Lunch',
        board: 'Work',
      })
      expect(url).toBe('multitimer://api/stop-timer?name=Lunch&board=Work')
    })
  })

  describe('pauseTimer', () => {
    test('should return a URL with name only', async () => {
      const url = multiTimer.pauseTimer({
        name: 'Lunch',
      })
      expect(url).toBe('multitimer://api/pause-timer?name=Lunch')
    })

    test('should return a URL with name and board', async () => {
      const url = multiTimer.pauseTimer({
        name: 'Lunch',
        board: 'Work',
      })
      expect(url).toBe('multitimer://api/pause-timer?name=Lunch&board=Work')
    })
  })

  describe('resumeTimer', () => {
    test('should return a URL with name only', async () => {
      const url = multiTimer.resumeTimer({
        name: 'Lunch',
      })
      expect(url).toBe('multitimer://api/resume-timer?name=Lunch')
    })

    test('should return a URL with name and board', async () => {
      const url = multiTimer.resumeTimer({
        name: 'Lunch',
        board: 'Work',
      })
      expect(url).toBe('multitimer://api/resume-timer?name=Lunch&board=Work')
    })
  })

  test('startTimer preserves nested callback URLs', () => {
    expect(multiTimer.startTimer({ name: 'Lunch', xSuccess: 'myapp://done?a=1&b=2' })).toBe(
      'multitimer://x-callback-url/start-timer?name=Lunch&x-success=myapp%3A%2F%2Fdone%3Fa%3D1%26b%3D2',
    )
  })
  test('stopTimer preserves nested callback URLs', () => {
    expect(multiTimer.stopTimer({ name: 'Lunch', xSuccess: 'myapp://done?a=1&b=2' })).toBe(
      'multitimer://x-callback-url/stop-timer?name=Lunch&x-success=myapp%3A%2F%2Fdone%3Fa%3D1%26b%3D2',
    )
  })
  test('pauseTimer preserves nested callback URLs', () => {
    expect(multiTimer.pauseTimer({ name: 'Lunch', xSuccess: 'myapp://done?a=1&b=2' })).toBe(
      'multitimer://x-callback-url/pause-timer?name=Lunch&x-success=myapp%3A%2F%2Fdone%3Fa%3D1%26b%3D2',
    )
  })
  test('resumeTimer preserves nested callback URLs', () => {
    expect(multiTimer.resumeTimer({ name: 'Lunch', xSuccess: 'myapp://done?a=1&b=2' })).toBe(
      'multitimer://x-callback-url/resume-timer?name=Lunch&x-success=myapp%3A%2F%2Fdone%3Fa%3D1%26b%3D2',
    )
  })

  test('error-only and cancel-only callbacks select the callback route', () => {
    expect(multiTimer.startTimer({ name: 'Lunch', xError: 'myapp://error' })).toBe(
      'multitimer://x-callback-url/start-timer?name=Lunch&x-error=myapp%3A%2F%2Ferror',
    )
    expect(multiTimer.stopTimer({ name: 'Lunch', xCancel: 'myapp://cancel' })).toBe(
      'multitimer://x-callback-url/stop-timer?name=Lunch&x-cancel=myapp%3A%2F%2Fcancel',
    )
  })
})
