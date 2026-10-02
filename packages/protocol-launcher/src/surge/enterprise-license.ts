import { qs } from '@protocol-launcher/shared'

type License = {
  companyID: string
  userID: string
  passcode: string
  scheme?: 'surge' | 'surgeconfig'
  autoclose?: true
}

/**
 * Open the team-license activation flow.
 * On iOS, requires no active non-trial license. On macOS, the activation window must be open.
 *
 * @param payload License details and optional scheme/iOS autoclose flag.
 * @returns Surge license activation URL.
 * @example
 * enterpriseLicense({ companyID: 'COMPANY_ID', userID: 'USER_ID', passcode: 'REPLACE_WITH_PASSCODE' })
 * @link https://manual.nssurge.com/tools/url-scheme.html
 */
export function enterpriseLicense(payload: License) {
  const { companyID, userID, passcode, scheme = 'surge', autoclose } = payload
  return `${scheme}:///enterprise-license${qs({ companyID, userID, passcode, autoclose: autoclose || undefined })}`
}
