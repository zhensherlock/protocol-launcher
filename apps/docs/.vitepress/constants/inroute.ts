export const coordinatesParams = {
  optimize: true,
  locations: [
    { name: 'Lazy K’s', latitude: 47.648434, longitude: -121.914307 },
    { name: 'Greek Food', latitude: 47.739555, longitude: -121.985924 },
  ],
} as const

export const searchParams = {
  optimize: true,
  locations: [
    { name: 'Lazy K’s', search: 'Lazy K’, Carnation WA 98014' },
    { name: 'Greek Food', search: '15410 Main St NE, Duvall WA 98019' },
  ],
} as const

export const viewParams = {
  geo: '48.8582,2.2946',
} as const

export const routeParams = {
  geo: '48.8582,2.2946',
} as const

export const returnToCallerParams = {
  geo: '48.8582,2.2946',
  backUrl: 'myapp://',
} as const
