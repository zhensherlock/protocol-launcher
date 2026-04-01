import { qs } from '@protocol-launcher/shared'

/**
 * Search command payload definition.
 */
type Search = {
  /**
   * The search string (same syntax as can be entered into the search control on the Agenda and TODO tabs).
   * This needs to be URL encoded.
   *
   * @example 't bookmark'
   */
  search: string
  /**
   * Optional callback URL to be called with search results as JSON.
   *
   * @example 'shortcuts://x-callback-url/run-shortcut?name=ProcessResults'
   */
  xSuccess?: string
  /**
   * Optional callback URL to be called if the search is cancelled.
   *
   * @example 'shortcuts://x-callback-url/run-shortcut?name=HandleCancel'
   */
  xCancel?: string
}

/**
 * Search for items in Beorg and return results as JSON.
 *
 * The URL supplied in the x-success argument will be called with the additional parameter `json`.
 * This will contain a dictionary with the attributes `count` (the number of search results) and `items` (the search results).
 *
 * @param payload Search command payload.
 * @returns Beorg search URL.
 * @example
 * search({ search: 't bookmark' })
 * // => 'beorg://x-callback-url/search?search=t%20bookmark'
 * @example
 * search({ search: 't bookmark', xSuccess: 'shortcuts://x-callback-url/run-shortcut?name=ProcessResults' })
 * // => 'beorg://x-callback-url/search?search=t%20bookmark&x-success=shortcuts://x-callback-url/run-shortcut?name=ProcessResults'
 * @link https://www.beorgapp.com/manual/#url-scheme
 */
export function search(payload: Search) {
  const { search, xSuccess, xCancel } = payload
  const params = qs({
    search,
    ...(xSuccess ? { 'x-success': xSuccess } : {}),
    ...(xCancel ? { 'x-cancel': xCancel } : {}),
  })

  return `beorg://x-callback-url/search${params}`
}
