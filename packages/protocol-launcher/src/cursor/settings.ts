type OpenSettings = {
  openInNewWindow?: boolean
}

export function openSettings(payload: OpenSettings = {}) {
  const { openInNewWindow = false } = payload
  return `cursor://settings${openInNewWindow ? '?windowId=_blank' : ''}`
}
