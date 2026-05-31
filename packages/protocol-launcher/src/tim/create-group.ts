import { type TimCreatePayload, timCreateUrl } from './shared'

/**
 * Create group payload definition.
 */
export type CreateGroup = TimCreatePayload

/**
 * Create a Tim group with optional title and notes.
 *
 * @param payload Optional group fields.
 * @returns Tim create group URL.
 * @example
 * createGroup({
 *   title: 'My Title',
 *   notes: 'My Notes',
 * })
 * // => 'tim://create?type=group&title=My%20Title&notes=My%20Notes'
 * @link https://tim.neat.software/help
 */
export function createGroup(payload: CreateGroup = {}) {
  return timCreateUrl('group', payload)
}
