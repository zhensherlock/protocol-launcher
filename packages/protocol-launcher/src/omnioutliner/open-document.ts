import type { OmniOutlinerDocumentLinkPayload } from './shared'
import { documentLinkPath, linkElementParams, omniOutlinerQuery } from './shared'

/**
 * Open an OmniOutliner document using an Omni Link.
 *
 * @param payload OmniOutliner document link payload.
 * @returns OmniOutliner document URL.
 * @example
 * openDocument({ documentName: 'My Outline.ooutline', folder: 'iCloud Drive' })
 * // => 'omnioutliner:///doc/My%20Outline.ooutline?folder=iCloud%20Drive'
 * @example
 * openDocument({ path: 'foo/bar', documentName: 'My Outline.ooutline', folder: 'Work Server 9070' })
 * // => 'omnioutliner:///doc/foo/bar/My%20Outline.ooutline?folder=Work%20Server%209070'
 * @link https://support.omnigroup.com/documentation/omnioutliner/universal/6.1/en/connect/
 */
export function openDocument(payload: OmniOutlinerDocumentLinkPayload) {
  const { path, documentName, folder } = payload

  return `omnioutliner:///doc/${documentLinkPath(path, documentName)}${omniOutlinerQuery({
    folder,
    ...linkElementParams(payload),
  })}`
}
