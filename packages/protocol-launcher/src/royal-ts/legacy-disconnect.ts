import { type RoyalTsLegacyBasePayload, royalTsLegacyUrl } from './shared'

/**
 * Royal TS legacy disconnect URI payload.
 */
export type RoyalTsLegacyDisconnectPayload = RoyalTsLegacyBasePayload

/**
 * Build a Royal TS legacy disconnect URI using the documented `rtsx://` scheme.
 *
 * @param payload Royal TS legacy disconnect payload.
 * @returns Royal TS legacy disconnect URI.
 * @example
 * legacyDisconnect({ protocolIdentifier: 'rdp', uri: 'Web Server 1', using: 'name' })
 * // => 'rtsx://rdp%3a%2f%2fWeb%20Server%201?using=name&action=disconnect'
 *
 * @link https://docs.royalapps.com/r2023/royalts/advanced/uri.html
 */
export function legacyDisconnect(payload: RoyalTsLegacyDisconnectPayload) {
  return royalTsLegacyUrl({ ...payload, action: 'disconnect' })
}
