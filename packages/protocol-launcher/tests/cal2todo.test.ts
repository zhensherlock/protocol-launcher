import { describe, expect, test } from 'vitest'
import { cal2todo } from '../src'

describe('cal2todo', () => {
  test('open should return a URL', async () => {
    const url = cal2todo.open()
    expect(url).toBe('cal2todo-x-callback://')
  })

  test('add should return a URL with required title', async () => {
    const url = cal2todo.add({
      title: 'ABC',
    })
    expect(url).toBe('cal2todo-x-callback://x-callback-url/add?title=ABC')
  })

  test('add should return a URL with title and notes', async () => {
    const url = cal2todo.add({
      title: 'ABC',
      notes: 'XYZ',
    })
    expect(url).toBe('cal2todo-x-callback://x-callback-url/add?title=ABC&notes=XYZ')
  })

  test('add should return a URL with x-success, x-source and x-error', async () => {
    const url = cal2todo.add({
      title: 'Meeting',
      xSuccess: 'srcapp://ok',
      xSource: 'srcapp',
      xError: 'srcapp://cancel',
    })
    expect(url).toBe(
      'cal2todo-x-callback://x-callback-url/add?x-success=srcapp%3A%2F%2Fok&x-source=srcapp&x-error=srcapp%3A%2F%2Fcancel&title=Meeting',
    )
  })

  test('add should return a URL with all parameters', async () => {
    const url = cal2todo.add({
      title: 'Event',
      notes: 'Event notes',
      xSuccess: 'myapp://success',
      xSource: 'myapp',
      xError: 'myapp://error',
    })
    expect(url).toBe(
      'cal2todo-x-callback://x-callback-url/add?x-success=myapp%3A%2F%2Fsuccess&x-source=myapp&x-error=myapp%3A%2F%2Ferror&title=Event&notes=Event%20notes',
    )
  })

  test('add should match the example URL from documentation', async () => {
    const url = cal2todo.add({
      title: 'ABC',
      notes: 'XYZ',
      xSuccess: 'srcapp://ok',
      xSource: 'srcapp',
      xError: 'srcapp://cancel',
    })
    expect(url).toBe(
      'cal2todo-x-callback://x-callback-url/add?x-success=srcapp%3A%2F%2Fok&x-source=srcapp&x-error=srcapp%3A%2F%2Fcancel&title=ABC&notes=XYZ',
    )
  })
})
