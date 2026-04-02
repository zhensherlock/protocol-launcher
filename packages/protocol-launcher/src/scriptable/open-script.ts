import { qs } from '@protocol-launcher/shared'

/**
 * Open script payload definition.
 */
type OpenScript = {
  /**
   * The name of the script to open. Must be URL encoded.
   *
   * @example 'Example'
   */
  scriptName: string
  /**
   * Automatically open the script settings.
   *
   * @default false
   */
  openSettings?: boolean
}

/**
 * Open an existing script in Scriptable.
 *
 * @param payload Open script payload.
 * @returns Scriptable open script URL.
 * @example
 * openScript({
 *   scriptName: 'Example',
 * })
 * // => 'scriptable:///open/Example'
 * @example
 * openScript({
 *   scriptName: 'Example',
 *   openSettings: true,
 * })
 * // => 'scriptable:///open/Example?openSettings=true'
 * @link https://docs.scriptable.app/urlscheme/
 */
export function openScript(payload: OpenScript) {
  const { scriptName, openSettings } = payload
  const params = qs({
    ...(openSettings ? { openSettings: String(openSettings) } : {}),
  })

  return `scriptable:///open/${scriptName}${params}`
}
