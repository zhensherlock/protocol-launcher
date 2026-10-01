import { describe, expect, test } from 'vitest'
import { pocketCasts } from '../src'

describe('web feed links', () => {
  test('encodes the complete feed URL including its query', () => {
    expect(pocketCasts.openFeed({ feedUrl: 'https://example.com/feed.xml?format=rss&lang=中文' })).toBe(
      'https://pocketcasts.com/follow/https%3A%2F%2Fexample.com%2Ffeed.xml%3Fformat%3Drss%26lang%3D%E4%B8%AD%E6%96%87',
    )
  })

  test('supports a feed URL without a scheme', () => {
    expect(pocketCasts.openFeed({ feedUrl: 'example.com/feed.xml' })).toBe(
      'https://pocketcasts.com/follow/example.com%2Ffeed.xml',
    )
  })
})

describe('pocketCasts', () => {
  test('open should return a URL', async () => {
    const url = pocketCasts.open()
    expect(url).toBe('pktc://open')
  })

  test('play should return a URL', async () => {
    const url = pocketCasts.play()
    expect(url).toBe('pktc://play')
  })

  test('pause should return a URL', async () => {
    const url = pocketCasts.pause()
    expect(url).toBe('pktc://pause')
  })

  test('subscribe should return a URL with feed URL without http', async () => {
    const url = pocketCasts.subscribe({
      feedUrlWithoutHttp: 'example.com/podcast/rss',
    })
    expect(url).toBe('pktc://subscribe/example.com/podcast/rss')
  })
})
