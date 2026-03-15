import { qs } from '@protocol-launcher/shared'

/**
 * Add project command payload definition.
 */
type AddProject = {
  /**
   * The title of the project.
   */
  title: string

  /**
   * The text to use for the notes field of the project. Maximum unencoded length: 10,000 characters.
   */
  notes?: string

  /**
   * Possible values: today, tomorrow, evening, anytime, someday, a date string, or a date time string.
   */
  when?: string

  /**
   * The deadline to apply to the project.
   */
  deadline?: string

  /**
   * Comma separated strings corresponding to the titles of tags.
   */
  tags?: string

  /**
   * The ID of an area to add to. Takes precedence over area.
   */
  areaId?: string

  /**
   * The title of an area to add to. Ignored if area-id is present.
   */
  area?: string

  /**
   * Titles of to-dos to create inside the project, separated by new lines.
   */
  toDos?: string

  /**
   * Whether or not the project should be set to complete. Default: false.
   */
  completed?: boolean

  /**
   * Whether or not the project should be set to canceled. Default: false. Takes priority over completed.
   */
  canceled?: boolean

  /**
   * Whether or not to navigate into the newly created project. Default: false.
   */
  reveal?: boolean

  /**
   * The date to set as the creation date for the project in the database.
   */
  creationDate?: string

  /**
   * The date to set as the completion date for the project in the database.
   */
  completionDate?: string
}

/**
 * Add a project in Things.
 *
 * @param payload Add project command payload.
 * @returns Things add-project URL.
 * @example
 * addProject({ title: 'Build treehouse', when: 'today' })
 * // => 'things:///add-project?title=Build%20treehouse&when=today'
 * @example
 * addProject({ title: 'Plan Birthday Party', area: 'Family' })
 * // => 'things:///add-project?title=Plan%20Birthday%20Party&area=Family'
 * @example
 * addProject({ title: 'Submit Tax', deadline: 'December 31', areaId: 'Lg8UqVPXo2SbJNiBpDBBQ' })
 * // => 'things:///add-project?title=Submit%20Tax&deadline=December%2031&area-id=Lg8UqVPXo2SbJNiBpDBBQ'
 * @link https://culturedcode.com/things/support/articles/2803573/#add-project
 */
export function addProject(payload: AddProject) {
  const {
    title,
    notes,
    when,
    deadline,
    tags,
    areaId,
    area,
    toDos,
    completed = false,
    canceled = false,
    reveal = false,
    creationDate,
    completionDate,
  } = payload

  const params = qs({
    title,
    ...(notes ? { notes } : {}),
    ...(when ? { when } : {}),
    ...(deadline ? { deadline } : {}),
    ...(tags ? { tags } : {}),
    ...(areaId ? { 'area-id': areaId } : {}),
    ...(area && !areaId ? { area } : {}),
    ...(toDos ? { 'to-dos': toDos } : {}),
    ...(completed ? { completed: 'true' } : {}),
    ...(canceled ? { canceled: 'true' } : {}),
    ...(reveal ? { reveal: 'true' } : {}),
    ...(creationDate ? { 'creation-date': creationDate } : {}),
    ...(completionDate ? { 'completion-date': completionDate } : {}),
  })

  return `things:///add-project${params}`
}
