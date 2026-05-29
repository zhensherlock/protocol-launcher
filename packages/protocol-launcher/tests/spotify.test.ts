import { describe, expect, test } from 'vitest'
import { spotify } from '../src'

describe('spotify', () => {
  test('openUri should return an official Spotify URI unchanged', () => {
    const url = spotify.openUri({
      uri: 'spotify:album:4oktVvRuO1In9B7Hz0xm0a',
    })

    expect(url).toBe('spotify:album:4oktVvRuO1In9B7Hz0xm0a')
  })

  test('openUri should throw for non-Spotify URI values', () => {
    expect(() =>
      spotify.openUri({
        uri: 'https://open.spotify.com/track/11dFghVXANMlKmJXsNCbNl',
      }),
    ).toThrow('Unsupported Spotify URI format.')
  })

  test('openIosContentLink should return the official iOS content linking URL', () => {
    const url = spotify.openIosContentLink({
      campaign: 'com.app',
      canonicalUrl: 'https://open.spotify.com/album/0sNOF9WDwhWunNAHPD3Baj',
    })

    expect(url).toBe(
      'https://spotify.link/content_linking?~campaign=com.app&$canonical_url=https%3A%2F%2Fopen.spotify.com%2Falbum%2F0sNOF9WDwhWunNAHPD3Baj',
    )
  })

  test('openIosContentLink should allow an install link without canonical URL', () => {
    const url = spotify.openIosContentLink({
      campaign: 'com.app',
    })

    expect(url).toBe('https://spotify.link/content_linking?~campaign=com.app')
  })

  test('openAndroidContentLink should return the official Android content linking URL', () => {
    const url = spotify.openAndroidContentLink({
      campaign: 'com.app',
      deeplinkPath: 'https://open.spotify.com/album/0sNOF9WDwhWunNAHPD3Baj',
      fallbackUrl: 'https://open.spotify.com/album/0sNOF9WDwhWunNAHPD3Baj',
    })

    expect(url).toBe(
      'https://spotify.link/content_linking?~campaign=com.app&$deeplink_path=https%3A%2F%2Fopen.spotify.com%2Falbum%2F0sNOF9WDwhWunNAHPD3Baj&$fallback_url=https%3A%2F%2Fopen.spotify.com%2Falbum%2F0sNOF9WDwhWunNAHPD3Baj',
    )
  })

  test('openWebLink should return the official open.spotify.com link unchanged', () => {
    const url = spotify.openWebLink({
      url: 'https://open.spotify.com/track/55fmthmn3rgnk9Wyx7G5dU',
    })

    expect(url).toBe('https://open.spotify.com/track/55fmthmn3rgnk9Wyx7G5dU')
  })

  test('openWebLink should add the official attribution parameter', () => {
    const url = spotify.openWebLink({
      url: 'https://open.spotify.com/track/55fmthmn3rgnk9Wyx7G5dU',
      utmCampaign: 'com.app',
    })

    expect(url).toBe('https://open.spotify.com/track/55fmthmn3rgnk9Wyx7G5dU?utm_campaign=com.app')
  })

  test('openWebLink should keep existing query parameters when adding attribution', () => {
    const url = spotify.openWebLink({
      url: 'https://open.spotify.com/track/55fmthmn3rgnk9Wyx7G5dU?si=123',
      utmCampaign: 'com.app',
    })

    expect(url).toBe('https://open.spotify.com/track/55fmthmn3rgnk9Wyx7G5dU?si=123&utm_campaign=com.app')
  })

  test('openWebLink should throw for non-Spotify web links', () => {
    expect(() =>
      spotify.openWebLink({
        url: 'https://example.com/track/55fmthmn3rgnk9Wyx7G5dU',
      }),
    ).toThrow('Unsupported Spotify web link format.')
  })
})
