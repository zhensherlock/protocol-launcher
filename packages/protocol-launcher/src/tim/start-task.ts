import { type TimIdPayload, type TimNotesPayload, timIdUrl } from './shared'

/**
 * Start task timer payload definition.
 */
export type StartTask = TimIdPayload & TimNotesPayload

/**
 * Start a Tim task timer by ID with optional record notes.
 *
 * @param payload Task ID and optional notes payload.
 * @returns Tim start task URL.
 * @example
 * startTask({
 *   id: 'D43FA035-6406-495D-9ADD-46721986040F',
 *   notes: 'My Notes',
 * })
 * // => 'tim://D43FA035-6406-495D-9ADD-46721986040F?action=start&notes=My%20Notes'
 * @link https://tim.neat.software/help
 */
export function startTask(payload: StartTask) {
  const { id, notes } = payload

  return timIdUrl(id, {
    action: 'start',
    notes,
  })
}
