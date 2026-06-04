import { backUrlParam, guruUrl } from './shared'
import type { GuruMapsNavigate } from './types'

/**
 * Build a route in Guru Maps and optionally start navigation.
 *
 * @param payload Navigation payload.
 * @returns Guru Maps navigation URL.
 * @example
 * navigate({
 *   start: '52.2297,21.0122',
 *   finish: '52.2397,21.0222',
 *   via: '52.2347,21.0172',
 *   mode: 'bicycle',
 *   startNavigation: true,
 * })
 * // => 'guru://nav?start=52.2297,21.0122&finish=52.2397,21.0222&via=52.2347,21.0172&mode=bicycle&start_navigation=true'
 * @link https://gurumaps.app/docs/manual/guru-api#navigation
 */
export function navigate(payload: GuruMapsNavigate) {
  const { finish, via, start, mode, startNavigation } = payload

  if (start !== undefined) {
    const multipleViaOnly =
      Array.isArray(via) && mode === undefined && startNavigation === undefined && payload.backUrl === undefined

    if (multipleViaOnly) {
      return guruUrl('nav', {
        start,
        via,
        finish,
      })
    }

    return guruUrl('nav', {
      start,
      finish,
      via,
      mode,
      start_navigation: startNavigation,
      ...backUrlParam(payload),
    })
  }

  return guruUrl('nav', {
    finish,
    via,
    mode,
    start_navigation: startNavigation,
    ...backUrlParam(payload),
  })
}
