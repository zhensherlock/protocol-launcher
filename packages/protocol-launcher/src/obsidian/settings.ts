import { qs } from '@protocol-launcher/shared'

/**
 * Settings payload definition.
 */
type Settings = {
  /**
   * The vault name.
   */
  vault: string
  /**
   * The settings page ID.
   *
   * @example 'editor'
   */
  page?: string
}

/**
 * Open Obsidian settings.
 *
 * @param payload Settings payload.
 * @returns Obsidian settings URL.
 * @example
 * settings({
 *   vault: 'My Vault',
 *   page: 'editor',
 * })
 * // => 'obsidian://settings?vault=My%20Vault&page=editor'
 * @example
 * settings({
 *   vault: 'My Vault',
 * })
 * // => 'obsidian://settings?vault=My%20Vault'
 * @link https://obsidian.md/help/uri
 */
export function settings(payload: Settings) {
  const { vault, page } = payload
  const params = qs({
    vault,
    ...(page ? { page } : {}),
  })

  return `obsidian://settings${params}`
}
