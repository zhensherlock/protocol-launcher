import { describe, expect, test } from 'vitest'
import { goland, idea } from '../src'

describe('goland', () => {
  test('openFile should return a URL with path', async () => {
    const url = goland.openFile({
      path: '/etc/hosts',
    })
    expect(url).toBe('goland://open?file=/etc/hosts')
  })

  test('openFile should return a URL with path, line, and column', async () => {
    const url = goland.openFile({
      path: '/etc/hosts',
      line: 1,
      column: 2,
    })
    expect(url).toBe('goland://open?file=/etc/hosts&line=1&column=2')
  })

  test('openFolder should return a URL with path', async () => {
    const url = goland.openFolder({
      path: '/etc',
    })
    expect(url).toBe('goland://open?file=/etc')
  })
})
