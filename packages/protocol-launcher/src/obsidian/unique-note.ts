import { qs } from '@protocol-launcher/shared'

type UniqueNote = {
  vault?: string
  paneType?: 'tab' | 'split' | 'window'
  content?: string
  clipboard?: boolean
  xSuccess?: string
}

/**
 * Create a unique note. Requires the Unique note creator core plugin.
 *
 * @param payload Obsidian URI parameters.
 * @returns Obsidian unique URL.
 * @example
 * uniqueNote({ vault: 'My Vault' })
 * // => 'obsidian://unique?vault=My%20Vault'
 * @link https://obsidian.md/help/uri
 */
export function uniqueNote(payload: UniqueNote = {}) {
  const { vault, paneType, content, clipboard, xSuccess } = payload
  return `obsidian://unique${qs({
    vault,
    paneType,
    content,
    clipboard: clipboard || undefined,
    'x-success': xSuccess,
  })}`
}
