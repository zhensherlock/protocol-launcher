import { qs } from '@protocol-launcher/shared'

/**
 * Show board command payload definition.
 */
type ShowBoard = {
  /**
   * Board id.
   */
  id?: string
  /**
   * Board shortlink (can be with or without the "https://trello.com/b/" prefix).
   */
  shortlink?: string
  /**
   * Source identifier for x-callback-url.
   */
  xSource?: string
}

/**
 * Links to a board.
 *
 * @param payload Show board command payload.
 * @returns Trello show board URL.
 * @example
 * showBoard({
 *   shortlink: '81QRDHnt',
 * })
 * // => 'trello://x-callback-url/showBoard?shortlink=81QRDHnt'
 * @example
 * showBoard({
 *   id: '526e7338ffa7dfb94d0084a6',
 *   xSource: 'MyTestApp',
 * })
 * // => 'trello://x-callback-url/showBoard?id=526e7338ffa7dfb94d0084a6&x-source=MyTestApp'
 * @link https://support.atlassian.com/trello/docs/automate-with-url-scheme/
 */
export function showBoard(payload: ShowBoard = {}) {
  const { id, shortlink, xSource } = payload
  const params = qs({
    ...(id ? { id } : {}),
    ...(shortlink ? { shortlink } : {}),
    ...(xSource ? { 'x-source': xSource } : {}),
  })

  return `trello://x-callback-url/showBoard${params}`
}
