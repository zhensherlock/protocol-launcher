type OpenFolder = {
  path: string
  openInNewWindow?: boolean
}

export function openFolder(payload: OpenFolder) {
  const { path, openInNewWindow } = payload
  return `cursor://file${path}${openInNewWindow ? '?windowId=_blank' : ''}`
}
