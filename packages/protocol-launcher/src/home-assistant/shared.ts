import { qs } from '@protocol-launcher/shared'

export type HomeAssistantQueryParams = Record<string, string | null | undefined>

export interface NavigatePayload {
  /**
   * The path portion copied from the Home Assistant frontend URL.
   *
   * @example '/dashboard-mobile/my-subview'
   */
  path: string

  /**
   * Server name to navigate to, or `default` for the first server available.
   *
   * @example 'My home'
   * @example 'default'
   */
  server?: string
}

export interface CallServicePayload {
  /**
   * Service name in `domain.service` form.
   *
   * @example 'device_tracker.see'
   */
  service: string

  /**
   * Query parameters passed as the service call dictionary.
   */
  params?: HomeAssistantQueryParams
}

export interface FireEventPayload {
  /**
   * Event type to fire.
   *
   * @example 'custom_event'
   */
  eventType: string

  /**
   * Query parameters passed as the event dictionary.
   */
  params?: HomeAssistantQueryParams
}

export interface OpenTagPayload {
  /**
   * Home Assistant tag identifier.
   *
   * @example '50A3C7C8-1FE7-4BE8-8DC9-06E07D41B63D'
   */
  tagId: string
}

export interface NfcUniversalLinkPayload {
  /**
   * A URL you could use with the existing Home Assistant URL handler.
   *
   * @example 'homeassistant://navigate/dashboard-mobile/my-subview'
   */
  url: string
}

export function homeAssistantUrl(action: string, path = '', params: HomeAssistantQueryParams = {}) {
  return `homeassistant://${action}${path}${qs(params)}`
}
