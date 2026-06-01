import { qs } from '@protocol-launcher/shared'

export type HoudahSpotSearchAttribute = 'name' | 'content' | 'anytext'

export type HoudahSpotLocation = string | readonly string[]

export type HoudahSpotQueryParameter =
  | {
      /**
       * The search string, serialized as HoudahSpot's documented `q` parameter.
       *
       * @example 'Houdah Software'
       * @example 'name:*.txt'
       * @example 'tag:orange'
       */
      q?: string
      query?: never
    }
  | {
      q?: never
      /**
       * The search string, serialized as HoudahSpot's documented `query` alias.
       */
      query?: string
    }

export type HoudahSpotLocationParameter =
  | {
      /**
       * Folder path to search, serialized as HoudahSpot's documented `l` alias.
       */
      l?: HoudahSpotLocation
      location?: never
    }
  | {
      l?: never
      /**
       * Folder path to search. An array repeats the documented `location` parameter.
       */
      location?: HoudahSpotLocation
    }

export type HoudahSpotTemplateParameter =
  | {
      /**
       * Template path to use, serialized as HoudahSpot's documented `t` alias.
       */
      t?: string
      template?: never
    }
  | {
      t?: never
      /**
       * Template path to use. HoudahSpot requires the path to include the `.hstemplate` extension.
       */
      template?: string
    }

export type HoudahSpotSearchAttributeParameter =
  | {
      /**
       * Search attribute selected for the search field.
       */
      s?: HoudahSpotSearchAttribute
      search?: never
    }
  | {
      s?: never
      /**
       * Search attribute selected for the search field, serialized as HoudahSpot's documented `search` alias.
       */
      search?: HoudahSpotSearchAttribute
    }

export type HoudahSpotAttributeSearchPayload = HoudahSpotQueryParameter &
  HoudahSpotLocationParameter &
  HoudahSpotTemplateParameter

export type HoudahSpotSearchPayload = HoudahSpotAttributeSearchPayload & HoudahSpotSearchAttributeParameter

function houdahSpotQs(params: Record<string, unknown>) {
  return qs(params).replace(/%2F/gi, '/').replace(/%3A/gi, ':')
}

function hasOwnKey<T extends object, K extends PropertyKey>(payload: T, key: K): payload is T & Record<K, unknown> {
  return Object.prototype.hasOwnProperty.call(payload, key)
}

export function houdahSpotSearchUrl(payload: HoudahSpotSearchPayload = {}) {
  const query = hasOwnKey(payload, 'q') ? { q: payload.q } : { query: payload.query }
  const location = hasOwnKey(payload, 'l') ? { l: payload.l } : { location: payload.location }
  const template = hasOwnKey(payload, 't') ? { t: payload.t } : { template: payload.template }
  const search = hasOwnKey(payload, 's') ? { s: payload.s } : { search: payload.search }
  const params = houdahSpotQs({
    ...query,
    ...location,
    ...template,
    ...search,
  })

  return `houdahspot4://search${params}`
}
