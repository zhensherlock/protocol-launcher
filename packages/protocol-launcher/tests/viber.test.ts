import { describe, expect, test } from 'vitest'
import { viber } from '../src'

describe('viber', () => {
  test('openBotChat should return the official bot chat deeplink', () => {
    expect(viber.openBotChat({ chatURI: 'examplebot' })).toBe('viber://pa?chatURI=examplebot')
  })

  test('openBotChat should include official context and text parameters', () => {
    expect(
      viber.openBotChat({
        chatURI: 'examplebot',
        context: 'checkout 123',
        text: 'Hi there!',
      }),
    ).toBe('viber://pa?chatURI=examplebot&context=checkout%20123&text=Hi%20there!')
  })

  test('openBotChat should omit undefined optional values', () => {
    expect(
      viber.openBotChat({
        chatURI: 'examplebot',
        context: undefined,
        text: 'Hi there!',
      }),
    ).toBe('viber://pa?chatURI=examplebot&text=Hi%20there!')
  })

  test('openBotInfo should return the official bot info deeplink', () => {
    expect(viber.openBotInfo({ uri: 'examplebot' })).toBe('viber://pa/info?uri=examplebot')
  })

  test('openBotQrScanner should return the official bot QR scanner deeplink', () => {
    expect(viber.openBotQrScanner({ chatURI: 'examplebot' })).toBe('viber://pa/qr?chatURI=examplebot')
  })

  test('openChatExtension should return the three official Chat Extension deeplink scenarios', () => {
    expect(viber.openChatExtension()).toBe('viber://chatex')
    expect(viber.openChatExtension({ service: 'example' })).toBe('viber://chatex?service=example')
    expect(viber.openChatExtension({ service: 'example', search: 'coffee near me' })).toBe(
      'viber://chatex?service=example&search=coffee%20near%20me',
    )
  })

  test('openChatExtension should reject search without service because Viber does not document that scenario', () => {
    expect(() =>
      viber.openChatExtension({
        // @ts-expect-error Runtime guard for JavaScript callers.
        search: 'coffee',
      }),
    ).toThrow('Viber Chat Extension search requires a service.')
  })
})
