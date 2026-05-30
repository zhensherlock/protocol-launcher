import type { FireEventPayload } from './shared'
import { homeAssistantUrl } from './shared'

/**
 * Fire a Home Assistant event.
 *
 * @param payload Fire event payload.
 * @returns Home Assistant fire_event deeplink.
 * @example
 * fireEvent({
 *   eventType: 'custom_event',
 *   params: { entity_id: 'MY_CUSTOM_EVENT' },
 * })
 * // => 'homeassistant://fire_event/custom_event?entity_id=MY_CUSTOM_EVENT'
 *
 * @link https://companion.home-assistant.io/docs/integrations/url-handler/
 */
export function fireEvent(payload: FireEventPayload) {
  const { eventType, params = {} } = payload

  return homeAssistantUrl('fire_event', `/${eventType}`, params)
}
