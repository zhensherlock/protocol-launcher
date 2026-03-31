import { qs } from '@protocol-launcher/shared'

/**
 * Scan command payload definition.
 */
type Scan = {
  /**
   * Name of a scan destination defined in the app, or one of the default options.
   *
   * @example 'email'
   * @example 'messages'
   * @example 'file'
   * @example 'share'
   */
  destination?: string
  /**
   * The output format.
   *
   * @example 'pdf'
   * @example 'images'
   */
  format?: string
  /**
   * The output quality.
   *
   * @example 'original'
   * @example 'large'
   * @example 'medium'
   * @example 'small'
   */
  quality?: string
}

/**
 * Open Simple Scan directly to scanning.
 *
 * @param payload Scan command payload.
 * @returns Simple Scan scan URL.
 * @example
 * scan({ destination: 'email', format: 'pdf' })
 * // => 'simple-scan://scan?destination=email&format=pdf'
 * @example
 * scan({})
 * // => 'simple-scan://scan'
 * @link https://agiletortoise.com/simple-scan/automation
 */
export function scan(payload: Scan = {}) {
  const { destination, format, quality } = payload
  const params = qs({
    ...(destination ? { destination } : {}),
    ...(format ? { format } : {}),
    ...(quality ? { quality } : {}),
  })

  return `simple-scan://scan${params}`
}
