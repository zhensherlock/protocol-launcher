export interface MoovitPartnerPayload {
  /**
   * Partner identifier used by Moovit for tracking.
   */
  partner_id: string
}

export interface MoovitNearbyPayload extends MoovitPartnerPayload {
  /**
   * Latitude for the nearby transit search. Moovit uses the user's current location when omitted.
   */
  lat?: number | string

  /**
   * Longitude for the nearby transit search. Moovit uses the user's current location when omitted.
   */
  lon?: number | string
}

export interface MoovitDirectionsPayload extends MoovitPartnerPayload {
  /**
   * Destination latitude.
   */
  dest_lat?: number | string

  /**
   * Destination longitude.
   */
  dest_lon?: number | string

  /**
   * Destination name.
   */
  dest_name?: string

  /**
   * Origin latitude.
   */
  orig_lat?: number | string

  /**
   * Origin longitude.
   */
  orig_lon?: number | string

  /**
   * Origin name.
   */
  orig_name?: string

  /**
   * Automatically run trip planning when supported.
   */
  auto_run?: boolean

  /**
   * Trip date/time in ISO-8601 format.
   */
  date?: string
}

export interface MoovitDownloadLinkPayload {
  /**
   * App name or campaign value for Moovit's documented `c` parameter.
   */
  c: string
}

export interface MoovitFallbackLinkPayload extends MoovitDownloadLinkPayload {
  /**
   * Deep-linked URL to the Moovit app.
   */
  af_dp: string
}
