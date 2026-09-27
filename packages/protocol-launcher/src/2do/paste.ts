import { type TwoDoCallbacks, twoDoXCallbackUrl } from './shared'

/**
 * Paste payload definition.
 */
type Paste = TwoDoCallbacks & {
  /**
   * The text to paste and convert into tasks.
   * Multiple lines separated by a carriage return will create a task for each line.
   */
  text: string
  /**
   * Title of the Parent project task to add tasks to.
   */
  inProject?: string
  /**
   * The list to add to. If inProject is used, this field must also be set.
   */
  forList?: string
}

/**
 * Paste text to convert into tasks in 2Do.
 *
 * @param payload Paste payload.
 * @returns 2Do paste URL.
 * @example
 * paste({ text: 'Task 1\nTask 2\nTask 3' })
 * // => 'twodo://x-callback-url/paste?text=Task%201%0ATask%202%0ATask%203'
 * @example
 * paste({ text: 'Buy milk', forList: 'Shopping' })
 * // => 'twodo://x-callback-url/paste?text=Buy%20milk&forlist=Shopping'
 * @link https://www.2doapp.com/docs/macos/url-schemes/
 */
export function paste(payload: Paste) {
  const { text, inProject, forList } = payload
  const params = {
    text,
    ...(inProject !== undefined ? { inProject } : {}),
    ...(forList !== undefined ? { forList } : {}),
  }

  return twoDoXCallbackUrl('paste', params, payload)
}
