import { qs } from '@protocol-launcher/shared'

export type PanoramaXQueryValue = string | number

export type PanoramaXQueryParams = Record<string, PanoramaXQueryValue>

export function panoramaXPath(segments: string[]) {
  return segments.map(segment => encodeURIComponent(segment)).join('/')
}

export function panoramaXUrl(path: string, params: PanoramaXQueryParams = {}) {
  return `panoramax://${path}${qs(params)}`
}
