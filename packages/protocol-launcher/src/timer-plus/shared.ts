import { qs } from '@protocol-launcher/shared'

export type TimerPlusXCallback = {
  /**
   * Source app name for Timer+'s x-callback-url support.
   */
  xSource?: string

  /**
   * URL Timer+ opens after completing the action.
   */
  xSuccess?: string
}

export function timerPlusCallbackParams(payload: TimerPlusXCallback) {
  const { xSource, xSuccess } = payload

  return {
    ...(xSource !== undefined ? { 'x-source': xSource } : {}),
    ...(xSuccess !== undefined ? { 'x-success': xSuccess } : {}),
  }
}

export function hasTimerPlusCallback(payload: TimerPlusXCallback) {
  return payload.xSource !== undefined || payload.xSuccess !== undefined
}

export function timerPlusAppUrl(path: string, params: Record<string, unknown> = {}) {
  return `timerplus://app/${path}${qs(params)}`
}

export function timerPlusXCallbackUrl(path: string, params: Record<string, unknown> = {}) {
  return `timerplus://x-callback-url/${path}${qs(params)}`
}
