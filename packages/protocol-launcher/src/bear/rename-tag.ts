import { qs } from '@protocol-launcher/shared'

/**
 * Rename tag command payload definition.
 */
type RenameTag = {
  /**
   * Tag name (required).
   */
  name: string

  /**
   * New tag name (required).
   */
  newName: string

  /**
   * If no the call don't force the opening of bear main window (MacOS only).
   */
  showWindow?: boolean
}

/**
 * Rename an existing tag in Bear.
 *
 * @param payload Rename tag command payload.
 * @returns Bear rename-tag URL.
 * @example
 * renameTag({ name: 'todo', newName: 'done' })
 * // => 'bear://x-callback-url/rename-tag?name=todo&new_name=done'
 * @link https://bear.app/faq/x-callback-url-scheme-documentation/#rename-tag
 */
export function renameTag(payload: RenameTag) {
  const { name, newName, showWindow } = payload

  const params = qs({
    ...(name ? { name } : {}),
    ...(newName ? { new_name: newName } : {}),
    ...(showWindow === false ? { show_window: 'no' } : {}),
  })

  return `bear://x-callback-url/rename-tag${params}`
}
