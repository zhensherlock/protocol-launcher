import { qs } from '@protocol-launcher/shared'

/**
 * New group payload definition.
 */
type NewGroup = {
  /**
   * The name of the group to be created.
   *
   * @example 'My Group'
   */
  name: string
  /**
   * Specifies the parent group the new group should be inserted to.
   * This can be:
   * - A group name (e.g. 'My Group') that will match the first group having the same name
   * - A path to a particular target group (e.g. '/My Group/My Subgroup'). Any path must begin with a slash
   * - A unique identifier of the target group
   * If no value is given, the group is created inside the top level group.
   *
   * @example 'My Parent Group'
   * @example '/My Group/My Subgroup'
   */
  parent?: string
  /**
   * The position of the new group in its parent group.
   * Use 0 to make it the first group.
   *
   * @example 0
   * @example 3
   */
  index?: number
}

/**
 * Creates a new group in Ulysses.
 *
 * Available on iOS since Ulysses 2.6 (API version 1), on Mac since Ulysses 2.8 (API version 2).
 *
 * @param payload New group definition.
 * @returns Ulysses new-group URL.
 * @example
 * newGroup({ name: 'My Group' })
 * // => 'ulysses://x-callback-url/new-group?name=My%20Group'
 * @example
 * newGroup({ name: 'My Group', index: 3 })
 * // => 'ulysses://x-callback-url/new-group?name=My%20Group&index=3'
 * @example
 * newGroup({ name: 'Subgroup', parent: '/My Group', index: 0 })
 * // => 'ulysses://x-callback-url/new-group?name=Subgroup&parent=%2FMy%20Group&index=0'
 * @link https://refined-github-html-preview.kidonng.workers.dev/softwarehistorysociety/UlyssesX-Callback-URL/raw/main/x-callback.html#new-group
 */
export function newGroup(payload: NewGroup) {
  const { name, parent, index } = payload
  const params = qs({
    name,
    ...(parent ? { parent } : {}),
    ...(index !== undefined ? { index: String(index) } : {}),
  })

  return `ulysses://x-callback-url/new-group${params}`
}
