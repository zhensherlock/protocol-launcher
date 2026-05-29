import { type LineAppUrlPayload, lineAppUrl } from './shared'

export type OpenMiniApp = LineAppUrlPayload

/**
 * Open a LINE MINI App with the given LIFF ID.
 *
 * @param payload LINE MINI App permanent link payload.
 * @returns LINE MINI App permanent link URL.
 * @example
 * openMiniApp({ liffId: '123456-abcedfg', path: '/shop', query: { search: 'shoes' }, hash: 'item10' })
 * // => 'https://miniapp.line.me/123456-abcedfg/shop?search=shoes#item10'
 * @link https://developers.line.biz/en/docs/line-mini-app/develop/permanent-links/
 */
export function openMiniApp(payload: OpenMiniApp) {
  return lineAppUrl('https://miniapp.line.me', payload)
}
