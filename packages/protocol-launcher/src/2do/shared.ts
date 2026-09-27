import { qs } from '@protocol-launcher/shared'

export type TwoDoCallbacks = {
  xSuccess?: string
  xError?: string
  xCancel?: string
  xSource?: string
}

export function twoDoXCallbackUrl(action: string, params: Record<string, unknown>, callbacks: TwoDoCallbacks) {
  // The current official Mac reference uses lowercase action parameter names.
  const values = Object.fromEntries(Object.entries(params).map(([key, value]) => [key.toLowerCase(), value]))
  return `twodo://x-callback-url/${action}${qs({
    ...values,
    'x-success': callbacks.xSuccess,
    'x-error': callbacks.xError,
    'x-cancel': callbacks.xCancel,
    'x-source': callbacks.xSource,
  })}`
}
