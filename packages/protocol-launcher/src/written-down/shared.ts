function encodeWrittenDownValue(value: unknown) {
  return encodeURIComponent(String(value)).replace(/'/g, '%27').replace(/%2C/gi, ',').replace(/%3A/gi, ':')
}

function writtenDownQs(params: Record<string, unknown>) {
  const query = Object.entries(params)
    .flatMap(([key, value]) => {
      if (value === undefined || value === null) return []
      return `${key}=${encodeWrittenDownValue(value)}`
    })
    .join('&')

  return query ? `?${query}` : ''
}

export function writtenDownXCallbackUrl(action: string, params: Record<string, unknown> = {}) {
  return `writtendown://x-callback-url/${action}${writtenDownQs(params)}`
}
