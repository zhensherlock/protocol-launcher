import { qs } from '@protocol-launcher/shared'

export type SurgeAction = 'start' | 'stop' | 'toggle'

/**
 * Surge start/stop/toggle payload definition.
 */
export type SurgeActionPayload = {
  /**
   * Automatically close Surge after the action is completed.
   *
   * Cannot be used with `installConfig()`.
   */
  autoclose?: true
}

/**
 * Surge install-config payload definition.
 */
export type SurgeInstallConfigPayload = {
  /**
   * Remote configuration URL. The helper percent-encodes this value into the official `url` query parameter.
   */
  url: string
}

export function surgeActionUrl(action: SurgeAction, payload: SurgeActionPayload = {}) {
  return `surge:///${action}${qs({
    autoclose: payload.autoclose ? true : undefined,
  })}`
}

export function surgeXCallbackUrl(action: SurgeAction) {
  return `surge://x-callback-url/${action}`
}
