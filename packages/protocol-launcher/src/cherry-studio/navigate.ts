import { qs } from '@protocol-launcher/shared'

type Navigate = {
  /** App route, for example /settings/provider, /app/agents, or /knowledge. */
  path: string
  /** Route query parameters. The app rejects internal MCP install parameters. */
  query?: Record<string, string | number | boolean | null | undefined>
}

/**
 * Navigate to a page in Cherry Studio's main window.
 *
 * @param payload Route and optional query parameters.
 * @returns Cherry Studio navigation URL.
 * @example
 * navigate({ path: '/settings/provider' })
 * // => 'cherrystudio://navigate/settings/provider'
 * @link https://github.com/CherryHQ/cherry-studio/blob/v2.1.4/src/main/services/protocol/handlers/navigate.ts
 */
export function navigate(payload: Navigate) {
  const path = payload.path.startsWith('/') ? payload.path : `/${payload.path}`
  return `cherrystudio://navigate${path}${qs(payload.query ?? {})}`
}
