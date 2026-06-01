import { anydeskLicenseParams } from './shared'

/**
 * AnyDesk MSI custom client license registration payload.
 */
type RegisterLicenseCustomClientMsiPayload = {
  /**
   * Custom client prefix configured in AnyDesk.
   *
   * @example 'example'
   */
  prefix: string

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
 * Register an AnyDesk license key with an MSI custom client.
 *
 * @param payload AnyDesk MSI custom client license registration payload.
 * @returns AnyDesk MSI custom client license registration URL.
 * @example
 * registerLicenseCustomClientMsi({ prefix: 'example', key: 'LICENSE-KEY' })
 * // => 'anydesk:AnyDesk-example_msi://register-license?key=LICENSE-KEY'
 *
 * @link https://support.anydesk.com/docs/url-handler
 */
export function registerLicenseCustomClientMsi(payload: RegisterLicenseCustomClientMsiPayload) {
  const { prefix, key, silent } = payload

  return `anydesk:AnyDesk-${prefix}_msi://register-license${anydeskLicenseParams({ key, silent })}`
}
