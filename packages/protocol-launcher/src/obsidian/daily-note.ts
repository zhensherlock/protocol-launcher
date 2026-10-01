import { qs } from '@protocol-launcher/shared'

type DailyNote = {
  vault?: string
  name?: string
  file?: string
  path?: string
  paneType?: 'tab' | 'split' | 'window'
  content?: string
  clipboard?: boolean
  silent?: boolean
  append?: boolean
  overwrite?: boolean
  xSuccess?: string
}

/**
 * Create or open the daily note. Requires the Daily notes core plugin.
 *
 * @param payload Obsidian URI parameters.
 * @returns Obsidian daily URL.
 * @example
 * dailyNote({ vault: 'My Vault' })
 * // => 'obsidian://daily?vault=My%20Vault'
 * @link https://obsidian.md/help/uri
 */
export function dailyNote(payload: DailyNote = {}) {
  const { vault, name, file, path, paneType, content, clipboard, silent, append, overwrite, xSuccess } = payload
  return `obsidian://daily${qs({
    vault,
    name,
    file,
    path,
    paneType,
    content,
    clipboard: clipboard || undefined,
    silent: silent || undefined,
    append: append || undefined,
    overwrite: overwrite || undefined,
    'x-success': xSuccess,
  })}`
}
