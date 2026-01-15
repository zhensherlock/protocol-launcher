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
