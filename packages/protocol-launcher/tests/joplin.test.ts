import { describe, expect, test } from 'vitest'
import { joplin } from '../src'

describe('joplin', () => {
  test('openNote should return the official note URL', () => {
    const url = joplin.openNote({
      id: '0123456789abcdef0123456789abcdef',
    })

    expect(url).toBe('joplin://x-callback-url/openNote?id=0123456789abcdef0123456789abcdef')
  })

  test('openFolder should return the official folder URL', () => {
    const url = joplin.openFolder({
      id: '0123456789abcdef0123456789abcdef',
    })

    expect(url).toBe('joplin://x-callback-url/openFolder?id=0123456789abcdef0123456789abcdef')
  })

  test('openTag should return the official tag URL', () => {
    const url = joplin.openTag({
      id: '0123456789abcdef0123456789abcdef',
    })

    expect(url).toBe('joplin://x-callback-url/openTag?id=0123456789abcdef0123456789abcdef')
  })
})

describe('documented URL updates', () => {
  test('getCurrentNote preserves callback query parameters through encoding', () => {
    expect(
      joplin.getCurrentNote({
        xSuccess: 'hook://x-callback-url/setCurrentNode?source=joplin',
        xError: 'hook://x-callback-url/error',
      }),
    ).toBe(
      'joplin://x-callback-url/getCurrentNote?x-success=hook%3A%2F%2Fx-callback-url%2FsetCurrentNode%3Fsource%3Djoplin&x-error=hook%3A%2F%2Fx-callback-url%2Ferror',
    )
  })

  test('createNote omits an optional error callback', () => {
    expect(
      joplin.createNote({
        title: 'Meeting & notes',
        body: '# Plan\n你好',
        xSuccess: 'hook://x-callback-url/setCurrentNode',
      }),
    ).toBe(
      'joplin://x-callback-url/createNote?title=Meeting%20%26%20notes&body=%23%20Plan%0A%E4%BD%A0%E5%A5%BD&x-success=hook%3A%2F%2Fx-callback-url%2FsetCurrentNode',
    )
  })
})
