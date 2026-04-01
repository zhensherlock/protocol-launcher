import { qs } from '@protocol-launcher/shared'

/**
 * Search in dict.cc payload definition.
 */
type Search = {
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
  /**
   * Use dict.cc plus version.
   *
   * @default false
   */
  plus?: boolean
}

/**
 * Search in dict.cc.
 *
 * @param payload Search payload.
 * @returns dict.cc search URL.
 * @example
 * search({ word: 'hello' })
 * // => 'dictcc://?word=hello'
 * @example
 * search({ word: 'hello', languagePair: 'de-en' })
 * // => 'dictcc://?word=hello&language-pair=de-en'
 * @example
 * search({ word: 'hello', languagePair: 'de-en', newSearch: true })
 * // => 'dictcc://?word=hello&language-pair=de-en&newsearch=1'
 * @example
 * search({ word: 'hello', plus: true })
 * // => 'dictccplus://?word=hello'
 * @link https://www.dict.cc/iphone.php
 */
export function search(payload: Search = {}) {
  const { plus = false, word, languagePair, newSearch } = payload
  const scheme = plus ? 'dictccplus' : 'dictcc'
  const params = qs({
    ...(word ? { word } : {}),
    ...(languagePair ? { 'language-pair': languagePair } : {}),
    ...(newSearch ? { newsearch: '1' } : {}),
  })

  return `${scheme}://${params}`
}
