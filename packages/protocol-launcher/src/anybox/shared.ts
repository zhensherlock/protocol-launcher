export type Starred = 'yes'

export type Archive = 'pdf' | 'image' | 'webarchive'

type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>
  }[Keys]

export type AnyboxTag =
  | {
      /**
       * Tag name or tag identifier.
       */
      tag?: string

      /**
       * Multiple tag names or tag identifiers separated by comma.
       */
      tags?: undefined
    }
  | {
      /**
       * Tag name or tag identifier.
       */
      tag?: undefined

      /**
       * Multiple tag names or tag identifiers separated by comma.
       */
      tags?: string
    }

/**
 * Paste clipboard content payload definition.
 */
export type Paste = AnyboxTag & {
  /**
   * Star saved content.
   */
  starred?: Starred
}

/**
 * Save text content payload definition.
 */
export type Save = AnyboxTag &
  RequireAtLeastOne<{
    /**
     * Text content to save.
     */
    text?: string

    /**
     * Tag name or tag identifier.
     */
    tag?: string

    /**
     * Multiple tag names or tag identifiers separated by comma.
     */
    tags?: string

    /**
     * Star saved content.
     */
    starred?: Starred

    /**
     * Archive the link as PDF, screenshot image, or Web Archive on macOS.
     */
    archive?: Archive
  }>

/**
 * Download URL payload definition.
 */
export type Download = {
  /**
   * URL to download and save to Anybox.
   */
  url: string

  /**
   * Optional tag name.
   */
  tag?: string
}

/**
 * Save current browser tab payload definition.
 */
export type SaveTab = {
  /**
   * Optional tag name.
   */
  tag?: string

  /**
   * Star saved content.
   */
  starred?: Starred

  /**
   * Archive the link as PDF, screenshot image, or Web Archive.
   */
  archive?: Archive
}

/**
 * Quick Find payload definition.
 */
export type QuickFind =
  | {
      tags?: undefined
      filter?: undefined
      q?: undefined
    }
  | {
      /**
       * Tag identifiers separated by comma.
       */
      tags: string

      filter?: undefined
      q?: undefined
    }
  | {
      tags?: undefined

      /**
       * Smart list identifier.
       */
      filter: string

      q?: undefined
    }
  | {
      tags?: undefined
      filter?: undefined

      /**
       * Search keywords.
       */
      q: string
    }

/**
 * Anybox x-callback-url payload definition.
 */
export type XCallback = {
  /**
   * The x-success callback URL.
   */
  xSuccess: string

  /**
   * The x-error callback URL.
   */
  xError: string
}

export type XCallbackSave = Save & XCallback
export type XCallbackPaste = Paste & XCallback

export function xCallbackParams(payload: XCallback) {
  const { xSuccess, xError } = payload

  return {
    'x-success': xSuccess,
    'x-error': xError,
  }
}

export function anyboxUrl(path: string, params: Record<string, unknown> = {}) {
  const query = Object.entries(params)
    .flatMap(([key, value]) => {
      if (value === undefined || value === null) return []
      if (key === 'tags') {
        return `${key}=${String(value).split(',').map(encodeURIComponent).join(',')}`
      }
      return `${key}=${encodeURIComponent(String(value))}`
    })
    .join('&')

  return `anybox://${path}${query ? `?${query}` : ''}`
}

export function saveParams(payload: Save) {
  const { text, tag, tags, starred, archive } = payload

  return {
    text,
    ...(tag ? { tag } : {}),
    ...(tags ? { tags } : {}),
    ...(starred ? { starred } : {}),
    ...(archive ? { archive } : {}),
  }
}

export function pasteParams(payload: Paste = {}) {
  const { tag, tags, starred } = payload

  return {
    ...(tag ? { tag } : {}),
    ...(tags ? { tags } : {}),
    ...(starred ? { starred } : {}),
  }
}
