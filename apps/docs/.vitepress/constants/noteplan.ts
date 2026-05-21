export const openNoteDateParams = {
  noteDate: 'today',
}

export const openNoteTitleParams = {
  noteTitle: 'Fleeting Notes#Second Brain',
}

export const openViewParams = {
  name: 'Project Tasks',
  folder: '10 - Projects',
}

export const addTextParams = {
  noteDate: 'today',
  text: '* Hello World',
  mode: 'append',
  openNote: 'yes',
} as const

export const addNoteParams = {
  noteTitle: 'New Note',
  openNote: 'yes',
} as const

export const deleteNoteParams = {
  noteTitle: 'New Note',
}

export const selectTagParams = {
  name: '#noteplan',
}

export const searchTextParams = {
  text: 'noteplan',
}

export const searchFilterParams = {
  filter: 'Upcoming',
}

export const runPluginParams = {
  pluginName: ' Note Statistics',
  command: 'nc',
}

export const installPluginParams = {
  pluginID: 'dwertheimer.Favorites',
}

export const toggleSidebarParams = {
  forceOpen: 'yes',
} as const

export const noteInfoParams = {
  xSuccess: 'sourceapp://x-callback-url',
}
