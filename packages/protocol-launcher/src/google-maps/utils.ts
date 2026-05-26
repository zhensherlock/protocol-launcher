import type { GoogleMapsDisplayMap, GoogleMapsView } from './types'

export function googleMapsUrl(params: Record<string, unknown> = {}) {
  return `comgooglemaps://${googleMapsQuery(params)}`
}

export function displayMapParams(payload: GoogleMapsDisplayMap) {
  const { center, zoom, mapmode, views } = payload

  return {
    center,
    zoom,
    mapmode,
    views: viewsParam(views),
  }
}

function viewsParam(views: GoogleMapsView | readonly GoogleMapsView[] | '' | undefined) {
  if (Array.isArray(views)) {
    return views.join(',')
  }

  return views
}

function googleMapsQuery(params: Record<string, unknown>) {
  const query = Object.entries(params)
    .flatMap(([key, value]) => {
      if (value === undefined || value === null) return []
      return `${key}=${googleMapsEncode(String(value))}`
    })
    .join('&')

  return query ? `?${query}` : ''
}

function googleMapsEncode(value: string) {
  return encodeURIComponent(value).replace(/%20/g, '+').replace(/%2C/g, ',')
}
