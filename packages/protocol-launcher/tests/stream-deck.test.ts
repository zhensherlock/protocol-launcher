import { describe, expect, test } from 'vitest'
import { streamDeck } from '../src'

describe('streamDeck', () => {
  test('should expose only the documented Stream Deck deep-link helper', () => {
    expect(Object.keys(streamDeck).sort()).toEqual([
      'encodedOauth2RedirectProxy',
      'oauth2RedirectProxy',
      'pluginMessage',
    ])
  })

  test('pluginMessage should return the official plugin message base URL', () => {
    const url = streamDeck.pluginMessage({
      pluginUuid: 'com.elgato.hello-world',
    })

    expect(url).toBe('streamdeck://plugins/message/com.elgato.hello-world')
  })

  test('pluginMessage should return the official path, query, and fragment format', () => {
    const url = streamDeck.pluginMessage({
      pluginUuid: 'com.elgato.hello-world',
      path: '/hello',
      query: { name: 'Elgato' },
      fragment: 'waving',
    })

    expect(url).toBe('streamdeck://plugins/message/com.elgato.hello-world/hello?name=Elgato#waving')
  })

  test('pluginMessage should encode path spaces and fragments', () => {
    const url = streamDeck.pluginMessage({
      pluginUuid: 'com.elgato.hello-world',
      path: '/Hello world',
      fragment: 'Testing now',
    })

    expect(url).toBe('streamdeck://plugins/message/com.elgato.hello-world/Hello%20world#Testing%20now')
  })

  test('pluginMessage should create a passive deep-link with the documented query parameter', () => {
    const url = streamDeck.pluginMessage({
      pluginUuid: 'com.elgato.hello-world',
      path: '/hello',
      query: { streamdeck: 'hidden' },
    })

    expect(url).toBe('streamdeck://plugins/message/com.elgato.hello-world/hello?streamdeck=hidden')
  })

  test('oauth2RedirectProxy should return the official redirect proxy URL', () => {
    const url = streamDeck.oauth2RedirectProxy({
      pluginUuid: 'com.elgato.hello-world',
      path: '/auth',
    })

    expect(url).toBe('https://oauth2-redirect.elgato.com/streamdeck/plugins/message/com.elgato.hello-world/auth')
  })

  test('encodedOauth2RedirectProxy should return the official encoded redirect proxy URL', () => {
    const url = streamDeck.encodedOauth2RedirectProxy({
      pluginUuid: 'com.elgato.hello-world',
      path: '/auth',
    })

    expect(url).toBe(
      'https%3A%2F%2Foauth2-redirect.elgato.com%2Fstreamdeck%2Fplugins%2Fmessage%2Fcom.elgato.hello-world%2Fauth',
    )
  })
})
