import { describe, expect, test } from 'vitest'
import { codelite } from '../src'

describe('codelite', () => {
  test('openFile should return a URL with path', async () => {
    const url = codelite.openFile({
      path: '/etc/hosts',
    })
    expect(url).toBe('codelite://open?url=file:///etc/hosts')
  })

  test('openFile should return a URL with path, line, and column', async () => {
    const url = codelite.openFile({
      path: '/etc/hosts',
      line: 1,
    })
    expect(url).toBe('codelite://open?url=file:///etc/hosts&line=1')
  })

  test('openFolder should return a URL with path', async () => {
    const url = codelite.openFolder({
      path: '/etc',
    })
    expect(url).toBe('codelite://open?url=file:///etc')
  })
})
