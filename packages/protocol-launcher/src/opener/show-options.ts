import { qs } from '@protocol-launcher/shared'

/**
 * Show options command payload definition.
 */
type ShowOptions = {
  /**
   * The URL to show options for.
   *
   * @example 'https://twitter.com/piercedavid/status/594646584232542208'
   */
  url: string
  /**
   * Make the app not perform any automatic actions on launch (Opener 1.3 and above).
   *
   * @default true
   */
  allowAutoOpen?: boolean
}

/**
 * Launch Opener and show the available options to open a given URL.
 *
 * @param payload Show options command payload.
 * @returns Opener show-options URL.
 * @example
 * showOptions({
 *   url: 'https://twitter.com/piercedavid/status/594646584232542208',
 * })
 * // => 'opener://x-callback-url/show-options?url=https%3A%2F%2Ftwitter.com%2Fpiercedavid%2Fstatus%2F594646584232542208'
 * @example
 * showOptions({
 *   url: 'https://example.com',
 *   allowAutoOpen: false,
 * })
 * // => 'opener://x-callback-url/show-options?url=https%3A%2F%2Fexample.com&allow-auto-open=false'
 * @link https://www.opener.link/api.html
 */
export function showOptions(payload: ShowOptions) {
  const { url, allowAutoOpen = true } = payload
  const params = qs({
    url,
    ...(allowAutoOpen ? {} : { 'allow-auto-open': 'false' }),
  })

  return `opener://x-callback-url/show-options${params}`
}
