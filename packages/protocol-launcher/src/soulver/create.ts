import { qs } from '@protocol-launcher/shared'

/**
 * Create command payload definition.
 */
type Create = {
  /**
   * The expression to evaluate.
   *
   * @example '$3k earnings / 5 people'
   */
  expression?: string
}

/**
 * Create a new document and evaluate an expression in Soulver.
 *
 * @param payload Create command payload.
 * @returns Soulver create URL.
 * @example
 * create({ expression: '$3k earnings / 5 people' })
 * // => 'x-soulver://x-callback-url/create?expression=$3k%20earnings%20%2F%205%20people'
 * @example
 * create({})
 * // => 'x-soulver://x-callback-url/create'
 * @link https://documentation.soulver.app/documentation/integrations/url-schemes
 */
export function create(payload: Create = {}) {
  const { expression } = payload
  const params = qs({
    ...(expression ? { expression } : {}),
  })

  return `x-soulver://x-callback-url/create${params}`
}
