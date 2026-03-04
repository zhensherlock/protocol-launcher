import { describe, expect, test } from 'vitest'
import { orchids } from '../src'

describe('orchids', () => {
  test('open should return a URL with path', async () => {
    const url = orchids.open()
    expect(url).toBe('orchids://')
  })
})
