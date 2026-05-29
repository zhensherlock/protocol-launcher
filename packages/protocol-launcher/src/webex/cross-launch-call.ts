import { type WebexCallbackPayload, webexCallbackParams, webexLoginUrl } from './shared'

export type CrossLaunchCall = WebexCallbackPayload & {
  /**
   * Telephone number to call.
   *
   * @example '123456789'
   */
  telephone: string
}

/**
 * Cross launch Webex App to make a call with the webextel login URL.
 *
 * @param payload Webex cross-launch call payload.
 * @returns Webex webextel login URL.
 * @example
 * crossLaunchCall({
 *   telephone: '123456789',
 *   xSuccess: 'appb://success_flow',
 *   xCancel: 'appb://cancel_flow',
 * })
 * // => 'webextel://login?telephone=123456789&x-success=appb%3A%2F%2Fsuccess_flow&x-cancel=appb%3A%2F%2Fcancel_flow'
 * @link https://help.webex.com/en-us/article/n45mhmab/Webex-App-%7C-Cross-launch-URL-for-sign-in-and-calling
 */
export function crossLaunchCall(payload: CrossLaunchCall) {
  const { telephone } = payload

  return webexLoginUrl('webextel', {
    telephone,
    ...webexCallbackParams(payload),
  })
}
