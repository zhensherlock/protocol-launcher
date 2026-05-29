import { encodePathSegment, lineR } from './shared'

export type OpenSticker = {
  /**
   * Sticker package ID.
   */
  packageId: string | number
}

export type OpenStickerCategoryRanking = {
  /**
   * Official sticker category ID.
   */
  categoryId: string | number
}

export type OpenStickerAuthor = {
  /**
   * Sticker author ID.
   */
  authorId: string | number
}

/**
 * Open a sticker set info screen.
 *
 * @param payload Sticker package ID payload.
 * @returns LINE sticker set URL.
 * @example
 * openSticker({ packageId: 11537 })
 * // => 'https://line.me/R/shop/sticker/detail/11537'
 * @link https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#opening-the-sticker-shop
 */
export function openSticker(payload: OpenSticker) {
  return lineR(`/shop/sticker/detail/${encodePathSegment(payload.packageId)}`)
}

/**
 * Open a popularity ranking for the given official sticker category.
 *
 * @param payload Official sticker category ID payload.
 * @returns LINE sticker category ranking URL.
 * @example
 * openStickerCategoryRanking({ categoryId: 21 })
 * // => 'https://line.me/R/shop/category/21'
 * @link https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#opening-the-sticker-shop
 */
export function openStickerCategoryRanking(payload: OpenStickerCategoryRanking) {
  return lineR(`/shop/category/${encodePathSegment(payload.categoryId)}`)
}

/**
 * Open a list of sticker sets from an author.
 *
 * @param payload Sticker author ID payload.
 * @returns LINE sticker author URL.
 * @example
 * openStickerAuthor({ authorId: 12345 })
 * // => 'https://line.me/R/shop/sticker/author/12345'
 * @link https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#opening-the-sticker-shop
 */
export function openStickerAuthor(payload: OpenStickerAuthor) {
  return lineR(`/shop/sticker/author/${encodePathSegment(payload.authorId)}`)
}

/**
 * Open Sticker Shop > HOME tab.
 *
 * @returns LINE Sticker Shop HOME URL.
 * @example
 * openStickerShop()
 * // => 'https://line.me/R/nv/stickerShop'
 * @link https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#opening-the-sticker-shop
 */
export function openStickerShop() {
  return lineR('/nv/stickerShop')
}

/**
 * Open Sticker Shop > RANK tab.
 *
 * @returns LINE Sticker Shop RANK URL.
 * @example
 * openStickerShopRank()
 * // => 'https://line.me/R/shop/sticker/hot'
 * @link https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#opening-the-sticker-shop
 */
export function openStickerShopRank() {
  return lineR('/shop/sticker/hot')
}

/**
 * Open Sticker Shop > NEW tab.
 *
 * @returns LINE Sticker Shop NEW URL.
 * @example
 * openStickerShopNew()
 * // => 'https://line.me/R/shop/sticker/new'
 * @link https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#opening-the-sticker-shop
 */
export function openStickerShopNew() {
  return lineR('/shop/sticker/new')
}

/**
 * Open Sticker Shop > FREE tab.
 *
 * @returns LINE Sticker Shop FREE URL.
 * @example
 * openStickerShopFree()
 * // => 'https://line.me/R/shop/sticker/event'
 * @link https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#opening-the-sticker-shop
 */
export function openStickerShopFree() {
  return lineR('/shop/sticker/event')
}

/**
 * Open Sticker Shop > CATEGORIES tab.
 *
 * @returns LINE Sticker Shop CATEGORIES URL.
 * @example
 * openStickerShopCategories()
 * // => 'https://line.me/R/shop/sticker/category'
 * @link https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#opening-the-sticker-shop
 */
export function openStickerShopCategories() {
  return lineR('/shop/sticker/category')
}
