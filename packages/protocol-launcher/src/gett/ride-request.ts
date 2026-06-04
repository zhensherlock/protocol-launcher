import {
  GETT_CURRENT_LOCATION,
  type GettRideRequestPayload,
  type GettRideRequestWithCurrentDropoffPayload,
  type GettRideRequestWithCurrentPickupPayload,
  gettOrderUrl,
  gettRideRequestParams,
} from './shared'

/**
 * Create a Gett ride request deep link.
 *
 * @param payload Ride request payload.
 * @returns Gett ride request URL.
 * @example
 * rideRequest({
 *   pickupLatitude: 10.123456,
 *   pickupLongitude: 20.123456,
 *   dropoffLatitude: 10.654321,
 *   dropoffLongitude: 20.654321,
 *   productId: '00000000-0000-4000-8000-000000000000',
 * })
 * // => 'gett://order?pickup_latitude=10.123456&pickup_longitude=20.123456&dropoff_latitude=10.654321&dropoff_longitude=20.654321&product_id=00000000-0000-4000-8000-000000000000'
 *
 * @link https://developer.gett.com/docs/ride-request
 */
export function rideRequest(payload: GettRideRequestPayload = {}) {
  return gettOrderUrl(gettRideRequestParams(payload))
}

/**
 * Create a Gett ride request deep link using the current user location as pickup.
 *
 * @param payload Ride request payload without pickup fields.
 * @returns Gett ride request URL.
 * @example
 * rideRequestWithCurrentPickup({
 *   dropoffLatitude: 10.654321,
 *   dropoffLongitude: 20.654321,
 *   productId: '00000000-0000-4000-8000-000000000000',
 * })
 * // => 'gett://order?pickup=my_location&dropoff_latitude=10.654321&dropoff_longitude=20.654321&product_id=00000000-0000-4000-8000-000000000000'
 *
 * @link https://developer.gett.com/docs/ride-request
 */
export function rideRequestWithCurrentPickup(payload: GettRideRequestWithCurrentPickupPayload = {}) {
  return rideRequest({
    ...payload,
    pickup: GETT_CURRENT_LOCATION,
  })
}

/**
 * Create a Gett ride request deep link using the current user location as dropoff.
 *
 * @param payload Ride request payload without dropoff fields.
 * @returns Gett ride request URL.
 * @example
 * rideRequestWithCurrentDropoff({
 *   pickupLatitude: 10.123456,
 *   pickupLongitude: 20.123456,
 * })
 * // => 'gett://order?pickup_latitude=10.123456&pickup_longitude=20.123456&dropoff=my_location'
 *
 * @link https://developer.gett.com/docs/ride-request
 */
export function rideRequestWithCurrentDropoff(payload: GettRideRequestWithCurrentDropoffPayload = {}) {
  return rideRequest({
    ...payload,
    dropoff: GETT_CURRENT_LOCATION,
  })
}
