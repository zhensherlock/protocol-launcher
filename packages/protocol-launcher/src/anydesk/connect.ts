/**
 * AnyDesk remote session payload.
 */
type ConnectPayload = {
  /**
   * AnyDesk ID or alias.
   *
   * @example '123456789'
   * @example 'user@namespace'
   */
  idOrAlias: string
}

/**
 * Start an AnyDesk remote session.
 *
 * @param payload AnyDesk remote session payload.
 * @returns AnyDesk remote session URL.
 * @example
 * connect({ idOrAlias: '123456789' })
 * // => 'anydesk:123456789'
 *
 * @example
 * connect({ idOrAlias: 'user@namespace' })
 * // => 'anydesk:user@namespace'
 *
 * @link https://support.anydesk.com/docs/url-handler
 */
export function connect(payload: ConnectPayload) {
  const { idOrAlias } = payload

  return `anydesk:${idOrAlias}`
}
