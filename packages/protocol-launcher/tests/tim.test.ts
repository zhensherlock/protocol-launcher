import { describe, expect, test } from 'vitest'
import { tim } from '../src'

describe('tim', () => {
  test('should expose only Tim documented helpers', () => {
    expect(Object.keys(tim).sort()).toEqual([
      'createGroup',
      'createRecord',
      'createTask',
      'getCurrentUrl',
      'open',
      'openExport',
      'openSettings',
      'openTaskOrGroup',
      'openUpgrade',
      'startTask',
      'stopTimer',
    ])
  })

  test('open should return the Tim scheme URL', () => {
    const url = tim.open()

    expect(url).toBe('tim://')
  })

  test('openTaskOrGroup should return a task or group URL by ID', () => {
    const url = tim.openTaskOrGroup({
      id: 'D43FA035-6406-495D-9ADD-46721986040F',
    })

    expect(url).toBe('tim://D43FA035-6406-495D-9ADD-46721986040F')
  })

  test('startTask should return a start action URL with optional notes', () => {
    const url = tim.startTask({
      id: 'D43FA035-6406-495D-9ADD-46721986040F',
      notes: 'My Notes',
    })

    expect(url).toBe('tim://D43FA035-6406-495D-9ADD-46721986040F?action=start&notes=My%20Notes')
  })

  test('startTask should omit notes when they are not provided', () => {
    const url = tim.startTask({
      id: 'D43FA035-6406-495D-9ADD-46721986040F',
    })

    expect(url).toBe('tim://D43FA035-6406-495D-9ADD-46721986040F?action=start')
  })

  test('stopTimer should return the stop action URL', () => {
    const url = tim.stopTimer()

    expect(url).toBe('tim://?action=stop')
  })

  test('createTask should return a create URL with task type', () => {
    const url = tim.createTask({
      title: 'My Title',
      notes: 'My Notes',
    })

    expect(url).toBe('tim://create?type=task&title=My%20Title&notes=My%20Notes')
  })

  test('createGroup should return a create URL with group type', () => {
    const url = tim.createGroup({
      title: 'My Title',
      notes: 'My Notes',
    })

    expect(url).toBe('tim://create?type=group&title=My%20Title&notes=My%20Notes')
  })

  test('createTask should keep only the documented type field when optional fields are omitted', () => {
    const url = tim.createTask()

    expect(url).toBe('tim://create?type=task')
  })

  test('getCurrentUrl should return the documented x-callback-url', () => {
    const url = tim.getCurrentUrl({
      xSuccess: 'https://www.apple.com',
    })

    expect(url).toBe('tim://x-callback-url/getCurrentUrl?x-success=https%3A%2F%2Fwww.apple.com')
  })

  test('open documented windows', () => {
    expect(tim.openSettings()).toBe('tim://settings')
    expect(tim.openExport()).toBe('tim://export')
    expect(tim.openUpgrade()).toBe('tim://upgrade')
  })
  test('createRecord encodes ISO dates and notes and omits absent notes', () => {
    expect(
      tim.createRecord({
        task: 'TASK_ID',
        start: '2026-10-02T09:00:00+08:00',
        end: '2026-10-02T10:00:00+08:00',
        notes: 'Work & review',
      }),
    ).toBe(
      'tim://create?type=record&task=TASK_ID&start=2026-10-02T09%3A00%3A00%2B08%3A00&end=2026-10-02T10%3A00%3A00%2B08%3A00&notes=Work%20%26%20review',
    )
    expect(tim.createRecord({ task: 'TASK_ID', start: '2026-10-02T01:00:00Z', end: '2026-10-02T02:00:00Z' })).toBe(
      'tim://create?type=record&task=TASK_ID&start=2026-10-02T01%3A00%3A00Z&end=2026-10-02T02%3A00%3A00Z',
    )
  })
  test('getCurrentUrl preserves a nested callback query', () => {
    expect(tim.getCurrentUrl({ xSuccess: 'myapp://done?a=1&b=2' })).toBe(
      'tim://x-callback-url/getCurrentUrl?x-success=myapp%3A%2F%2Fdone%3Fa%3D1%26b%3D2',
    )
  })
})
