import { isUndefined } from '@protocol-launcher/shared'

type OpenFile = {
  path: string
  line?: number
  column?: number
  openInNewWindow?: boolean
}

export function openFile(payload: OpenFile) {
  const { path, line, column, openInNewWindow } = payload
  return `cursor://file${path}${isUndefined(line) ? '' : `:${line}`}${isUndefined(column) ? '' : `:${column}`}${openInNewWindow ? '?windowId=_blank' : ''}`
}
