/**
 * Open the selected note in Agenda.
 *
 * @returns Agenda get selected note URL.
 * @example
 * getSelectedNote()
 * // => 'agenda://x-callback-url/get-selected-note'
 * @link https://agenda.community/t/x-callback-url-support-and-reference/27253
 */
export function getSelectedNote() {
  return 'agenda://x-callback-url/get-selected-note'
}
