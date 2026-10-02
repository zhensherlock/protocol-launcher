import { qs } from '@protocol-launcher/shared'

type Version = {
  /** Callback receiving x-things-scheme-version and x-things-client-version. */
  xSuccess?: string
  xError?: string
  xCancel?: string
  xSource?: string
}

/**
 * Get the Things client and URL scheme versions.
 *
 * @param payload Optional x-callback-url parameters.
 * @returns Things version URL.
 * @example
 * version({ xSuccess: 'myapp://versions' })
 * // => 'things://x-callback-url/version?x-success=myapp%3A%2F%2Fversions'
 * @link https://culturedcode.com/things/support/articles/2803573/#version
 */
export function version(payload: Version = {}) {
  const { xSuccess, xError, xCancel, xSource } = payload
  const callback = xSuccess !== undefined || xError !== undefined || xCancel !== undefined || xSource !== undefined
  return `${callback ? 'things://x-callback-url' : 'things://'}/version${qs({
    'x-success': xSuccess,
    'x-error': xError,
    'x-cancel': xCancel,
    'x-source': xSource,
  })}`
}
