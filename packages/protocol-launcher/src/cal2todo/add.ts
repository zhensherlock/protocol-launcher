import { qs } from '@protocol-launcher/shared'

/**
 * Add command payload definition.
 */
type Add = {
  /**
   * Title of event (required).
   */
  title: string
  /**
   * Notes of event (optional).
   */
  notes?: string
  /**
   * The URL to call for the return when the operation completes successfully (optional).
   */
  xSuccess?: string
  /**
   * The application name to where the calling app returns (optional).
   */
  xSource?: string
  /**
   * The URL to call for the return when the operation canceled (optional).
   */
  xError?: string
}

/**
 * Add a new event to Cal2Todo.
 *
 * @param payload Add command payload.
 * @returns Cal2Todo add URL.
 * @example
 * add({
 *   title: 'ABC',
 *   notes: 'XYZ',
 * })
 * // => 'cal2todo-x-callback://x-callback-url/add?title=ABC&notes=XYZ'
 * @example
 * add({
 *   title: 'Meeting',
 *   xSuccess: 'srcapp://ok',
 *   xSource: 'srcapp',
 *   xError: 'srcapp://cancel',
 * })
 * // => 'cal2todo-x-callback://x-callback-url/add?title=Meeting&x-success=srcapp%3A%2F%2Fok&x-source=srcapp&x-error=srcapp%3A%2F%2Fcancel'
 * @link http://yaas4home.blog.fc2.com/blog-entry-344.html
 */
export function add(payload: Add) {
  const { title, notes, xSuccess, xSource, xError } = payload
  const params = qs({
    ...(xSuccess ? { 'x-success': xSuccess } : {}),
    ...(xSource ? { 'x-source': xSource } : {}),
    ...(xError ? { 'x-error': xError } : {}),
    title,
    ...(notes ? { notes } : {}),
  })

  return `cal2todo-x-callback://x-callback-url/add${params}`
}
