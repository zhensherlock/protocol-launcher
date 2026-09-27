/** Optional callbacks accepted by the app's documented commands. */
export type Callbacks = {
  xSuccess?: string
  xError?: string
}

export function callbackParams(payload: Callbacks) {
  return {
    'x-success': payload.xSuccess,
    'x-error': payload.xError,
  }
}
