import type { OrganicMapsLaunchMethod, OrganicMapsSharedPointLaunchMethod } from './types'

export type OrganicMapsQueryValue = string | number | boolean | null | undefined

export type OrganicMapsQueryEntry = readonly [string, OrganicMapsQueryValue]

export function organicMapsUrl(
  path: string,
  queryEntries: readonly OrganicMapsQueryEntry[] = [],
  linkType: OrganicMapsLaunchMethod | OrganicMapsSharedPointLaunchMethod = 'scheme',
) {
  return `${organicMapsBaseUrl(linkType)}${path}${organicMapsQuery(queryEntries)}`
}

export function organicMapsQuery(entries: readonly OrganicMapsQueryEntry[]) {
  const query = entries
    .flatMap(([key, value]) => {
      if (value === undefined || value === null) return []

      return `${key}=${organicMapsQueryValue(value)}`
    })
    .join('&')

  return query ? `?${query}` : ''
}

export function organicMapsPath(segments: readonly string[]) {
  return segments.map(segment => organicMapsPathSegment(segment)).join('/')
}

export function organicMapsListParam(values: readonly string[]) {
  return values.join('|')
}

function organicMapsBaseUrl(linkType: OrganicMapsLaunchMethod | OrganicMapsSharedPointLaunchMethod) {
  if (linkType === 'https') return 'https://omaps.app/'
  if (linkType === 'http') return 'http://omaps.app/'

  return 'om://'
}

function organicMapsQueryValue(value: OrganicMapsQueryValue) {
  return Array.from(String(value), char => {
    if (isOrganicMapsLiteralChar(char) || char === ',' || char === '|') return char

    return encodeURIComponent(char)
  }).join('')
}

function organicMapsPathSegment(value: string) {
  return Array.from(value, char => {
    if (isOrganicMapsLiteralChar(char)) return char

    return encodeURIComponent(char)
  }).join('')
}

function isOrganicMapsLiteralChar(char: string) {
  return /^[A-Za-z0-9._~-]$/.test(char) || (char.codePointAt(0) ?? 0) > 0x7f
}
