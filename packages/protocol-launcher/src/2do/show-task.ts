import { type TwoDoCallbacks, twoDoXCallbackUrl } from './shared'

type ShowTask = TwoDoCallbacks & {
  /** Task UID. */
  uid: string
}

/**
 * Open a 2Do task by UID.
 *
 * @param payload Task identifier.
 * @returns 2Do show-task URL.
 * @example
 * showTask({ uid: 'TASK_UID' })
 * // => 'twodo://x-callback-url/showtask?uid=TASK_UID'
 * @link https://www.2doapp.com/docs/macos/url-schemes/
 */
export function showTask(payload: ShowTask) {
  return twoDoXCallbackUrl('showtask', { uid: payload.uid }, payload)
}
