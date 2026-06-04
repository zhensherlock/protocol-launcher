export const openWithBackUrlParams = {
  backUrl: 'https://gurumaps.app',
} as const

export const importFileParams = {
  url: 'https://gurumaps.app/example/feature_collection.geojson',
} as const

export const searchParams = {
  q: 'Wybrzeże Kościuszkowskie 20 Warszawa',
  coord: '52.2297,21.0122',
} as const

export const navigateParams = {
  start: '52.2297,21.0122',
  finish: '52.2397,21.0222',
  via: '52.2347,21.0172',
  mode: 'bicycle',
  startNavigation: true,
} as const

export const recordTrackParams = {
  action: 'start',
} as const

export const saveMarkerParams = {
  name: 'MyMarker',
  coord: '52.2297,21.0122',
} as const

export const showPlaceParams = {
  coord: '52.2297,21.0122',
  zoom: 17,
} as const

export const geoParams = {
  coord: '52.2297,21.0122',
} as const
