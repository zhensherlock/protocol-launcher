import { describe, expect, test } from 'vitest'
import { atom } from '../src'

describe('atom', () => {
  test('open should return a URL with path', async () => {
    const url = atom.open()
    expect(url).toBe('atom://')
  })

  test('openFile should return a URL with path', async () => {
    const url = atom.openFile({
      path: '/etc/hosts',
    })
    expect(url).toBe('atom://core/open/file?filename=/etc/hosts')
  })

  test('openFile should return a URL with path, line, and column', async () => {
    const url = atom.openFile({
      path: '/etc/hosts',
      line: 1,
      column: 2,
    })
    expect(url).toBe('atom://core/open/file?filename=/etc/hosts&line=1&column=2')
  })
})
