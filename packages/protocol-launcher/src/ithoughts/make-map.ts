import { type IThoughtsContentPayload, ithoughtsUrl } from './shared'

/**
 * Make map payload definition.
 */
export type MakeMap = IThoughtsContentPayload & {
  /**
   * Path to the map. iThoughts generates one when omitted and overwrites an existing map at the same path.
   */
  path?: string
  /**
   * Style name to use when creating the map.
   */
  style?: string
}

/**
 * Convert Markdown or text into a new iThoughts mind map.
 *
 * @param payload Make map payload.
 * @returns iThoughts makeMap x-callback-url.
 * @example
 * makeMap({ text: '# Inbox\n- First task', format: 'md' })
 * // => 'ithoughts://x-callback-url/makeMap?text=%23%20Inbox%0A-%20First%20task&format=md'
 * @link https://www.toketaware.com/ithoughts-howto-x-callback-url
 */
export function makeMap(payload: MakeMap = {}) {
  const { text, note, link, format, path, style } = payload

  return ithoughtsUrl('makeMap', {
    text,
    note,
    link,
    format,
    path,
    style,
  })
}
