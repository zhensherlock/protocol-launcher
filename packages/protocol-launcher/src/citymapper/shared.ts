import { qs } from '@protocol-launcher/shared'

/**
 * Citymapper directions payload definition.
 */
export interface CitymapperDirectionsPayload {
  /**
   * Destination coordinate formatted as "latitude,longitude".
   */
  endcoord: string

  /**
   * Destination business name or nickname.
   */
  endname?: string

  /**
   * Destination street address.
   */
  endaddress?: string

  /**
   * Start coordinate formatted as "latitude,longitude".
   */
  startcoord?: string

  /**
   * Start point business name or nickname.
   */
  startname?: string

  /**
   * Start point street address.
   */
  startaddress?: string

  /**
   * Arrival date/time in ISO-8601 format. Serialized as `arrival_time`.
   */
  arrivalTime?: string
}

/**
 * Citymapper x-callback-url directions payload definition.
 */
export interface CitymapperXCallbackDirectionsPayload extends CitymapperDirectionsPayload {
  /**
   * User-visible source app name.
   */
  xSource: string

  /**
   * Deep link back into the source app.
   */
  xSuccess: string
}

export function citymapperDirectionsParams(payload: CitymapperDirectionsPayload) {
  const { startcoord, startname, startaddress, endcoord, endname, endaddress, arrivalTime } = payload

  return {
    startcoord,
    startname,
    startaddress,
    endcoord,
    endname,
    endaddress,
    arrival_time: arrivalTime,
  }
}

export function citymapperUrl(base: string, params: Record<string, unknown>) {
  return `${base}${qs(params)}`
}
