import { qs } from '@protocol-launcher/shared'

/**
 * ItemLink payload definition.
 */
type ItemLink = {
  /**
   * The long alphanumeric ID of the DEVONthink item.
   */
  uuid: string

  /**
   * Open a PDF to the specified page.
   */
  page?: number

  /**
   * Reveal an item in the item list instead of opening it in a new window.
   */
  reveal?: 1

  /**
   * Jump to the first occurrence of the search string in the specified document.
   */
  search?: string

  /**
   * Jump to the specified time in seconds in a video or audio document.
   */
  time?: number

  /**
   * Open an item link with a line reference, as shown in the official AppleScript example.
   */
  line?: number
}

/**
 * Create a DEVONthink item link.
 *
 * @param payload ItemLink payload.
 * @returns DEVONthink item link URL.
 * @example
 * itemLink({ uuid: '929D101B-35AC-474C-801C-D8818C48DB80', reveal: 1 })
 * // => 'x-devonthink-item://929D101B-35AC-474C-801C-D8818C48DB80?reveal=1'
 * @link https://download.devontechnologies.com/download/devonthink/3.8.2/DEVONthink.help/Contents/Resources/pgs/automation-itemlinks.html
 */
export function itemLink(payload: ItemLink) {
  const { uuid, page, reveal, search, time, line } = payload

  const params = qs({
    ...(page !== undefined ? { page } : {}),
    ...(reveal !== undefined ? { reveal } : {}),
    ...(search ? { search } : {}),
    ...(time !== undefined ? { time } : {}),
    ...(line !== undefined ? { line } : {}),
  })

  return `x-devonthink-item://${uuid}${params}`
}
