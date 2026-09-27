import { qs } from '@protocol-launcher/shared'
import type { Callbacks } from './callbacks'
import { callbackParams } from './callbacks'

type OpenWorkspace = Callbacks & {
  /** Tag to open as a workspace. */
  name: string
}

/**
 * Open a Bear tag as a workspace.
 *
 * @param payload Workspace tag.
 * @returns Bear open-workspace URL.
 * @example
 * openWorkspace({ name: 'work' })
 * // => 'bear://x-callback-url/open-workspace?name=work'
 * @link https://bear.app/faq/x-callback-url-scheme-documentation/#open-workspace
 */
export function openWorkspace(payload: OpenWorkspace) {
  return `bear://x-callback-url/open-workspace${qs({ name: payload.name, ...callbackParams(payload) })}`
}
