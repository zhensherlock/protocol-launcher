import { qs } from '@protocol-launcher/shared'

/**
 * iThoughts import format.
 */
export type IThoughtsFormat = 'md' | 'text'

/**
 * iThoughts amend-map edit flag.
 */
export type IThoughtsEdit = 'YES' | 'NO'

export type IThoughtsContentPayload = {
  /**
   * Text to convert. Use `[[clipboard]]` to ask iThoughts to use the clipboard contents.
   */
  text?: string
  /**
   * Text appended to the notes field of the first topic created by the call.
   */
  note?: string
  /**
   * Text appended to the link field of the first topic created by the call.
   */
  link?: string
  /**
   * Input format. iThoughts attempts to auto-detect the format when omitted.
   */
  format?: IThoughtsFormat
}

export function ithoughtsUrl(action: 'makeMap' | 'amendMap', params: Record<string, unknown>) {
  return `ithoughts://x-callback-url/${action}${qs(params)}`
}
