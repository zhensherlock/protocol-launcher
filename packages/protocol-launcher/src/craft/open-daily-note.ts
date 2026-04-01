import { qs } from '@protocol-launcher/shared'

/**
 * Daily note type definition.
 */
type DailyNoteType = 'yesterday' | 'today' | 'tomorrow'

/**
 * Open daily note payload definition.
 */
type OpenDailyNote = {
  /**
   * Space identifier.
   */
  spaceId: string
  /**
   * Daily note type.
   *
   * @default 'today'
   */
  type?: DailyNoteType
}

/**
 * Open a daily note (yesterday, today, or tomorrow) in Craft.
 *
 * @param payload Open daily note definition.
 * @returns Craft open daily note URL.
 * @example
 * openDailyNote({
 *   spaceId: 'abc-123',
 *   type: 'today',
 * })
 * // => 'craftdocs://openByQuery?query=today&spaceId=abc-123'
 * @example
 * openDailyNote({
 *   spaceId: 'abc-123',
 *   type: 'yesterday',
 * })
 * // => 'craftdocs://openByQuery?query=yesterday&spaceId=abc-123'
 * @example
 * openDailyNote({
 *   spaceId: 'abc-123',
 * })
 * // => 'craftdocs://openByQuery?query=today&spaceId=abc-123'
 * @link https://support.craft.do/en/integrate/deeplinks
 */
export function openDailyNote(payload: OpenDailyNote) {
  const { spaceId, type = 'today' } = payload
  const params = qs({
    query: type,
    spaceId,
  })

  return `craftdocs://openByQuery${params}`
}
