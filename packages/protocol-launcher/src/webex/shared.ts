import { qs } from '@protocol-launcher/shared'

export type WebexCallbackPayload = {
  /**
   * User friendly source app name.
   */
  xSource?: string
  /**
   * URL to open in the source app if the action is successful.
   */
  xSuccess?: string
  /**
   * URL to open if the action is canceled.
   */
  xCancel?: string
}

export function webexTeamsUrl(action: 'im' | 'meet', params: Record<string, unknown>) {
  return `webexteams://${action}${qs(params)}`
}

export function webexLoginUrl(scheme: 'webextel' | 'webexauth', params: Record<string, unknown>) {
  return `${scheme}://login${qs(params)}`
}

export function webexCallbackParams(payload: WebexCallbackPayload) {
  const { xSource, xSuccess, xCancel } = payload

  return {
    'x-source': xSource,
    'x-success': xSuccess,
    'x-cancel': xCancel,
  }
}
