import { qs } from '@protocol-launcher/shared'

/**
 * Import flashcards payload definition.
 */
type ImportFlashcards = {
  /**
   * URL to the flashcard list file (.txt or .xml format, UTF-8 encoded).
   *
   * @example 'https://example.com/flashcards.txt'
   */
  u: string

  /**
   * The name of your app or website for display in Pleco's return button.
   *
   * @example 'MyApp'
   */
  xSource?: string

  /**
   * A URL that Pleco should call when the import succeeds.
   *
   * @example 'myapp://success'
   */
  xSuccess?: string

  /**
   * A URL that Pleco should call when the import fails.
   *
   * @example 'myapp://error'
   */
  xError?: string

  /**
   * A URL that Pleco should call when the user cancels the import.
   *
   * @example 'myapp://cancel'
   */
  xCancel?: string
}

/**
 * Import a flashcard list in Pleco using x-callback-url standard.
 *
 * @param payload Import flashcards payload.
 * @returns Pleco import flashcards URL.
 * @example
 * importFlashcards({ u: 'https://example.com/flashcards.txt' })
 * // => 'plecoapi://x-callback-url/fl?u=https%3A%2F%2Fexample.com%2Fflashcards.txt'
 * @example
 * importFlashcards({
 *   u: 'https://example.com/flashcards.xml',
 *   xSource: 'MyApp',
 *   xSuccess: 'myapp://success',
 * })
 * // => 'plecoapi://x-callback-url/fl?u=https%3A%2F%2Fexample.com%2Fflashcards.xml&x-source=MyApp&x-success=myapp%3A%2F%2Fsuccess'
 * @link https://iphone.pleco.com/manual/30200/vershist.html
 */
export function importFlashcards(payload: ImportFlashcards) {
  const { u, xSource, xSuccess, xError, xCancel } = payload
  const params = qs({
    u,
    ...(xSource ? { 'x-source': xSource } : {}),
    ...(xSuccess ? { 'x-success': xSuccess } : {}),
    ...(xError ? { 'x-error': xError } : {}),
    ...(xCancel ? { 'x-cancel': xCancel } : {}),
  })

  return `plecoapi://x-callback-url/fl${params}`
}
