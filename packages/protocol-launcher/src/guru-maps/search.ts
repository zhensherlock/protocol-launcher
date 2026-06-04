import { backUrlParam, guruUrl } from './shared'
import type { GuruMapsSearch } from './types'

/**
 * Search in Guru Maps.
 *
 * @param payload Search payload.
 * @returns Guru Maps search URL.
 * @example
 * search({ q: 'Agrykola 1 Warszawa' })
 * // => 'guru://search?q=Agrykola%201%20Warszawa'
 * @link https://gurumaps.app/docs/manual/guru-api#search
 */
export function search(payload: GuruMapsSearch) {
  const { q, coord } = payload

  return guruUrl('search', {
    q,
    coord,
    ...backUrlParam(payload),
  })
}
