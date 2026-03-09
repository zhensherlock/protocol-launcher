/**
 * Compare definition.
 */
type Compare = {
  /**
   * Compare label.
   */
  label?: string

  /**
   * Previous file label.
   */
  previousLabel?: string

  /**
   * Previous file path.
   */
  previousPath: string

  /**
   * Latest file label.
   */
  latestLabel?: string

  /**
   * Latest file path.
   */
  latestPath: string
}

/**
 * Compare in Kaleidoscope.
 *
 * @param payload Compare definition.
 * @returns Kaleidoscope compare URL.
 * @example
 * compare({
 *   previousPath: '/Users/dev/Desktop/previous.md',
 *   latestPath: '/Users/dev/Desktop/latest.md',
 * })
 * // => 'kaleidoscope://compare?/Users/dev/Desktop/previous.md&/Users/dev/Desktop/latest.md'
 */
export function compare(payload: Compare) {
  const { label, previousLabel, previousPath, latestLabel, latestPath } = payload
  const query = []
  if (label) {
    query.push(`label=${label}`)
  }
  query.push(`${previousLabel ? `${previousLabel}=` : ''}${previousPath}`)
  query.push(`${latestLabel ? `${latestLabel}=` : ''}${latestPath}`)
  return `kaleidoscope://compare?${query.join('&')}`
}
