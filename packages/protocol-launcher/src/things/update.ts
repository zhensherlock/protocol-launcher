/**
 * Update to-do command payload definition.
 */
type Update = {
  /**
   * The Things URL scheme authorization token.
   */
  authToken: string

  /**
   * The ID of the to-do to update.
   */
  id: string

  /**
   * The title of the to-do. This will replace the existing title.
   */
  title?: string

  /**
   * The notes of the to-do. This will replace the existing notes.
   */
  notes?: string

  /**
   * Text to add before the existing notes of a to-do.
   */
  prependNotes?: string

  /**
   * Text to add after the existing notes of a to-do.
   */
  appendNotes?: string

  /**
   * Set the when field of a to-do. Possible values: today, tomorrow, evening, someday, a date string, or a date time string.
   */
  when?: string

  /**
   * The deadline to apply to the to-do. Empty string to clear.
   */
  deadline?: string

  /**
   * Comma separated strings corresponding to the titles of tags. Replaces all current tags.
   */
  tags?: string

  /**
   * Comma separated strings corresponding to the titles of tags. Adds the specified tags to a to-do.
   */
  addTags?: string

  /**
   * Set the checklist items of the to-do (maximum of 100), separated by new lines. Will replace all existing checklist items.
   */
  checklistItems?: string

  /**
   * Add checklist items to the front of the list (maximum of 100), separated by new lines.
   */
  prependChecklistItems?: string

  /**
   * Add checklist items to the end of the list (maximum of 100), separated by new lines.
   */
  appendChecklistItems?: string

  /**
   * The ID of a project or area to move the to-do into. Takes precedence over list.
   */
  listId?: string

  /**
   * The title of a project or area to move the to-do into. Ignored if list-id is present.
   */
  list?: string

  /**
   * The ID of a heading within a project to move the to-do to. Takes precedence over heading.
   */
  headingId?: string

  /**
   * The title of a heading within a project to move the to-do to. Ignored if heading-id is present.
   */
  heading?: string

  /**
   * Complete a to-do or set a to-do to incomplete. Default: false.
   */
  completed?: boolean

  /**
   * Cancel a to-do or set a to-do to incomplete. Default: false. Takes priority over completed.
   */
  canceled?: boolean

  /**
   * Whether or not to navigate to and show the updated to-do. Default: false.
   */
  reveal?: boolean

  /**
   * Set to true to duplicate the to-do before updating it. Default: false.
   */
  duplicate?: boolean

  /**
   * Set the creation date for the to-do in the database.
   */
  creationDate?: string

  /**
   * Set the completion date for the to-do in the database.
   */
  completionDate?: string
}

/**
 * Update an existing to-do in Things.
 *
 * @param payload Update to-do command payload.
 * @returns Things update URL.
 * @example
 * update({ id: 'SyJEz273ceSkabUbciM73A', authToken: 'xxx', when: 'today' })
 * // => 'things:///update?id=SyJEz273ceSkabUbciM73A&auth-token=xxx&when=today'
 * @example
 * update({ id: 'SyJEz273ceSkabUbciM73A', authToken: 'xxx', title: 'Buy bread' })
 * // => 'things:///update?id=SyJEz273ceSkabUbciM73A&auth-token=xxx&title=Buy%20bread'
 * @example
 * update({ id: 'SyJEz273ceSkabUbciM73A', authToken: 'xxx', appendNotes: 'Wholemeal bread' })
 * // => 'things:///update?id=SyJEz273ceSkabUbciM73A&auth-token=xxx&append-notes=Wholemeal%20bread'
 * @example
 * update({ id: 'SyJEz273ceSkabUbciM73A', authToken: 'xxx', deadline: '' })
 * // => 'things:///update?id=SyJEz273ceSkabUbciM73A&auth-token=xxx'
 * @link https://culturedcode.com/things/support/articles/2803573/#update
 */
export function update(payload: Update) {
  const {
    id,
    authToken,
    title,
    notes,
    prependNotes,
    appendNotes,
    when,
    deadline,
    tags,
    addTags,
    checklistItems,
    prependChecklistItems,
    appendChecklistItems,
    listId,
    list,
    headingId,
    heading,
    completed = false,
    canceled = false,
    reveal = false,
    duplicate = false,
    creationDate,
    completionDate,
  } = payload

  const params = new URLSearchParams({
    id,
    'auth-token': authToken,
    ...(title ? { title } : {}),
    ...(notes ? { notes } : {}),
    ...(prependNotes ? { 'prepend-notes': prependNotes } : {}),
    ...(appendNotes ? { 'append-notes': appendNotes } : {}),
    ...(when ? { when } : {}),
    ...(deadline ? { deadline } : {}),
    ...(tags ? { tags } : {}),
    ...(addTags ? { 'add-tags': addTags } : {}),
    ...(checklistItems ? { 'checklist-items': checklistItems } : {}),
    ...(prependChecklistItems ? { 'prepend-checklist-items': prependChecklistItems } : {}),
    ...(appendChecklistItems ? { 'append-checklist-items': appendChecklistItems } : {}),
    ...(listId ? { 'list-id': listId } : {}),
    ...(list && !listId ? { list } : {}),
    ...(headingId ? { 'heading-id': headingId } : {}),
    ...(heading && !headingId ? { heading } : {}),
    ...(completed ? { completed: 'true' } : {}),
    ...(canceled ? { canceled: 'true' } : {}),
    ...(reveal ? { reveal: 'true' } : {}),
    ...(duplicate ? { duplicate: 'true' } : {}),
    ...(creationDate ? { 'creation-date': creationDate } : {}),
    ...(completionDate ? { 'completion-date': completionDate } : {}),
  })

  return `things:///update?${params.toString()}`
}
