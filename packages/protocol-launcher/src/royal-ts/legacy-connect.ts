import { type RoyalTsLegacyBasePayload, royalTsLegacyUrl } from './shared'

/**
 * Royal TS legacy connect URI payload.
 */
export type RoyalTsLegacyConnectPayload = RoyalTsLegacyBasePayload & {
  /**
   * Explicitly append `action=connect`. Royal TS defaults to connect when this is omitted.
   *
   * @example 'connect'
   */
  action?: 'connect'
}

/**
 * Build a Royal TS legacy connect URI using the documented `rtsx://` scheme.
 *
 * @param payload Royal TS legacy connect payload.
 * @returns Royal TS legacy connect URI.
 * @example
 * legacyConnect({ protocolIdentifier: 'rdp', uri: '192.168.5.16', using: 'uri' })
 * // => 'rtsx://rdp%3a%2f%2f192.168.5.16?using=uri'
 *
 * @link https://docs.royalapps.com/r2023/royalts/advanced/uri.html
 */
export function legacyConnect(payload: RoyalTsLegacyConnectPayload) {
  return royalTsLegacyUrl(payload)
}
