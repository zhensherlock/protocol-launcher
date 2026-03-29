import { qs } from '@protocol-launcher/shared'

/**
 * Send mail payload definition.
 */
type SendMail = {
  /**
   * A comma-separated list of recipients for the TO field.
   * Can be raw email addresses or name addresses in format 'Joe Smith <joe@smith.com>'.
   */
  to?: string
  /**
   * A comma-separated list of recipients for the CC field.
   * Can be raw email addresses or name addresses in format 'Joe Smith <joe@smith.com>'.
   */
  cc?: string
  /**
   * A comma-separated list of recipients for the BCC field.
   * Can be raw email addresses or name addresses in format 'Joe Smith <joe@smith.com>'.
   */
  bcc?: string
  /**
   * Subject line for the email.
   */
  subject?: string
  /**
   * Body content for the email.
   * If html is true, this should be HTML content, otherwise plain text.
   */
  body?: string
  /**
   * Email address to use as the from address.
   * If it doesn't match a configured address in Mail.app, it will be ignored.
   */
  from?: string
  /**
   * If true, the body argument will be assumed to be HTML.
   */
  html?: boolean
  /**
   * X-success callback URL (x-callback-url compliant).
   */
  xSuccess?: string
  /**
   * X-cancel callback URL (x-callback-url compliant).
   */
  xCancel?: string
  /**
   * X-error callback URL (x-callback-url compliant).
   */
  xError?: string
}

/**
 * Open Mail Assistant to compose and send an email.
 *
 * @param payload Send mail payload.
 * @returns Mail Assistant send mail URL.
 * @example
 * sendMail({
 *   subject: 'Test',
 *   body: 'My encoded content',
 * })
 * // => 'mail-assistant://sendMail?subject=Test&body=My%20encoded%20content'
 * @example
 * sendMail({
 *   to: 'john@example.com',
 *   cc: 'jane@example.com',
 *   subject: 'Meeting',
 *   body: '<h1>Meeting Notes</h1>',
 *   html: true,
 * })
 * // => 'mail-assistant://sendMail?to=john%40example.com&cc=jane%40example.com&subject=Meeting&body=%3Ch1%3EMeeting%20Notes%3C%2Fh1%3E&html=true'
 * @example
 * sendMail({
 *   to: 'John Doe <john@example.com>, Jane Smith <jane@example.com>',
 *   subject: 'Hello',
 *   body: 'Hi there!',
 * })
 * // => 'mail-assistant://sendMail?to=John%20Doe%20%3Cjohn%40example.com%3E%2C%20Jane%20Smith%20%3Cjane%40example.com%3E&subject=Hello&body=Hi%20there!'
 * @link https://docs.getdrafts.com/misc/mail-assistant#url-scheme
 */
export function sendMail(payload: SendMail = {}) {
  const { to, cc, bcc, subject, body, from, html, xSuccess, xCancel, xError } = payload
  const params = qs({
    ...(to ? { to } : {}),
    ...(cc ? { cc } : {}),
    ...(bcc ? { bcc } : {}),
    ...(subject ? { subject } : {}),
    ...(body ? { body } : {}),
    ...(from ? { from } : {}),
    ...(html !== undefined ? { html: html ? 'true' : 'false' } : {}),
    ...(xSuccess ? { 'x-success': xSuccess } : {}),
    ...(xCancel ? { 'x-cancel': xCancel } : {}),
    ...(xError ? { 'x-error': xError } : {}),
  })

  return `mail-assistant://sendMail${params}`
}
