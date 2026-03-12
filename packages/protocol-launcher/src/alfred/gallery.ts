/**
 * Open gallery workflow definition.
 */
type OpenGalleryWorkflow = {
  /**
   * Workflow author or category (e.g., 'alanhe', 'alfredapp').
   */
  author: string

  /**
   * Workflow name or identifier (e.g., 'about-mac', '1password').
   */
  workflow: string
}

/**
 * Open Alfred Gallery workflow.
 *
 * @param payload Open gallery workflow definition.
 * @returns Alfred Gallery workflow URL.
 * @example
 * gallery({ author: 'alanhe', workflow: 'about-mac' })
 * // => 'alfred://gallery/workflow/alanhe/about-mac/'
 *
 * @example
 * gallery({ author: 'alfredapp', workflow: '1password' })
 * // => 'alfred://gallery/workflow/alfredapp/1password/'
 */
export function gallery(payload: OpenGalleryWorkflow) {
  const { author, workflow } = payload
  return `alfred://gallery/workflow/${author}/${workflow}/`
}
