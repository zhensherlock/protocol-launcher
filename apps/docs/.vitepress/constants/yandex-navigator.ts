export const buildRouteParams = {
  lat_from: '55.74',
  lon_from: '37.60',
  lat_to: '55.76',
  lon_to: '37.64',
} as const

export const buildRouteFromCurrentParams = {
  lat_to: '55.70',
  lon_to: '37.64',
} as const

export const buildRouteWithViaParams = {
  lat_from: '55.75',
  lon_from: '37.58',
  lat_to: '55.75',
  lon_to: '37.64',
  via: [{ lat: '55.75', lon: '37.62' }],
} as const

export const searchParams = {
  text: 'заправка',
} as const

export const showPointParams = {
  lat: 55.77,
  lon: 37.44,
  zoom: 12,
  'no-balloon': 0,
  desc: 'кафе с wi-fi',
} as const
