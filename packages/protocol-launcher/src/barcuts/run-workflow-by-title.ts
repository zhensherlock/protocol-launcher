import type { BarCutsWorkflowInputPayload } from './shared'
import { barCutsRunWorkflowUrl } from './shared'

/**
 * Run a local BarCuts workflow by workflow title.
 */
type RunWorkflowByTitle = BarCutsWorkflowInputPayload & {
  /**
   * Workflow title documented by BarCuts as the `title` parameter.
   */
  title: string
}

/**
 * Run a BarCuts workflow by its title.
 *
 * @param payload Workflow title payload.
 * @returns BarCuts run-workflow URL.
 * @example
 * runWorkflowByTitle({ title: 'Sub menu ≫ Workflow 3' })
 * // => 'barcuts://run-workflow?title=Sub%20menu%20%E2%89%AB%20Workflow%203'
 *
 * @example
 * runWorkflowByTitle({ title: 'Workflow 1', input: 'My input text!' })
 * // => 'barcuts://run-workflow?title=Workflow%201&input=My%20input%20text%21'
 * @link https://docs.actions.work/barcuts/url-scheme-run-workflow/
 */
export function runWorkflowByTitle(payload: RunWorkflowByTitle) {
  const { title, input } = payload

  return barCutsRunWorkflowUrl({ title, input })
}
