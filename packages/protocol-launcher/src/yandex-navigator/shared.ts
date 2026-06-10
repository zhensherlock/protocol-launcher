import { qs } from '@protocol-launcher/shared'
import type { YandexNavigatorAccessParameters, YandexNavigatorViaPoint } from './types'

export type YandexNavigatorActionPath = 'build_route_on_map' | 'map_search' | 'show_point_on_map'

export function yandexNavigatorUrl(actionPath?: YandexNavigatorActionPath, params: Record<string, unknown> = {}) {
  return `yandexnavi://${actionPath ?? ''}${qs(params)}`
}

export function accessParams(payload: YandexNavigatorAccessParameters) {
  const { client, signature } = payload

  return {
    client,
    signature,
  }
}

export function viaPointParams(via: readonly YandexNavigatorViaPoint[] | undefined) {
  if (!via) return {}

  return via.reduce<Record<string, number | string>>((params, point, index) => {
    params[`lat_via_${index}`] = point.lat
    params[`lon_via_${index}`] = point.lon
    return params
  }, {})
}
