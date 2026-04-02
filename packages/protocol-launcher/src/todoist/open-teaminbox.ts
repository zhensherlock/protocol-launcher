/**
 * Open Todoist Team Inbox view (Mobile only, Business accounts).
 * Non-business accounts will be redirected to inbox.
 *
 * @returns Todoist team inbox URL.
 * @example
 * openTeaminbox()
 * // => 'todoist://teaminbox'
 * @link https://developer.todoist.com/api/v1/#tag/Url-schemes
 */
export function openTeaminbox() {
  return 'todoist://teaminbox'
}
