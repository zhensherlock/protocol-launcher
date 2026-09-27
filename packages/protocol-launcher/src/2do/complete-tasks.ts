import { type TwoDoCallbacks, twoDoXCallbackUrl } from './shared'

type CompleteTasks = TwoDoCallbacks & {
  /** Comma-separated task UIDs, or an array of task UIDs. */
  uids: string | readonly [string, ...string[]]
}

/**
 * Complete one or more 2Do tasks on macOS. This action is unavailable on iOS.
 *
 * @param payload Task identifiers.
 * @returns 2Do complete-tasks URL.
 * @example
 * completeTasks({ uids: ['FIRST_UID', 'SECOND_UID'] })
 * // => 'twodo://x-callback-url/completetasks?uids=FIRST_UID%2CSECOND_UID'
 * @link https://www.2doapp.com/docs/macos/url-schemes/
 */
export function completeTasks(payload: CompleteTasks) {
  const uids = typeof payload.uids === 'string' ? payload.uids : payload.uids.join(',')
  return twoDoXCallbackUrl('completetasks', { uids }, payload)
}
