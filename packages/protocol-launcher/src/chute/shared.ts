import { qs } from '@protocol-launcher/shared'

export type ChuteAction = 'start' | 'stop' | 'toggle'

/**
 * Chute start/stop/toggle payload definition.
 */
export type ChuteActionPayload = {
  /**
   * Automatically close Chute after the action is completed.
   */
  autoclose?: true
}

/**
 * Chute x-callback-url payload definition.
 */
export type ChuteXCallbackPayload = {
  /**
   * URL Chute opens after completing the action.
   */
  xSuccess?: string

  /**
   * URL Chute opens if the action fails.
   */
  xError?: string
}

export function chuteActionUrl(action: ChuteAction, payload: ChuteActionPayload = {}) {
  return `chute:///${action}${qs({
    autoclose: payload.autoclose ? true : undefined,
  })}`
}

export function chuteXCallbackUrl(action: ChuteAction, payload: ChuteXCallbackPayload = {}) {
  const { xSuccess, xError } = payload

  return `chute://x-callback-url/${action}${qs({
    ...(xSuccess !== undefined ? { 'x-success': xSuccess } : {}),
    ...(xError !== undefined ? { 'x-error': xError } : {}),
  })}`
}
