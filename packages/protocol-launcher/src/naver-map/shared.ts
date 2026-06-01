import { qs } from '@protocol-launcher/shared'
import type { NaverMapActionPath, NaverMapRoutePoints } from './types'

export function naverMapUrl(actionPath: NaverMapActionPath, params: Record<string, unknown>) {
  const hasOnlyAppName = Object.entries(params).every(
    ([key, value]) => key === 'appname' || value === undefined || value === null,
  )

  if (hasOnlyAppName) {
    return `nmap://${actionPath}?&appname=${encodeURIComponent(String(params.appname))}`
  }

  return `nmap://${actionPath}${qs(params)}`
}

export function routePointParams(params: Partial<NaverMapRoutePoints>) {
  const {
    slat,
    slng,
    sname,
    secoords,
    dlat,
    dlng,
    dname,
    decoords,
    v1lat,
    v1lng,
    v1name,
    v1ecoords,
    v2lat,
    v2lng,
    v2name,
    v3lat,
    v3lng,
    v3name,
    v4lat,
    v4lng,
    v4name,
    v5lat,
    v5lng,
    v5name,
  } = params

  return {
    slat,
    slng,
    sname,
    secoords,
    dlat,
    dlng,
    dname,
    decoords,
    v1lat,
    v1lng,
    v1name,
    v1ecoords,
    v2lat,
    v2lng,
    v2name,
    v3lat,
    v3lng,
    v3name,
    v4lat,
    v4lng,
    v4name,
    v5lat,
    v5lng,
    v5name,
  }
}
