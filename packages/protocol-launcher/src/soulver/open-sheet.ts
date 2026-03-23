import { qs } from '@protocol-launcher/shared'

/**
 * Open sheet command payload definition.
 */
type OpenSheet = {
  /**
   * The sheet identifier.
   *
   * @example '3BBFDEB9-E705-4AC1-846D-433446BA0C60'
   */
  id: string
}

/**
 * Open a specific sheet in Soulver.
 *
 * @param payload Open sheet command payload.
 * @returns Soulver open sheet URL.
 * @example
 * openSheet({ id: '3BBFDEB9-E705-4AC1-846D-433446BA0C60' })
 * // => 'x-soulver://x-callback-url/open?id=3BBFDEB9-E705-4AC1-846D-433446BA0C60'
 * @link https://documentation.soulver.app/documentation/integrations/url-schemes
 */
export function openSheet(payload: OpenSheet) {
  const { id } = payload
  const params = qs({ id })

  return `x-soulver://x-callback-url/open${params}`
}
