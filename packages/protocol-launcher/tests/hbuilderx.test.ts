import { describe, expect, test } from 'vitest'
import { hbuilderx } from '../src'

describe('hbuilderx', () => {
  test('open should return a URL', async () => {
    const url = hbuilderx.open()
    expect(url).toBe('hbuilderx://')
  })
})
