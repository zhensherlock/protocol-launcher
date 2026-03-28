import { qs } from '@protocol-launcher/shared'

/**
 * Show list payload definition.
 */
type ShowList = {
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
 * @link https://www.2doapp.com/kb/article/url-schemes.html
 */
export function showList(payload: ShowList) {
  const { name } = payload
  const params = qs({ name })

  return `twodo://x-callback-url/showList${params}`
}
