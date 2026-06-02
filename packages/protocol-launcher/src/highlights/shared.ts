/**
 * Highlights file payload definition.
 */
export type HighlightsFilePayload = {
  /**
   * Absolute PDF file path.
   *
   * @example '/Users/test.pdf'
   */
  path: string
}

/**
 * Highlights file page payload definition.
 */
export type HighlightsFilePagePayload = HighlightsFilePayload & {
  /**
   * Page number to scroll to after opening the file.
   */
  page: number
}

export function buildHighlightsFileUrl(path: string) {
  return `highlights:/${path}`
}
