import { type LaunchCenterProPhotoAttachment, type LaunchCenterProXCallback, launchCenterProUrl } from './shared'

/**
 * Email payload definition.
 */
type Email = LaunchCenterProXCallback & {
  /**
   * Email recipient.
   */
  to?: string

  /**
   * Email subject.
   */
  subject?: string

  /**
   * Email body.
   */
  body?: string

  /**
   * Email CC recipient.
   */
  cc?: string

  /**
   * Email BCC recipient.
   */
  bcc?: string

  /**
   * Photo attachment source.
   */
  attach?: LaunchCenterProPhotoAttachment
}

/**
 * Start a Launch Center Pro email action.
 *
 * @param payload Email payload.
 * @returns Launch Center Pro email URL.
 * @example
 * email({ to: 'sample@contrast.co', subject: 'Last Photo', body: '', cc: '', bcc: '', attach: 'photo:last' })
 * // => 'launch://email?to=sample%40contrast.co&subject=Last%20Photo&body=&cc=&bcc=&attach=photo%3Alast'
 * @link https://help.contrast.co/hc/en-us/articles/200611883-x-callback-url-Support
 */
export function email(payload: Email = {}) {
  const { to, subject, body, cc, bcc, attach } = payload

  return launchCenterProUrl('email', payload, {
    ...(to !== undefined ? { to } : {}),
    ...(subject !== undefined ? { subject } : {}),
    ...(body !== undefined ? { body } : {}),
    ...(cc !== undefined ? { cc } : {}),
    ...(bcc !== undefined ? { bcc } : {}),
    ...(attach !== undefined ? { attach } : {}),
  })
}
