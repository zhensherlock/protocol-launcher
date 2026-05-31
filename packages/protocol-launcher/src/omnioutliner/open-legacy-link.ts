import type { OmniOutlinerLinkElements } from './shared'
import { linkElementParams, omniOutlinerQuery } from './shared'

/**
 * Open OmniOutliner using a Legacy Link.
 *
 * @param payload OmniOutliner legacy link payload.
 * @returns OmniOutliner legacy open URL.
 * @example
 * openLegacyLink()
 * // => 'omnioutliner:///open'
 * @example
 * openLegacyLink({ focus: 'nBZUyLQl3b6', row: 'j3NzslZpCi8' })
 * // => 'omnioutliner:///open?focus=nBZUyLQl3b6&row=j3NzslZpCi8'
 * @link https://support.omnigroup.com/documentation/omnioutliner/universal/6.1/en/connect/
 */
export function openLegacyLink(payload: OmniOutlinerLinkElements = {}) {
  return `omnioutliner:///open${omniOutlinerQuery(linkElementParams(payload))}`
}
