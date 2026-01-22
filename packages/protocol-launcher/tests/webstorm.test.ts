import { describe, expect, test } from 'vitest'
import { webstorm } from '../src'

describe('webstorm', () => {
  test('openFile should return a URL with path', async () => {
    const url = webstorm.openFile({
      path: '/etc/hosts',
    })
    expect(url).toBe('webstorm://open?file=/etc/hosts')
  })

  test('openFile should return a URL with path, line, and column', async () => {
    const url = webstorm.openFile({
      path: '/etc/hosts',
      line: 1,
      column: 2,
    })
    expect(url).toBe('webstorm://open?file=/etc/hosts&line=1&column=2')
  })

  test('openFolder should return a URL with path', async () => {
    const url = webstorm.openFolder({
      path: '/etc',
    })
    expect(url).toBe('webstorm://open?file=/etc')
  })
})
