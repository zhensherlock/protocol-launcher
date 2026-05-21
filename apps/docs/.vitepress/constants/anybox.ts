export const pasteParams = {
  tag: 'Reading',
  starred: 'yes' as const,
}

export const saveParams = {
  text: 'https://example.com/article',
  tag: 'Reading',
  starred: 'yes' as const,
  archive: 'webarchive' as const,
}

export const downloadParams = {
  url: 'https://example.com/file.pdf',
  tag: 'Reading',
}

export const saveTabParams = {
  tag: 'Reading',
  starred: 'yes' as const,
  archive: 'pdf' as const,
}

export const quickFindParams = {
  q: 'research',
}

export const xCallbackSaveParams = {
  text: 'helloWorld',
  xSuccess: 'successURL',
  xError: 'errorURL',
}

export const xCallbackPasteParams = {
  xSuccess: 'successURL',
  xError: 'errorURL',
}
