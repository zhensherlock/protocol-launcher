import { describe, expect, test } from 'vitest'
import { macvim } from '../src'

describe('macvim', () => {
  test('openFile should return a URL with path', async () => {
    const url = macvim.openFile({
      path: '/etc/hosts',
    })
    expect(url).toBe('mvim://open?url=file:///etc/hosts')
  })

  test('openFile should return a URL with path, line, and column', async () => {
    const url = macvim.openFile({
      path: '/etc/hosts',
      line: 1,
      column: 2,
    })
    expect(url).toBe('mvim://open?url=file:///etc/hosts&line=1&column=2')
  })

  test('openFolder should return a URL with path', async () => {
    const url = macvim.openFolder({
      path: '/etc',
    })
    expect(url).toBe('mvim://open?url=file:///etc')
  })
})
