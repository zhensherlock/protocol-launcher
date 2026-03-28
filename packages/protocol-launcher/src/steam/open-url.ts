import { qs } from '@protocol-launcher/shared'

/**
 * Open URL payload definition.
 */
type OpenUrl = {
  /**
   * URL to open in system's default web browser.
   */
  url: string
}

/**
 * Opens URL in the system's default web browser.
 *
 * @param payload Open URL payload.
 * @returns Steam open URL URL.
 * @example
 * openUrl({ url: 'https://store.steampowered.com/' })
 * // => 'steam://openurl/https://store.steampowered.com/'
 * @link https://developer.valvesoftware.com/wiki/Steam_browser_protocol
 */
export function openUrl(payload: OpenUrl) {
  const { url } = payload
  return `steam://openurl/${url}`
}
