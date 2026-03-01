import { describe, expect, test } from 'vitest'
import { opencode } from '../src'

describe('opencode', () => {
  test('open should return a URL', async () => {
    const url = opencode.open()
    expect(url).toBe('opencode://')
  })

  test('openProject should return a URL with path, line, and column', async () => {
    const url = opencode.openProject({
      path: '/Users/dev/project',
    })
    expect(url).toBe('opencode://open-project?directory=/Users/dev/project')
  })
})
