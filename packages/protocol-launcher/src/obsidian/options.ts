import { qs } from '@protocol-launcher/shared'

/**
 * Options payload definition.
 */
type Options = {
  /**
   * The vault name.
   */
  vault: string
}

/**
 * Open Obsidian options (quick settings) for a vault.
 *
 * @param payload Options payload.
 * @returns Obsidian options URL.
 * @example
 * options({
 *   vault: 'My Vault',
 * })
 * // => 'obsidian://options?vault=My%20Vault'
 * @link https://obsidian.md/help/uri
 */
export function options(payload: Options) {
  const { vault } = payload
  const params = qs({ vault })

  return `obsidian://options${params}`
}
