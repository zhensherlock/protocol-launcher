import { qs } from '@protocol-launcher/shared'

export type TimingQueryParams = Record<string, unknown>

function timingQs(params: TimingQueryParams) {
  return qs(params).replace(/([?&](?:startDate|endDate)=)([^&]*)/g, (_, prefix, value: string) => {
    return `${prefix}${value.replace(/%3A/gi, ':')}`
  })
}

export function timingTrackerUrl(action: string, params: TimingQueryParams = {}) {
  return `timing2helper://${action}${timingQs(params)}`
}

export function timingMainUrl(action: string, pathSegments: string[] = []) {
  const path = pathSegments.map(segment => encodeURIComponent(segment)).join('/')

  return `timing2://${action}${path ? `/${path}` : ''}`
}
