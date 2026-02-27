export const openFileParams = (isWindows: boolean) => {
  return {
    path: isWindows ? 'C:\\Windows\\System32\\drivers\\etc\\hosts' : '/etc/hosts',
    line: 1,
    column: 2,
  }
}

export const openFolderParams = (isWindows: boolean) => {
  return {
    path: isWindows ? 'C:\\Windows\\System32\\drivers\\etc' : '/etc',
  }
}

export const openRemoteParams = {
  host: 'root@172.18.105.209:22',
  path: '/code/my-project',
}

export const openSettingsParams = {
  path: 'autosave',
}

export const cloneProjectParams = {
  repo: 'https://github.com/zhensherlock/protocol-launcher',
}

export const openGitCommitParams = {
  sha: '739420c',
  path: '/Users/dev/Documents/protocol-launcher',
}

export const openExtensionParams = {
  id: 'html',
}

export const openAgentParams = {
  prompt: 'Hello World',
}

export const joinAgentParams = {
  id: '12345',
}
