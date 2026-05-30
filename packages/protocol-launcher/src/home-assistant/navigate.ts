import type { NavigatePayload } from './shared'
import { homeAssistantUrl } from './shared'

/**
 * Navigate the Home Assistant frontend to a path.
 *
 * @param payload Navigate payload.
 * @returns Home Assistant navigate deeplink.
 * @example
 * navigate({ path: '/dashboard-mobile/my-subview' })
 * // => 'homeassistant://navigate/dashboard-mobile/my-subview'
 * @example
 * navigate({ path: '/webcams', server: 'My home' })
 * // => 'homeassistant://navigate/webcams?server=My%20home'
 *
 * @link https://companion.home-assistant.io/docs/integrations/url-handler/
 */
export function navigate(payload: NavigatePayload) {
  const { path, server } = payload

  return homeAssistantUrl('navigate', path, {
    ...(server !== undefined ? { server } : {}),
  })
}
