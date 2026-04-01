import { qs } from '@protocol-launcher/shared'

/**
 * Search payload definition.
 */
type Search = {
  /**
   * The vault name.
   */
  vault: string
  /**
   * The search query.
   */
  query: string
}

/**
 * Search for notes in Obsidian.
 *
 * @param payload Search payload.
 * @returns Obsidian search URL.
 * @example
 * search({
 *   vault: 'My Vault',
 *   query: 'meeting notes',
 * })
 * // => 'obsidian://search?vault=My%20Vault&query=meeting%20notes'
 * @link https://obsidian.md/help/uri
 */
export function search(payload: Search) {
  const { vault, query } = payload
  const params = qs({ vault, query })

  return `obsidian://search${params}`
}
