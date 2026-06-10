import { ringCentralMobileUrl } from './shared'

export type OpenChat = {
  /**
   * RingCentral user ID.
   *
   * @example 'user-123'
   */
  userId: string
}

/**
 * Open a direct message with a specified user in the RingCentral mobile app.
 *
 * @param payload RingCentral direct message payload.
 * @returns RingCentral mobile direct message URI.
 * @example
 * openChat({ userId: 'user-123' })
 * // => 'rcmobile://glip/chat?id=user-123'
 * @link https://developers.ringcentral.com/guide/basics/uri-schemes
 */
export function openChat(payload: OpenChat) {
  return ringCentralMobileUrl('glip/chat', {
    id: payload.userId,
  })
}
