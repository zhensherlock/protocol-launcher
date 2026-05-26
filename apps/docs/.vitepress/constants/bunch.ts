export const openParams = {
  bunch: 'Comms',
}

export const openBetaParams = {
  bunch: 'Comms',
  scheme: 'x-bunch-beta' as const,
}

export const openShortcutParams = {
  bunch: 'Comms',
  syntax: 'shortcut' as const,
}

export const openPathParams = {
  bunch: 'WorkBunch',
  syntax: 'path' as const,
}

export const openWithVariablesParams = {
  bunch: 'Default',
  variables: {
    launch: 'TextEdit',
  },
}

export const openCallbackParams = {
  bunch: 'Comms',
  xCallback: true,
  'x-source': 'com.googlecode.iterm2',
}

export const openSuccessParams = {
  bunch: 'Comms',
  'x-success': 'com.brettterpstra.marked2',
  'x-delay': 15,
}

export const closeParams = {
  bunch: 'Comms',
}

export const closePathParams = {
  bunch: 'Comms',
  syntax: 'path' as const,
}

export const toggleParams = {
  bunch: 'Comms',
}

export const togglePathParams = {
  bunch: 'Comms',
  syntax: 'path' as const,
}

export const toggleTagParams = {
  tag: 'Tag1+Tag2',
}

export const editParams = {
  bunch: 'Example',
}

export const editPathParams = {
  bunch: 'Example',
  syntax: 'path' as const,
}

export const rawFileParams = {
  file: '~/MiscBunch.bunch',
}

export const rawTextParams = {
  txt: '(dnd on)',
}

export const setPrefToggleParams = {
  toggleBunches: 1 as const,
}

export const setPrefFolderParams = {
  configDir: '~/Dropbox/Sync/Bunches',
}

export const snippetParams = {
  file: 'useful.snippets',
  fragment: 'Music',
  variables: {
    playlist: 'spotify:playlist:3cSpIL4Q0H3uqdBMbT6c9x',
  },
}

export const snippetPathParams = {
  file: 'useful.snippets',
  fragment: 'Speak',
  syntax: 'path' as const,
  variables: {
    var1: 'foo',
    var2: 'bar baz',
  },
}
