import { qs } from '@protocol-launcher/shared'

/**
 * Diarly note identifier.
 */
export type DiarlyNoteIdentifier = {
  /**
   * Unique id of the note.
   */
  id: string

  day?: never
  journal?: never
}

/**
 * Diarly daily entry identifier.
 */
export type DiarlyDailyEntryIdentifier = {
  /**
   * Date of the entry, documented by Diarly as dd-mm-yyyy.
   *
   * @example '01-01-2019'
   */
  day: string

  /**
   * Name or identifier of a journal. Diarly uses the default journal when omitted.
   */
  journal?: string

  id?: never
}

/**
 * Diarly note or daily entry identifier.
 */
export type DiarlyIdentifier = DiarlyNoteIdentifier | DiarlyDailyEntryIdentifier

export function diarlyIdentifierParams(payload: DiarlyIdentifier) {
  if (payload.id !== undefined) {
    return {
      id: payload.id,
    }
  }

  return {
    day: payload.day,
    journal: payload.journal,
  }
}

export function diarlyXCallbackUrl(action: string, params: Record<string, unknown> = {}) {
  return `diarly://x-callback-url/${action}${qs(params)}`
}

export function diarlyUrl(path: string, params: Record<string, unknown> = {}) {
  return `diarly://${path}${qs(params)}`
}
