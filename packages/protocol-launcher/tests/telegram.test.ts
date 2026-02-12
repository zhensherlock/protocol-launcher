import { describe, expect, test } from 'vitest'
import { telegram } from '../src'

describe('telegram', () => {
  test('open should return a URL', async () => {
    const url = telegram.open()
    expect(url).toBe('tg://')
  })

  test('openDomain should return a URL', async () => {
    const url = telegram.openDomain({ domain: 'zhensherlock' })
    expect(url).toBe('tg://resolve?domain=zhensherlock')
  })
})
