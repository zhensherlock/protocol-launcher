import { qs } from '@protocol-launcher/shared'

/**
 * Add URL to Instapaper payload definition.
 */
type Add = {
  /**
   * The URL to add to Instapaper.
   *
   * @example 'https://example.com/article'
   */
  url: string
  /**
   * The human-readable name of your app that will be presented in the dialog.
   *
   * @example 'MyReader'
   */
  xSource?: string
  /**
   * The URL to call back after the user has responded to the Instapaper "Add" dialog.
   * If unspecified, Instapaper will remain open.
   *
   * @example 'myapp://success'
   */
  xSuccess?: string
  /**
   * The URL to call back if it fails for some unforeseen reason or if the user isn't logged in.
   * If unspecified, the x-success URL is called.
   *
   * @example 'myapp://error'
   */
  xError?: string
}

/**
 * Add a URL to Instapaper using x-callback-url standard.
 *
 * @param payload Add URL to Instapaper payload.
 * @returns Instapaper x-callback-url URL.
 * @example
 * add({
 *   url: 'https://example.com/article',
 * })
 * // => 'x-callback-instapaper://x-callback-url/add?url=https%3A%2F%2Fexample.com%2Farticle'
 * @example
 * add({
 *   url: 'https://example.com/article',
 *   xSource: 'MyReader',
 *   xSuccess: 'myapp://success',
 * })
 * // => 'x-callback-instapaper://x-callback-url/add?url=https%3A%2F%2Fexample.com%2Farticle&x-source=MyReader&x-success=myapp%3A%2F%2Fsuccess'
 * @link https://blog.instapaper.com/post/4637427075
 */
export function add(payload: Add) {
  const { url, xSource, xSuccess, xError } = payload
  const params = qs({
    url,
    ...(xSource ? { 'x-source': xSource } : {}),
    ...(xSuccess ? { 'x-success': xSuccess } : {}),
    ...(xError ? { 'x-error': xError } : {}),
  })

  return `x-callback-instapaper://x-callback-url/add${params}`
}
