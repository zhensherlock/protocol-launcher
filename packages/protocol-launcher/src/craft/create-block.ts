import { qs } from '@protocol-launcher/shared'

/**
 * Create block payload definition.
 */
type CreateBlock = {
  /**
   * Parent block identifier (document id).
   */
  parentBlockId: string
  /**
   * Space identifier.
   */
  spaceId: string
  /**
   * Content to append (percentage encoded).
   */
  content: string
  /**
   * Index of new block (0 for prepend, large number for append).
   */
  index: number
}

/**
 * Append or prepend content to an existing document in Craft.
 *
 * @param payload Create block definition.
 * @returns Craft create block URL.
 * @example
 * createBlock({
 *   parentBlockId: 'doc-123',
 *   spaceId: 'abc-123',
 *   content: 'New content',
 *   index: 9999,
 * })
 * // => 'craftdocs://createblock?parentBlockId=doc-123&spaceId=abc-123&content=New%20content&index=9999'
 * @example
 * createBlock({
 *   parentBlockId: 'doc-123',
 *   spaceId: 'abc-123',
 *   content: 'Prepended content',
 *   index: 0,
 * })
 * // => 'craftdocs://createblock?parentBlockId=doc-123&spaceId=abc-123&content=Prepended%20content&index=0'
 * @link https://support.craft.do/en/integrate/deeplinks
 */
export function createBlock(payload: CreateBlock) {
  const { parentBlockId, spaceId, content, index } = payload
  const params = qs({
    parentBlockId,
    spaceId,
    content,
    index: String(index),
  })

  return `craftdocs://createblock${params}`
}
