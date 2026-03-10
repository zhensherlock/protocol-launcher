/**
 * Clipboard definition.
 */
type Clipboard = {
  /**
   * Clipboard label.
   */
  label?: string
}

/**
 * Clipboard in Kaleidoscope.
 *
 * @param payload Clipboard definition.
 * @returns Kaleidoscope clipboard URL.
 * @example
 * clipboard({
 *   label: 'Clipboard',
 * })
 * // => 'kaleidoscope://clipboard?label=Clipboard'
 */
export function clipboard(payload: Clipboard = {}) {
  const { label } = payload
  const query = []
  if (label) {
    query.push(`label=${label}`)
  }
  return `kaleidoscope://clipboard${query.length ? `?${query.join('&')}` : ''}`
}
