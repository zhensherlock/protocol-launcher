/**
 * Open the OmniFocus Inbox.
 *
 * @returns OmniFocus Inbox URL.
 * @example
 * openInbox()
 * // => 'omnifocus:///inbox'
 * @link https://inside.omnifocus.com/url-schemes
 */
export function openInbox() {
  return 'omnifocus:///inbox'
}

/**
 * Open the OmniFocus Flagged perspective.
 *
 * @returns OmniFocus Flagged URL.
 * @example
 * openFlagged()
 * // => 'omnifocus:///flagged'
 * @link https://inside.omnifocus.com/url-schemes
 */
export function openFlagged() {
  return 'omnifocus:///flagged'
}

/**
 * Open the OmniFocus Projects perspective.
 *
 * @returns OmniFocus Projects URL.
 * @example
 * openProjects()
 * // => 'omnifocus:///projects'
 * @link https://inside.omnifocus.com/url-schemes
 */
export function openProjects() {
  return 'omnifocus:///projects'
}

/**
 * Open the OmniFocus Tags perspective.
 *
 * @returns OmniFocus Tags URL.
 * @example
 * openTags()
 * // => 'omnifocus:///tags'
 * @link https://inside.omnifocus.com/url-schemes
 */
export function openTags() {
  return 'omnifocus:///tags'
}

/**
 * Open the OmniFocus Forecast perspective.
 *
 * @returns OmniFocus Forecast URL.
 * @example
 * openForecast()
 * // => 'omnifocus:///forecast'
 * @link https://inside.omnifocus.com/url-schemes
 */
export function openForecast() {
  return 'omnifocus:///forecast'
}

/**
 * Open the OmniFocus past Forecast view.
 *
 * @returns OmniFocus past Forecast URL.
 * @example
 * openPast()
 * // => 'omnifocus:///past'
 * @link https://inside.omnifocus.com/url-schemes
 */
export function openPast() {
  return 'omnifocus:///past'
}

/**
 * Open the OmniFocus today Forecast view.
 *
 * @returns OmniFocus today Forecast URL.
 * @example
 * openToday()
 * // => 'omnifocus:///today'
 * @link https://inside.omnifocus.com/url-schemes
 */
export function openToday() {
  return 'omnifocus:///today'
}

/**
 * Open the OmniFocus soon Forecast view.
 *
 * @returns OmniFocus soon Forecast URL.
 * @example
 * openSoon()
 * // => 'omnifocus:///soon'
 * @link https://inside.omnifocus.com/url-schemes
 */
export function openSoon() {
  return 'omnifocus:///soon'
}

/**
 * Open a custom OmniFocus perspective.
 *
 * @param payload Perspective payload.
 * @returns OmniFocus custom perspective URL.
 * @example
 * openPerspective({ name: 'Due Soon' })
 * // => 'omnifocus:///perspective/Due%20Soon'
 * @link https://inside.omnifocus.com/url-schemes
 */
export function openPerspective(payload: { name: string }) {
  const { name } = payload

  return `omnifocus:///perspective/${encodeURIComponent(name)}`
}
