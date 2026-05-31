export type BikeOutlinerRowLinkPayload = {
  /**
   * The id of the root node of the document.
   */
  rootId: string

  /**
   * The optional id of the row that should be focused after activating the link.
   */
  focusId?: string

  /**
   * The optional id of the row that should be selected after activating the link.
   */
  selectedId?: string
}

export type BikeOutlinerPathRowLinkPayload = {
  /**
   * File path to the associated outline file.
   */
  path: string

  /**
   * The id of the row that should be selected after activating the link.
   */
  selectedId: string
}

export type BikeOutlinerRowLink = `bike://${string}`

export type BikeOutlinerOpenRowLinkPayload = {
  /**
   * Full Bike Outliner row link or path row link copied from Bike Outliner.
   */
  url: BikeOutlinerRowLink
}

export function encodeBikeOutlinerId(id: string) {
  return encodeURIComponent(id)
}

export function encodeBikeOutlinerPath(path: string) {
  return path
    .split('/')
    .filter(Boolean)
    .map(segment => encodeURIComponent(segment))
    .join('/')
}
