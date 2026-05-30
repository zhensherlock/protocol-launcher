import { qs } from '@protocol-launcher/shared'
import type { OpenBotChatPayload, OpenBotInfoPayload, OpenBotQrScannerPayload } from './shared'

/**
 * Open a one-on-one chat with a Viber bot.
 *
 * @param payload Viber bot chat payload.
 * @returns Viber bot chat deeplink.
 * @example
 * openBotChat({
 *   chatURI: 'examplebot',
 *   context: 'checkout',
 *   text: 'Hi there!',
 * })
 * // => 'viber://pa?chatURI=examplebot&context=checkout&text=Hi%20there!'
 *
 * @link https://developers.viber.com/docs/tools/deep-links/
 */
export function openBotChat(payload: OpenBotChatPayload) {
  const { chatURI, context, text } = payload
  const params = qs({
    chatURI,
    context,
    text,
  })

  return `viber://pa${params}`
}

/**
 * Open a Viber bot info screen.
 *
 * Viber documents this deeplink as unsupported on Desktop.
 *
 * @param payload Viber bot info payload.
 * @returns Viber bot info deeplink.
 * @example
 * openBotInfo({
 *   uri: 'examplebot',
 * })
 * // => 'viber://pa/info?uri=examplebot'
 *
 * @link https://developers.viber.com/docs/tools/deep-links/
 */
export function openBotInfo(payload: OpenBotInfoPayload) {
  const { uri } = payload
  const params = qs({ uri })

  return `viber://pa/info${params}`
}

/**
 * Open Viber's native QR scanner and share scanned data with a bot.
 *
 * @param payload Viber bot QR scanner payload.
 * @returns Viber bot QR scanner deeplink.
 * @example
 * openBotQrScanner({
 *   chatURI: 'examplebot',
 * })
 * // => 'viber://pa/qr?chatURI=examplebot'
 *
 * @link https://developers.viber.com/docs/tools/deep-links/
 */
export function openBotQrScanner(payload: OpenBotQrScannerPayload) {
  const { chatURI } = payload
  const params = qs({ chatURI })

  return `viber://pa/qr${params}`
}
