import { backUrlParam, guruQuery } from './shared'
import type { GuruMapsOpen } from './types'

/**
 * Open Guru Maps without interrupting any ongoing action.
 *
 * @param payload Open payload.
 * @returns Guru Maps launch URL.
 * @example
 * open()
 * // => 'guru:'
 * @example
 * open({ backUrl: 'https://gurumaps.app' })
 * // => 'guru:?back_url=https://gurumaps.app'
 * @link https://gurumaps.app/docs/manual/guru-api#open-guru-maps
 */
export function open(payload: GuruMapsOpen = {}) {
  return `guru:${guruQuery(backUrlParam(payload))}`
}
