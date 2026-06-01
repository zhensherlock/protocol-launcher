export type TemboGroup =
  | 'APPLICATIONS'
  | 'BOOKMARKS'
  | 'CONTACTS'
  | 'DIRECTORIES'
  | 'CALENDAR'
  | 'EVERNOTE'
  | 'FONTS'
  | 'IMAGES'
  | 'MESSAGES'
  | 'MOVIES'
  | 'MUSIC'
  | 'PDF'
  | 'SOURCE'
  | 'SYSTEM_PREFS'
  | 'XML'

export type TemboLocations = string | readonly string[]

export type TemboQuery =
  | {
      /**
       * Text to search for. The official URL format documents this as `query`.
       *
       * @example 'invoice'
       */
      query: string
      q?: never
    }
  | {
      /**
       * Short query parameter shown in Houdah's official Alfred custom search example.
       *
       * @example 'invoice'
       */
      q: string
      query?: never
    }

export interface TemboSearchOptions {
  /**
   * One or more paths shown in Tembo's locations menu. Repeated to search multiple folders.
   *
   * @example '~/Documents'
   */
  location?: TemboLocations

  /**
   * Official Tembo search group value.
   *
   * @example 'PDF'
   */
  group?: TemboGroup
}

export type TemboSearchPayload = TemboQuery & TemboSearchOptions

export type TemboSearchInLocationPayload = TemboQuery &
  Omit<TemboSearchOptions, 'location'> & {
    /**
     * One or more paths shown in Tembo's locations menu. Repeated to search multiple folders.
     */
    location: TemboLocations
  }

export type TemboSearchGroupPayload = TemboQuery &
  Omit<TemboSearchOptions, 'group'> & {
    /**
     * Official Tembo search group value.
     */
    group: TemboGroup
  }

function temboEncode(value: string) {
  return encodeURIComponent(value).replace(/%2F/g, '/')
}

function locationParams(location: TemboLocations | undefined) {
  if (location === undefined) return []

  if (Array.isArray(location)) {
    return location.map(item => ['location', item] as const)
  }

  return [['location', location] as const]
}

function temboQs(params: TemboSearchPayload) {
  const queryName = params.query === undefined ? 'q' : 'query'
  const queryValue = params.query ?? params.q
  const entries: Array<readonly [string, string]> = [
    [queryName, queryValue],
    ...locationParams(params.location),
    ...(params.group ? ([['group', params.group]] as const) : []),
  ]

  return `?${entries.map(([key, value]) => `${key}=${temboEncode(value)}`).join('&')}`
}

export function temboSearchUrl(payload: TemboSearchPayload) {
  return `tembo2://search${temboQs(payload)}`
}
