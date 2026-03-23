import { qs } from '@protocol-launcher/shared'

/**
 * Append line command payload definition.
 */
type AppendLine = {
  /**
   * The sheet identifier.
   *
   * @example '3BBFDEB9-E705-4AC1-846D-433446BA0C60'
   */
  id: string
  /**
   * The expression to append.
   *
   * @example '$500 in EUR'
   */
  expression: string
}

/**
 * Append an expression to a specific sheet in Soulver.
 *
 * @param payload Append line command payload.
 * @returns Soulver append line URL.
 * @example
 * appendLine({ id: '3BBFDEB9-E705-4AC1-846D-433446BA0C60', expression: '$500 in EUR' })
 * // => 'x-soulver://x-callback-url/append-line?id=3BBFDEB9-E705-4AC1-846D-433446BA0C60&expression=$500%20in%20EUR'
 * @link https://documentation.soulver.app/documentation/integrations/url-schemes
 */
export function appendLine(payload: AppendLine) {
  const { id, expression } = payload
  const params = qs({ id, expression })

  return `x-soulver://x-callback-url/append-line${params}`
}
