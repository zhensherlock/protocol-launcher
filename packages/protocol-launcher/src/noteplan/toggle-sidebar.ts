import type { NotePlanXSuccess, NotePlanYesNo } from './shared'
import { notePlanUrl, xSuccessParam } from './shared'

/**
 * ToggleSidebar action payload definition.
 */
type ToggleSidebar = NotePlanXSuccess & {
  /**
   * Force the sidebar to hide/collapse.
   */
  forceCollapse?: NotePlanYesNo

  /**
   * Force the sidebar to show/expand.
   */
  forceOpen?: NotePlanYesNo

  /**
   * Mac only. Animate the sidebar toggle.
   */
  animated?: NotePlanYesNo
}

/**
 * Toggle, show, or hide the NotePlan sidebar.
 *
 * @param payload ToggleSidebar action payload.
 * @returns NotePlan toggleSidebar URL.
 * @example
 * toggleSidebar()
 * // => 'noteplan://x-callback-url/toggleSidebar'
 * @example
 * toggleSidebar({ forceOpen: 'yes' })
 * // => 'noteplan://x-callback-url/toggleSidebar?forceOpen=yes'
 * @link https://help.noteplan.co/article/49-x-callback-url-scheme#toggleSidebar
 */
export function toggleSidebar(payload: ToggleSidebar = {}) {
  const { forceCollapse, forceOpen, animated, xSuccess } = payload

  return notePlanUrl('toggleSidebar', {
    ...(forceCollapse ? { forceCollapse } : {}),
    ...(forceOpen ? { forceOpen } : {}),
    ...(animated ? { animated } : {}),
    ...xSuccessParam(xSuccess),
  })
}
