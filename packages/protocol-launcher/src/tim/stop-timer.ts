/**
 * Stop any running Tim timer.
 *
 * @returns Tim stop timer URL.
 * @example
 * stopTimer()
 * // => 'tim://?action=stop'
 * @link https://tim.neat.software/help
 */
export function stopTimer() {
  return 'tim://?action=stop'
}
