import { qs } from '@protocol-launcher/shared'

/**
 * Open note payload definition.
 */
type OpenNote = {
  /**
   * The vault name.
   */
  vault?: string
  /**
   * The file path (relative or absolute).
   */
  file?: string
  /** Absolute file path; takes precedence over vault and file in Obsidian. */
  path?: string
  /** Where to open the note. Pop-out windows are desktop-only. */
  paneType?: 'tab' | 'split' | 'window'
}

/**
 * Open a specific note in Obsidian.
 *
 * @param payload Open note payload.
 * @returns Obsidian open note URL.
 * @example
 * openNote({
 *   vault: 'My Vault',
 *   file: 'Notes/Meeting.md',
 * })
 * // => 'obsidian://open?vault=My%20Vault&file=Notes%2FMeeting.md'
 * @link https://obsidian.md/help/uri
 */
export function openNote(payload: OpenNote = {}) {
  const { vault, file, path, paneType } = payload
  const params = qs({ vault, file, path, paneType })

  return `obsidian://open${params}`
}
