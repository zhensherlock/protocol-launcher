import { qs } from '@protocol-launcher/shared'

/**
 * Open space payload definition.
 */
type OpenSpace = {
  /**
   * Space identifier.
   */
  spaceId: string
  /**
   * Optional tab to open.
   *
   * @default 'documents'
   */
  tab?: 'calendar' | 'search' | 'documents'
}

/**
 * Open a space in Craft with optional tab.
 *
 * @param payload Open space definition.
 * @returns Craft open space URL.
 * @example
 * openSpace({
 *   spaceId: 'abc-123',
 * })
 * // => 'craftdocs://openspace?spaceId=abc-123'
 * @example
 * openSpace({
 *   spaceId: 'abc-123',
 *   tab: 'calendar',
 * })
 * // => 'craftdocs://openspace?spaceId=abc-123&tab=calendar'
 * @link https://support.craft.do/en/integrate/deeplinks
 */
export function openSpace(payload: OpenSpace) {
  const { spaceId, tab } = payload
  const params = qs({
    spaceId,
    ...(tab ? { tab } : {}),
  })

  return `craftdocs://openspace${params}`
}
