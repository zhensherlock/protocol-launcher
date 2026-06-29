import { keepItLink } from './shared'

/**
 * Keep It item link payload definition.
 */
export type OpenItemPayload = {
  /**
   * The unique identifier of the item.
   */
  item: string
}

/**
 * Open an item in Keep It.
 *
 * @param payload Keep It item link payload.
 * @returns Keep It item link URL.
 * @example
 * openItem({ item: 'C96F26E6-A566-457E-A448-5B0F527714DE' })
 * // => 'keepit://link?item=C96F26E6-A566-457E-A448-5B0F527714DE'
 * @link https://reinventedsoftware.com/keepit/urlsupport.html#itemlink
 */
export function openItem(payload: OpenItemPayload) {
  const { item } = payload

  return keepItLink({ item })
}
