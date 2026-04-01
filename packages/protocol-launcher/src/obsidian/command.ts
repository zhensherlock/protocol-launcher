import { qs } from '@protocol-launcher/shared'

/**
 * Command payload definition.
 */
type Command = {
  /**
   * The vault name.
   */
  vault: string
  /**
   * The command ID to execute.
   *
   * @example 'editor:save-file'
   */
  id: string
}

/**
 * Execute a command in Obsidian.
 *
 * @param payload Command payload.
 * @returns Obsidian command URL.
 * @example
 * command({
 *   vault: 'My Vault',
 *   id: 'editor:save-file',
 * })
 * // => 'obsidian://command?vault=My%20Vault&id=editor%3Asave-file'
 * @link https://obsidian.md/help/uri
 */
export function command(payload: Command) {
  const { vault, id } = payload
  const params = qs({ vault, id })

  return `obsidian://command${params}`
}
