import { qs } from '@protocol-launcher/shared'

export type NotePlanYesNo = 'yes' | 'no'

export type NotePlanXSuccess = {
  /**
   * Callback URL to open after NotePlan processes the action.
   */
  xSuccess?: string
}

export type AtLeastOne<T, Keys extends keyof T = keyof T> = Omit<T, Keys> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>
  }[Keys]

export function notePlanUrl(action: string, params: Record<string, unknown> = {}, trailingSlash = false) {
  return `noteplan://x-callback-url/${action}${trailingSlash ? '/' : ''}${qs(params)}`
}

export function xSuccessParam(xSuccess: string | undefined) {
  return xSuccess ? { 'x-success': xSuccess } : {}
}
