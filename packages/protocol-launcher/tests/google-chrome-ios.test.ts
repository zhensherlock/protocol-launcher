import { describe, expect, test } from 'vitest'
import { googleChromeIos } from '../src'

describe('googleChromeIos', () => {
  test('openUrl should replace http scheme with googlechrome', async () => {
    const url = googleChromeIos.openUrl({
      url: 'http://www.example.com/path?q=chrome',
    })

    expect(url).toBe('googlechrome://www.example.com/path?q=chrome')
  })

  test('openUrl should replace https scheme with googlechromes', async () => {
    const url = googleChromeIos.openUrl({
      url: 'https://www.google.com/',
    })

    expect(url).toBe('googlechromes://www.google.com/')
  })

  test('openUrl should preserve the rest of the URL', async () => {
    const url = googleChromeIos.openUrl({
      url: 'https://example.com/search?q=http%3A%2F%2Fexample.org#result',
    })

    expect(url).toBe('googlechromes://example.com/search?q=http%3A%2F%2Fexample.org#result')
  })

  test('openUrl should only replace the scheme before the first colon', async () => {
    const url = googleChromeIos.openUrl({
      url: 'http:example.com/path',
    })

    expect(url).toBe('googlechrome:example.com/path')
  })

  test('openUrl should throw for unsupported URL schemes', async () => {
    expect(() =>
      googleChromeIos.openUrl({
        url: 'ftp://example.com/file',
      }),
    ).toThrow('Unsupported Google Chrome iOS URL format.')
  })
})
