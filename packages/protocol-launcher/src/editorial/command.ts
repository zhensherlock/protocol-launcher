import { qs } from '@protocol-launcher/shared'

/**
 * Run command payload definition.
 */
type RunCommand = {
  /**
   * An editor command (workflow) by name that should be executed.
   */
  command?: string

  /**
   * The input for the first action in the workflow.
   */
  input?: string

  /**
   * A URL to open when the workflow finishes without errors. If the URL contains the placeholder [[output]], it is replaced with the (URL-escaped) output of the last action in the workflow.
   */
  xSuccess?: string

  /**
   * A URL to open when a workflow is cancelled. No additional parameters are appended to this URL.
   */
  xCancel?: string

  /**
   * If used and the workflow generates an error, the error message is not shown. Instead, the given URL is opened with an errorMessage and errorCode parameter appended.
   */
  xError?: string
}

/**
 * Run a workflow/command in Editorial without opening or creating a file.
 *
 * @param payload Run command payload.
 * @returns Editorial run command URL.
 * @example
 * command({ command: 'My Workflow' })
 * // => 'editorial://?command=My%20Workflow'
 * @example
 * command({ command: 'My Workflow', input: 'some input' })
 * // => 'editorial://?command=My%20Workflow&input=some%20input'
 * @example
 * command({ command: 'My Workflow', xSuccess: 'myapp://success' })
 * // => 'editorial://?command=My%20Workflow&x-success=myapp%3A%2F%2Fsuccess'
 * @link https://omz-software.com/editorial/docs/ios/urlscheme.html
 */
export function command(payload: RunCommand = {}) {
  const { command, input, xSuccess, xCancel, xError } = payload

  const params = qs({
    ...(command ? { command } : {}),
    ...(input ? { input } : {}),
    ...(xSuccess ? { 'x-success': xSuccess } : {}),
    ...(xCancel ? { 'x-cancel': xCancel } : {}),
    ...(xError ? { 'x-error': xError } : {}),
  })

  return `editorial://${params}`
}
