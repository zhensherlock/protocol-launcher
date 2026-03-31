export const openFileParams = {
  path: 'example.com',
  name: 'index.html',
}

export const newFileParams = {
  name: 'foo.txt',
  text: 'bar',
}

export const appendParams = {
  location: 'iCloud' as const,
  name: 'clipboard.txt',
}

export const replaceParams = {
  location: 'iCloud' as const,
  name: 'scratchpad.txt',
  text: 'foo',
}
