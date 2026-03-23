import { qs } from '@protocol-launcher/shared'

/**
 * Open file payload definition.
 */
type OpenFile = {
  /**
   * Path to the Sketch file.
   *
   * @example '/Users/name/Documents/design.sketch'
   */
  path: string
  /**
   * Center on a specific layer ID.
   *
   * @example 'layer-123'
   */
  centerOnLayer?: string
  /**
   * Zoom level (1 = actual size, 0-1 to zoom out, >1 to zoom in).
   *
   * @example 2
   */
  zoom?: number
}

/**
 * Open a Sketch file with optional layer focus and zoom level.
 *
 * @param payload Open file definition.
 * @returns Sketch open file URL.
 * @example
 * openFile({
 *   path: '/Users/name/Documents/design.sketch',
 * })
 * // => 'sketch:///Users/name/Documents/design.sketch'
 * @example
 * openFile({
 *   path: '/Users/name/Documents/design.sketch',
 *   centerOnLayer: 'layer-123',
 *   zoom: 2,
 * })
 * // => 'sketch:///Users/name/Documents/design.sketch?centerOnLayer=layer-123&zoom=2'
 * @link https://developer.sketch.com/app
 */
export function openFile(payload: OpenFile) {
  const { path, centerOnLayer, zoom } = payload
  const params = qs({
    ...(centerOnLayer ? { centerOnLayer } : {}),
    ...(zoom !== undefined ? { zoom } : {}),
  })

  return `sketch://${path}${params}`
}
