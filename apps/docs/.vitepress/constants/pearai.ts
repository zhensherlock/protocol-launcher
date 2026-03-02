export const openFileParams = (isWindows: boolean) => {
  return {
    path: isWindows ? 'C:\\Windows\\System32\\drivers\\etc\\hosts' : '/etc/hosts',
    line: 1,
    column: 2,
    openInNewWindow: true,
  }
}

export const openFolderParams = (isWindows: boolean) => {
  return {
    path: isWindows ? 'C:\\Windows\\System32\\drivers\\etc' : '/etc',
    openInNewWindow: true,
  }
}

export const openRemoteParams = {
  type: 'ssh-remote',
  host: 'root@172.18.105.209:22',
  path: '/code/my-project',
}

export const cloneProjectParams = {
  repo: 'https://github.com/zhensherlock/protocol-launcher',
}

export const openSettingsParams = {
  path: 'terminal.integrated.suggest.enabled',
}

export const openExtensionParams = {
  id: 'esbenp.prettier-vscode',
}
