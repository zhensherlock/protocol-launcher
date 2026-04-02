import { qs } from '@protocol-launcher/shared'

/**
 * Add project command payload definition.
 */
type Add = {
  /**
   * The title of the project to create.
   */
  title: string
}

/**
 * Add a new project in Story Planner.
 *
 * @param payload Add project command payload.
 * @returns Story Planner add URL.
 * @example
 * add({ title: 'The Master Cat' })
 * // => 'storyplanner://x-callback-url/add?title=The%20Master%20Cat'
 * @example
 * add({ title: 'My Novel' })
 * // => 'storyplanner://x-callback-url/add?title=My%20Novel'
 * @link https://literautas.com/es/apps/story-planner/x-callback-url/
 */
export function add(payload: Add) {
  const { title } = payload

  const params = qs({
    title,
  })

  return `storyplanner://x-callback-url/add${params}`
}
