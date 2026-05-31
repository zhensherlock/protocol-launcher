import { openDocument } from './open-document'
import type { OmniOutlinerDocumentRowLinkPayload } from './shared'

/**
 * Open an OmniOutliner document and add a Row Selection element using an Omni Link.
 *
 * @param payload OmniOutliner document row link payload.
 * @returns OmniOutliner document row URL.
 * @example
 * openDocumentRow({
 *   path: 'foo/bar',
 *   documentName: 'My Outline.ooutline',
 *   folder: 'Work Server 9070',
 *   focus: 'mDFTZpAeCb8',
 *   row: 'fh4Q0jgg5iB',
 * })
 * // => 'omnioutliner:///doc/foo/bar/My%20Outline.ooutline?folder=Work%20Server%209070&focus=mDFTZpAeCb8&row=fh4Q0jgg5iB'
 * @link https://support.omnigroup.com/documentation/omnioutliner/universal/6.1/en/connect/
 */
export function openDocumentRow(payload: OmniOutlinerDocumentRowLinkPayload) {
  return openDocument(payload)
}
