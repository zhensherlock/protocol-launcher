import { qs } from '@protocol-launcher/shared'
import type { AirmailComposePayload } from './shared'

/**
 * Create a message in Airmail.
 *
 * @param payload Airmail compose payload.
 * @returns Airmail compose URL.
 * @example
 * compose({
 *   subject: 'Message subject',
 *   to: 'joe@example.com',
 *   plainBody: 'Message body',
 * })
 * // => 'airmail://compose?subject=Message%20subject&to=joe%40example.com&plainBody=Message%20body'
 * @link https://help.airmailapp.com/en-us/article/airmail-ios-url-scheme-1q060gy/
 */
export function compose(payload: AirmailComposePayload = {}) {
  const { subject, from, to, cc, bcc, plainBody, htmlBody } = payload
  const params = qs({
    subject,
    from,
    to,
    cc,
    bcc,
    plainBody,
    htmlBody,
  })

  return `airmail://compose${params}`
}
