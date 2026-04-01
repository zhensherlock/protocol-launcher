import { qs } from '@protocol-launcher/shared'

/**
 * Open document payload definition.
 */
type OpenDocument = {
  /**
   * Space identifier.
   */
  spaceId: string
  /**
   * Block identifier.
   */
  blockId: string
}

/**
 * Open a specific document in Craft.
 *
 * @param payload Open document definition.
 * @returns Craft open document URL.
 * @example
 * openDocument({
 *   spaceId: 'abc-123',
 *   blockId: 'xyz-789',
 * })
 * // => 'craftdocs://open?spaceId=abc-123&blockId=xyz-789'
 * @link https://support.craft.do/en/integrate/deeplinks
 */
export function openDocument(payload: OpenDocument) {
  const { spaceId, blockId } = payload
  const params = qs({
    spaceId,
    blockId,
  })

  return `craftdocs://open${params}`
}
