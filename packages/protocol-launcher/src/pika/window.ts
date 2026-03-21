/**
 * Resize window definition.
 */
type ResizeWindow = {
  /**
   * Window width.
   *
   * @example 480
   */
  width: number
  /**
   * Window height.
   *
   * @example 300
   */
  height: number
}

/**
 * Open the About window in Pika.
 *
 * @returns Pika about window URL.
 * @example
 * about()
 * // => 'pika://window/about'
 * @link https://github.com/superhighfives/pika/blob/main/Pika/Views/HelpView.swift
 */
export function about() {
  return 'pika://window/about'
}

/**
 * Open the Help window in Pika.
 *
 * @returns Pika help window URL.
 * @example
 * help()
 * // => 'pika://window/help'
 * @link https://github.com/superhighfives/pika/blob/main/Pika/Views/HelpView.swift
 */
export function help() {
  return 'pika://window/help'
}

/**
 * Open the Preferences window in Pika.
 *
 * @returns Pika preferences window URL.
 * @example
 * preferences()
 * // => 'pika://window/preferences'
 * @link https://github.com/superhighfives/pika/blob/main/Pika/Views/HelpView.swift
 */
export function preferences() {
  return 'pika://window/preferences'
}

/**
 * Resize window in Pika.
 *
 * @param payload Resize window command payload.
 * @returns Pika resize window URL.
 * @example
 * resize({ width: 480, height: 300 })
 * // => 'pika://window/resize/480/300'
 * @link https://github.com/superhighfives/pika/blob/main/Pika/Views/HelpView.swift
 */
export function resize(payload: ResizeWindow) {
  const { width, height } = payload
  return `pika://window/resize/${width}/${height}`
}
