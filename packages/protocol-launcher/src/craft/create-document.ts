import { qs } from '@protocol-launcher/shared'

/**
 * Create document payload definition.
 */
type CreateDocument = {
  /**
   * Space identifier.
   */
  spaceId: string
  /**
   * Document title.
   */
  title: string
  /**
   * Document content in markdown format (percentage encoded).
   */
  content: string
  /**
   * Folder identifier (can be empty string).
   */
  folderId: string
}

/**
 * Create a new document with content in Craft.
 *
 * @param payload Create document definition.
 * @returns Craft create document URL.
 * @example
 * createDocument({
 *   spaceId: 'abc-123',
 *   title: 'My Note',
 *   content: 'Hello **World**',
 *   folderId: '',
 * })
 * // => 'craftdocs://createdocument?spaceId=abc-123&title=My%20Note&content=Hello%20**World**&folderId='
 * @link https://support.craft.do/en/integrate/deeplinks
 */
export function createDocument(payload: CreateDocument) {
  const { spaceId, title, content, folderId } = payload
  const params = qs({
    spaceId,
    title,
    content,
    folderId,
  })

  return `craftdocs://createdocument${params}`
}
