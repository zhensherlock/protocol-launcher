import { qs } from '@protocol-launcher/shared'

type OpenTags = { name: string }

/**
 * Open Day One with a named tag filter (iOS and macOS).
 *
 * @param payload Tag name.
 * @returns Day One tags URL.
 * @example
 * openTags({ name: 'work notes' })
 * // => 'dayone://tags?name=work%20notes'
 * @link https://dayoneapp.com/guides/tips-and-tutorials/day-one-url-scheme/
 */
export function openTags(payload: OpenTags) {
  return `dayone://tags${qs({ name: payload.name })}`
}
