import { type TwoDoCallbacks, twoDoXCallbackUrl } from './shared'

/**
 * Show list payload definition.
 */
type ShowList = TwoDoCallbacks & {
  /**
   * The name of the list to show.
   */
  name: string
}

/**
 * Show list with a given name in 2Do.
 *
 * @param payload Show list payload.
 * @returns 2Do show list URL.
 * @example
 * showList({ name: 'Work' })
 * // => 'twodo://x-callback-url/showList?name=Work'
 * @link https://www.2doapp.com/docs/macos/url-schemes/
 */
export function showList(payload: ShowList) {
  const { name } = payload
  const params = { name }

  return twoDoXCallbackUrl('showList', params, payload)
}
