import { qs } from '@protocol-launcher/shared'

export type ForScoreCommand = 'open' | 'service' | 'action'

export type ForScoreOpenReference = {
  /**
   * Filename of a score in the user's library. forScore prefers this over
   * `score` when both are supplied.
   */
  path?: string

  /**
   * Title of a score in the user's library.
   */
  score?: string

  /**
   * Name of a setlist in the user's library.
   */
  setlist?: string

  /**
   * Page number to open.
   */
  page?: number
}

type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>
  }[Keys]

/**
 * forScore open command payload definition.
 */
export type ForScoreOpenPayload = RequireAtLeastOne<ForScoreOpenReference, 'path' | 'score' | 'setlist' | 'page'> & {
  /**
   * Title of a bookmark within the referenced score. Ignored by forScore when
   * no `path` or `score` value is supplied.
   */
  bookmark?: string
}

export type ForScoreStorageService = 'dropbox' | 'box'
export type ForScoreContentProviderService =
  | 'musicnotes'
  | 'noteflight'
  | 'virtualsheetmusic'
  | 'carlfischer'
  | 'presser'
  | 'brilee'
  | 'presto'

/**
 * forScore service command payload definition.
 */
export type ForScoreServicePayload =
  | {
      /**
       * Service account type to open.
       */
      type: ForScoreStorageService

      /**
       * Starting path to display upon open, if supported.
       */
      path?: string
    }
  | {
      /**
       * Content provider type to open.
       */
      type: ForScoreContentProviderService

      /**
       * forScore does not support paths for content providers.
       */
      path?: never
    }

export type ForScoreActionType = 'prevpage' | 'nextpage' | 'previtem' | 'nextitem' | 'back' | 'nowplaying'

/**
 * forScore action command payload definition.
 */
export type ForScoreActionPayload = {
  /**
   * Relative navigation action to perform.
   */
  type: ForScoreActionType
}

export function forScoreUrl(command: ForScoreCommand, params: Record<string, unknown> = {}) {
  return `forscore://${command}${qs(params)}`
}

export function isForScoreStorageService(type: ForScoreServicePayload['type']): type is ForScoreStorageService {
  return type === 'dropbox' || type === 'box'
}

export function assertForScoreOpenPayload(payload: ForScoreOpenPayload) {
  const { path, score, setlist, page } = payload

  if (path === undefined && score === undefined && setlist === undefined && page === undefined) {
    throw new Error('forScore open requires at least one of path, score, setlist, or page.')
  }
}

export function assertForScoreServicePayload(payload: ForScoreServicePayload) {
  if (payload.path !== undefined && !isForScoreStorageService(payload.type)) {
    throw new Error('forScore service paths are only supported for dropbox and box.')
  }
}
