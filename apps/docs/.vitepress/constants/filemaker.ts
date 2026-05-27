export const openHostedFileParams = {
  address: 'sales.example.com',
  filename: 'My Addresses.fmp12',
}

export const openDocumentsFileParams = {
  address: '~',
  filename: 'Clients',
}

export const openVersionedFileParams = {
  version: 22,
  address: 'sales.example.com',
  filename: 'My Addresses',
}

export const runScriptParams = {
  address: '~',
  filename: 'Clients',
  script: 'ListClients',
}

export const runScriptWithParams = {
  address: 'sales.example.com',
  filename: 'Clients',
  script: 'ListClients',
  param: 'TopClients',
  option: 3,
  variables: [{ name: 'NumberToList', value: 10 }],
}

export const runScriptOpenFileParams = {
  address: '$',
  filename: 'Clients',
  script: 'ListClients',
}
