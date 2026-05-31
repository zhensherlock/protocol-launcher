export type BikeRowLinkPayload = {
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

export type BikePathRowLinkPayload = {
  /**
   * File path to the associated outline file.
   */
  path: string

  /**
   * The id of the row that should be selected after activating the link.
   */
  selectedId: string
}

export type BikeRowLink = `bike://${string}`

export type BikeOpenRowLinkPayload = {
  /**
   * Full Bike row link or path row link copied from Bike.
   */
  url: BikeRowLink
}

export function encodeBikeId(id: string) {
  return encodeURIComponent(id)
}

export function encodeBikePath(path: string) {
  return path
    .split('/')
    .filter(Boolean)
    .map(segment => encodeURIComponent(segment))
    .join('/')
}
