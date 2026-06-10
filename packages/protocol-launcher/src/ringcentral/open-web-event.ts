import { ringCentralAppUrl, ringCentralPath } from './shared'

export type OpenWebEvent = {
  /**
   * RingCentral calendar event ID.
   *
   * @example 'event-123'
   */
  eventId: string
}

/**
 * Open a calendar event in the RingCentral web app.
 *
 * @param payload RingCentral web event payload.
 * @returns RingCentral web event deep link.
 * @example
 * openWebEvent({ eventId: 'event-123' })
 * // => 'https://app.ringcentral.com/events/event-123'
 * @link https://developers.ringcentral.com/guide/basics/uri-schemes
 */
export function openWebEvent(payload: OpenWebEvent) {
  return ringCentralAppUrl(ringCentralPath('events', payload.eventId))
}
