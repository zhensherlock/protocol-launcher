/**
 * AnyDesk non-MSI custom client remote session payload.
 */
type ConnectCustomClientPayload = {
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
 * Start a remote session with an AnyDesk non-MSI custom client URL handler.
 *
 * @param payload AnyDesk non-MSI custom client remote session payload.
 * @returns AnyDesk non-MSI custom client remote session URL.
 * @example
 * connectCustomClient({ prefix: 'example', idOrAlias: '123456789' })
 * // => 'anydesk-example:123456789'
 *
 * @link https://support.anydesk.com/docs/url-handler
 */
export function connectCustomClient(payload: ConnectCustomClientPayload) {
  const { prefix, idOrAlias } = payload

  return `anydesk-${prefix}:${idOrAlias}`
}
