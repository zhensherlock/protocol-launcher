import { qs } from '@protocol-launcher/shared'

/**
 * Open search payload definition.
 */
type OpenSearch = {
  /**
   * Space identifier.
   */
  spaceId: string
  /**
   * Search query (percentage encoded).
   */
  query: string
}

/**
 * Start a search in a Craft workspace.
 *
 * @param payload Open search definition.
 * @returns Craft open search URL.
 * @example
 * openSearch({
 *   spaceId: 'abc-123',
 *   query: 'vacation plans',
 * })
 * // => 'craftdocs://opensearch?spaceId=abc-123&query=vacation%20plans'
 * @link https://support.craft.do/en/integrate/deeplinks
 */
export function openSearch(payload: OpenSearch) {
  const { spaceId, query } = payload
  const params = qs({
    spaceId,
    query,
  })

  return `craftdocs://opensearch${params}`
}
