import { qs } from '@protocol-launcher/shared'

/**
 * Open tag command payload definition.
 */
type OpenTag = {
  /**
   * Tag name or a list of tags divided by comma (required).
   */
  name: string

  /**
   * Application token.
   */
  token?: string
}

/**
 * Show all the notes which have a selected tag in Bear.
 *
 * @param payload Open tag command payload.
 * @returns Bear open-tag URL.
 * @example
 * openTag({ name: 'work' })
 * // => 'bear://x-callback-url/open-tag?name=work'
 * @example
 * openTag({ name: 'todo/work' })
 * // => 'bear://x-callback-url/open-tag?name=todo%2Fwork'
 * @link https://bear.app/faq/x-callback-url-scheme-documentation/#open-tag
 */
export function openTag(payload: OpenTag) {
  const { name, token } = payload

  const params = qs({
    name,
    ...(token ? { token } : {}),
  })

  return `bear://x-callback-url/open-tag${params}`
}
