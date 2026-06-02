import type { BarCutsCallbackPayload } from './shared'
import { barCutsWorkflowsUrl } from './shared'

/**
 * Query BarCuts for active and global workflows.
 *
 * @param payload Optional x-callback-url payload.
 * @returns BarCuts workflows URL.
 * @example
 * workflows()
 * // => 'barcuts://workflows'
 *
 * @example
 * workflows({ xSuccess: 'my-app://success', xError: 'my-app://failure' })
 * // => 'barcuts://workflows?x-success=my-app%3A%2F%2Fsuccess&x-error=my-app%3A%2F%2Ffailure'
 * @link https://docs.actions.work/barcuts/url-scheme/
 */
export function workflows(payload: BarCutsCallbackPayload = {}) {
  return barCutsWorkflowsUrl(payload)
}
