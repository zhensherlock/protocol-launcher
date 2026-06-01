import { type TextwellGeneralOptions, textwellUrl } from './shared'

export type TextwellImportActionPlatform = 0 | 1 | 2

/**
 * Import action payload definition.
 */
export type TextwellImportActionPayload = TextwellGeneralOptions & {
  /**
   * Title of the importing action.
   */
  title: string

  /**
   * Source of the importing action.
   */
  source: string

  /**
   * Icon title of the importing action.
   */
  iconTitle: string

  /**
   * Description of the importing action.
   */
  desc: string

  /**
   * Official platform value: `0` for All, `1` for iOS, and `2` for Mac.
   */
  platform: TextwellImportActionPlatform

  /**
   * Set to `1` to make the action show a confirming dialog when it is executed.
   */
  confirming: 1
}

/**
 * Create a new Textwell action from URL parameters.
 *
 * @param payload Import action payload.
 * @returns Textwell importAction URL.
 * @example
 * importAction({
 *   title: 'Hello',
 *   source: 'editor.setText("Hello")',
 *   iconTitle: 'star',
 *   desc: 'Create hello text',
 *   platform: 0,
 *   confirming: 1,
 * })
 * // => 'textwell:///importAction?title=Hello&source=editor.setText(%22Hello%22)&iconTitle=star&desc=Create%20hello%20text&platform=0&confirming=1'
 * @link https://sociomedia.com/textwell/urlschemes/
 */
export function importAction(payload: TextwellImportActionPayload) {
  const { title, source, iconTitle, desc, platform, confirming, ...options } = payload

  return textwellUrl(
    'importAction',
    {
      title,
      source,
      iconTitle,
      desc,
      platform,
      confirming,
    },
    options,
  )
}
