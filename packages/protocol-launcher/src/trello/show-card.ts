import { qs } from '@protocol-launcher/shared'

/**
 * Show card command payload definition.
 */
type ShowCard = {
  /**
   * Card id.
   */
  id?: string
  /**
   * Card shortlink (can be with or without the "https://trello.com/c/" prefix).
   */
  shortlink?: string
  /**
   * Source identifier for x-callback-url.
   */
  xSource?: string
}

/**
 * Links to a card.
 *
 * @param payload Show card command payload.
 * @returns Trello show card URL.
 * @example
 * showCard({
 *   id: '526e7338ffa7dfb94d0084a6',
 * })
 * // => 'trello://x-callback-url/showCard?id=526e7338ffa7dfb94d0084a6'
 * @example
 * showCard({
 *   shortlink: 'abc123',
 *   xSource: 'MyTestApp',
 * })
 * // => 'trello://x-callback-url/showCard?shortlink=abc123&x-source=MyTestApp'
 * @link https://support.atlassian.com/trello/docs/automate-with-url-scheme/
 */
export function showCard(payload: ShowCard = {}) {
  const { id, shortlink, xSource } = payload
  const params = qs({
    ...(id ? { id } : {}),
    ...(shortlink ? { shortlink } : {}),
    ...(xSource ? { 'x-source': xSource } : {}),
  })

  return `trello://x-callback-url/showCard${params}`
}
