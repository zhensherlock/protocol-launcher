import { qs } from '@protocol-launcher/shared'

export type LetterboxdSearchType = 'film' | 'member' | 'list' | 'review' | 'contributor' | 'all'

export type LetterboxdRating = 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5

export interface LetterboxdXCallbackPayload {
  /**
   * URL to open when the requested action is completed.
   */
  xSuccess?: string

  /**
   * URL to open when the requested action is cancelled by the user.
   */
  xCancel?: string

  /**
   * URL to open when the requested action generates an error or fails to complete.
   */
  xError?: string
}

const parameterNames: Record<string, string> = {
  xCancel: 'x-cancel',
  xError: 'x-error',
  xSuccess: 'x-success',
}

export function letterboxdUrl(action: string, params: Record<string, unknown> = {}) {
  const queryParams: Record<string, unknown> = {}

  for (const [key, value] of Object.entries(params)) {
    queryParams[parameterNames[key] ?? key] = value
  }

  return `letterboxd://x-callback-url/${action}${qs(queryParams)}`
}
