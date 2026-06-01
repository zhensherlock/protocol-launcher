import { anydeskLicenseParams } from './shared'

/**
 * AnyDesk license registration payload.
 */
type RegisterLicensePayload = {
  /**
   * AnyDesk license key.
   *
   * @example 'LICENSE-KEY'
   */
  key: string

  /**
   * Register the license silently.
   *
   * @example true
   */
  silent?: boolean
}

/**
 * Register an AnyDesk license key.
 *
 * @param payload AnyDesk license registration payload.
 * @returns AnyDesk license registration URL.
 * @example
 * registerLicense({ key: 'LICENSE-KEY' })
 * // => 'anydesk://register-license?key=LICENSE-KEY'
 *
 * @example
 * registerLicense({ key: 'LICENSE-KEY', silent: true })
 * // => 'anydesk://register-license?key=LICENSE-KEY&silent'
 *
 * @link https://support.anydesk.com/docs/url-handler
 */
export function registerLicense(payload: RegisterLicensePayload) {
  const { key, silent } = payload

  return `anydesk://register-license${anydeskLicenseParams({ key, silent })}`
}
