import { qs } from '@protocol-launcher/shared'
import type { AirmailSendPayload } from './shared'

/**
 * Send a message through Airmail's x-callback-url endpoint.
 *
 * @param payload Airmail x-callback-url send payload.
 * @returns Airmail x-callback-url send URL.
 * @example
 * send({
 *   from: 'info@email.com',
 *   subject: 'subj',
 *   to: 'infoto@email.com',
 *   plainBody: 'hello',
 *   xSource: 'sourceapp',
 *   xSuccess: 'sourceapp://success',
 *   xError: 'sourceapp://error',
 *   xCancel: 'sourceapp://cancelled',
 * })
 * // => 'airmail://x-callback-url/send?from=info%40email.com&subject=subj&to=infoto%40email.com&plainBody=hello&x-source=sourceapp&x-success=sourceapp%3A%2F%2Fsuccess&x-error=sourceapp%3A%2F%2Ferror&x-cancel=sourceapp%3A%2F%2Fcancelled'
 * @link https://help.airmailapp.com/en-us/article/airmail-ios-url-scheme-1q060gy/
 */
export function send(payload: AirmailSendPayload = {}) {
  const { from, subject, to, plainBody, xSource, xSuccess, xError, xCancel } = payload
  const params = qs({
    from,
    subject,
    to,
    plainBody,
    'x-source': xSource,
    'x-success': xSuccess,
    'x-error': xError,
    'x-cancel': xCancel,
  })

  return `airmail://x-callback-url/send${params}`
}
