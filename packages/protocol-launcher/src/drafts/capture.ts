import { qs } from '@protocol-launcher/shared'

/**
 * Capture action payload definition.
 */
type Capture = {
  /**
   * Initial text for the capture window.
   */
  text?: string
  /**
   * Comma-separated list of tags to set as the initial tags assignments.
   */
  tag?: string
}

/**
 * Open Drafts to a new capture window, like used in the Share extension.
 *
 * @param payload Capture action payload.
 * @returns Drafts capture URL.
 * @example
 * capture({ text: 'INITIAL-TEXT' })
 * // => 'drafts:///capture?text=INITIAL-TEXT'
 * @example
 * capture({ text: 'Note', tag: 'work,important' })
 * // => 'drafts:///capture?text=Note&tag=work%2Cimportant'
 * @link https://docs.getdrafts.com/docs/automation/urlschemes
 */
export function capture(payload: Capture = {}) {
  const { text, tag } = payload

  const params = qs({
    ...(text ? { text } : {}),
    ...(tag ? { tag } : {}),
  })

  return `drafts:///capture${params}`
}
