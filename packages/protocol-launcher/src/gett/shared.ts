import { qs } from '@protocol-launcher/shared'

export const GETT_CURRENT_LOCATION = 'my_location'

export type GettCoordinate = string | number

export type GettCurrentLocation = typeof GETT_CURRENT_LOCATION

export type GettPickupFields =
  | {
      /**
       * Set the current user location as pickup.
       */
      pickup: GettCurrentLocation
      pickupLatitude?: never
      pickupLongitude?: never
      pickupPoiName?: never
    }
  | {
      pickup?: never
      /**
       * The latitude coordinate for pickup. Serialized as `pickup_latitude`.
       */
      pickupLatitude?: GettCoordinate
      /**
       * The longitude coordinate for pickup. Serialized as `pickup_longitude`.
       */
      pickupLongitude?: GettCoordinate
      /**
       * The POI name for pickup. Serialized as `pickup_poi_name`.
       */
      pickupPoiName?: string
    }

export type GettDropoffFields =
  | {
      /**
       * Set the current user location as dropoff.
       */
      dropoff: GettCurrentLocation
      dropoffLatitude?: never
      dropoffLongitude?: never
    }
  | {
      dropoff?: never
      /**
       * The latitude coordinate for dropoff. Serialized as `dropoff_latitude`.
       */
      dropoffLatitude?: GettCoordinate
      /**
       * The longitude coordinate for dropoff. Serialized as `dropoff_longitude`.
       */
      dropoffLongitude?: GettCoordinate
    }

export interface GettRideRequestBasePayload {
  /**
   * The client ID. Serialized as `client_id`.
   */
  clientId?: string

  /**
   * Product identifier. Serialized as `product_id`.
   */
  productId?: string

  /**
   * A note to the driver.
   */
  note?: string
}

export type GettRideRequestPayload = GettRideRequestBasePayload & GettPickupFields & GettDropoffFields

export type GettRideRequestWithCurrentPickupPayload = GettRideRequestBasePayload & GettDropoffFields

export type GettRideRequestWithCurrentDropoffPayload = GettRideRequestBasePayload & GettPickupFields

export function gettRideRequestParams(payload: GettRideRequestPayload) {
  const {
    clientId,
    productId,
    pickup,
    pickupLatitude,
    pickupLongitude,
    pickupPoiName,
    dropoff,
    dropoffLatitude,
    dropoffLongitude,
    note,
  } = payload

  return {
    pickup,
    pickup_latitude: pickupLatitude,
    pickup_longitude: pickupLongitude,
    pickup_poi_name: pickupPoiName,
    dropoff,
    dropoff_latitude: dropoffLatitude,
    dropoff_longitude: dropoffLongitude,
    product_id: productId,
    client_id: clientId,
    note,
  }
}

export function gettOrderUrl(params: Record<string, unknown>) {
  const query = qs(params)

  return `gett://order${query || '?'}`
}
