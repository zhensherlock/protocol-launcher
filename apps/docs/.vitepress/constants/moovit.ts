export const nearbyParams = {
  lat: 40.758896,
  lon: -73.98513,
  partner_id: 'YOUR_APP_NAME',
} as const

export const directionsParams = {
  dest_lat: 40.758896,
  dest_lon: -73.98513,
  dest_name: 'Times Square',
  partner_id: 'YOUR_APP_NAME',
} as const

export const timedDirectionsParams = {
  dest_lat: 40.758896,
  dest_lon: -73.98513,
  dest_name: 'Times Square',
  orig_lat: 40.735845,
  orig_lon: -73.990512,
  orig_name: 'Union Square',
  auto_run: true,
  date: '2019-04-01T18:30:00+02:00',
  partner_id: 'YOUR_APP_NAME',
} as const

export const downloadLinkParams = {
  c: 'YOUR_APP_NAME',
} as const

export const fallbackLinkParams = {
  c: 'YOUR_APP_NAME',
  af_dp: 'moovit://nearby?lat=40.758896&lon=-73.98513&partner_id=YOUR_APP_NAME',
} as const
