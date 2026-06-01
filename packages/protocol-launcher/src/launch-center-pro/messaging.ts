import { type LaunchCenterProPhotoAttachment, type LaunchCenterProXCallback, launchCenterProUrl } from './shared'

/**
 * Messaging payload definition.
 */
type Messaging = LaunchCenterProXCallback & {
  /**
   * Phone number or recipient value.
   */
  to?: string

  /**
   * Message body.
   */
  body?: string

  /**
   * Photo attachment source.
   */
  attach?: LaunchCenterProPhotoAttachment

  /**
   * Dropbox path used with Dropbox-backed attachment actions.
   */
  path?: string

  /**
   * Predefined search term for Giphy-backed photo attachments.
   */
  'gif-search'?: string

  /**
   * Direct Giphy ID for Giphy-backed photo attachments.
   */
  'gif-id'?: string
}

/**
 * Start a Launch Center Pro messaging action.
 *
 * @param payload Messaging payload.
 * @returns Launch Center Pro messaging URL.
 * @example
 * messaging({ to: '555-555-5555', attach: 'photo:last' })
 * // => 'launch://messaging?to=555-555-5555&attach=photo%3Alast'
 * @example
 * messaging({ to: '555-555-5555', body: '[prompt:Body]', attach: 'photo:dropbox', path: 'reactions' })
 * // => 'launch://messaging?to=555-555-5555&body=%5Bprompt%3ABody%5D&attach=photo%3Adropbox&path=reactions'
 * @link https://help.contrast.co/hc/en-us/articles/200612283-Dropbox-Actions
 */
export function messaging(payload: Messaging = {}) {
  const { to, body, attach, path } = payload

  return launchCenterProUrl('messaging', payload, {
    ...(to !== undefined ? { to } : {}),
    ...(body !== undefined ? { body } : {}),
    ...(attach !== undefined ? { attach } : {}),
    ...(path !== undefined ? { path } : {}),
    ...(payload['gif-search'] !== undefined ? { 'gif-search': payload['gif-search'] } : {}),
    ...(payload['gif-id'] !== undefined ? { 'gif-id': payload['gif-id'] } : {}),
  })
}
