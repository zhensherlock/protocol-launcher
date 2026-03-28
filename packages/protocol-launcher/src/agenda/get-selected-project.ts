/**
 * Open the selected project in Agenda.
 *
 * @returns Agenda get selected project URL.
 * @example
 * getSelectedProject()
 * // => 'agenda://x-callback-url/get-selected-project'
 * @link https://agenda.community/t/x-callback-url-support-and-reference/27253
 */
export function getSelectedProject() {
  return 'agenda://x-callback-url/get-selected-project'
}
