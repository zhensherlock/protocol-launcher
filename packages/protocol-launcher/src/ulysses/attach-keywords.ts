import { qs } from '@protocol-launcher/shared'

/**
 * Attach keywords payload definition.
 */
type AttachKeywords = {
  /**
   * The identifier of the sheet the keywords should be attached to.
   *
   * @example 'H8zLAmc1I0njH-0Ql-3YGQ'
   */
  id: string
  /**
   * A comma separated list of keywords that should be attached to the sheet.
   *
   * @example 'Draft,Important'
   */
  keywords: string
}

/**
 * Adds one or more keywords to a sheet in Ulysses.
 *
 * Available on iOS since Ulysses 2.6 (API version 1), on Mac since Ulysses 2.8 (API version 2).
 *
 * @param payload Attach keywords definition.
 * @returns Ulysses attach-keywords URL.
 * @example
 * attachKeywords({ id: 'H8zLAmc1I0njH-0Ql-3YGQ', keywords: 'Draft,Important' })
 * // => 'ulysses://x-callback-url/attach-keywords?id=H8zLAmc1I0njH-0Ql-3YGQ&keywords=Draft%2CImportant'
 * @link https://refined-github-html-preview.kidonng.workers.dev/softwarehistorysociety/UlyssesX-Callback-URL/raw/main/x-callback.html#attach-keywords
 */
export function attachKeywords(payload: AttachKeywords) {
  const { id, keywords } = payload
  const params = qs({
    id,
    keywords,
  })

  return `ulysses://x-callback-url/attach-keywords${params}`
}
