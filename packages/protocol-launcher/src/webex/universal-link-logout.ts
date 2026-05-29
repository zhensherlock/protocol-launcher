import { qs } from '@protocol-launcher/shared'

export type UniversalLinkLogout = {
  /**
   * Universal link to open after the logout succeeds.
   *
   * @example 'https://sampledomain.com/success'
   */
  ulcSuccess: string
  /**
   * Universal link to open if the logout errors.
   *
   * @example 'https://sampledomain.com/error'
   */
  ulcError: string
}

/**
 * Log out of Webex App on managed iOS/iPadOS devices with the documented Universal Link Callback URL.
 *
 * @param payload Webex Universal Link Callback logout payload.
 * @returns Webex Universal Link Callback logout URL.
 * @example
 * universalLinkLogout({
 *   ulcSuccess: 'https://sampledomain.com/success',
 *   ulcError: 'https://sampledomain.com/error',
 * })
 * // => 'https://cisco.webex.com/logout?ulc-success=https%3A%2F%2Fsampledomain.com%2Fsuccess&ulc-error=https%3A%2F%2Fsampledomain.com%2Ferror'
 * @link https://help.webex.com/en-us/article/n45mhmab/Webex-App-%7C-Cross-launch-URL-for-sign-in-and-calling
 */
export function universalLinkLogout(payload: UniversalLinkLogout) {
  const { ulcSuccess, ulcError } = payload
  const params = qs({
    'ulc-success': ulcSuccess,
    'ulc-error': ulcError,
  })

  return `https://cisco.webex.com/logout${params}`
}
