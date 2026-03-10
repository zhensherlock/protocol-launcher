type AddScript = {
  /**
   * AppleScript content.
   */
  script: string
}

/**
 * Add AppleScript to Script Editor.
 *
 * @param payload AddScript definition.
 * @returns AppleScript URL.
 * @example
 * addScript({
 *   script: 'tell application "System Events" to display dialog "Hello, World!"',
 * })
 * // => 'applescript://com.apple.scripteditor?script=tell%20application%20%22System%20Events%22%20to%20display%20dialog%20%22Hello,%20World!%22'
 */
export function addScript(payload: AddScript) {
  const { script } = payload
  return `applescript://com.apple.scripteditor?script=${encodeURIComponent(script)}`
}
