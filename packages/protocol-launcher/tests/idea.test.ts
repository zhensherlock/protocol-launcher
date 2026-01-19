import { describe, expect, test } from 'vitest'
import { idea } from '../src'

describe('idea', () => {
  test('openFile should return a URL with path', async () => {
    const url = idea.openFile({
      path: '/etc/hosts',
    })
    expect(url).toBe('idea://open?file=/etc/hosts')
  })

  test('openFile should return a URL with path, line, and column', async () => {
    const url = idea.openFile({
      path: '/etc/hosts',
      line: 1,
      column: 2,
    })
    expect(url).toBe('idea://open?file=/etc/hosts&line=1&column=2')
  })

  test('openFolder should return a URL with path', async () => {
    const url = idea.openFolder({
      path: '/etc',
    })
    expect(url).toBe('idea://open?file=/etc')
  })
})
