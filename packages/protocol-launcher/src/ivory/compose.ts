import type { IvoryComposePayload, IvoryComposeReplyPayload, IvoryComposeTextPayload } from './shared'
import { ivoryModalParams, ivoryPathSegment, ivoryUrl } from './shared'

/**
 * Open Ivory's compose sheet.
 *
 * @param payload Ivory compose payload.
 * @returns Ivory compose URL.
 * @example
 * compose()
 * // => 'ivory:///post'
 * @link https://tapbots.com/support/ivory/tips/urlschemes
 */
export function compose(payload: IvoryComposePayload = {}) {
  const { acct } = payload

  return ivoryUrl(acct, 'post', ivoryModalParams(payload))
}

/**
 * Open Ivory's compose sheet with text and a status URL to reply to.
 *
 * @param payload Ivory compose reply payload.
 * @returns Ivory compose reply URL.
 * @example
 * composeReply({
 *   text: 'Hello Ivory',
 *   inReplyToStatusUrl: 'https://mastodon.social/@tapbots/110123456789',
 * })
 * // => 'ivory:///post?text=Hello%20Ivory&in_reply_to_status_url=https%3A%2F%2Fmastodon.social%2F%40tapbots%2F110123456789'
 * @link https://tapbots.com/support/ivory/tips/urlschemes
 */
export function composeReply(payload: IvoryComposeReplyPayload) {
  const { acct, text, inReplyToStatusUrl } = payload

  return ivoryUrl(acct, 'post', {
    text,
    in_reply_to_status_url: inReplyToStatusUrl,
    ...ivoryModalParams(payload),
  })
}

/**
 * Open Ivory's compose sheet with text in the documented `/post/text` path form.
 *
 * @param payload Ivory compose path-text payload.
 * @returns Ivory compose path-text URL.
 * @example
 * composeText({
 *   acct: '@alice',
 *   text: 'Hello Ivory',
 * })
 * // => 'ivory://@alice/post/Hello%20Ivory'
 * @link https://tapbots.com/support/ivory/tips/urlschemes
 */
export function composeText(payload: IvoryComposeTextPayload) {
  const { acct, text } = payload

  return ivoryUrl(acct, `post/${ivoryPathSegment(text)}`, ivoryModalParams(payload))
}
