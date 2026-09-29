export const viewParams = {
  location: { lat: 48.872112, lng: 2.332977 },
  heading: 60,
  pitch: 7,
  title: 'Apple Store Opéra',
}

export const clipboardParams = {
  'location': {
    'lat': 48.872112,
    'lng': 2.332977
  },
  'region': {
    'lat': 48.872112,
    'lng': 2.332977,
    'latSpan': 0.01,
    'lngSpan': 0.01
  },
  'action': 'clipboard',
  'xSuccess': 'myapp://panorama',
  'xError': 'myapp://error',
  'scheme': 'streets'
} as const
