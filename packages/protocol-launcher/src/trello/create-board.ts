import { qs } from '@protocol-launcher/shared'

/**
 * Create board command payload definition.
 */
type CreateBoard = {
  /**
   * Name for the board.
   */
  name: string
  /**
   * Name of the organization in which to create the board.
   */
  organization?: string
  /**
   * Permission level to set (private/public/organization).
   * @default 'private'
   */
  permission?: 'private' | 'public' | 'organization'
  /**
   * URL to call on success. The board id and shortlink are returned as parameters.
   */
  xSuccess?: string
  /**
   * URL to call on error. Error code and message are returned as parameters.
   */
  xError?: string
}

/**
 * Creates a new board.
 *
 * @param payload Create board command payload.
 * @returns Trello create board URL.
 * @example
 * createBoard({
 *   name: 'My New Board',
 * })
 * // => 'trello://x-callback-url/createBoard?name=My%20New%20Board'
 * @example
 * createBoard({
 *   name: 'My New Board',
 *   permission: 'public',
 *   xSuccess: 'myapp://success',
 *   xError: 'myapp://failure',
 * })
 * // => 'trello://x-callback-url/createBoard?name=My%20New%20Board&permission=public&x-success=myapp%3A%2F%2Fsuccess&x-error=myapp%3A%2F%2Ffailure'
 * @link https://support.atlassian.com/trello/docs/automate-with-url-scheme/
 */
export function createBoard(payload: CreateBoard) {
  const { name, organization, permission, xSuccess, xError } = payload
  const params = qs({
    name,
    ...(organization ? { organization } : {}),
    ...(permission ? { permission } : {}),
    ...(xSuccess ? { 'x-success': xSuccess } : {}),
    ...(xError ? { 'x-error': xError } : {}),
  })

  return `trello://x-callback-url/createBoard${params}`
}
