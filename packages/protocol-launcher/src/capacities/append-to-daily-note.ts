import { type CapacitiesXCallback, xCallbackParams, xCallbackUrl } from './shared'

/**
 * Append to daily note payload definition.
 */
type AppendToDailyNote = CapacitiesXCallback & {
  /**
   * If no spaceId is provided the current or last active space will be used.
   */
  spaceId?: string

  /**
   * Markdown content to append to today's daily note.
   */
  content: string
}

/**
 * Open Capacities and append content to today's daily note.
 *
 * @param payload Append to daily note payload.
 * @returns Capacities appendToDailyNote x-callback-url.
 * @example
 * appendToDailyNote({ content: 'My content' })
 * // => 'capacities://x-callback-url/appendToDailyNote?content=My%20content'
 * @link https://docs.capacities.io/developer/x-callback-urls
 */
export function appendToDailyNote(payload: AppendToDailyNote) {
  const { spaceId, content } = payload

  return xCallbackUrl('appendToDailyNote', {
    ...(spaceId !== undefined ? { spaceId } : {}),
    content,
    ...xCallbackParams(payload),
  })
}
