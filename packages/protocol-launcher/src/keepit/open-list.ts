import { keepItLink } from './shared'

/**
 * Keep It list link payload definition.
 */
export type OpenListPayload = {
  /**
   * The unique identifier of the list.
   */
  list: string
}

/**
 * Open a list in Keep It.
 *
 * @param payload Keep It list link payload.
 * @returns Keep It list link URL.
 * @example
 * openList({ list: 'AllItems' })
 * // => 'keepit://link?list=AllItems'
 * @link https://reinventedsoftware.com/keepit/urlsupport.html#listlink
 */
export function openList(payload: OpenListPayload) {
  const { list } = payload

  return keepItLink({ list })
}
