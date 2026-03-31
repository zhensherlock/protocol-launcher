import { qs } from '@protocol-launcher/shared'

/**
 * Create card command payload definition.
 */
type CreateCard = {
  /**
   * Board id of a board on which the user has permission to create cards.
   */
  id?: string
  /**
   * Board shortlink (can be with or without the "https://trello.com/b/" prefix).
   */
  shortlink?: string
  /**
   * The name for the new card.
   */
  name: string
  /**
   * The description text to attach to the card.
   */
  description?: string
  /**
   * Id of the list within the specified board in which to insert the card.
   * @default First list
   */
  listId?: string
  /**
   * Indicates whether the contents of the pasteboard should be included.
   */
  usePasteboard?: boolean | string | number
  /**
   * URL to call on success. The card id and shortlink are returned as parameters.
   */
  xSuccess?: string
  /**
   * URL to call on error. Error code and message are returned as parameters.
   */
  xError?: string
}

/**
 * Creates a new card in a specified board.
 *
 * @param payload Create card command payload.
 * @returns Trello create card URL.
 * @example
 * createCard({
 *   shortlink: '81QRDHnt',
 *   name: 'MyCardName',
 * })
 * // => 'trello://x-callback-url/createCard?shortlink=81QRDHnt&name=MyCardName'
 * @example
 * createCard({
 *   id: '526e7338ffa7dfb94d0084a6',
 *   name: 'MyCardName',
 *   description: 'MyCardDescription',
 * })
 * // => 'trello://x-callback-url/createCard?id=526e7338ffa7dfb94d0084a6&name=MyCardName&description=MyCardDescription'
 * @link https://support.atlassian.com/trello/docs/automate-with-url-scheme/
 */
export function createCard(payload: CreateCard) {
  const { id, shortlink, name, description, listId, usePasteboard, xSuccess, xError } = payload
  const params = qs({
    ...(id ? { id } : {}),
    ...(shortlink ? { shortlink } : {}),
    name,
    ...(description ? { description } : {}),
    ...(listId ? { 'list-id': listId } : {}),
    ...(usePasteboard ? { 'use-pasteboard': usePasteboard } : {}),
    ...(xSuccess ? { 'x-success': xSuccess } : {}),
    ...(xError ? { 'x-error': xError } : {}),
  })

  return `trello://x-callback-url/createCard${params}`
}
