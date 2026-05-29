import { qs } from '@protocol-launcher/shared'

export type UpNoteBoolean = boolean

export type UpNoteViewMode =
  | 'all_notes'
  | 'quick_access'
  | 'templates'
  | 'trash'
  | 'notebooks'
  | 'tags'
  | 'filters'
  | 'all_notebooks'
  | 'all_tags'

export function upNoteUrl(action: string, params: Record<string, unknown> = {}) {
  return `upnote://x-callback-url/${action}${qs(params)}`
}

export function upNoteViewUrl(params: Record<string, unknown> = {}) {
  const query = qs(params)

  return `upnote://x-callback-url/view${query || '?'}`
}
