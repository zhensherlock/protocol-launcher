import { describe, expect, test } from 'vitest'
import { todayHabitTracker } from '../src'

describe('todayHabitTracker', () => {
  test('openHabit should return the official example URL', () => {
    const url = todayHabitTracker.openHabit({
      id: 'p14',
    })

    expect(url).toBe('today://x-callback-url/open-habit?id=p14')
  })

  test('openHabit should include x-callback parameters', () => {
    const url = todayHabitTracker.openHabit({
      id: 'p14',
      xSuccess: 'shortcuts://x-callback-url/run-shortcut?name=Habit Info',
      xError: 'shortcuts://x-callback-url/run-shortcut?name=Habit Error',
    })

    expect(url).toBe(
      'today://x-callback-url/open-habit?id=p14&x-success=shortcuts%3A%2F%2Fx-callback-url%2Frun-shortcut%3Fname%3DHabit%20Info&x-error=shortcuts%3A%2F%2Fx-callback-url%2Frun-shortcut%3Fname%3DHabit%20Error',
    )
  })

  test('checkIn should return the official example URL', () => {
    const url = todayHabitTracker.checkIn({
      id: 'p14',
    })

    // The Today article heading renders as "/checkin", but the official constructible URL example uses "check-in".
    expect(url).toBe('today://x-callback-url/check-in?id=p14')
  })

  test('revokeCheckIn should return the official example URL', () => {
    const url = todayHabitTracker.revokeCheckIn({
      id: 'p14',
    })

    expect(url).toBe('today://x-callback-url/revoke-checkin?id=p14')
  })

  test('showHabits should return the official example URL', () => {
    const url = todayHabitTracker.showHabits({
      filter: 'all',
    })

    expect(url).toBe('today://x-callback-url/show-habits?filter=all')
  })

  test('showHabits should omit the default filter', () => {
    const url = todayHabitTracker.showHabits()

    expect(url).toBe('today://x-callback-url/show-habits')
  })

  test('showHabits should include filter and x-callback parameters', () => {
    const url = todayHabitTracker.showHabits({
      filter: 'today',
      xSuccess: 'myapp://success',
      xError: 'myapp://error',
    })

    expect(url).toBe(
      'today://x-callback-url/show-habits?filter=today&x-success=myapp%3A%2F%2Fsuccess&x-error=myapp%3A%2F%2Ferror',
    )
  })
})
