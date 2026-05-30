import { qs } from '@protocol-launcher/shared'

/**
 * Warp URL scheme.
 */
export type WarpScheme = 'warp' | 'warppreview'

/**
 * Shared Warp scheme selector.
 */
export type WarpSchemePayload = {
  /**
   * URL scheme to use.
   *
   * Defaults to `warp`. Use `warppreview` to target Warp Preview.
   */
  scheme?: WarpScheme
}

export function warpUrl(path: string, params: Record<string, unknown> = {}, scheme: WarpScheme = 'warp') {
  return `${scheme}://${path}${qs(params)}`
}
