import { qs } from '@protocol-launcher/shared'

/**
 * Today x-callback-url parameters documented for action success and error callbacks.
 */
export type TodayXCallback = {
  /**
   * x-callback-url success callback URL.
   */
  xSuccess?: string

  /**
   * x-callback-url error callback URL.
   */
  xError?: string
}

export function xCallbackParams(payload: TodayXCallback) {
  const { xSuccess, xError } = payload

  return {
    ...(xSuccess ? { 'x-success': xSuccess } : {}),
    ...(xError ? { 'x-error': xError } : {}),
  }
}

export function todayUrl(action: string, params: Record<string, unknown> = {}) {
  return `today://x-callback-url/${action}${qs(params)}`
}
