import { qs } from '@protocol-launcher/shared'

type License = {
  email: string
  key: string
  scheme?: 'surge' | 'surgeconfig'
  autoclose?: true
}

/**
 * Open the email-license activation flow.
 * On iOS, requires no active non-trial license. On macOS, the activation window must be open.
 *
 * @param payload License details and optional scheme/iOS autoclose flag.
 * @returns Surge license activation URL.
 * @example
 * emailLicense({ email: 'name@example.com', key: 'REPLACE_WITH_LICENSE_KEY' })
 * @link https://manual.nssurge.com/tools/url-scheme.html
 */
export function emailLicense(payload: License) {
  const { email, key, scheme = 'surge', autoclose } = payload
  return `${scheme}:///email-license${qs({ email, key, autoclose: autoclose || undefined })}`
}
