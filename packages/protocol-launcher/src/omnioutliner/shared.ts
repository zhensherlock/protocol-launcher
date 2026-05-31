import { qs } from '@protocol-launcher/shared'

export type OmniOutlinerLinkElements = {
  /**
   * Element type and ID for the focused row.
   */
  focus?: string

  /**
   * Element type and ID for the selected row.
   */
  row?: string
}

export type OmniOutlinerDocumentLinkPayload = OmniOutlinerLinkElements & {
  /**
   * Folder path to the location of your document.
   */
  path?: string

  /**
   * Name and file extension for your document.
   */
  documentName: string

  /**
   * Unique Omni Links Folder ID, used after the documented `?folder=` parameter.
   */
  folder: string
}

export type OmniOutlinerDocumentRowLinkPayload = Omit<OmniOutlinerDocumentLinkPayload, 'row'> & {
  /**
   * Element type and ID for the selected row.
   */
  row: string
}

export type OmniOutlinerDocumentLink = `omnioutliner:///doc/${string}?folder=${string}`

export type OmniOutlinerLegacyLink = 'omnioutliner:///open' | `omnioutliner:///open?${string}`

export type OmniOutlinerLink = OmniOutlinerDocumentLink | OmniOutlinerLegacyLink

export type OmniOutlinerOpenLinkPayload = {
  /**
   * Full OmniOutliner Omni Link or Legacy Link copied from OmniOutliner.
   */
  url: OmniOutlinerLink
}

export function documentLinkPath(path: string | undefined, documentName: string) {
  const encodedDocumentName = encodeURIComponent(documentName)
  const encodedPath = path ? encodeOmniOutlinerPath(path) : ''

  return encodedPath ? `${encodedPath}/${encodedDocumentName}` : encodedDocumentName
}

export function linkElementParams(payload: OmniOutlinerLinkElements) {
  const { focus, row } = payload

  return {
    ...(focus ? { focus } : {}),
    ...(row ? { row } : {}),
  }
}

export function omniOutlinerQuery(params: Record<string, unknown>) {
  return qs(params)
}

function encodeOmniOutlinerPath(path: string) {
  return path
    .split('/')
    .filter(Boolean)
    .map(segment => encodeURIComponent(segment))
    .join('/')
}
