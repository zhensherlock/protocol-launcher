import { qs } from '@protocol-launcher/shared'

export const YOINK_IOS_SCHEME = 'yoinkios'

export type YoinkIosBinaryFlag = 0 | 1

export type YoinkIosXCallbackPayload = {
  /**
   * The x-success callback URL.
   */
  xSuccess?: string

  /**
   * The x-error callback URL.
   */
  xError?: string
}

export function yoinkIosActionUrl(action: string, params: Record<string, unknown> = {}) {
  return `${YOINK_IOS_SCHEME}://${action}${qs(params)}`
}

export function xCallbackParams(payload: YoinkIosXCallbackPayload) {
  const { xSuccess, xError } = payload

  return {
    ...(xSuccess !== undefined ? { 'x-success': xSuccess } : {}),
    ...(xError !== undefined ? { 'x-error': xError } : {}),
  }
}
