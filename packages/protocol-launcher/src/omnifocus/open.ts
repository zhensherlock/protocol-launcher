/**
 * Open OmniFocus.
 *
 * @returns OmniFocus open URL.
 * @example
 * open()
 * // => 'omnifocus://'
 * @link https://inside.omnifocus.com/url-schemes
 */
export function open() {
  return 'omnifocus://'
}

/**
 * Open an OmniFocus task by id.
 *
 * @param payload Task payload.
 * @returns OmniFocus task URL.
 * @example
 * openTask({ id: 'mbp0SlWkvqq' })
 * // => 'omnifocus:///task/mbp0SlWkvqq'
 * @link https://inside.omnifocus.com/url-schemes
 */
export function openTask(payload: { id: string }) {
  const { id } = payload

  return `omnifocus:///task/${encodeURIComponent(id)}`
}
