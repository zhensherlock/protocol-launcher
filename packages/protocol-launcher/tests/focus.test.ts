import { describe, expect, test } from 'vitest'
import { focus } from '../src'

describe('focus', () => {
  test('addTask should return a URL with title', () => {
    const url = focus.addTask({
      title: 'Read chapter 3',
    })

    expect(url).toBe('focusapp://add?title=Read%20chapter%203')
  })

  test('addTask should return a URL with title and note', () => {
    const url = focus.addTask({
      title: 'Read chapter 4',
      note: 'Pages 304-328',
    })

    expect(url).toBe('focusapp://add?title=Read%20chapter%204&note=Pages%20304-328')
  })

  test('addTask should return a URL with official estimate and due parameters', () => {
    const url = focus.addTask({
      title: 'Prepare Presentation',
      note: 'Referecene mail notes',
      sessionEstimate: 8,
      due: 'monday',
    })

    expect(url).toBe(
      'focusapp://add?title=Prepare%20Presentation&note=Referecene%20mail%20notes&sessionEstimate=8&due=monday',
    )
  })

  test('addTask should return a URL with official minutes estimate and due parameters', () => {
    const url = focus.addTask({
      title: 'Study documentation',
      note: 'make notes',
      minutesEstimate: 120,
      due: 'tomorrow',
    })

    expect(url).toBe('focusapp://add?title=Study%20documentation&note=make%20notes&minutesEstimate=120&due=tomorrow')
  })

  test('addTask should prefer minutesEstimate over sessionEstimate', () => {
    const url = focus.addTask({
      title: 'Study documentation',
      note: 'make notes',
      sessionEstimate: 8,
      minutesEstimate: 120,
      due: 'tomorrow',
    })

    expect(url).toBe('focusapp://add?title=Study%20documentation&note=make%20notes&minutesEstimate=120&due=tomorrow')
  })

  test('addTask should return a URL with sourceURL and x-callback parameters', () => {
    const url = focus.addTask({
      title: 'Linked task',
      sourceURL: 'omnifocus:///task/taskID',
      xSuccess: 'shortcuts://x-callback-url/run-shortcut?name=Focus Added',
      xError: 'shortcuts://x-callback-url/run-shortcut?name=Focus Error',
    })

    expect(url).toBe(
      'focusapp://add?title=Linked%20task&sourceURL=omnifocus%3A%2F%2F%2Ftask%2FtaskID&x-success=shortcuts%3A%2F%2Fx-callback-url%2Frun-shortcut%3Fname%3DFocus%20Added&x-error=shortcuts%3A%2F%2Fx-callback-url%2Frun-shortcut%3Fname%3DFocus%20Error',
    )
  })

  test('deleteTask should return a URL with id', () => {
    const url = focus.deleteTask({
      id: 'B1127BC6-3CC3-4AC4-B561-3CD493D2EDD6',
    })

    expect(url).toBe('focusapp://delete?id=B1127BC6-3CC3-4AC4-B561-3CD493D2EDD6')
  })

  test('deleteTask should return a URL with ids separated by question marks', () => {
    const url = focus.deleteTask({
      ids: 'B1127BC6-3CC3-4AC4-B561-3CD493D2EDD6?U36SAM-3CD3-1BC4-B481-2CD590D2EDD2',
    })

    expect(url).toBe('focusapp://delete?ids=B1127BC6-3CC3-4AC4-B561-3CD493D2EDD6?U36SAM-3CD3-1BC4-B481-2CD590D2EDD2')
  })

  test('startTimer should return a URL without parameters', () => {
    const url = focus.startTimer()

    expect(url).toBe('focusapp://start-timer')
  })

  test('startTimer should return a URL with duration', () => {
    const url = focus.startTimer({
      duration: 20,
    })

    expect(url).toBe('focusapp://start-timer?duration=20')
  })

  test('startTimer should return a URL with type and duration', () => {
    const url = focus.startTimer({
      type: 'focus',
      duration: 40,
    })

    expect(url).toBe('focusapp://start-timer?type=focus&duration=40')
  })

  test('startTimer should return a URL with x-callback parameters', () => {
    const url = focus.startTimer({
      type: 'break',
      duration: 5,
      xSuccess: 'myapp://success',
      xError: 'myapp://error',
    })

    expect(url).toBe(
      'focusapp://start-timer?type=break&duration=5&x-success=myapp%3A%2F%2Fsuccess&x-error=myapp%3A%2F%2Ferror',
    )
  })

  test('pauseTimer should return a URL without parameters', () => {
    const url = focus.pauseTimer()

    expect(url).toBe('focusapp://pause-timer')
  })

  test('pauseTimer should return a URL with x-callback parameters', () => {
    const url = focus.pauseTimer({
      xSuccess: 'myapp://success',
      xError: 'myapp://error',
    })

    expect(url).toBe('focusapp://pause-timer?x-success=myapp%3A%2F%2Fsuccess&x-error=myapp%3A%2F%2Ferror')
  })
})
