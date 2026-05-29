import { qs } from '@protocol-launcher/shared'

/**
 * Momento URL scheme.
 */
export type MomentoScheme = 'momento' | 'momento-3'

/**
 * Shared Momento scheme selector.
 */
export type MomentoSchemePayload = {
  /**
   * URL scheme to use.
   *
   * Defaults to `momento`. Use `momento-3` to target Momento 3 when Momento Classic is also installed.
   */
  scheme?: MomentoScheme
}

/**
 * Shared `text` and repeated `tag` query parameters from Momento's example URLs.
 *
 * Momento's parameter table labels these as note/tags, but the official URL
 * strings use `text=...&tag=...&tag=...`; this package follows the URL strings.
 */
export type MomentoTextTagPayload = MomentoSchemePayload & {
  /**
   * Set note text with the official `text` query parameter.
   */
  text?: string

  /**
   * Set tags as repeated `tag` query parameters.
   */
  tag?: string[]
}

export function momentoTextTagParams(payload: MomentoTextTagPayload) {
  const { text, tag } = payload

  return {
    ...(text !== undefined ? { text } : {}),
    ...(tag !== undefined ? { tag } : {}),
  }
}

export function momentoUrl(path: string, params: Record<string, unknown> = {}, scheme: MomentoScheme = 'momento') {
  return `${scheme}://${path}${qs(params)}`
}
