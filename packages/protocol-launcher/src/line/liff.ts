import { type LineAppUrlPayload, lineAppUrl } from './shared'

export type OpenLiff = LineAppUrlPayload

/**
 * Open a LIFF app with the given LIFF ID.
 *
 * @param payload LIFF URL payload.
 * @returns LIFF URL.
 * @example
 * openLiff({ liffId: '1234567890-AbcdEfgh', path: '/path_A/path_B/', query: { key1: 'value1', key2: 'value2' } })
 * // => 'https://liff.line.me/1234567890-AbcdEfgh/path_A/path_B/?key1=value1&key2=value2'
 * @link https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#opening-a-liff-app
 */
export function openLiff(payload: OpenLiff) {
  return lineAppUrl('https://liff.line.me', payload)
}
