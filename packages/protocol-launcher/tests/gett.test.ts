import { describe, expect, test } from 'vitest'
import { gett } from '../src'

describe('gett', () => {
  test('open should return the Gett URL scheme', () => {
    expect(gett.open()).toBe('gett://')
  })

  test('rideRequest should return the documented empty order URL', () => {
    expect(gett.rideRequest()).toBe('gett://order?')
  })

  test('rideRequest should include pickup, dropoff, and product fields', () => {
    const url = gett.rideRequest({
      pickupLatitude: 10.123456,
      pickupLongitude: 20.123456,
      dropoffLatitude: 10.654321,
      dropoffLongitude: 20.654321,
      productId: '00000000-0000-4000-8000-000000000000',
    })

    expect(url).toBe(
      'gett://order?pickup_latitude=10.123456&pickup_longitude=20.123456&dropoff_latitude=10.654321&dropoff_longitude=20.654321&product_id=00000000-0000-4000-8000-000000000000',
    )
  })

  test('rideRequestWithCurrentPickup should set pickup to my_location', () => {
    const url = gett.rideRequestWithCurrentPickup({
      dropoffLatitude: 10.654321,
      dropoffLongitude: 20.654321,
      productId: '00000000-0000-4000-8000-000000000000',
    })

    expect(url).toBe(
      'gett://order?pickup=my_location&dropoff_latitude=10.654321&dropoff_longitude=20.654321&product_id=00000000-0000-4000-8000-000000000000',
    )
  })

  test('rideRequest should omit optional product fields when not provided', () => {
    const url = gett.rideRequest({
      pickupLatitude: 10.123456,
      pickupLongitude: 20.123456,
      dropoffLatitude: 10.654321,
      dropoffLongitude: 20.654321,
    })

    expect(url).toBe(
      'gett://order?pickup_latitude=10.123456&pickup_longitude=20.123456&dropoff_latitude=10.654321&dropoff_longitude=20.654321',
    )
  })

  test('rideRequestWithCurrentDropoff should set dropoff to my_location', () => {
    const url = gett.rideRequestWithCurrentDropoff({
      pickupLatitude: 10.123456,
      pickupLongitude: 20.123456,
    })

    expect(url).toBe('gett://order?pickup_latitude=10.123456&pickup_longitude=20.123456&dropoff=my_location')
  })

  test('rideRequest should URL-encode pickup POI names and notes', () => {
    const url = gett.rideRequest({
      pickupLatitude: 10.123456,
      pickupLongitude: 20.123456,
      pickupPoiName: 'Example Pickup',
      dropoffLatitude: 10.654321,
      dropoffLongitude: 20.654321,
      clientId: 'client demo',
      note: 'Meet by entrance B',
    })

    expect(url).toBe(
      'gett://order?pickup_latitude=10.123456&pickup_longitude=20.123456&pickup_poi_name=Example%20Pickup&dropoff_latitude=10.654321&dropoff_longitude=20.654321&client_id=client%20demo&note=Meet%20by%20entrance%20B',
    )
  })
})
