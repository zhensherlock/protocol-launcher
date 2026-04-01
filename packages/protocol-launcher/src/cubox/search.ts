import { qs } from '@protocol-launcher/shared'

/**
 * Search command payload definition.
 */
type Search = {
  /**
   * The search query.
   */
  query?: string
  /**
   * The search type.
   * - 'card': Search cards (default)
   * - 'annot': Search annotations
   * - 'fulltext': Full-text search
   */
  type?: 'card' | 'annot' | 'fulltext'
}

/**
 * Search in Cubox.
 *
 * @param payload Search command payload.
 * @returns Cubox search URL.
 * @example
 * search({ query: 'typescript' })
 * // => 'cubox://search?query=typescript'
 * @example
 * search({ query: 'notes', type: 'annot' })
 * // => 'cubox://search?type=annot&query=notes'
 * @example
 * search({})
 * // => 'cubox://search'
 * @link https://help.cubox.pro/adv/97a6/
 */
export function search(payload: Search = {}) {
  const { query, type } = payload
  const params = qs({
    ...(type ? { type } : {}),
    ...(query ? { query } : {}),
  })

  return `cubox://search${params}`
}
