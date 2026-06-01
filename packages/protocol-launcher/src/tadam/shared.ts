import { qs } from '@protocol-launcher/shared'

export type TadamAction = 'start' | 'break' | 'pause' | 'resume' | 'stop' | 'help'

/**
 * Tadam x-callback-url payload definition.
 */
export type TadamXCallbackPayload = {
  /**
   * URL Tadam opens immediately after the action is performed.
   */
  xSuccess?: string
}

function tadamQs(params: Record<string, unknown>) {
  return qs(params).replace(/([?&]time=[^&]*)/g, value => value.replace(/%3A/gi, ':'))
}

export function tadamUrl(action: TadamAction, params: Record<string, unknown> = {}) {
  return `tadam://${action}${tadamQs(params)}`
}

export function tadamXCallbackUrl(
  action: TadamAction,
  payload: TadamXCallbackPayload = {},
  params: Record<string, unknown> = {},
) {
  const { xSuccess } = payload

  return `tadam://x-callback-url/${action}${tadamQs({
    ...params,
    ...(xSuccess !== undefined ? { 'x-success': xSuccess } : {}),
  })}`
}
