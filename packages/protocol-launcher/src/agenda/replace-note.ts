import { qs } from '@protocol-launcher/shared'

/**
 * Replace note command payload definition.
 */
type ReplaceNote = {
  /**
   * The title of the note.
   */
  title?: string
  /**
   * The identifier of the note.
   */
  identifier?: string
  /**
   * The project title.
   */
  projectTitle?: string
  /**
   * The replacement text.
   *
   * @example 'Replacement Text'
   */
  text: string
  /**
   * Whether to add the note to On the Agenda.
   */
  onTheAgenda?: boolean
  /**
   * The date for the note (natural language or absolute dates).
   */
  date?: string
  /**
   * The start date for the note (natural language or absolute dates).
   */
  startDate?: string
  /**
   * The end date for the note (natural language or absolute dates).
   */
  endDate?: string
  /**
   * Attachment data as base64 encoded string without linebreaks.
   */
  attachment?: string
  /**
   * The filename of the attachment, including file extension.
   */
  filename?: string
  /**
   * The title of the event to link the note to.
   */
  eventTitle?: string
  /**
   * Whether the note should be collapsed.
   */
  collapsed?: boolean
  /**
   * Whether the note should be marked as completed.
   */
  completed?: boolean
  /**
   * Whether the note should be pinned.
   */
  pinned?: boolean
  /**
   * Whether the note should be a footnote.
   */
  footnote?: boolean
  /**
   * Whether to select the updated note in Agenda.
   */
  select?: boolean
  /**
   * The display style of the attachment.
   */
  displayStyle?: 'full-width' | 'thumbnail' | 'thumbnail-with-details' | 'inline'
  /**
   * The size at which a full-width attachment is displayed.
   */
  displaySize?: '25' | '50' | '75' | '100' | 'tiny' | 'small' | 'medium' | 'large'
}

/**
 * Replace the content of a note.
 *
 * @param payload Replace note command payload.
 * @returns Agenda replace note URL.
 * @example
 * replaceNote({ title: 'Some Note', text: 'Replacement Text' })
 * // => 'agenda://x-callback-url/replace-note?title=Some%20Note&text=Replacement%20Text'
 * @example
 * replaceNote({ identifier: 'note-123', text: 'New content' })
 * // => 'agenda://x-callback-url/replace-note?identifier=note-123&text=New%20content'
 * @link https://agenda.community/t/x-callback-url-support-and-reference/27253
 */
export function replaceNote(payload: ReplaceNote) {
  const {
    title,
    identifier,
    projectTitle,
    text,
    onTheAgenda,
    date,
    startDate,
    endDate,
    attachment,
    filename,
    eventTitle,
    collapsed,
    completed,
    pinned,
    footnote,
    select,
    displayStyle,
    displaySize,
  } = payload

  const params = qs({
    ...(title ? { title } : {}),
    ...(identifier ? { identifier } : {}),
    ...(projectTitle ? { 'project-title': projectTitle } : {}),
    text,
    ...(onTheAgenda !== undefined ? { 'on-the-agenda': onTheAgenda } : {}),
    ...(date ? { date } : {}),
    ...(startDate ? { 'start-date': startDate } : {}),
    ...(endDate ? { 'end-date': endDate } : {}),
    ...(attachment ? { attachment } : {}),
    ...(filename ? { filename } : {}),
    ...(eventTitle ? { 'event-title': eventTitle } : {}),
    ...(collapsed !== undefined ? { collapsed } : {}),
    ...(completed !== undefined ? { completed } : {}),
    ...(pinned !== undefined ? { pinned } : {}),
    ...(footnote !== undefined ? { footnote } : {}),
    ...(select !== undefined ? { select } : {}),
    ...(displayStyle ? { 'display-style': displayStyle } : {}),
    ...(displaySize ? { 'display-size': displaySize } : {}),
  })

  return `agenda://x-callback-url/replace-note${params}`
}
