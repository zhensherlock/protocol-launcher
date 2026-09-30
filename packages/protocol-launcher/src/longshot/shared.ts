import { qs } from '@protocol-launcher/shared'

export type LongshotCommandPayload = {
  func: string
  /** Result destination. The current examples use clipboard. */
  channel?: 'clipboard'
  /** Return a callback URL rather than the plain command. Also inferred from callback options. */
  xCallback?: boolean
  xSource?: string
  xSuccess?: string
  xError?: string
}

export function longshotCommandUrl(
  action: 'snip' | 'record' | 'ocr',
  payload: LongshotCommandPayload,
  type: 'data' | 'filepath' | 'string',
) {
  const { func, channel, xCallback, xSource, xSuccess, xError } = payload
  const callback =
    xCallback || channel !== undefined || xSource !== undefined || xSuccess !== undefined || xError !== undefined
  return `longshot://${callback ? 'x-callback-url/' : ''}${action}${qs({
    func,
    channel: callback ? (channel ?? 'clipboard') : undefined,
    type: callback ? type : undefined,
    'x-source': xSource,
    'x-success': xSuccess,
    'x-error': xError,
  })}`
}
