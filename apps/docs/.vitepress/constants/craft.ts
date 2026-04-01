export const openDocumentParams = {
  spaceId: 'abc-123',
  blockId: 'xyz-789',
}

export const createDocumentParams = {
  spaceId: 'abc-123',
  title: 'My Note',
  content: 'Hello **World**',
  folderId: '',
}

export const createBlockParams = {
  parentBlockId: 'doc-123',
  spaceId: 'abc-123',
  content: 'New content',
  index: 9999,
}

export const openDailyNoteParams = {
  spaceId: 'abc-123',
  type: 'today' as const,
}

export const openSearchParams = {
  spaceId: 'abc-123',
  query: 'vacation plans',
}

export const openSpaceParams = {
  spaceId: 'abc-123',
  tab: 'calendar' as const,
}
