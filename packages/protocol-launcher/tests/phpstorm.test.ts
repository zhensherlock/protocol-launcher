import { describe, expect, test } from 'vitest'
import { phpstorm } from '../src'

describe('phpstorm', () => {
  test('openFile should return a URL with path', async () => {
    const url = phpstorm.openFile({
      path: '/etc/hosts',
    })
    expect(url).toBe('phpstorm://open?file=/etc/hosts')
  })

  test('openFile should return a URL with path, line, and column', async () => {
    const url = phpstorm.openFile({
      path: '/etc/hosts',
      line: 1,
      column: 2,
    })
    expect(url).toBe('phpstorm://open?file=/etc/hosts&line=1&column=2')
  })

  test('openFolder should return a URL with path', async () => {
    const url = phpstorm.openFolder({
      path: '/etc',
    })
    expect(url).toBe('phpstorm://open?file=/etc')
  })
})
