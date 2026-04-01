import { qs } from '@protocol-launcher/shared'

/**
 * Open dict.cc app payload definition.
 */
type Open = {
  /**
   * Open dict.cc plus version.
   *
   * @default false
   */
  plus?: boolean
  /**
   * The word to search.
   */
  word?: string
  /**
   * The language pair (source-target).
   *
   * @example 'de-en'
   * @example 'en-de'
   */
  languagePair?: string
  /**
   * Force a new search.
   */
  newSearch?: boolean
}

/**
 * Open dict.cc app.
 *
 * @param payload Open dict.cc app payload.
 * @returns dict.cc open URL.
 * @example
 * open()
 * // => 'dictcc://'
 * @example
 * open({ plus: true })
 * // => 'dictccplus://'
 * @example
 * open({ word: 'hello' })
 * // => 'dictcc://?word=hello'
 * @example
 * open({ word: 'hello', languagePair: 'de-en' })
 * // => 'dictcc://?word=hello&language-pair=de-en'
 * @example
 * open({ word: 'hello', languagePair: 'de-en', newSearch: true })
 * // => 'dictcc://?word=hello&language-pair=de-en&newsearch=1'
 * @link https://www.dict.cc/iphone.php
 */
export function open(payload: Open = {}) {
  const { plus = false, word, languagePair, newSearch } = payload
  const scheme = plus ? 'dictccplus' : 'dictcc'
  const params = qs({
    ...(word ? { word } : {}),
    ...(languagePair ? { 'language-pair': languagePair } : {}),
    ...(newSearch ? { newsearch: '1' } : {}),
  })

  return `${scheme}://${params}`
}
