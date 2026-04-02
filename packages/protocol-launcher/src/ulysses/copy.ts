import { qs } from '@protocol-launcher/shared'

/**
 * Copy item payload definition.
 */
type Copy = {
  /**
   * The identifier of the item (sheet or group) that should be copied.
   *
   * @example 'hZ7IX2jqKbVmPGlYUXkZjQ'
   */
  id: string
  /**
   * The group where the item should be copied.
   * This can be:
   * - A group name (e.g. 'My Group') that will match the first group having the same name
   * - A path to a particular group (e.g. '/My Group/My Subgroup'). Any path must begin with a slash
   * - A unique identifier of a sheet or group
   * If the parameter is not set, the item will be copied inside of its current parent group.
   *
   * @example 'H8zLAmc1I0njH-0Ql-3YGQ'
   * @example '/My Group/My Subgroup'
   */
  targetGroup?: string
  /**
   * The position of the item in its target group.
   * Use 0 to make it the first item.
   *
   * @example 0
   * @example 4
   */
  index?: number
}

/**
 * Copies an item (sheet or group) to a target group in Ulysses.
 *
 * Available since Ulysses 2.8 (API version 2).
 *
 * @param payload Copy item definition.
 * @returns Ulysses copy URL.
 * @example
 * copy({ id: 'hZ7IX2jqKbVmPGlYUXkZjQ' })
 * // => 'ulysses://x-callback-url/copy?id=hZ7IX2jqKbVmPGlYUXkZjQ'
 * @example
 * copy({ id: 'hZ7IX2jqKbVmPGlYUXkZjQ', targetGroup: 'H8zLAmc1I0njH-0Ql-3YGQ', index: 4 })
 * // => 'ulysses://x-callback-url/copy?id=hZ7IX2jqKbVmPGlYUXkZjQ&targetGroup=H8zLAmc1I0njH-0Ql-3YGQ&index=4'
 * @link https://refined-github-html-preview.kidonng.workers.dev/softwarehistorysociety/UlyssesX-Callback-URL/raw/main/x-callback.html#copy
 */
export function copy(payload: Copy) {
  const { id, targetGroup, index } = payload
  const params = qs({
    id,
    ...(targetGroup ? { targetGroup } : {}),
    ...(index !== undefined ? { index: String(index) } : {}),
  })

  return `ulysses://x-callback-url/copy${params}`
}
