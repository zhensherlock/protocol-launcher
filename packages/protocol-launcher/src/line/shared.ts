import { qs } from '@protocol-launcher/shared'

const LINE_R_BASE = 'https://line.me/R'

export type LineQuery = Record<string, unknown>

export type LineIdPayload = {
  /**
   * LINE Official Account ID. Pass the raw ID; the helper percent-encodes it for URL path segments.
   */
  lineId: string
}

export type LineIdWithoutAtPayload = {
  /**
   * LINE Official Account ID without the at-sign (@) prefix.
   */
  lineId: string
}

export type LineAppUrlPayload = {
  /**
   * LIFF ID.
   */
  liffId: string
  /**
   * Optional additional path. It is appended after the LIFF ID.
   */
  path?: string
  /**
   * Optional query parameters.
   */
  query?: LineQuery
  /**
   * Optional URL fragment.
   */
  hash?: string
}

export function lineR(path: `/${string}`) {
  return `${LINE_R_BASE}${path}`
}

export function strictPercentEncode(value: string | number) {
  return encodeURIComponent(String(value)).replace(
    /[!'()*]/g,
    char => `%${char.charCodeAt(0).toString(16).toUpperCase()}`,
  )
}

export function lineQs(params: LineQuery) {
  return qs(params).replace(/[!'()*]/g, char => `%${char.charCodeAt(0).toString(16).toUpperCase()}`)
}

export function lineRWithQuery(path: `/${string}`, query: LineQuery) {
  return `${lineR(path)}${lineQs(query)}`
}

export function encodePathSegment(value: string | number) {
  return strictPercentEncode(value)
}

export function assertLineIdWithoutAt(lineId: string) {
  if (lineId.includes('@')) {
    throw new Error('LINE Official Account ID for this URL must exclude the at-sign (@).')
  }
}

export function lineAppUrl(origin: 'https://liff.line.me' | 'https://miniapp.line.me', payload: LineAppUrlPayload) {
  const { liffId, path, query, hash } = payload
  const normalizedPath = path ? (path.startsWith('/') ? path : `/${path}`) : ''
  const normalizedHash = hash ? (hash.startsWith('#') ? hash : `#${hash}`) : ''

  return `${origin}/${encodePathSegment(liffId)}${normalizedPath}${lineQs(query ?? {})}${normalizedHash}`
}
