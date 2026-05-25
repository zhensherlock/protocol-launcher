export type JsonObject = Record<string, unknown>

export function raycastPathSegment(value: string) {
  return encodeURIComponent(value)
}

export function jsonObjectParam(value: JsonObject | undefined) {
  return value === undefined ? undefined : JSON.stringify(value)
}
