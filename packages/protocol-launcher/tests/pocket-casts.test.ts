import { describe, expect, test } from 'vitest'
import { pocketCasts } from '../src'

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
