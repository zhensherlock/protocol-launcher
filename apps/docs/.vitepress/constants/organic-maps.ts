export const showSharedPointParams = {
  code: 'o4B4pYZsRs',
  title: 'Zoo_Zürich',
} as const

export const showMapParams = {
  points: [
    { ll: '22.17319,-159.65687', title: 'Kalalau Camping' },
    { ll: '22.17168,-159.66096', title: 'Dream Beach' },
    { ll: '22.17182,-159.65776' },
  ],
} as const

export const routeParams = {
  start: { ll: '50.183933,8.942871', address: 'Start Point' },
  destination: { ll: '49.998912,8.278198', address: 'EndPoint' },
  type: 'vehicle',
} as const

export const directionsParams = {
  origin: '52.5200,13.4050',
  originName: 'Warehouse Berlin',
  destination: '52.5163,13.3777',
  destinationName: 'Customer',
  waypoints: ['52.5304,13.3850', '52.5450,13.3920'],
  waypointNames: ['Pickup 1', 'Pickup 2'],
  mode: 'drive',
} as const

export const navigateParams = {
  origin: 'currentLocation',
  destination: '52.5163,13.3777',
  destinationName: 'Customer',
  waypoints: ['52.5304,13.3850', '52.5450,13.3920'],
  waypointCallbacks: ['delivery://stop/1', 'delivery://stop/2'],
  callback: 'delivery://route/complete',
  mode: 'drive',
} as const

export const searchParams = {
  cll: '47.3813,8.5889',
  locale: 'de',
  query: 'Mame',
} as const

export const geoParams = {
  coordinates: '35.341714,33.32231',
  title: 'Custom Title',
} as const

export const crosshairParams = {
  cll: '47.3813,8.5889',
  appname: 'Google Maps',
} as const

export const androidIntentParams = {
  packageName: 'app.organicmaps',
} as const
