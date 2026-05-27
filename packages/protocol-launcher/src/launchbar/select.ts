import { launchbarUrl } from './shared'

type SelectFile = {
  /**
   * File or folder path to select in LaunchBar.
   */
  file: string
  url?: never
  name?: never
  string?: never
  abbreviation?: never
}

type SelectUrl = {
  /**
   * URL to select in LaunchBar.
   */
  url: string

  /**
   * Optional display name for the selected URL.
   */
  name?: string

  file?: never
  string?: never
  abbreviation?: never
}

type SelectString = {
  /**
   * Text string to select in LaunchBar.
   */
  string: string
  file?: never
  url?: never
  name?: never
  abbreviation?: never
}

type SelectAbbreviation = {
  /**
   * Abbreviation to select in LaunchBar.
   */
  abbreviation: string
  file?: never
  url?: never
  name?: never
  string?: never
}

/**
 * Select payload definition.
 */
export type Select = SelectFile | SelectUrl | SelectString | SelectAbbreviation

/**
 * Select arbitrary items in LaunchBar.
 *
 * @param payload Select payload.
 * @returns LaunchBar select URL.
 * @example
 * select({ file: '/Applications' })
 * // => 'x-launchbar:select?file=/Applications'
 * @example
 * select({ url: 'www.obdev.at' })
 * // => 'x-launchbar:select?url=www.obdev.at'
 * @example
 * select({ url: 'www.obdev.at', name: 'Objective Development' })
 * // => 'x-launchbar:select?url=www.obdev.at&name=Objective+Development'
 * @example
 * select({ string: "Hello, I'm a text" })
 * // => 'x-launchbar:select?string=Hello,+I'm+a+text'
 * @example
 * select({ abbreviation: 'SAFARI' })
 * // => 'x-launchbar:select?abbreviation=SAFARI'
 * @link https://www.obdev.at/resources/launchbar/help/URLCommands.html
 */
export function select(payload: Select) {
  return launchbarUrl('select', [
    ['file', payload.file],
    ['url', payload.url],
    ['name', payload.name],
    ['string', payload.string],
    ['abbreviation', payload.abbreviation],
  ])
}
