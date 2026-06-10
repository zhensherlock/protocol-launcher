import { qs } from '@protocol-launcher/shared'

export type ShowThreeWordsPayload = {
  /**
   * A 3 word address in the documented `word.word.word` form.
   *
   * @example 'daring.lion.race'
   */
  threeWords: string
}

/**
 * Navigate to a 3 word address in the what3words app.
 *
 * @param payload what3words address payload.
 * @returns what3words address URL.
 * @example
 * showThreeWords({ threeWords: 'daring.lion.race' })
 * // => 'w3w://show?threewords=daring.lion.race'
 * @link https://developer.what3words.com/tutorial/mobile-linking-to-the-what3words-app
 */
export function showThreeWords(payload: ShowThreeWordsPayload) {
  const { threeWords } = payload

  return `w3w://show${qs({ threewords: threeWords })}`
}
