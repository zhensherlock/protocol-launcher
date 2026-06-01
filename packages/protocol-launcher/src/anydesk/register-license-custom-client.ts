import { anydeskLicenseParams } from './shared'

/**
 * AnyDesk non-MSI custom client license registration payload.
 */
type RegisterLicenseCustomClientPayload = {
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
 * Register an AnyDesk license key with a non-MSI custom client.
 *
 * @param payload AnyDesk non-MSI custom client license registration payload.
 * @returns AnyDesk non-MSI custom client license registration URL.
 * @example
 * registerLicenseCustomClient({ prefix: 'example', key: 'LICENSE-KEY' })
 * // => 'anydesk-example://register-license?key=LICENSE-KEY'
 *
 * @link https://support.anydesk.com/docs/url-handler
 */
export function registerLicenseCustomClient(payload: RegisterLicenseCustomClientPayload) {
  const { prefix, key, silent } = payload

  return `anydesk-${prefix}://register-license${anydeskLicenseParams({ key, silent })}`
}
