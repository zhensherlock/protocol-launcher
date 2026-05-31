import { type TimCreatePayload, timCreateUrl } from './shared'

/**
 * Create task payload definition.
 */
export type CreateTask = TimCreatePayload

/**
 * Create a Tim task with optional title and notes.
 *
 * @param payload Optional task fields.
 * @returns Tim create task URL.
 * @example
 * createTask({
 *   title: 'My Title',
 *   notes: 'My Notes',
 * })
 * // => 'tim://create?type=task&title=My%20Title&notes=My%20Notes'
 * @link https://tim.neat.software/help
 */
export function createTask(payload: CreateTask = {}) {
  return timCreateUrl('task', payload)
}
