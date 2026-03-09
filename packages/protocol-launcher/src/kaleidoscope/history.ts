/**
 * History definition.
 */
type History = {
  /**
   * History label.
   */
  label?: string

  /**
   * File path.
   */
  filePath?: string
}

/**
 * History in Kaleidoscope.
 *
 * @param payload History definition.
 * @returns Kaleidoscope history URL.
 * @example
 * history({
 *   label: 'History',
 *   filePath: '/Users/dev/protocol-launcher/packages/protocol-launcher/src/kaleidoscope/history.ts',
 * })
 * // => 'kaleidoscope://history?/Users/dev/protocol-launcher/packages/protocol-launcher/src/kaleidoscope/history.ts?label=History'
 */
export function history(payload: History) {
  const { label, filePath } = payload
  const query = []
  if (label) {
    query.push(`label=${label}`)
  }
  return `kaleidoscope://history?${filePath}${query.length ? `&${query.join('&')}` : ''}`
}
