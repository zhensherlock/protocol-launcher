import { qs } from '@protocol-launcher/shared'

export type TextwellAction =
  | 'replace'
  | 'insert'
  | 'add'
  | 'replaceRange'
  | 'pasteReplace'
  | 'pasteInsert'
  | 'pasteAdd'
  | 'pasteReplaceRange'
  | 'executeAction'
  | 'importAction'

/**
 * Textwell general URL options.
 */
export type TextwellGeneralOptions = {
  /**
   * URL scheme Textwell executes after the first URL scheme succeeds.
   */
  xSuccess?: string

  /**
   * Set to true to make Textwell add `textwell-text`, `textwell-loc`, and `textwell-len` to `x-success`.
   */
  extendXSuccess?: boolean
}

/**
 * Textwell paste URL options.
 */
export type TextwellPasteOptions = TextwellGeneralOptions & {
  /**
   * String inserted before the pasting string.
   */
  prefix?: string

  /**
   * String inserted after the pasting string.
   */
  suffix?: string
}

export type TextwellRangePayload = {
  /**
   * Location of the range to be replaced.
   */
  replacingLoc: number

  /**
   * Length of the range to be replaced.
   */
  replacingLen: number

  /**
   * Location of the range to select after replacement.
   */
  selectingLoc: number

  /**
   * Length of the range to select after replacement.
   */
  selectingLen: number
}

export function textwellPasteParams(payload: TextwellPasteOptions = {}) {
  const { prefix, suffix } = payload

  return {
    ...(prefix !== undefined ? { prefix } : {}),
    ...(suffix !== undefined ? { suffix } : {}),
  }
}

export function textwellUrl(
  action: TextwellAction,
  params: Record<string, unknown> = {},
  options: TextwellGeneralOptions = {},
  forceEmptyQuery = false,
) {
  const { xSuccess, extendXSuccess } = options
  const query = qs({
    ...params,
    ...(xSuccess !== undefined ? { 'x-success': xSuccess } : {}),
    ...(extendXSuccess !== undefined ? { extendXSuccess } : {}),
  })

  return `textwell:///${action}${query || (forceEmptyQuery ? '?' : '')}`
}
