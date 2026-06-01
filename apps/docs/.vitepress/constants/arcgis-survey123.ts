const itemID = '36ff9e8c13e042a58cfce4ad87f55d19'

export const launchFieldAppParams = {
  itemID,
  fields: { surname: 'Klauser' },
  center: '37.8199,-122.4783,20',
} as const

export const launchFieldAppLinkParams = {
  itemID,
  fields: { surname: 'Klauser' },
} as const

export const launchWebAppParams = {
  itemID,
  fields: { surname: 'Klauser' },
  center: '37.8199,-122.4783',
} as const

export const launchConnectParams = {
  portalUrl: 'https://www.arcgis.com',
  itemID,
} as const
