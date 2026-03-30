import { qs } from '@protocol-launcher/shared'

/**
 * Search command payload definition.
 */
type Search = {
  /**
   * The search term to look up in Pleco dictionary.
   *
   * @example '你好'
   * @example 'nihao'
   */
  q: string

  /**
   * The name of your app or website for display in Pleco's return button.
   *
   * @example 'MyApp'
   */
  xSource?: string

  /**
   * A URL that Pleco should call when the user taps the return button.
   *
   * @example 'myapp://success'
   */
  xSuccess?: string
}

/**
 * Search for a term in Pleco dictionary using x-callback-url standard.
 *
 * @param payload Search command payload.
 * @returns Pleco search URL.
 * @example
 * search({ q: '你好' })
 * // => 'plecoapi://x-callback-url/s?q=%E4%BD%A0%E5%A5%BD'
 * @example
 * search({ q: 'nihao', xSource: 'MyApp', xSuccess: 'myapp://success' })
 * // => 'plecoapi://x-callback-url/s?q=nihao&x-source=MyApp&x-success=myapp%3A%2F%2Fsuccess'
 * @link https://iphone.pleco.com/manual/30200/vershist.html
 */
export function search(payload: Search) {
  const { q, xSource, xSuccess } = payload
  const params = qs({
    q,
    ...(xSource ? { 'x-source': xSource } : {}),
    ...(xSuccess ? { 'x-success': xSuccess } : {}),
  })

  return `plecoapi://x-callback-url/s${params}`
}
