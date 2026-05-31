import { describe, expect, test } from 'vitest'
import { reeder } from '../src'

describe('reeder', () => {
  test('should expose only Reeder documented helpers', () => {
    expect(Object.keys(reeder).sort()).toEqual(['open', 'openFeed'])
  })

  test('open should return the official Reeder open URL', () => {
    const url = reeder.open()

    expect(url).toBe('reed://')
  })

  test('openFeed should return the official feed URL form', () => {
    const url = reeder.openFeed({
      url: 'feed-url.com',
    })

    expect(url).toBe('reed://feed-url.com')
  })
})
