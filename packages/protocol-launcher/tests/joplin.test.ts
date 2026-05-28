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
