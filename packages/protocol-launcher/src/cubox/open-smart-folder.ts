import { qs } from '@protocol-launcher/shared'

/**
 * Open smart folder payload definition.
 */
type OpenSmartFolder = {
  /**
   * Smart folder name.
   *
   * @example 'Recent Articles'
   */
  name: string
}

/**
 * Open a specific smart folder in Cubox.
 *
 * @param payload Open smart folder payload.
 * @returns Cubox smart folder URL.
 * @example
 * openSmartFolder({ name: 'Recent Articles' })
 * // => 'cubox://smartfolder?name=Recent%20Articles'
 * @link https://help.cubox.pro/adv/97a6/
 */
export function openSmartFolder(payload: OpenSmartFolder) {
  const { name } = payload
  const params = qs({ name })

  return `cubox://smartfolder${params}`
}
