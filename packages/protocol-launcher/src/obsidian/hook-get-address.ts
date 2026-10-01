import { qs } from '@protocol-launcher/shared'

type HookGetAddress = {
  vault?: string
  xSuccess?: string
  xError?: string
}

/**
 * Return the focused note URL to Hook, or copy its Markdown link to the clipboard.
 *
 * @param payload Obsidian URI parameters.
 * @returns Obsidian hook-get-address URL.
 * @example
 * hookGetAddress({ vault: 'My Vault' })
 * // => 'obsidian://hook-get-address?vault=My%20Vault'
 * @link https://obsidian.md/help/uri
 */
export function hookGetAddress(payload: HookGetAddress = {}) {
  const { vault, xSuccess, xError } = payload
  return `obsidian://hook-get-address${qs({
    vault,
    'x-success': xSuccess,
    'x-error': xError,
  })}`
}
