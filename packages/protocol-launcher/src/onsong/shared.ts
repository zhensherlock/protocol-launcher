/**
 * OnSong import URL payload definition.
 */
export type OnSongImportUrlPayload = {
  /**
   * HTTP URL to a supported file format. OnSong's official import URL scheme
   * replaces the `http://` component with `onsong://`.
   */
  url: string
}

/**
 * OnSong import data payload definition.
 */
export type OnSongImportDataPayload = {
  /**
   * File name with extension. OnSong uses the extension to determine how to
   * treat the file.
   */
  filename: string

  /**
   * Base64-encoded file data.
   */
  base64Data: string
}

/**
 * OnSong song viewer navigation index value.
 */
export type OnSongSongsIndex = 'first' | 'last' | 'next' | 'previous' | number

/**
 * OnSong open songs payload fields.
 */
export type OnSongOpenSongsReference =
  | {
      /**
       * Song title, song identifier, or ordered song list. Arrays are serialized as
       * repeated `song` query parameters.
       */
      song: string | string[]

      /**
       * Song viewer position to navigate to.
       */
      index?: OnSongSongsIndex

      /**
       * Set name/identifier to load or create with the supplied song list.
       */
      set?: string

      collection?: never
    }
  | {
      /**
       * Collection or book name/identifier to load in the song viewer.
       */
      collection: string

      song?: never
      set?: never
      index?: never
    }
  | {
      /**
       * Set name/identifier to load.
       */
      set: string

      song?: never
      collection?: never
      index?: never
    }
  | {
      /**
       * Song viewer position to navigate to.
       */
      index: OnSongSongsIndex

      song?: never
      collection?: never
      set?: never
    }

/**
 * OnSong open songs payload definition.
 */
export type OnSongOpenSongsPayload = OnSongOpenSongsReference

/**
 * OnSong open song payload definition.
 */
export type OnSongOpenSongPayload = {
  /**
   * Song title or song identifier.
   */
  song: string
}

/**
 * OnSong export songs payload fields.
 */
export type OnSongExportSongsReference =
  | {
      /**
       * Song title or song identifier to export.
       */
      song: string

      set?: never
      collection?: never
    }
  | {
      /**
       * Set name/identifier to export.
       */
      set: string

      song?: never
      collection?: never
    }
  | {
      /**
       * Collection or book name/identifier to export.
       */
      collection: string

      song?: never
      set?: never
    }

/**
 * OnSong export songs payload definition.
 */
export type OnSongExportSongsPayload = OnSongExportSongsReference & {
  /**
   * Callback URL prefix where OnSong appends the Base64-encoded export data.
   */
  returnURL: string
}

/**
 * OnSong list actions payload definition.
 */
export type OnSongListActionsPayload = {
  /**
   * Callback URL prefix where OnSong appends the Base64-encoded JSON action list.
   */
  returnURL?: string
}

export type OnSongActionParameterValue = string | number

/**
 * OnSong perform action payload definition.
 */
export type OnSongPerformActionPayload = {
  /**
   * Action value returned by OnSong's action list API.
   */
  action: string

  /**
   * Amount parameter for variable actions.
   */
  amount?: number

  /**
   * Action-specific parameters documented by OnSong's action list output.
   */
  parameters?: Record<string, OnSongActionParameterValue>
}

export function onSongUrl(path = '', params: Record<string, unknown> = {}) {
  return `onsong://${path}${onSongQueryString(params)}`
}

export function onSongImportUrl(payload: OnSongImportUrlPayload) {
  const { url } = payload

  if (!url.startsWith('http://')) {
    throw new Error('OnSong importUrl requires an http:// URL to replace with onsong://.')
  }

  return `onsong://${url.slice('http://'.length)}`
}

export function onSongImportDataUrl(payload: OnSongImportDataPayload) {
  const { filename, base64Data } = payload

  return `onsong://ImportData/${encodeURIComponent(filename)}?${base64Data}`
}

export function onSongOpenSongsParams(payload: OnSongOpenSongsPayload) {
  assertOnSongOpenSongsPayload(payload)

  const { song, collection, set, index } = payload

  return {
    ...(song !== undefined ? { song } : {}),
    ...(collection !== undefined ? { collection } : {}),
    ...(index !== undefined ? { index } : {}),
    ...(set !== undefined ? { set } : {}),
  }
}

export function onSongOpenSongsPath(payload: OnSongOpenSongsPayload) {
  const { song, collection, set } = payload

  if (song !== undefined || collection !== undefined || set !== undefined) {
    return 'open/songs/'
  }

  return 'open/songs'
}

export function onSongExportSongsParams(payload: OnSongExportSongsPayload) {
  assertOnSongExportSongsPayload(payload)

  const { song, set, collection, returnURL } = payload

  return {
    ...(song !== undefined ? { song } : {}),
    ...(set !== undefined ? { set } : {}),
    ...(collection !== undefined ? { collection } : {}),
    returnURL,
  }
}

export function assertOnSongOpenSongsPayload(payload: OnSongOpenSongsPayload) {
  const { song, collection, set, index } = payload
  const hasSong = Array.isArray(song) ? song.length > 0 : song !== undefined

  if (!hasSong && collection === undefined && set === undefined && index === undefined) {
    throw new Error('OnSong openSongs requires at least one of song, collection, set, or index.')
  }

  if (collection !== undefined && (song !== undefined || set !== undefined || index !== undefined)) {
    throw new Error('OnSong openSongs collection URLs cannot be combined with song, set, or index.')
  }

  if (song === undefined && set !== undefined && index !== undefined) {
    throw new Error('OnSong openSongs set navigation requires a song value.')
  }
}

export function assertOnSongExportSongsPayload(payload: OnSongExportSongsPayload) {
  const { song, set, collection } = payload

  if (song === undefined && set === undefined && collection === undefined) {
    throw new Error('OnSong exportSongs requires at least one of song, set, or collection.')
  }

  if ([song, set, collection].filter(value => value !== undefined).length > 1) {
    throw new Error('OnSong exportSongs requires exactly one of song, set, or collection.')
  }
}

function onSongQueryString(params: Record<string, unknown>) {
  const query = Object.entries(params)
    .flatMap(([key, value]) => {
      if (value === undefined || value === null) return []
      if (Array.isArray(value)) {
        return value.map(item => `${key}=${encodeOnSongQueryValue(item)}`)
      }
      return `${key}=${encodeOnSongQueryValue(value)}`
    })
    .join('&')

  return query ? `?${query}` : ''
}

function encodeOnSongQueryValue(value: unknown) {
  const encodedValue = encodeURIComponent(String(value)).replace(/%20/g, '+')

  return typeof value === 'number' ? encodedValue : encodedValue.replace(/\./g, '%2E')
}
