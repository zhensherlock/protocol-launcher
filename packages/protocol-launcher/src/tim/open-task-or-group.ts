import { type TimIdPayload, timIdUrl } from './shared'

/**
 * Open task or group payload definition.
 */
export type OpenTaskOrGroup = TimIdPayload

/**
 * Go to a Tim task or group by ID.
 *
 * @param payload Task or group ID payload.
 * @returns Tim task or group URL.
 * @example
 * openTaskOrGroup({ id: 'D43FA035-6406-495D-9ADD-46721986040F' })
 * // => 'tim://D43FA035-6406-495D-9ADD-46721986040F'
 * @link https://tim.neat.software/help
 */
export function openTaskOrGroup(payload: OpenTaskOrGroup) {
  const { id } = payload

  return timIdUrl(id)
}
