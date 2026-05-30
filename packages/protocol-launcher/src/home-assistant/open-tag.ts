import type { OpenTagPayload } from './shared'

/**
 * Open a Home Assistant tag universal link.
 *
 * @param payload Open tag payload.
 * @returns Home Assistant tag universal link.
 * @example
 * openTag({ tagId: '50A3C7C8-1FE7-4BE8-8DC9-06E07D41B63D' })
 * // => 'https://www.home-assistant.io/tag/50A3C7C8-1FE7-4BE8-8DC9-06E07D41B63D'
 *
 * @link https://companion.home-assistant.io/docs/integrations/universal-links/
 */
export function openTag(payload: OpenTagPayload) {
  const { tagId } = payload

  return `https://www.home-assistant.io/tag/${encodeURIComponent(tagId)}`
}
