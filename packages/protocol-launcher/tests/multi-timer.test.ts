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
})
