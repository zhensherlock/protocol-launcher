import { qs } from '@protocol-launcher/shared'
import type {
  YandexMapsAppLayer,
  YandexMapsAppMapParameters,
  YandexMapsWebLayer,
  YandexMapsWebMapParameters,
} from './types'

export function yandexMapsAppMapUrl(params: Record<string, unknown> = {}) {
  return `yandexmaps://maps.yandex.com/${qs(params)}`
}

export function yandexMapsAppRootUrl(params: Record<string, unknown>) {
  return `yandexmaps://${qs(params)}`
}

export function yandexMapsWebUrl(params: Record<string, unknown> = {}) {
  return `https://yandex.ru/maps/${qs(params)}`
}

export function yandexMapsWebOrganizationUrl(oid: number | string) {
  return `https://yandex.ru/maps/org/${encodeURIComponent(String(oid))}`
}

export function yandexMapsAppMapParams(payload: YandexMapsAppMapParameters) {
  const { ll, z, spn, l } = payload

  return {
    ll,
    z,
    spn,
    l: layerParam(l),
  }
}

export function yandexMapsWebMapParams(payload: YandexMapsWebMapParameters) {
  const { ll, z, spn, l } = payload

  return {
    ll,
    z,
    spn,
    l: layerParam(l),
  }
}

function layerParam(
  layer:
    | YandexMapsAppLayer
    | readonly YandexMapsAppLayer[]
    | YandexMapsWebLayer
    | readonly YandexMapsWebLayer[]
    | undefined,
) {
  if (Array.isArray(layer)) {
    return layer.join(',')
  }

  return layer
}
