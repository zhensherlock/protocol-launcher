import { launchbarUrl } from './shared'

/**
 * Large Type payload definition.
 */
export type LargeType = {
  /**
   * String that shall be displayed in large type.
   */
  string: string

  /**
   * Optional title displayed above the string.
   */
  title?: string

  /**
   * Optional PostScript name of the display font.
   */
  fontName?: string
}

/**
 * Display arbitrary strings in LaunchBar's Large Type.
 *
 * @param payload Large Type payload.
 * @returns LaunchBar large-type URL.
 * @example
 * largeType({ string: 'LaunchBar 4.3' })
 * // => 'x-launchbar:large-type?string=LaunchBar+4.3'
 * @example
 * largeType({ title: 'Large Type', string: 'Small Example' })
 * // => 'x-launchbar:large-type?title=Large+Type&string=Small+Example'
 * @example
 * largeType({ fontName: 'Times-Bold', string: 'Hello World' })
 * // => 'x-launchbar:large-type?font-name=Times-Bold&string=Hello+World'
 * @link https://www.obdev.at/resources/launchbar/help/URLCommands.html
 */
export function largeType(payload: LargeType) {
  return launchbarUrl('large-type', [
    ['font-name', payload.fontName],
    ['title', payload.title],
    ['string', payload.string],
  ])
}
