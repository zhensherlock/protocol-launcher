export const displayMapParams = {
  center: '40.765819,-73.975866',
  zoom: 14,
  views: 'traffic',
} as const

export const streetViewParams = {
  center: '46.414382,10.013988',
  mapmode: 'streetview',
} as const

export const clearViewsParams = {
  views: '',
} as const

export const searchParams = {
  q: 'Pizza',
  center: '37.759748,-122.427135',
} as const

export const searchWithViewsParams = {
  q: 'Steamers Lane Santa Cruz, CA',
  center: '37.782652,-122.410126',
  views: ['satellite', 'traffic'],
  zoom: 15,
} as const

export const transitDirectionsParams = {
  saddr: 'Google Inc, 8th Avenue, New York, NY',
  daddr: 'John F. Kennedy International Airport, Van Wyck Expressway, Jamaica, New York',
  directionsmode: 'transit',
} as const

export const currentLocationDirectionsParams = {
  saddr: '',
  daddr: 'John F. Kennedy International Airport',
  directionsmode: 'driving',
} as const

export const walkingDirectionsParams = {
  saddr: '2025 Garcia Ave, Mountain View, CA, USA',
  daddr: 'Google, 1600 Amphitheatre Parkway, Mountain View, CA, United States',
  center: '37.423725,-122.0877',
  directionsmode: 'walking',
  zoom: 17,
} as const

export const desktopUrlParams = {
  url: 'https://www.google.com/maps/preview/@42.585444,13.007813,6z',
}
