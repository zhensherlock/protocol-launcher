import type { CallServicePayload } from './shared'
import { homeAssistantUrl } from './shared'

/**
 * Call a Home Assistant service.
 *
 * @param payload Call service payload.
 * @returns Home Assistant call_service deeplink.
 * @example
 * callService({
 *   service: 'device_tracker.see',
 *   params: { entity_id: 'device_tracker.entity' },
 * })
 * // => 'homeassistant://call_service/device_tracker.see?entity_id=device_tracker.entity'
 *
 * @link https://companion.home-assistant.io/docs/integrations/url-handler/
 */
export function callService(payload: CallServicePayload) {
  const { service, params = {} } = payload

  return homeAssistantUrl('call_service', `/${service}`, params)
}
