import { qs } from '@protocol-launcher/shared'

/**
 * Tab options for project view.
 */
type Tab = 'characters' | 'locations' | 'scenes' | 'plots'

/**
 * Open project command payload definition.
 */
type Project = {
  /**
   * The title of the project to open.
   */
  title?: string

  /**
   * The identifier of the project to open.
   */
  id?: string

  /**
   * The tab to open within the project.
   */
  tab?: Tab
}

/**
 * Open an existing project in Story Planner.
 *
 * @param payload Open project command payload.
 * @returns Story Planner project URL.
 * @example
 * project({ title: 'The Master Cat' })
 * // => 'storyplanner://x-callback-url/project?title=The%20Master%20Cat'
 * @example
 * project({ id: 'abc123' })
 * // => 'storyplanner://x-callback-url/project?id=abc123'
 * @example
 * project({ title: 'My Novel', tab: 'characters' })
 * // => 'storyplanner://x-callback-url/project?title=My%20Novel&tab=characters'
 * @example
 * project({ id: 'xyz789', tab: 'scenes' })
 * // => 'storyplanner://x-callback-url/project?id=xyz789&tab=scenes'
 * @link https://literautas.com/es/apps/story-planner/x-callback-url/
 */
export function project(payload: Project = {}) {
  const { title, id, tab } = payload

  const params = qs({
    ...(title ? { title } : {}),
    ...(id ? { id } : {}),
    ...(tab ? { tab } : {}),
  })

  return `storyplanner://x-callback-url/project${params}`
}
