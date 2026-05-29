import { lineR } from './shared'

/**
 * Open the location screen from a one-on-one chat with a LINE Official Account.
 *
 * @returns LINE location URL.
 * @example
 * openLocation()
 * // => 'https://line.me/R/nv/location/'
 * @link https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#sending-the-location-screen
 */
export function openLocation() {
  return lineR('/nv/location/')
}
