import { qs } from '@protocol-launcher/shared'

/**
 * Run code payload definition.
 */
type RunCode = {
  /**
   * The Python code to execute.
   *
   * @example 'import sys; print(sys.version)'
   */
  code: string
  /**
   * The URL to open when a script was executed successfully.
   * Passes the output (stdout + stderr) to a result parameter.
   */
  xSuccess?: string
  /**
   * The URL to open when a script raised an exception.
   * Passes the exception message to a errorMessage parameter.
   */
  xError?: string
  /**
   * The URL to open when a script was stopped by the user
   * or when the script raised SystemExit or KeyboardInterrupt.
   */
  xCancel?: string
}

/**
 * Run Python code in Pyto using x-callback URL.
 *
 * @param payload Run code payload.
 * @returns Pyto x-callback URL.
 * @example
 * runCode({
 *   code: 'import sys; print(sys.version)',
 * })
 * // => 'pyto://x-callback/?code=import%20sys%3B%20print(sys.version)'
 * @example
 * runCode({
 *   code: 'import sys; print(sys.version)',
 *   xSuccess: 'shortcuts://run-shortcut?name=HandleResult',
 * })
 * // => 'pyto://x-callback/?code=import%20sys%3B%20print(sys.version)&x-success=shortcuts%3A%2F%2Frun-shortcut%3Fname%3DHandleResult'
 * @link https://pyto.readthedocs.io/en/latest/automation.html
 */
export function runCode(payload: RunCode) {
  const { code, xSuccess, xError, xCancel } = payload
  const params = qs({
    code,
    ...(xSuccess ? { 'x-success': xSuccess } : {}),
    ...(xError ? { 'x-error': xError } : {}),
    ...(xCancel ? { 'x-cancel': xCancel } : {}),
  })

  return `pyto://x-callback/${params}`
}
