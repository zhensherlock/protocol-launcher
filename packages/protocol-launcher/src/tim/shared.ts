import { qs } from '@protocol-launcher/shared'

export type TimIdPayload = {
  /**
   * Task or group ID copied from Tim.
   */
  id: string
}

export type TimNotesPayload = {
  /**
   * Optional record notes.
   */
  notes?: string
}

export type TimCreatePayload = {
  /**
   * Optional task or group title.
   */
  title?: string
  /**
   * Optional task or group notes.
   */
  notes?: string
}

export type TimCreateType = 'task' | 'group'

export function timIdUrl(id: string, params: Record<string, unknown> = {}) {
  return `tim://${id}${qs(params)}`
}

export function timCreateUrl(type: TimCreateType, payload: TimCreatePayload = {}) {
  const { title, notes } = payload

  return `tim://create${qs({
    type,
    title,
    notes,
  })}`
}
