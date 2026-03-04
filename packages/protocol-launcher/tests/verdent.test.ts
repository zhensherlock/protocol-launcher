import { describe, expect, test } from 'vitest'
import { verdent } from '../src'

describe('verdent', () => {
  test('open should return a URL with path', async () => {
    const url = verdent.open()
    expect(url).toBe('verdent://')
  })
})
