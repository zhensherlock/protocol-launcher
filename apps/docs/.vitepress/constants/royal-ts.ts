export const cliCommandParams = {
  scope: 'action',
  command: 'connect',
  name: 'QNAP (SSH)',
}

export const connectParams = {
  name: 'QNAP (SSH)',
}

export const legacyConnectParams = {
  protocolIdentifier: 'rdp',
  uri: '192.168.5.16',
  using: 'uri',
} as const

export const legacyCredentialParams = {
  protocolIdentifier: 'rdp',
  auth: {
    username: 'admin',
  },
  uri: 'Web Server 1',
  using: 'name',
} as const

export const legacyDisconnectParams = {
  protocolIdentifier: 'rdp',
  uri: 'Web Server 1',
  using: 'name',
} as const

export const legacyAdHocParams = {
  protocolIdentifier: 'rdp',
  uri: '192.168.5.16',
  using: 'adhoc',
  action: 'connect',
  properties: {
    Description: 'Connected using URI',
    ColorDepth: 8,
  },
} as const
