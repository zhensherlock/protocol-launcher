import { qs } from '@protocol-launcher/shared'

type XCallback = {
  /**
   * The x-success callback URL.
   */
  xSuccess?: string

  /**
   * The x-error callback URL.
   */
  xError?: string

  /**
   * The x-cancel callback URL.
   */
  xCancel?: string
}

type GoodLinksFlag = '1' | 'true'

/**
 * Save action payload definition.
 */
type Save = XCallback & {
  /**
   * The URL of the link. If not specified, GoodLinks will look for URL in the clipboard.
   */
  url?: string

  /**
   * The title for the link.
   */
  title?: string

  /**
   * The summary for the link.
   */
  summary?: string

  /**
   * List of tags, separated by spaces.
   */
  tags?: string

  /**
   * Valid values are "1" and "true". If specified, the link will be added to Starred.
   */
  starred?: GoodLinksFlag

  /**
   * Valid values are "1" and "true". If specified, the link will be marked as read.
   */
  read?: GoodLinksFlag

  /**
   * Valid values are "1" and "true". If specified, GoodLinks will save the link without showing any UI.
   */
  quick?: GoodLinksFlag
}

/**
 * Open action payload definition.
 */
type Open = XCallback & {
  /**
   * The URL of the link.
   */
  url: string
}

/**
 * Pick action payload definition.
 */
type Pick = XCallback & {
  /**
   * The parameter name used to pass the URL to the x-success URL. Defaults to "url" in GoodLinks.
   */
  urlParam?: string

  /**
   * The parameter name used to pass the title to the x-success URL. Defaults to "title" in GoodLinks.
   */
  titleParam?: string

  /**
   * The parameter name used to pass the summary to the x-success URL. Defaults to "summary" in GoodLinks.
   */
  summaryParam?: string
}

/**
 * Tag action payload definition.
 */
type Tag = XCallback & {
  /**
   * Tag name.
   */
  name: string
}

function xCallbackParams(payload: XCallback) {
  const { xSuccess, xError, xCancel } = payload

  return {
    ...(xSuccess ? { 'x-success': xSuccess } : {}),
    ...(xError ? { 'x-error': xError } : {}),
    ...(xCancel ? { 'x-cancel': xCancel } : {}),
  }
}

function actionUrl(action: string, params: Record<string, unknown> = {}) {
  return `goodlinks://x-callback-url/${action}${qs(params)}`
}

/**
 * Save a link in GoodLinks.
 *
 * @param payload Save action payload.
 * @returns GoodLinks save URL.
 * @example
 * save({ url: 'https://apple.com', starred: '1', tags: 'apple ios' })
 * // => 'goodlinks://x-callback-url/save?url=https%3A%2F%2Fapple.com&starred=1&tags=apple%20ios'
 * @example
 * save({ quick: '1' })
 * // => 'goodlinks://x-callback-url/save?quick=1'
 * @link https://goodlinks.app/url-scheme/
 */
export function save(payload: Save = {}) {
  const { url, title, summary, tags, starred, read, quick } = payload

  return actionUrl('save', {
    ...(url ? { url } : {}),
    ...(title ? { title } : {}),
    ...(summary ? { summary } : {}),
    ...(starred ? { starred } : {}),
    ...(tags ? { tags } : {}),
    ...(read ? { read } : {}),
    ...(quick ? { quick } : {}),
    ...xCallbackParams(payload),
  })
}

/**
 * Open a link in the GoodLinks app.
 *
 * @param payload Open action payload.
 * @returns GoodLinks open URL.
 * @example
 * open({ url: 'https://example.com/article' })
 * // => 'goodlinks://x-callback-url/open?url=https%3A%2F%2Fexample.com%2Farticle'
 * @link https://goodlinks.app/url-scheme/
 */
export function open(payload: Open) {
  const { url } = payload

  return actionUrl('open', {
    url,
    ...xCallbackParams(payload),
  })
}

/**
 * Return details of a link.
 *
 * @param payload Pick action payload.
 * @returns GoodLinks pick URL.
 * @example
 * pick({ urlParam: 'link', titleParam: 'name', summaryParam: 'description', xSuccess: 'myapp://success' })
 * // => 'goodlinks://x-callback-url/pick?url-param=link&title-param=name&summary-param=description&x-success=myapp%3A%2F%2Fsuccess'
 * @link https://goodlinks.app/url-scheme/
 */
export function pick(payload: Pick = {}) {
  const { urlParam, titleParam, summaryParam } = payload

  return actionUrl('pick', {
    ...(urlParam ? { 'url-param': urlParam } : {}),
    ...(titleParam ? { 'title-param': titleParam } : {}),
    ...(summaryParam ? { 'summary-param': summaryParam } : {}),
    ...xCallbackParams(payload),
  })
}

/**
 * Open the last unread link in the GoodLinks app.
 *
 * @param payload x-callback-url payload.
 * @returns GoodLinks last URL.
 * @example
 * last()
 * // => 'goodlinks://x-callback-url/last'
 * @link https://goodlinks.app/url-scheme/
 */
export function last(payload: XCallback = {}) {
  return actionUrl('last', xCallbackParams(payload))
}

/**
 * Open a random unread link in the GoodLinks app.
 *
 * @param payload x-callback-url payload.
 * @returns GoodLinks random URL.
 * @example
 * random()
 * // => 'goodlinks://x-callback-url/random'
 * @link https://goodlinks.app/url-scheme/
 */
export function random(payload: XCallback = {}) {
  return actionUrl('random', xCallbackParams(payload))
}

/**
 * Show Unread list in the GoodLinks app.
 *
 * @param payload x-callback-url payload.
 * @returns GoodLinks unread URL.
 * @example
 * unread()
 * // => 'goodlinks://x-callback-url/unread'
 * @link https://goodlinks.app/url-scheme/
 */
export function unread(payload: XCallback = {}) {
  return actionUrl('unread', xCallbackParams(payload))
}

/**
 * Show Starred list in the GoodLinks app.
 *
 * @param payload x-callback-url payload.
 * @returns GoodLinks starred URL.
 * @example
 * starred()
 * // => 'goodlinks://x-callback-url/starred'
 * @link https://goodlinks.app/url-scheme/
 */
export function starred(payload: XCallback = {}) {
  return actionUrl('starred', xCallbackParams(payload))
}

/**
 * Show Untagged list in the GoodLinks app.
 *
 * @param payload x-callback-url payload.
 * @returns GoodLinks untagged URL.
 * @example
 * untagged()
 * // => 'goodlinks://x-callback-url/untagged'
 * @link https://goodlinks.app/url-scheme/
 */
export function untagged(payload: XCallback = {}) {
  return actionUrl('untagged', xCallbackParams(payload))
}

/**
 * Show Read list in the GoodLinks app.
 *
 * @param payload x-callback-url payload.
 * @returns GoodLinks read URL.
 * @example
 * read()
 * // => 'goodlinks://x-callback-url/read'
 * @link https://goodlinks.app/url-scheme/
 */
export function read(payload: XCallback = {}) {
  return actionUrl('read', xCallbackParams(payload))
}

/**
 * Show links tagged with the specified tag in the GoodLinks app.
 *
 * @param payload Tag action payload.
 * @returns GoodLinks tag URL.
 * @example
 * tag({ name: 'apple' })
 * // => 'goodlinks://x-callback-url/tag?name=apple'
 * @link https://goodlinks.app/url-scheme/
 */
export function tag(payload: Tag) {
  const { name } = payload

  return actionUrl('tag', {
    name,
    ...xCallbackParams(payload),
  })
}
