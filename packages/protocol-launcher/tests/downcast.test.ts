import { describe, expect, test } from 'vitest'
import { downcast } from '../src'

describe('downcast', () => {
  test('open should return the documented Downcast scheme', () => {
    const url = downcast.open()

    expect(url).toBe('downcast://')
  })

  test('subscribe should return an itpc feed URL unchanged', () => {
    const url = downcast.subscribe({
      url: 'itpc://example.com/podcast/rss',
    })

    expect(url).toBe('itpc://example.com/podcast/rss')
  })

  test('subscribe should return a podcast feed URL unchanged', () => {
    const url = downcast.subscribe({
      url: 'podcast://example.com/podcast/rss',
    })

    expect(url).toBe('podcast://example.com/podcast/rss')
  })

  test('subscribe should return a feed URL unchanged', () => {
    const url = downcast.subscribe({
      url: 'feed://example.com/podcast/rss',
    })

    expect(url).toBe('feed://example.com/podcast/rss')
  })

  test('subscribe should return a downcast feed URL unchanged', () => {
    const url = downcast.subscribe({
      url: 'downcast://example.com/podcast/rss',
    })

    expect(url).toBe('downcast://example.com/podcast/rss')
  })

  test('subscribeFeedUrl should return the documented Chrome RSS extension template', () => {
    const url = downcast.subscribeFeedUrl()

    expect(url).toBe('downcast://feed-url=%s')
  })
})
