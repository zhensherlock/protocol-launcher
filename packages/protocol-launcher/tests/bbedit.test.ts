import { describe, expect, test } from 'vitest'
import { bbedit } from '../src'

describe('bbedit', () => {
  test('openFile should return a URL with path', async () => {
    const url = bbedit.openFile({
      path: '/etc/hosts',
    })
    expect(url).toBe('x-bbedit://open?url=file:///etc/hosts')
  })

  test('openFile should return a URL with path, line, and column', async () => {
    const url = bbedit.openFile({
      path: '/etc/hosts',
      line: 1,
      column: 2,
    })
    expect(url).toBe('x-bbedit://open?url=file:///etc/hosts&line=1&column=2')
  })

  test('openFolder should return a URL with path', async () => {
    const url = bbedit.openFolder({
      path: '/etc',
    })
    expect(url).toBe('x-bbedit://open?url=file:///etc')
  })
})
