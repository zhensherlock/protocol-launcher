import { describe, expect, test } from 'vitest'
import { xcode } from '../src'

describe('xcode', () => {
  test('cloneProject should return a URL with url', async () => {
    const url = xcode.cloneProject({
      url: 'https://github.com/zhensherlock/protocol-launcher.git',
    })
    expect(url).toBe('xcode://clone?repo=https://github.com/zhensherlock/protocol-launcher.git')
  })
})
