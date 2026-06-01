/**
 * AnyDesk MSI custom client remote session payload.
 */
type ConnectCustomClientMsiPayload = {
  /**
   * Custom client prefix configured in AnyDesk.
   *
   * @example 'example'
   */
  prefix: string

  /**
   * AnyDesk ID or alias.
   *
   * @example '123456789'
   * @example 'user@namespace'
   */
  idOrAlias: string
}

/**
 * Start a remote session with an AnyDesk MSI custom client URL handler.
 *
 * @param payload AnyDesk MSI custom client remote session payload.
 * @returns AnyDesk MSI custom client remote session URL.
 * @example
 * connectCustomClientMsi({ prefix: 'example', idOrAlias: '123456789' })
 * // => 'anydesk:AnyDesk-example_msi:123456789'
 *
 * @link https://support.anydesk.com/docs/url-handler
 */
export function connectCustomClientMsi(payload: ConnectCustomClientMsiPayload) {
  const { prefix, idOrAlias } = payload

  return `anydesk:AnyDesk-${prefix}_msi:${idOrAlias}`
}
