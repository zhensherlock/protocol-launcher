export interface EncodeOptions {
  useSafeEncoding?: boolean
  encodeForUrl?: boolean
}

export function isUndefined(value: unknown): value is undefined {
  return value === undefined
}

function encodeIfNeeded(str: string, encodeForUrl: boolean) {
  return encodeForUrl ? encodeURIComponent(str) : str
}

function safeBase64Encode(str: string, encodeForUrl: boolean): string {
  return btoa(
    encodeIfNeeded(str, encodeForUrl).replace(/%([0-9A-F]{2})/g, (_, h) => String.fromCharCode(parseInt(h, 16))),
  )
}

export function encodeUrlPayload(payload: unknown, options: EncodeOptions = {}) {
  const { useSafeEncoding = false, encodeForUrl = true } = options
  const content = typeof payload === 'string' ? payload : JSON.stringify(payload)

  let base64
  if (useSafeEncoding) {
    base64 = safeBase64Encode(content, encodeForUrl)
  } else {
    try {
      base64 = btoa(content)
    } catch {
      base64 = safeBase64Encode(content, encodeForUrl)
    }
  }

  return encodeIfNeeded(base64, encodeForUrl)
}
