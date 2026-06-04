import type { GuruMapsBackUrlOptions } from './types'

export function guruUrl(action = '', params: Record<string, unknown> = {}) {
  const query = guruQuery(params)

  return `guru://${action}${query}`
}

export function backUrlParam(payload: GuruMapsBackUrlOptions) {
  return {
    ...(payload.backUrl !== undefined ? { back_url: payload.backUrl } : {}),
  }
}

export function guruQuery(params: Record<string, unknown>) {
  const query = Object.entries(params)
    .flatMap(([key, value]) => {
      if (value === undefined || value === null) return []
      if (Array.isArray(value)) {
        return value.map(item => `${key}=${guruEncode(String(item))}`)
      }
      return `${key}=${guruEncode(String(value))}`
    })
    .join('&')

  return query ? `?${query}` : ''
}

function guruEncode(value: string) {
  return encodeURIComponent(value).replace(/%2C/g, ',').replace(/%3A/g, ':').replace(/%2F/g, '/')
}
