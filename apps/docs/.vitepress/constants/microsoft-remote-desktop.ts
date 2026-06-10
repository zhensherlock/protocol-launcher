export const subscribeParams = {
  url: 'https://rdweb.wvd.microsoft.com',
}

export const legacyRdpParams = {
  attributes: [
    { name: 'full address', value: '192.0.2.10:3389' },
    { name: 'audiomode', value: 2 },
    { name: 'disable themes', value: 1 },
  ],
} as const

export const avdConnectParams = {
  workspaceId: '1638e073-63b2-46d8-bd84-ea02ea905467',
  resourceid: 'a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1',
  username: 'user@contoso.com',
  version: 0,
} as const
