/**
 * Open the selected note or project in Agenda.
 *
 * @returns Agenda get selection URL.
 * @example
 * getSelection()
 * // => 'agenda://x-callback-url/get-selection'
 * @link https://agenda.community/t/x-callback-url-support-and-reference/27253
 */
export function getSelection() {
  return 'agenda://x-callback-url/get-selection'
}
