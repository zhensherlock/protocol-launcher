import { type IThoughtsContentPayload, type IThoughtsEdit, ithoughtsUrl } from './shared'

/**
 * Amend map payload definition.
 */
export type AmendMap = IThoughtsContentPayload & {
  /**
   * Path to the existing map.
   */
  path: string
  /**
   * String to match the target topic. iThoughts uses the first topic with this substring and allows regex.
   */
  target: string
  /**
   * Use `YES` to select and edit the new topic.
   */
  edit?: IThoughtsEdit
}

/**
 * Amend an existing iThoughts mind map.
 *
 * @param payload Amend map payload.
 * @returns iThoughts amendMap x-callback-url.
 * @example
 * amendMap({ path: '/tasks', target: 'newtasks' })
 * // => 'ithoughts://x-callback-url/amendMap?path=%2Ftasks&target=newtasks'
 * @link https://www.toketaware.com/ithoughts-howto-x-callback-url
 */
export function amendMap(payload: AmendMap) {
  const { text, note, link, format, path, target, edit } = payload

  return ithoughtsUrl('amendMap', {
    text,
    note,
    link,
    format,
    path,
    target,
    edit,
  })
}
