import type { BarCutsWorkflowInputPayload } from './shared'
import { barCutsRunWorkflowUrl } from './shared'

/**
 * Run a local BarCuts workflow by workflow ID.
 */
type RunWorkflowById = BarCutsWorkflowInputPayload & {
  /**
   * Internal workflow UUID documented by BarCuts as the `id` parameter.
   */
  id: string
}

/**
 * Run a BarCuts workflow by its internal workflow ID.
 *
 * @param payload Workflow ID payload.
 * @returns BarCuts run-workflow URL.
 * @example
 * runWorkflowById({ id: '17620440-E9E8-4B5C-9C7A-9B60C24DD428' })
 * // => 'barcuts://run-workflow?id=17620440-E9E8-4B5C-9C7A-9B60C24DD428'
 *
 * @example
 * runWorkflowById({ id: '17620440-E9E8-4B5C-9C7A-9B60C24DD428', input: 'My input text!' })
 * // => 'barcuts://run-workflow?id=17620440-E9E8-4B5C-9C7A-9B60C24DD428&input=My%20input%20text%21'
 * @link https://docs.actions.work/barcuts/url-scheme-run-workflow/
 */
export function runWorkflowById(payload: RunWorkflowById) {
  const { id, input } = payload

  return barCutsRunWorkflowUrl({ id, input })
}
