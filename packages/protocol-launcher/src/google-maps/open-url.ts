import type { GoogleMapsUrl } from './types'

/**
 * Open a supported Google Maps desktop URL in the Google Maps app for iOS.
 *
 * @param payload Google Maps URL payload.
 * @returns Google Maps URL scheme URL.
 * @throws When the URL does not match Google's supported desktop URL formats.
 * @example
 * openUrl({ url: 'https://www.google.com/maps/preview/@42.585444,13.007813,6z' })
 * // => 'comgooglemapsurl://www.google.com/maps/preview/@42.585444,13.007813,6z'
 * @link https://developers.google.com/maps/documentation/urls/ios-urlscheme#launch_the_google_maps_app_for_ios_from_a_google_maps_desktop_url
 */
export function openUrl(payload: GoogleMapsUrl) {
  if (!isSupportedGoogleMapsUrl(payload.url)) {
    throw new Error('Unsupported Google Maps URL format.')
  }

  const url = payload.url.replace(/^https?:\/\//, '')

  return `comgooglemapsurl://${url}`
}

function isSupportedGoogleMapsUrl(url: string) {
  return /^(?:https?:\/\/)?(?:(?:maps\.google\.[^/]+\/)|(?:(?:www\.)?google\.[^/]+\/maps\/)|(?:goo\.gl\/maps\/)).*/i.test(
    url,
  )
}
