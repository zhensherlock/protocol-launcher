export const openNoteParams = {
  vault: 'My Vault',
  file: 'Notes/Meeting.md',
}

export const newNoteParams = {
  vault: 'My Vault',
  name: 'New Note',
  content: 'Hello World',
}

export const searchParams = {
  vault: 'My Vault',
  query: 'meeting notes',
}

export const insertParams = {
  vault: 'My Vault',
  content: '## Heading',
}

export const commandParams = {
  vault: 'My Vault',
  id: 'editor:save-file',
}

export const optionsParams = {
  vault: 'My Vault',
}

export const settingsParams = {
  vault: 'My Vault',
  page: 'editor',
}

export const dailyNoteParams = {
  'vault': 'My Vault',
  'content': 'Daily notes',
  'append': true
} as const

export const uniqueNoteParams = {
  'vault': 'My Vault',
  'content': 'Hello World'
} as const

export const hookGetAddressParams = {
  'xSuccess': 'hook://x-callback-url/setCurrentNode'
} as const
