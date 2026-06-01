import { writtenDownXCallbackUrl } from './shared'

/**
 * Open journal payload definition.
 */
type OpenJournal = {
  /**
   * Unique identifier for the journal to be opened.
   */
  journalID: string
}

/**
 * Open and display a journal in Written Down.
 *
 * @param payload Open journal payload.
 * @returns Written Down open-journal x-callback-url.
 * @example
 * openJournal({ journalID: '4739C5F8-AF19-49A3-B6BD-2561962C75CC' })
 * // => 'writtendown://x-callback-url/open-journal?journalID=4739C5F8-AF19-49A3-B6BD-2561962C75CC'
 * @link https://tinkerbuilt.com/faq/x-callback-url/
 */
export function openJournal(payload: OpenJournal) {
  const { journalID } = payload

  return writtenDownXCallbackUrl('open-journal', {
    journalID,
  })
}
