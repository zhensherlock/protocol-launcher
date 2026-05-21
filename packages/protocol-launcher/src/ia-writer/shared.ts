import { qs } from '@protocol-launcher/shared'

export type IAWriterXCallback = {
  /**
   * x-callback-url success URL.
   */
  xSuccess?: string
}

export function iaWriterUrl(command: string, params: Record<string, unknown>, xSuccess?: string) {
  const query = qs({
    ...params,
    ...(xSuccess !== undefined ? { 'x-success': xSuccess } : {}),
  })
  const base = xSuccess !== undefined ? `ia-writer://x-callback-url/${command}` : `ia-writer://${command}`

  return `${base}${query}`
}
