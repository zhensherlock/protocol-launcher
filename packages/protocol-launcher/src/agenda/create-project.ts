import { qs } from '@protocol-launcher/shared'

/**
 * Create project command payload definition.
 */
type CreateProject = {
  /**
   * The title of the project.
   *
   * @example 'New Project'
   */
  title: string
  /**
   * The category title where the project will be created.
   */
  categoryTitle?: string
  /**
   * The identifier of the category.
   */
  identifier?: string
  /**
   * Whether to select the created project.
   */
  select?: boolean
  /**
   * The sort order of the notes in the project.
   */
  sortOrder?: 'newest-first' | 'oldest-first'
}

/**
 * Create a project in the category with the given title or identifier.
 *
 * @param payload Create project command payload.
 * @returns Agenda create project URL.
 * @example
 * createProject({ categoryTitle: 'Some Category', title: 'New Project' })
 * // => 'agenda://x-callback-url/create-project?category-title=Some%20Category&title=New%20Project'
 * @example
 * createProject({ identifier: 'category-123', title: 'New Project' })
 * // => 'agenda://x-callback-url/create-project?identifier=category-123&title=New%20Project'
 * @example
 * createProject({ title: 'New Project', select: true, sortOrder: 'oldest-first' })
 * // => 'agenda://x-callback-url/create-project?title=New%20Project&select=true&sort-order=oldest-first'
 * @link https://agenda.community/t/x-callback-url-support-and-reference/27253
 */
export function createProject(payload: CreateProject) {
  const { title, categoryTitle, identifier, select, sortOrder } = payload
  const params = qs({
    ...(categoryTitle ? { 'category-title': categoryTitle } : {}),
    ...(identifier ? { identifier } : {}),
    title,
    ...(select !== undefined ? { select } : {}),
    ...(sortOrder ? { 'sort-order': sortOrder } : {}),
  })

  return `agenda://x-callback-url/create-project${params}`
}
