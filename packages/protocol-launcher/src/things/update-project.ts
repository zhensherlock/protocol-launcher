import { qs } from '@protocol-launcher/shared'

/**
 * Update project command payload definition.
 */
type UpdateProject = {
  /**
   * The Things URL scheme authorization token.
   */
  authToken: string

  /**
   * The ID of the project to update.
   */
  id: string

  /**
   * The title of the project. This will replace the existing title.
   */
  title?: string

  /**
   * The notes of the project. This will replace the existing notes.
   */
  notes?: string

  /**
   * Text to add before the existing notes of a project.
   */
  prependNotes?: string

  /**
   * Text to add after the existing notes of a project.
   */
  appendNotes?: string

  /**
   * Set the when field of a project. Possible values: today, tomorrow, evening, someday, a date string, or a date time string.
   */
  when?: string

  /**
   * The deadline to apply to the project. Empty string to clear.
   */
  deadline?: string

  /**
   * Comma separated strings corresponding to the titles of tags. Replaces all current tags.
   */
  tags?: string

  /**
   * Comma separated strings corresponding to the titles of tags. Adds the specified tags to a project.
   */
  addTags?: string

  /**
   * The ID of an area to move the project into. Takes precedence over area.
   */
  areaId?: string

  /**
   * The title of an area to move the project into. Ignored if area-id is present.
   */
  area?: string

  /**
   * Complete a project or set a project to incomplete.
   */
  completed?: boolean

  /**
   * Cancel a project or set a project to incomplete. Takes priority over completed.
   */
  canceled?: boolean

  /**
   * Whether or not to navigate to and show the updated project. Default: false.
   */
  reveal?: boolean

  /**
   * Set to true to duplicate the project before updating it. Default: false.
   */
  duplicate?: boolean

  /**
   * Set the creation date for the project in the database.
   */
  creationDate?: string

  /**
   * Set the completion date for the project in the database.
   */
  completionDate?: string
}

/**
 * Update an existing project in Things.
 *
 * @param payload Update project command payload.
 * @returns Things update-project URL.
 * @example
 * updateProject({ id: 'Jvj7EW1fLoScPhaw2JomCT', authToken: 'xxx', when: 'tomorrow' })
 * // => 'things:///update-project?id=Jvj7EW1fLoScPhaw2JomCT&auth-token=xxx&when=tomorrow'
 * @example
 * updateProject({ id: 'Jvj7EW1fLoScPhaw2JomCT', authToken: 'xxx', addTags: 'Important' })
 * // => 'things:///update-project?id=Jvj7EW1fLoScPhaw2JomCT&auth-token=xxx&add-tags=Important'
 * @example
 * updateProject({ id: 'Jvj7EW1fLoScPhaw2JomCT', authToken: 'xxx', deadline: '' })
 * // => 'things:///update-project?id=Jvj7EW1fLoScPhaw2JomCT&auth-token=xxx'
 * @link https://culturedcode.com/things/support/articles/2803573/#update-project
 */
export function updateProject(payload: UpdateProject) {
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
    areaId,
    area,
    completed = false,
    canceled = false,
    reveal = false,
    duplicate = false,
    creationDate,
    completionDate,
  } = payload

  const params = qs({
    id,
    'auth-token': authToken,
    ...(title ? { title } : {}),
    ...(notes ? { notes } : {}),
    ...(prependNotes ? { 'prepend-notes': prependNotes } : {}),
    ...(appendNotes ? { 'append-notes': appendNotes } : {}),
    ...(when ? { when } : {}),
    ...(deadline !== undefined && deadline !== '' ? { deadline } : {}),
    ...(tags ? { tags } : {}),
    ...(addTags ? { 'add-tags': addTags } : {}),
    ...(areaId ? { 'area-id': areaId } : {}),
    ...(area && !areaId ? { area } : {}),
    ...(completed ? { completed: 'true' } : {}),
    ...(canceled ? { canceled: 'true' } : {}),
    ...(reveal ? { reveal: 'true' } : {}),
    ...(duplicate ? { duplicate: 'true' } : {}),
    ...(creationDate ? { 'creation-date': creationDate } : {}),
    ...(completionDate ? { 'completion-date': completionDate } : {}),
  })

  return `things:///update-project${params}`
}
