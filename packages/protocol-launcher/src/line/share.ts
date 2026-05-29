import { lineRWithQuery } from './shared'

export type ShareText = {
  /**
   * Text message to send.
   */
  text: string
}

/**
 * Open the Share with screen with a text message.
 *
 * @param payload Text message payload.
 * @returns LINE text sharing URL.
 * @example
 * shareText({ text: 'Hi there!' })
 * // => 'https://line.me/R/share?text=Hi%20there%21'
 * @link https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#sending-text-messages
 */
export function shareText(payload: ShareText) {
  return lineRWithQuery('/share', { text: payload.text })
}
