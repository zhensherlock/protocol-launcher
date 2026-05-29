import {
  assertLineIdWithoutAt,
  encodePathSegment,
  type LineIdPayload,
  type LineIdWithoutAtPayload,
  lineR,
  lineRWithQuery,
  strictPercentEncode,
} from './shared'

export type OpenOfficialAccountProfile = LineIdPayload
export type RecommendOfficialAccount = LineIdPayload
export type OpenOfficialAccountVoom = LineIdWithoutAtPayload
export type OpenOfficialAccountBusinessProfile = LineIdWithoutAtPayload
export type OpenOfficialAccountVoomPost = LineIdWithoutAtPayload & {
  /**
   * LINE VOOM post ID.
   */
  postId: string | number
}
export type OpenOfficialAccountChat = LineIdPayload & {
  /**
   * Optional text message to put into the message input field.
   */
  text?: string
}

/**
 * Open a LINE Official Account profile page.
 *
 * @param payload LINE Official Account ID payload.
 * @returns LINE Official Account profile URL.
 * @example
 * openOfficialAccountProfile({ lineId: '@linedevelopers' })
 * // => 'https://line.me/R/ti/p/%40linedevelopers'
 * @link https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#sharing-line-official-account
 */
export function openOfficialAccountProfile(payload: OpenOfficialAccountProfile) {
  return lineR(`/ti/p/${encodePathSegment(payload.lineId)}`)
}

/**
 * Open the Share with screen for a LINE Official Account.
 *
 * @param payload LINE Official Account ID payload.
 * @returns LINE Official Account recommendation URL.
 * @example
 * recommendOfficialAccount({ lineId: '@linedevelopers' })
 * // => 'https://line.me/R/nv/recommendOA/%40linedevelopers'
 * @link https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#sharing-line-official-account
 */
export function recommendOfficialAccount(payload: RecommendOfficialAccount) {
  return lineR(`/nv/recommendOA/${encodePathSegment(payload.lineId)}`)
}

/**
 * Open a LINE Official Account's LINE VOOM.
 *
 * @param payload LINE Official Account ID without the at-sign (@) prefix.
 * @returns LINE Official Account LINE VOOM URL.
 * @example
 * openOfficialAccountVoom({ lineId: 'linedevelopers' })
 * // => 'https://line.me/R/home/public/main?id=linedevelopers'
 * @link https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#opening-line-voom-and-profile
 */
export function openOfficialAccountVoom(payload: OpenOfficialAccountVoom) {
  assertLineIdWithoutAt(payload.lineId)
  return lineRWithQuery('/home/public/main', { id: payload.lineId })
}

/**
 * Open a LINE Official Account's business profile.
 *
 * @param payload LINE Official Account ID without the at-sign (@) prefix.
 * @returns LINE Official Account business profile URL.
 * @example
 * openOfficialAccountBusinessProfile({ lineId: 'linedevelopers' })
 * // => 'https://line.me/R/home/public/profile?id=linedevelopers'
 * @link https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#opening-line-voom-and-profile
 */
export function openOfficialAccountBusinessProfile(payload: OpenOfficialAccountBusinessProfile) {
  assertLineIdWithoutAt(payload.lineId)
  return lineRWithQuery('/home/public/profile', { id: payload.lineId })
}

/**
 * Open a LINE Official Account's LINE VOOM post.
 *
 * @param payload LINE Official Account ID without the at-sign (@) prefix and post ID.
 * @returns LINE Official Account LINE VOOM post URL.
 * @example
 * openOfficialAccountVoomPost({ lineId: 'linedevelopers', postId: '1234567890' })
 * // => 'https://line.me/R/home/public/post?id=linedevelopers&postId=1234567890'
 * @link https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#opening-line-voom-and-profile
 */
export function openOfficialAccountVoomPost(payload: OpenOfficialAccountVoomPost) {
  assertLineIdWithoutAt(payload.lineId)
  return lineRWithQuery('/home/public/post', {
    id: payload.lineId,
    postId: payload.postId,
  })
}

/**
 * Open a chat screen with a LINE Official Account.
 *
 * @param payload LINE Official Account ID payload with an optional text message.
 * @returns LINE Official Account chat URL.
 * @example
 * openOfficialAccountChat({ lineId: '@linedevelopers', text: 'Hi there!' })
 * // => 'https://line.me/R/oaMessage/%40linedevelopers/?Hi%20there%21'
 * @link https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#opening-chat-screen
 */
export function openOfficialAccountChat(payload: OpenOfficialAccountChat) {
  const base = lineR(`/oaMessage/${encodePathSegment(payload.lineId)}`)
  return payload.text === undefined ? base : `${base}/?${strictPercentEncode(payload.text)}`
}
