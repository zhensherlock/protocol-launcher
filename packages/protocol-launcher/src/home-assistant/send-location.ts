/**
 * Send the current device location to Home Assistant.
 *
 * @returns Home Assistant send_location deeplink.
 * @example
 * sendLocation()
 * // => 'homeassistant://send_location/'
 *
 * @link https://companion.home-assistant.io/docs/integrations/url-handler/
 */
export function sendLocation() {
  return 'homeassistant://send_location/'
}
