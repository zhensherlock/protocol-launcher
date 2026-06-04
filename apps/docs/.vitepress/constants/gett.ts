export const rideRequestParams = {
  pickupLatitude: 10.123456,
  pickupLongitude: 20.123456,
  dropoffLatitude: 10.654321,
  dropoffLongitude: 20.654321,
  productId: '00000000-0000-4000-8000-000000000000',
} as const

export const currentPickupRideRequestParams = {
  dropoffLatitude: 10.654321,
  dropoffLongitude: 20.654321,
  productId: '00000000-0000-4000-8000-000000000000',
} as const

export const currentDropoffRideRequestParams = {
  pickupLatitude: 10.123456,
  pickupLongitude: 20.123456,
} as const

export const pickupPoiRideRequestParams = {
  pickupLatitude: 10.123456,
  pickupLongitude: 20.123456,
  pickupPoiName: 'Example Pickup',
  note: 'Meet by entrance B',
} as const
