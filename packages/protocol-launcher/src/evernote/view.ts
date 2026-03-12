/**
 * View note definition.
 */
type ViewNote = {
  /**
   * User ID of the notebook owner.
   */
  userId: string

  /**
   * Shard ID of the notebook owner.
   */
  shardId: string

  /**
   * GUID of the note to view.
   */
  noteGuid: string
}

/**
 * View a specific note in Evernote.
 *
 * Structure:
 *   https://[service]/shard/[shardId]/nl/[userId]/[noteGuid]/
 *
 * Where:
 *   [service] is the name of the Evernote service (www.evernote.com)
 *   [userId] is the user ID of the notebook owner
 *   [shardId] is the shard ID where the note is stored
 *   [noteGuid] is the GUID of the note that is being linked to
 *
 * @param payload View note definition.
 * @returns Evernote view note URL.
 * @example
 * viewNote({
 *   userId: '123456',
 *   shardId: 's29',
 *   noteGuid: 'abcd-efgh-ijkl-mnop',
 * })
 * // => 'evernote:///view/123456/s29/abcd-efgh-ijkl-mnop/abcd-efgh-ijkl-mnop/'
 * @link https://dev.evernote.com/doc/articles/note_links.php
 */
export function viewNote(payload: ViewNote) {
  const { userId, shardId, noteGuid } = payload
  return `evernote:///view/${userId}/${shardId}/${noteGuid}/${noteGuid}/`
}
