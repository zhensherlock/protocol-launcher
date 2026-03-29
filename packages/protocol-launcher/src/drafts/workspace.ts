import { qs } from '@protocol-launcher/shared'

/**
 * Workspace action payload definition.
 */
type Workspace = {
  /**
   * Name of a saved workspace to load. Use "Default" as name to clear filters and load the default workspace.
   */
  name: string
}

/**
 * Open drafts directly the draft list with a named workspace selected.
 *
 * @param payload Workspace action payload.
 * @returns Drafts workspace URL.
 * @example
 * workspace({ name: 'WORKSPACE-NAME' })
 * // => 'drafts:///workspace?name=WORKSPACE-NAME'
 * @example
 * workspace({ name: 'Default' })
 * // => 'drafts:///workspace?name=Default'
 * @link https://docs.getdrafts.com/docs/automation/urlschemes
 */
export function workspace(payload: Workspace) {
  const { name } = payload

  const params = qs({
    name,
  })

  return `drafts:///workspace${params}`
}
