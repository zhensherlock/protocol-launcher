import { qs } from '@protocol-launcher/shared'

export type HotTubAction = 'source' | 'webview' | 'search' | 'profile' | 'play' | 'notification' | 'message'

export type HotTubHandoffAction = 'search' | 'profile' | 'open' | 'favorite'

export type HotTubNotificationType = 'info' | 'success' | 'warning' | 'error'

/**
 * Hot Tub add source payload definition.
 */
export interface HotTubAddSourcePayload {
  /**
   * Your server's base URL.
   *
   * @example 'https://api.myvideosite.com'
   */
  url: string

  /**
   * Whether to show privacy notice. Hot Tub defaults this to true.
   */
  privacy?: boolean
}

/**
 * Hot Tub add source web redirect payload definition.
 */
export interface HotTubAddSourceRedirectPayload {
  /**
   * Source domain used by Hot Tub's documented `hottubapp.io/add/{domain}` redirect.
   *
   * @example 'api.myvideosite.com'
   */
  domain: string
}

/**
 * Hot Tub web view payload definition.
 */
export interface HotTubOpenWebViewPayload {
  /**
   * The web page URL to open.
   *
   * @example 'https://help.example.com'
   */
  url: string

  /**
   * Whether to use privacy mode. Hot Tub defaults this to false.
   */
  privacy?: boolean
}

/**
 * Hot Tub search payload definition.
 */
export interface HotTubSearchPayload {
  /**
   * The search query.
   *
   * @example 'funny cats'
   */
  q: string
}

/**
 * Hot Tub uploader profile payload definition.
 */
export type HotTubOpenProfilePayload =
  | {
      /**
       * Uploader slug segment from `/creator/...` or opaque `u-...` id.
       *
       * @example 'yanks'
       */
      uploader: string
      creator?: never
    }
  | {
      /**
       * Alias accepted by Hot Tub for the `uploader` parameter.
       *
       * @example 'yanks'
       */
      creator: string
      uploader?: never
    }

/**
 * Hot Tub HTTPS handoff base payload definition.
 */
export interface HotTubHandoffBasePayload {
  /**
   * HTTPS origin that serves `/app` and has the associated domain configured.
   *
   * @example 'https://hottubapp.io'
   */
  baseUrl: string
}

/**
 * Hot Tub search HTTPS handoff payload definition.
 */
export interface HotTubHandoffSearchPayload extends HotTubHandoffBasePayload {
  /**
   * Decoded tag/search query passed as `q`.
   *
   * @example 'nature documentaries'
   */
  q: string
}

/**
 * Hot Tub profile HTTPS handoff payload definition.
 */
export interface HotTubHandoffProfilePayload extends HotTubHandoffBasePayload {
  /**
   * Creator path segment from `/creator/...`.
   *
   * @example 'yanks'
   */
  uploader: string
}

/**
 * Hot Tub generic-page HTTPS handoff payload definition.
 */
export interface HotTubHandoffPagePayload extends HotTubHandoffBasePayload {
  /**
   * Encoded by the helper as the `url` query parameter.
   *
   * @example 'https://example.com/watch/12345'
   */
  url: string
}

/**
 * Hot Tub play payload definition.
 */
export type HotTubPlayPayload =
  | {
      /**
       * Video page URL. Hot Tub will fetch details via API.
       *
       * @example 'https://www.youtube.com/watch?v=y0sF5xhGreA'
       */
      video: string
      url?: never
    }
  | {
      /**
       * Web video player URL. Hot Tub opens this in a web view.
       *
       * @example 'https://www.youtube.com/watch?v=y0sF5xhGreA'
       */
      url: string
      video?: never
    }

/**
 * Hot Tub notification payload definition.
 */
export interface HotTubNotificationPayload {
  /**
   * Toast type.
   */
  type?: HotTubNotificationType

  /**
   * Notification title.
   */
  title?: string

  /**
   * Notification message.
   */
  message?: string
}

/**
 * Hot Tub debug message payload definition.
 */
export interface HotTubMessagePayload {
  /**
   * Message text or URL to display in debug view.
   *
   * @example 'Configuration loaded: API v2.1, 15 channels active'
   */
  content: string
}

export function hotTubUrl(action: HotTubAction, params: Record<string, unknown>) {
  return `hottub://${action}${qs(params)}`
}

export function hotTubHandoffUrl(baseUrl: string, action: HotTubHandoffAction, params: Record<string, unknown>) {
  return `${baseUrl.replace(/\/$/, '')}/app${qs({ action, ...params })}`
}
