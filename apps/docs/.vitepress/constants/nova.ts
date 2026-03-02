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

export const cloneProjectParams = {
  url: 'https://github.com/zhensherlock/protocol-launcher.git',
}

export const openExtensionParams = {
  id: 'com.panic.Playdate',
}

export const registerParams = {
  serial: 'NOVA-XXXX-XXXX-XXXX-XXXX-XXXX-X',
}
