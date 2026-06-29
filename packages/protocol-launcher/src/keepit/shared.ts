export const KEEPIT_SCHEME = 'keepit'

export type KeepItBinaryFlag = 0 | 1 | '0' | '1'

export type KeepItXCallbackPayload = {
  /**
   * The x-callback-url source app name.
   */
  xSource?: string

  /**
   * The x-success callback URL.
   */
  xSuccess?: string

  /**
   * The x-error callback URL.
   */
  xError?: string

  /**
   * The x-cancel callback URL.
   */
  xCancel?: string
}

function encodeKeepItValue(value: unknown) {
  return encodeURIComponent(String(value)).replace(/%2C/g, ',')
}

function keepItQuery(params: Record<string, unknown>) {
  const query = Object.entries(params)
    .flatMap(([key, value]) => {
      if (value === undefined || value === null) return []
      return `${key}=${encodeKeepItValue(value)}`
    })
    .join('&')

  return query ? `?${query}` : ''
}

export function keepItLink(params: Record<string, unknown>) {
  return `${KEEPIT_SCHEME}://link${keepItQuery(params)}`
}

export function keepItXCallbackUrl(action: 'add' | 'append', params: Record<string, unknown> = {}) {
  return `${KEEPIT_SCHEME}://x-callback-url/${action}${keepItQuery(params)}`
}

export function xCallbackParams(payload: KeepItXCallbackPayload) {
  const { xSource, xSuccess, xError, xCancel } = payload

  return {
    ...(xSource !== undefined ? { 'x-source': xSource } : {}),
    ...(xSuccess !== undefined ? { 'x-success': xSuccess } : {}),
    ...(xError !== undefined ? { 'x-error': xError } : {}),
    ...(xCancel !== undefined ? { 'x-cancel': xCancel } : {}),
  }
}
