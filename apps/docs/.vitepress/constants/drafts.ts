export const openParams = {
  uuid: 'UUID-TO-VALID-DRAFT',
}

export const openWithTitleParams = {
  title: 'MyDraft/Header Name',
}

export const createParams = {
  text: 'Hello World',
}

export const createWithTagParams = {
  text: 'Hello World',
  tag: ['work', 'important'],
  flagged: true,
}

export const getParams = {
  uuid: 'UUID-TO-VALID-DRAFT',
}

export const getWithRetParamParams = {
  uuid: 'UUID-TO-VALID-DRAFT',
  retParam: 'input',
}

export const searchParams = {
  query: 'meeting',
  tag: 'work',
  folder: 'inbox',
}

export const appendParams = {
  uuid: 'UUID-TO-VALID-DRAFT',
  text: 'TEXT-TO-ADD',
}

export const appendWithActionParams = {
  uuid: 'xxx',
  text: 'Suffix',
  action: 'MyAction',
}

export const prependParams = {
  uuid: 'UUID-TO-VALID-DRAFT',
  text: 'TEXT-TO-ADD',
}

export const prependWithTagParams = {
  uuid: 'xxx',
  text: 'Prefix',
  tag: ['work', 'important'],
}

export const captureParams = {
  text: 'Note',
  tag: 'work,important',
}

export const dictateParams = {
  locale: 'en-US',
  save: false,
  xSuccess: 'myapp://callback',
}

export const workspaceParams = {
  name: 'Default',
}

export const runActionParams = {
  text: 'TEXT',
  action: 'VALID-ACTION-NAME',
}

export const quickSearchParams = {
  query: 'QUERY-TEXT',
}

export const arrangeParams = {
  text: 'unsorted list',
  retParam: 'input',
  xSuccess: 'myapp://callback',
}

export const actionSearchParams = {
  query: 'QUERY-TEXT',
}

export const commandPaletteParams = {
  query: 'QUERY-TEXT',
}

export const getCurrentDraftParams = {
  xSuccess: 'myapp://callback',
}

export const loadActionBarGroupParams = {
  name: 'GROUP-NAME',
}

export const loadActionGroupParams = {
  name: 'GROUP-NAME',
}

export const replaceRangeParams = {
  uuid: 'UUID-TO-VALID-DRAFT',
  text: 'TEXT-TO-INSERT',
  start: 0,
  length: 10,
}

export const scanDocumentParams = {
  save: false,
  retParam: 'input',
  xSuccess: 'myapp://callback',
}
