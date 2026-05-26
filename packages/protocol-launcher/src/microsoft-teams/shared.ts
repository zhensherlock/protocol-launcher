export type TeamsJsonObject = Record<string, unknown>

type TeamsRawParam = {
  value: string
  raw: true
}

export function teamsUrl(path: string, params: Record<string, unknown> = {}) {
  return `https://teams.microsoft.com/l/${path}${teamsQuery(params)}`
}

export function teamsPathSegment(value: string) {
  return encodeURIComponent(value)
}

export function teamsQuery(params: Record<string, unknown>) {
  const query = Object.entries(params)
    .flatMap(([key, value]) => {
      if (value === undefined || value === null) return []
      if (isRawParam(value)) return `${key}=${value.value}`
      return `${key}=${encodeURIComponent(String(value))}`
    })
    .join('&')

  return query ? `?${query}` : ''
}

export function rawParam(value: string | undefined) {
  return value === undefined ? undefined : { value, raw: true as const }
}

export function teamsUserListParam(values: string[]) {
  return rawParam(values.map(teamsUserIdParam).join(','))
}

export function teamsIdentifierParam(value: string | undefined) {
  return rawParam(value === undefined ? undefined : encodeTeamsIdentifier(value))
}

export function jsonParam(value: TeamsJsonObject | undefined) {
  return value === undefined ? undefined : JSON.stringify(value)
}

export function chatContextParam() {
  return rawParam(encodeURIComponent(JSON.stringify({ contextType: 'chat' })).replace(/%3A/g, ':'))
}

export function doubleEncodeJson(value: TeamsJsonObject) {
  const encoded = encodeURIComponent(JSON.stringify(value)).replace(/'/g, '%27').replace(/"/g, '%22')
  return encodeURIComponent(encoded).replace(/'/g, '%27').replace(/"/g, '%22')
}

function teamsUserIdParam(value: string) {
  return encodeTeamsIdentifier(value)
}

function encodeTeamsIdentifier(value: string) {
  return encodeURIComponent(value).replace(/%3A/g, ':').replace(/%40/g, '@')
}

function isRawParam(value: unknown): value is TeamsRawParam {
  return typeof value === 'object' && value !== null && 'raw' in value && 'value' in value
}
