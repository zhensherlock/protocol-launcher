import { qs } from '@protocol-launcher/shared'

/**
 * Create note command payload definition.
 */
type CreateNote = {
  /**
   * The title of the note.
   *
   * @example 'New Note'
   */
  title: string
  /**
   * The text content of the note.
   *
   * @example 'Hello World'
   */
  text: string
  /**
   * The project title where the note will be created.
   */
  projectTitle?: string
  /**
   * The identifier of the project.
   */
  identifier?: string
  /**
   * Whether to add the note to On the Agenda.
   */
  onTheAgenda?: boolean
  /**
   * The date for the note (natural language or absolute dates).
   *
   * @example '2018-03-12'
   * @example 'yesterday'
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
   * The template name as shown in template manager.
   */
  templateName?: string
  /**
   * Optional input for template, will replace the \shared_content placeholder.
   */
  templateInput?: string
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
   * Whether to select the created note in Agenda.
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
 * Create a note in the project with the given project title or identifier, optionally from a template.
 *
 * @param payload Create note command payload.
 * @returns Agenda create note URL.
 * @example
 * createNote({ title: 'New Note', text: 'Hello World' })
 * // => 'agenda://x-callback-url/create-note?title=New%20Note&text=Hello%20World'
 * @example
 * createNote({ projectTitle: 'My Project', title: 'New Note', text: 'Hello World', onTheAgenda: true, date: '2018-03-12' })
 * // => 'agenda://x-callback-url/create-note?project-title=My%20Project&title=New%20Note&text=Hello%20World&on-the-agenda=true&date=2018-03-12'
 * @example
 * createNote({ projectTitle: 'Blogposts', title: 'New Post', text: 'Hello World', startDate: 'yesterday', endDate: 'tomorrow' })
 * // => 'agenda://x-callback-url/create-note?project-title=Blogposts&title=New%20Post&text=Hello%20World&start-date=yesterday&end-date=tomorrow'
 * @link https://agenda.community/t/x-callback-url-support-and-reference/27253
 */
export function createNote(payload: CreateNote) {
  const {
    title,
    text,
    projectTitle,
    identifier,
    onTheAgenda,
    date,
    startDate,
    endDate,
    attachment,
    filename,
    eventTitle,
    templateName,
    templateInput,
    collapsed,
    completed,
    pinned,
    footnote,
    select,
    displayStyle,
    displaySize,
  } = payload

  const params = qs({
    ...(projectTitle ? { 'project-title': projectTitle } : {}),
    ...(identifier ? { identifier } : {}),
    title,
    text,
    ...(onTheAgenda !== undefined ? { 'on-the-agenda': onTheAgenda } : {}),
    ...(date ? { date } : {}),
    ...(startDate ? { 'start-date': startDate } : {}),
    ...(endDate ? { 'end-date': endDate } : {}),
    ...(attachment ? { attachment } : {}),
    ...(filename ? { filename } : {}),
    ...(eventTitle ? { 'event-title': eventTitle } : {}),
    ...(templateName ? { 'template-name': templateName } : {}),
    ...(templateInput ? { 'template-input': templateInput } : {}),
    ...(collapsed !== undefined ? { collapsed } : {}),
    ...(completed !== undefined ? { completed } : {}),
    ...(pinned !== undefined ? { pinned } : {}),
    ...(footnote !== undefined ? { footnote } : {}),
    ...(select !== undefined ? { select } : {}),
    ...(displayStyle ? { 'display-style': displayStyle } : {}),
    ...(displaySize ? { 'display-size': displaySize } : {}),
  })

  return `agenda://x-callback-url/create-note${params}`
}
