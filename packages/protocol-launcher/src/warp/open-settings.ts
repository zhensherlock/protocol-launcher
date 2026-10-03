import type { WarpSchemePayload } from './shared'
import { warpUrl } from './shared'

type OpenSettings = WarpSchemePayload & {
  /** Settings page to open. */
  page?: 'appearance' | 'mcp' | 'warp_agent' | 'environments' | 'platform' | 'billing_and_usage' | 'teams'
  /** Prefill the settings search field. */
  q?: string
  /** Scroll to a setting by widget ID. */
  widget?: string
  /** Gallery MCP server name to install on the mcp page. */
  autoinstall?: string
  /** Email to prefill in the invite dialog on the teams page. */
  invite?: string
}

/**
 * Open Warp settings, optionally selecting a page, search, or widget.
 *
 * @param payload Settings destination and Warp scheme.
 * @returns Warp settings URL.
 * @example
 * openSettings({ page: 'mcp', autoinstall: 'my-server' })
 * // => 'warp://settings/mcp?autoinstall=my-server'
 * @link https://docs.warp.dev/terminal/more-features/uri-scheme#settings-deep-links
 */
export function openSettings(payload: OpenSettings = {}) {
  const { page, q, widget, autoinstall, invite, scheme = 'warp' } = payload
  return warpUrl(`settings${page ? `/${page}` : ''}`, { q, widget, autoinstall, invite }, scheme)
}
