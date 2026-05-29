import { qs } from '@protocol-launcher/shared'

export type TableProQueryParams = Record<string, unknown>

export function tableproPathSegment(value: string | number) {
  return encodeURIComponent(String(value))
}

export function tableproCsv(values?: readonly string[]) {
  return values && values.length > 0 ? values.join(',') : undefined
}

export function tableproUrl(path: string, params: TableProQueryParams = {}) {
  return `tablepro://${path}${qs(params)}`
}
