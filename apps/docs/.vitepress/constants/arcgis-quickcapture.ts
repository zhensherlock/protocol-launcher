const itemID = 'aabda4a5e36d42c2bcf1c479fe01e5e3'
const buttonID = '0c59c9d9-9b51-46b3-bb81-21149e6fddb4'

export const launchUrlSchemeParams = {
  itemID,
  userInputs: { '001': 'Alice' },
} as const

export const launchAppLinkParams = {
  itemID,
  userInputs: { '001': 'Alice' },
} as const

export const openProjectParams = {
  itemID,
  center: '37.8199,-122.4783,20',
} as const

export const openPortalParams = {
  portalUrl: 'https://myorg.arcgis.com',
  externalBrowserSignIn: true,
} as const

export const pressButtonParams = {
  itemID,
  buttonID,
  fields: { diameter: '20' },
  callback: 'https://survey123.arcgis.app',
} as const

export const populateUserInputParams = {
  itemID,
  userInputs: {
    '001': 'Alice',
    '002': 'Zone5',
  },
} as const
