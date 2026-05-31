import { describe, expect, test } from 'vitest'
import { tim } from '../src'

describe('tim', () => {
  test('should expose only Tim documented helpers', () => {
    expect(Object.keys(tim).sort()).toEqual([
      'createGroup',
      'createTask',
      'getCurrentUrl',
      'open',
      'openTaskOrGroup',
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

    expect(url).toBe('tim://x-callback-url/getCurrentUrl?x-success=https://www.apple.com')
  })
})
