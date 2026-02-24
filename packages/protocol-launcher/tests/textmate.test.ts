import { describe, expect, test } from 'vitest'
import { textmate } from '../src'

describe('textmate', () => {
  test('openFile should return a URL with path', async () => {
    const url = textmate.openFile({
      path: '/etc/hosts',
    })
    expect(url).toBe('txmt://open?url=file:///etc/hosts')
  })

  test('openFile should return a URL with path, line, and column', async () => {
    const url = textmate.openFile({
      path: '/etc/hosts',
      line: 1,
      column: 2,
    })
    expect(url).toBe('txmt://open?url=file:///etc/hosts&line=1&column=2')
  })

  test('openFolder should return a URL with path', async () => {
    const url = textmate.openFolder({
      path: '/etc',
    })
    expect(url).toBe('txmt://open?url=file:///etc')
  })
})
