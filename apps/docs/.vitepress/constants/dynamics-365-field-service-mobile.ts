const appParams = {
  orgUrl: 'contoso.onmicrosoft.com',
  appId: 'e6429eba-2204-40e8-b9dd-fc74791ff2c2',
  tenantId: 'aaaabbbb-0000-cccc-1111-dddd2222eeee',
}

export const entityRecordParams = {
  ...appParams,
  etn: 'bookableresourcebooking',
  id: '00000000-1111-2222-3333-444444444444',
}

export const createEntityRecordParams = {
  ...appParams,
  etn: 'bookableresourcebooking',
}

export const entityListParams = {
  ...appParams,
  etn: 'bookableresourcebooking',
  viewid: '11111111-2222-3333-4444-555555555555',
  viewType: 1039 as const,
}
