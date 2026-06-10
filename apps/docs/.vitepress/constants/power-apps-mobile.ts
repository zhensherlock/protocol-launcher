export const modelDrivenAppParams = {
  orgUrl: 'contoso.onmicrosoft.com',
  appId: 'e6429eba-2204-40e8-b9dd-fc74791ff2c2',
  tenantId: 'aaaabbbb-0000-cccc-1111-dddd2222eeee',
  environmentId: 'g67tfyufhkjfg',
  appLogicalName: 'cr12_e567',
  restartApp: true,
  forceOfflineDataSync: true,
}

export const entityRecordParams = {
  ...modelDrivenAppParams,
  etn: 'account',
  id: '00000000-1111-2222-3333-444444444444',
}

export const entityListParams = {
  ...modelDrivenAppParams,
  etn: 'account',
  viewid: '11111111-2222-3333-4444-555555555555',
  viewType: 1039 as const,
}

export const canvasAppParams = {
  appId: '11111111-2222-3333-4444-555555555555',
  tenantId: 'aaaabbbb-0000-cccc-1111-dddd2222eeee',
  environmentId: 'g67tfyufhkjfg',
  restartApp: true,
}

export const wrappedAppParams = {
  appId: '11111111-2222-3333-4444-555555555555',
  tenantId: 'aaaabbbb-0000-cccc-1111-dddd2222eeee',
  restartApp: true,
}
