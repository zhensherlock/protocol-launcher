import { qs } from '@protocol-launcher/shared'

/**
 * Get task ID payload definition.
 */
type GetTaskID = {
  /**
   * Known task's title.
   */
  task: string
  /**
   * Containing list name.
   */
  forList: string
  /**
   * Whether to save UID in clipboard.
   * 0 = no, 1 = yes
   *
   * @default 0
   */
  saveInClipboard?: 0 | 1
}

/**
 * Get a task's internally used unique identifier in 2Do.
 *
 * @param payload Get task ID payload.
 * @returns 2Do get task ID URL.
 * @example
 * getTaskID({ task: 'My Task', forList: 'Work' })
 * // => 'twodo://x-callback-url/getTaskID?task=My%20Task&forList=Work'
 * @example
 * getTaskID({ task: 'My Task', forList: 'Work', saveInClipboard: 1 })
 * // => 'twodo://x-callback-url/getTaskID?task=My%20Task&forList=Work&saveInClipboard=1'
 * @link https://www.2doapp.com/kb/article/url-schemes.html
 */
export function getTaskID(payload: GetTaskID) {
  const { task, forList, saveInClipboard } = payload
  const params = qs({
    task,
    forList,
    ...(saveInClipboard !== undefined ? { saveInClipboard } : {}),
  })

  return `twodo://x-callback-url/getTaskID${params}`
}
