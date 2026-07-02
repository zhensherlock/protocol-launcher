export const INROUTE_SCHEME = 'inroute://'

export type InRouteQueryValue = string | number | boolean | null | undefined

export type InRouteQueryEntry = readonly [string, InRouteQueryValue, { raw?: boolean }?]

export type InRouteGeo = string

export interface InRouteReturnPayload {
  /**
   * URL scheme for the sending app, serialized as the documented `back_url` parameter.
   *
   * @example 'myapp://'
   */
  backUrl?: string
}

export function inRouteUrl(action: string, entries: readonly InRouteQueryEntry[]) {
  return `${INROUTE_SCHEME}${action}${inRouteQuery(entries)}`
}

export function inRouteQuery(entries: readonly InRouteQueryEntry[]) {
  const query = entries
    .flatMap(([key, value, options]) => {
      if (value === undefined || value === null) return []

      return `${key}=${options?.raw ? String(value) : inRouteEncode(value)}`
    })
    .join('&')

  return query ? `?${query}` : ''
}

export function inRouteLocationPart(value: string | number) {
  return inRouteEncode(value)
}

function inRouteEncode(value: string | number | boolean) {
  return Array.from(String(value), char => {
    if (isInRouteLiteralChar(char) || char === ',') return char

    return encodeURIComponent(char)
  }).join('')
}

function isInRouteLiteralChar(char: string) {
  return /^[A-Za-z0-9._~-]$/.test(char) || (char.codePointAt(0) ?? 0) > 0x7f
}
