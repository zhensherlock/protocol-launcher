import { type WebexCallbackPayload, webexCallbackParams, webexLoginUrl } from './shared'

export type CrossLaunchSignIn = WebexCallbackPayload & {
  /**
   * Email address to sign in to the target app.
   *
   * @example 'user1@example.com'
   */
  email: string
  /**
   * Telephone number to call. Webex documents this parameter as iOS-only.
   *
   * @example '123456789'
   */
  telephone?: string
}

/**
 * Cross launch Webex App to sign in with an email address.
 *
 * @param payload Webex cross-launch sign-in payload.
 * @returns Webex webexauth login URL.
 * @example
 * crossLaunchSignIn({
 *   email: 'user1@example.com',
 *   telephone: '123456789',
 *   xSuccess: 'appb://success_flow',
 *   xCancel: 'appb://cancel_flow',
 * })
 * // => 'webexauth://login?email=user1%40example.com&telephone=123456789&x-success=appb%3A%2F%2Fsuccess_flow&x-cancel=appb%3A%2F%2Fcancel_flow'
 * @link https://help.webex.com/en-us/article/n45mhmab/Webex-App-%7C-Cross-launch-URL-for-sign-in-and-calling
 */
export function crossLaunchSignIn(payload: CrossLaunchSignIn) {
  const { email, telephone } = payload

  return webexLoginUrl('webexauth', {
    email,
    telephone,
    ...webexCallbackParams(payload),
  })
}
