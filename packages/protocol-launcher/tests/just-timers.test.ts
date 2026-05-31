import { describe, expect, test } from 'vitest'
import { justTimers } from '../src'

describe('justTimers', () => {
  describe('createTimer', () => {
    test('should create a timer with a sentence-style duration', () => {
      const url = justTimers.createTimer({
        name: 'Tea',
        duration: '2 minutes',
      })

      expect(url).toBe('justtimers://x-callback-url/new/?name=Tea&duration=2%20minutes')
    })

    test('should create a paused timer with a seconds duration', () => {
      const url = justTimers.createTimer({
        name: 'Tea',
        seconds: 120,
        active: false,
      })

      expect(url).toBe('justtimers://x-callback-url/new/?name=Tea&seconds=120&active=false')
    })
  })

  test('deleteTimer should delete a timer by name', () => {
    const url = justTimers.deleteTimer({ name: 'Tea' })

    expect(url).toBe('justtimers://x-callback-url/delete/?name=Tea')
  })

  test('deleteTimer should delete all timers with the documented all modifier', () => {
    const url = justTimers.deleteTimer({ all: true })

    expect(url).toBe('justtimers://x-callback-url/delete/all')
  })

  test('pauseTimer should pause a timer by name', () => {
    const url = justTimers.pauseTimer({ name: 'Tea' })

    expect(url).toBe('justtimers://x-callback-url/pause/?name=Tea')
  })

  test('pauseTimer should pause all timers with the documented all modifier', () => {
    const url = justTimers.pauseTimer({ all: true })

    expect(url).toBe('justtimers://x-callback-url/pause/all')
  })

  test('resetTimer should reset a timer by name', () => {
    const url = justTimers.resetTimer({ name: 'Tea' })

    expect(url).toBe('justtimers://x-callback-url/reset/?name=Tea')
  })

  test('resetTimer should reset all timers with the documented all modifier', () => {
    const url = justTimers.resetTimer({ all: true })

    expect(url).toBe('justtimers://x-callback-url/reset/all')
  })

  test('restartTimer should restart a timer by name', () => {
    const url = justTimers.restartTimer({ name: 'Tea' })

    expect(url).toBe('justtimers://x-callback-url/restart/?name=Tea')
  })

  test('restartTimer should restart all timers with the documented all modifier', () => {
    const url = justTimers.restartTimer({ all: true })

    expect(url).toBe('justtimers://x-callback-url/restart/all')
  })

  test('resumeTimer should resume a timer by name', () => {
    const url = justTimers.resumeTimer({ name: 'Tea' })

    expect(url).toBe('justtimers://x-callback-url/resume/?name=Tea')
  })

  test('resumeTimer should resume all timers with the documented all modifier', () => {
    const url = justTimers.resumeTimer({ all: true })

    expect(url).toBe('justtimers://x-callback-url/resume/all')
  })
})
