import { ringCentralMobileUrl } from './shared'

export type OpenEvent = {
  /**
   * RingCentral calendar event ID.
   *
   * @example 'event-123'
   */
  eventId: string
}

/**
 * Open a calendar event in the RingCentral mobile app.
 *
 * @param payload RingCentral event payload.
 * @returns RingCentral mobile event URI.
 * @example
 * openEvent({ eventId: 'event-123' })
 * // => 'rcmobile://glip/event?id=event-123'
 * @link https://developers.ringcentral.com/guide/basics/uri-schemes
 */
export function openEvent(payload: OpenEvent) {
  return ringCentralMobileUrl('glip/event', {
    id: payload.eventId,
  })
}
