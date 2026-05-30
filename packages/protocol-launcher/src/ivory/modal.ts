import type { IvoryOpenProfilePayload, IvoryOpenStatusPayload, IvoryOpenUrlPayload } from './shared'
import { ivoryModalParams, ivoryPathSegment, ivoryUrl } from './shared'

/**
 * Open a Mastodon URL in Ivory.
 *
 * @param payload Ivory openURL payload.
 * @returns Ivory openURL modal URL.
 * @example
 * openUrl({
 *   acct: '@alice@mastodon.social',
 *   url: 'https://mastodon.social/@tapbots',
 * })
 * // => 'ivory://@alice@mastodon.social/openURL?url=https%3A%2F%2Fmastodon.social%2F%40tapbots'
 * @link https://tapbots.com/support/ivory/tips/urlschemes
 */
export function openUrl(payload: IvoryOpenUrlPayload) {
  const { acct, url } = payload

  return ivoryUrl(acct, 'openURL', {
    url,
    ...ivoryModalParams(payload),
  })
}

/**
 * Open a status from the selected account's instance in Ivory.
 *
 * @param payload Ivory status payload.
 * @returns Ivory status modal URL.
 * @example
 * openStatus({
 *   acct: '@alice@mastodon.social',
 *   statusId: '110123456789',
 * })
 * // => 'ivory://@alice@mastodon.social/status/110123456789'
 * @link https://tapbots.com/support/ivory/tips/urlschemes
 */
export function openStatus(payload: IvoryOpenStatusPayload) {
  const { acct, statusId } = payload

  return ivoryUrl(acct, `status/${ivoryPathSegment(statusId)}`, ivoryModalParams(payload))
}

/**
 * Open a Mastodon user profile in Ivory.
 *
 * @param payload Ivory user profile payload.
 * @returns Ivory user profile modal URL.
 * @example
 * openProfile({
 *   acct: '@alice@mastodon.social',
 *   userAcct: '@tapbots@mastodon.social',
 * })
 * // => 'ivory://@alice@mastodon.social/user_profile/@tapbots@mastodon.social'
 * @link https://tapbots.com/support/ivory/tips/urlschemes
 */
export function openProfile(payload: IvoryOpenProfilePayload) {
  const { acct, userAcct } = payload

  return ivoryUrl(acct, `user_profile/${ivoryPathSegment(userAcct)}`, ivoryModalParams(payload))
}
