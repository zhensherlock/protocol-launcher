export const openNoteParams = {
  noteId: 'REPLACE_WITH_NOTE_ID',
  newWindow: false,
}

export const openNotebookParams = {
  notebookId: 'REPLACE_WITH_NOTEBOOK_ID',
}

export const viewTagParams = {
  tag: 'project',
}

export const openFilterParams = {
  filterId: 'REPLACE_WITH_FILTER_ID',
}

export const viewAllNotesParams = {
  mode: 'all_notes' as const,
}

export const viewSearchParams = {
  action: 'search' as const,
  query: 'meeting notes',
}
