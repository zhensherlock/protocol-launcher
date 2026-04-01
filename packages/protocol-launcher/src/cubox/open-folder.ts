import { qs } from '@protocol-launcher/shared'

/**
 * Open folder payload definition.
 */
type OpenFolder = {
  /**
   * Folder name.
   *
   * @example 'Reading List'
   */
  name: string
}

/**
 * Open a specific folder in Cubox.
 *
 * @param payload Open folder payload.
 * @returns Cubox folder URL.
 * @example
 * openFolder({ name: 'Reading List' })
 * // => 'cubox://folder?name=Reading%20List'
 * @link https://help.cubox.pro/adv/97a6/
 */
export function openFolder(payload: OpenFolder) {
  const { name } = payload
  const params = qs({ name })

  return `cubox://folder${params}`
}
