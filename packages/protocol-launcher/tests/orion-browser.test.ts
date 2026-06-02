import { describe, expect, test } from 'vitest'
import { orionBrowser } from '../src'

describe('orionBrowser', () => {
  test('openUrl should return a URL with url', async () => {
    const url = orionBrowser.openUrl({
      url: 'https://browser.kagi.com/',
    })

    expect(url).toBe('orion://open-url?url=https%3A%2F%2Fbrowser.kagi.com%2F')
  })

  test('openUrl should encode reserved URL characters', async () => {
    const url = orionBrowser.openUrl({
      url: 'https://example.com/search?q=orion browser#ios',
    })

    expect(url).toBe('orion://open-url?url=https%3A%2F%2Fexample.com%2Fsearch%3Fq%3Dorion%20browser%23ios')
  })

  test('search should return a URL with q', async () => {
    const url = orionBrowser.search({
      query: 'privacy browser',
    })

    expect(url).toBe('orion://search?q=privacy%20browser')
  })

  test('search should encode reserved query characters', async () => {
    const url = orionBrowser.search({
      query: 'kagi & orion',
    })

    expect(url).toBe('orion://search?q=kagi%20%26%20orion')
  })
})
