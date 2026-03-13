import { qs } from '@protocol-launcher/shared'

/**
 * Delete tag command payload definition.
 */
type DeleteTag = {
  /**
   * Tag name (required).
   */
  name: string

  /**
   * If no the call don't force the opening of bear main window (MacOS only).
   */
  showWindow?: boolean
}

/**
 * Delete an existing tag in Bear.
 *
 * @param payload Delete tag command payload.
 * @returns Bear delete-tag URL.
 * @example
 * deleteTag({ name: 'todo' })
 * // => 'bear://x-callback-url/delete-tag?name=todo'
 * @link https://bear.app/faq/x-callback-url-scheme-documentation/#delete-tag
 */
export function deleteTag(payload: DeleteTag) {
  const { name, showWindow } = payload

  const params = qs({
    ...(name ? { name } : {}),
    ...(showWindow === false ? { show_window: 'no' } : {}),
  })

  return `bear://x-callback-url/delete-tag${params ? `?${params}` : ''}`
}
