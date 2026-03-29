export const openParams = {
  filename: 'myfile.txt',
}

export const openWithRootParams = {
  filename: 'myfile.txt',
  root: 'dropbox' as 'dropbox' | 'local',
}

export const openWithSelectionParams = {
  filename: 'myfile.txt',
  selection: '0-10',
}

export const openWithCommandParams = {
  filename: 'myfile.txt',
  command: 'My Workflow',
}

export const newFileParams = {
  filename: 'newfile.txt',
}

export const newFileWithRootParams = {
  filename: 'newfile.txt',
  root: 'dropbox' as 'dropbox' | 'local',
}

export const newFileWithSelectionParams = {
  filename: 'newfile.txt',
  selection: '0-10',
}

export const newFileWithCommandParams = {
  filename: 'newfile.txt',
  command: 'My Workflow',
}

export const openWebHttpParams = {
  url: 'http://apple.com',
}

export const openWebHttpsParams = {
  url: 'https://google.com',
}

export const commandParams = {
  command: 'My Workflow',
}

export const commandWithInputParams = {
  command: 'My Workflow',
  input: 'some input',
}

export const commandWithSuccessParams = {
  command: 'My Workflow',
  xSuccess: 'myapp://success',
}
