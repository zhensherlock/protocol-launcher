import { qs } from '@protocol-launcher/shared'

/**
 * Run script payload definition.
 */
type RunScript = {
  /**
   * The name of the script to run. Must be URL encoded.
   *
   * @example 'Example'
   */
  scriptName: string
  /**
   * Run the script with the editor shown (useful for viewing console logs).
   *
   * @default false
   */
  openEditor?: boolean
}

/**
 * Run an existing script in Scriptable.
 *
 * @param payload Run script payload.
 * @returns Scriptable run script URL.
 * @example
 * runScript({
 *   scriptName: 'Example',
 * })
 * // => 'scriptable:///run/Example'
 * @example
 * runScript({
 *   scriptName: 'Example',
 *   openEditor: true,
 * })
 * // => 'scriptable:///run/Example?openEditor=true'
 * @link https://docs.scriptable.app/urlscheme/
 */
export function runScript(payload: RunScript) {
  const { scriptName, openEditor } = payload
  const params = qs({
    ...(openEditor ? { openEditor: String(openEditor) } : {}),
  })

  return `scriptable:///run/${scriptName}${params}`
}
