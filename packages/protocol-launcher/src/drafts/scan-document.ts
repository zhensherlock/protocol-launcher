import { qs } from '@protocol-launcher/shared'

/**
 * ScanDocument action payload definition.
 */
type ScanDocument = {
  /**
   * Default to "true". If "false", the results of the scan will be returned to the callback, but not saved as a draft in Drafts.
   */
  save?: boolean
  /**
   * The name of the argument to use to pass the draft content back to the x-success URL. Defaults to "text".
   */
  retParam?: string
  /**
   * The x-success callback URL to receive the scanned text.
   */
  xSuccess?: string
}

/**
 * Open Drafts document scanning interface. (iOS only)
 *
 * @param payload ScanDocument action payload.
 * @returns Drafts scanDocument URL.
 * @example
 * scanDocument({ xSuccess: 'APP-URL' })
 * // => 'drafts:///scandocument?x-success=APP-URL'
 * @example
 * scanDocument({ save: false, retParam: 'input', xSuccess: 'myapp://callback' })
 * // => 'drafts:///scandocument?save=false&retParam=input&x-success=myapp://callback'
 * @link https://docs.getdrafts.com/docs/automation/urlschemes
 */
export function scanDocument(payload: ScanDocument = {}) {
  const { save, retParam, xSuccess } = payload

  const params = qs({
    ...(save !== undefined ? { save } : {}),
    ...(retParam ? { retParam } : {}),
    ...(xSuccess ? { 'x-success': xSuccess } : {}),
  })

  return `drafts:///scandocument${params}`
}
