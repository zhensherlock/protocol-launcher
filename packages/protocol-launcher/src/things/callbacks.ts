/** Optional callbacks accepted by the app's documented commands. */
export type Callbacks = {
  xSuccess?: string
  xError?: string
  xCancel?: string
  xSource?: string
}

export function callbackParams(payload: Callbacks) {
  return {
    'x-success': payload.xSuccess,
    'x-error': payload.xError,
    'x-cancel': payload.xCancel,
    'x-source': payload.xSource,
  }
}

export function hasCallbacks(payload: Callbacks) {
  return (
    payload.xSuccess !== undefined ||
    payload.xError !== undefined ||
    payload.xCancel !== undefined ||
    payload.xSource !== undefined
  )
}
