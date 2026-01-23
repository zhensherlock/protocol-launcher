import { describe, expect, test } from 'vitest'
import { telegram } from '../src'

describe('telegram', () => {
  test('open should return a URL', async () => {
    const url = telegram.open()
    expect(url).toBe('tg://')
  })
})
