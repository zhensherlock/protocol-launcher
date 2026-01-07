export interface EncodeOptions {
  useSafeEncoding?: boolean
}

export function isUndefined(value: unknown): value is undefined {
  return value === undefined
}

function safeBase64Encode(str: string): string {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_, h) => String.fromCharCode(parseInt(h, 16))))
}

export function encodeUrlPayload(payload: unknown, options: EncodeOptions = {}) {
  const { useSafeEncoding = false } = options
  const json = JSON.stringify(payload)

  let base64
  if (useSafeEncoding) {
    base64 = safeBase64Encode(json)
  } else {
    try {
      base64 = btoa(json)
    } catch {
      base64 = safeBase64Encode(json)
    }
  }

  return encodeURIComponent(base64)
}
