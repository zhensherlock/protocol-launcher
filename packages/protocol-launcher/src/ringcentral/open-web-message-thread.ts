import { ringCentralAppUrl, ringCentralPath } from './shared'

export type OpenWebMessageThread = {
  /**
   * RingCentral message ID.
   *
   * @example 'message-123'
   */
  messageId: string
}

/**
 * Open a specific message thread in the RingCentral web app.
 *
 * @param payload RingCentral web message payload.
 * @returns RingCentral web message thread deep link.
 * @example
 * openWebMessageThread({ messageId: 'message-123' })
 * // => 'https://app.ringcentral.com/message/message-123'
 * @link https://developers.ringcentral.com/guide/basics/uri-schemes
 */
export function openWebMessageThread(payload: OpenWebMessageThread) {
  return ringCentralAppUrl(ringCentralPath('message', payload.messageId))
}
