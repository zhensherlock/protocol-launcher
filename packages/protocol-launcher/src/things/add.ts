/**
 * Add to-do command payload definition.
 */
type Add = {
  /**
   * The title of the to-do to add. Ignored if titles is specified.
   */
  title?: string

  /**
   * Use instead of title to create multiple to-dos. Takes priority over title and show-quick-entry.
   */
  titles?: string

  /**
   * The text to use for the notes field of the to-do. Maximum unencoded length: 10,000 characters.
   */
  notes?: string

  /**
   * Possible values: today, tomorrow, evening, anytime, someday, a date string, or a date time string.
   */
  when?: string

  /**
   * The deadline to apply to the to-do.
   */
  deadline?: string

  /**
   * Comma separated strings corresponding to the titles of tags.
   */
  tags?: string

  /**
   * Checklist items to add to the to-do (maximum of 100), separated by new lines.
   */
  checklistItems?: string

  /**
   * Possible values: replace-title, replace-notes, or replace-checklist-items.
   */
  useClipboard?: string

  /**
   * The ID of a project or area to add to. Takes precedence over list.
   */
  listId?: string

  /**
   * The title of a project or area to add to. Ignored if list-id is present.
   */
  list?: string

  /**
   * The ID of a heading within a project to add to. Takes precedence over heading.
   */
  headingId?: string

  /**
   * The title of a heading within a project to add to. Ignored if heading-id is present.
   */
  heading?: string

  /**
   * Whether or not the to-do should be set to complete. Default: false.
   */
  completed?: boolean

  /**
   * Whether or not the to-do should be set to canceled. Default: false. Takes priority over completed.
   */
  canceled?: boolean

  /**
   * Whether or not to show the quick entry dialog. Ignored if titles is specified. Default: false.
   */
  showQuickEntry?: boolean

  /**
   * Whether or not to navigate to and show the newly created to-do. Default: false.
   */
  reveal?: boolean

  /**
   * The date to set as the creation date for the to-do in the database.
   */
  creationDate?: string

  /**
   * The date to set as the completion date for the to-do in the database.
   */
  completionDate?: string
}

/**
 * Add a to-do in Things.
 *
 * @param payload Add to-do command payload.
 * @returns Things add URL.
 * @example
 * add({ title: 'Book flights' })
 * // => 'things:///add?title=Book%20flights'
 * @example
 * add({ title: 'Buy milk', notes: 'Low fat.', when: 'evening', tags: 'Errand' })
 * // => 'things:///add?title=Buy%20milk&notes=Low%20fat.&when=evening&tags=Errand'
 * @example
 * add({ titles: 'Milk\nBeer\nCheese', list: 'Shopping' })
 * // => 'things:///add?titles=Milk%0ABeer%0ACheese&list=Shopping'
 * @example
 * add({ title: 'Call doctor', when: 'next monday', listId: 'TryhwrjdiHEXfjgNtw81yt' })
 * // => 'things:///add?title=Call%20doctor&when=next%20monday&list-id=TryhwrjdiHEXfjgNtw81yt'
 * @link https://culturedcode.com/things/support/articles/2803573/#add
 */
export function add(payload: Add = {}) {
  const {
    title,
    titles,
    notes,
    when,
    deadline,
    tags,
    checklistItems,
    useClipboard,
    listId,
    list,
    headingId,
    heading,
    completed = false,
    canceled = false,
    showQuickEntry = false,
    reveal = false,
    creationDate,
    completionDate,
  } = payload

  const params = new URLSearchParams({
    ...(title && !titles ? { title } : {}),
    ...(titles ? { titles } : {}),
    ...(notes ? { notes } : {}),
    ...(when ? { when } : {}),
    ...(deadline ? { deadline } : {}),
    ...(tags ? { tags } : {}),
    ...(checklistItems ? { 'checklist-items': checklistItems } : {}),
    ...(useClipboard ? { 'use-clipboard': useClipboard } : {}),
    ...(listId ? { 'list-id': listId } : {}),
    ...(list && !listId ? { list } : {}),
    ...(headingId ? { 'heading-id': headingId } : {}),
    ...(heading && !headingId ? { heading } : {}),
    ...(completed ? { completed: 'true' } : {}),
    ...(canceled ? { canceled: 'true' } : {}),
    ...(showQuickEntry ? { 'show-quick-entry': 'true' } : {}),
    ...(reveal ? { reveal: 'true' } : {}),
    ...(creationDate ? { 'creation-date': creationDate } : {}),
    ...(completionDate ? { 'completion-date': completionDate } : {}),
  })

  return `things:///add${params.size ? `?${params.toString()}` : ''}`
}
