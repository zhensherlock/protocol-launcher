interface SystemPreferences {
  pane?: string
}

/**
 * Open System Preferences (Settings) app.
 *
 * @param payload - Optional pane identifier.
 * @returns System Preferences open URL.
 * @example
 * systemPreferences()
 * // => 'x-apple.systempreferences:'
 * @example
 * systemPreferences({ pane: 'com.apple.preference.security' })
 * // => 'x-apple.systempreferences:com.apple.preference.security'
 * @example
 * systemPreferences({ pane: 'com.apple.preferences.softwareupdate' })
 * // => 'x-apple.systempreferences:com.apple.preferences.softwareupdate'
 */
export function systemPreferences(payload: SystemPreferences = {}) {
  const { pane = '' } = payload
  return `x-apple.systempreferences:${pane}`
}
