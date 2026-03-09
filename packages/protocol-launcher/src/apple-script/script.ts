export function addScript(script: string) {
  return `applescript://com.apple.scripteditor?script=${encodeURIComponent(script)}`
}
