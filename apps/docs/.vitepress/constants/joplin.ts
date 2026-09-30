export const openNoteParams = {
  id: '0123456789abcdef0123456789abcdef',
}

export const openFolderParams = {
  id: '0123456789abcdef0123456789abcdef',
}

export const openTagParams = {
  id: '0123456789abcdef0123456789abcdef',
}

export const getCurrentNoteParams = {
  'xSuccess': 'hook://x-callback-url/setCurrentNode'
} as const

export const createNoteParams = {
  'title': 'Meeting notes',
  'body': '# Agenda',
  'xSuccess': 'hook://x-callback-url/setCurrentNode',
  'xError': 'hook://x-callback-url/error'
} as const
