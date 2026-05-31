import type { OmniOutlinerOpenLinkPayload } from './shared'

/**
 * Open an existing OmniOutliner Omni Link or Legacy Link.
 *
 * @param payload OmniOutliner link payload.
 * @returns OmniOutliner URL.
 * @example
 * openLink({ url: 'omnioutliner:///doc/My%20Outline.ooutline?folder=iCloud%20Drive' })
 * // => 'omnioutliner:///doc/My%20Outline.ooutline?folder=iCloud%20Drive'
 * @link https://support.omnigroup.com/documentation/omnioutliner/universal/6.1/en/connect/
 */
export function openLink(payload: OmniOutlinerOpenLinkPayload) {
  const { url } = payload

  return url
}
