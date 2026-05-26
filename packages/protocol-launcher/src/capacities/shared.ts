import { qs } from '@protocol-launcher/shared'

/**
 * Capacities x-callback-url parameters.
 */
export type CapacitiesXCallback = {
  /**
   * Name of the app calling the action.
   */
  xSource?: string

  /**
   * Deeplink URL to call if the action was successful.
   */
  xSuccess?: string

  /**
   * Deeplink URL to call if the action failed.
   */
  xError?: string
}

export function xCallbackParams(payload: CapacitiesXCallback) {
  const { xSource, xSuccess, xError } = payload

  return {
    ...(xSource ? { 'x-source': xSource } : {}),
    ...(xSuccess ? { 'x-success': xSuccess } : {}),
    ...(xError ? { 'x-error': xError } : {}),
  }
}

export function xCallbackUrl(action: string, params: Record<string, unknown> = {}) {
  return `capacities://x-callback-url/${action}${qs(params)}`
}
