import { qs } from '@protocol-launcher/shared'

/**
 * Insert payload definition.
 */
type Insert = {
  /**
   * The vault name.
   */
  vault: string
  /**
   * The content to insert.
   */
  content: string
}

/**
 * Insert content into the current note in Obsidian.
 *
 * @param payload Insert payload.
 * @returns Obsidian insert URL.
 * @example
 * insert({
 *   vault: 'My Vault',
 *   content: '## Heading',
 * })
 * // => 'obsidian://insert?vault=My%20Vault&content=%23%23%20Heading'
 * @link https://obsidian.md/help/uri
 */
export function insert(payload: Insert) {
  const { vault, content } = payload
  const params = qs({ vault, content })

  return `obsidian://insert${params}`
}
