import { bttUrl, type SharedSecret } from './shared'

/**
 * Update menu bar item payload definition.
 */
type UpdateMenubarItem = SharedSecret & {
  /**
   * The UUID of the menu bar item to update.
   */
  uuid: string

  /**
   * New text to display.
   */
  text?: string

  /**
   * File path to a new icon.
   */
  iconPath?: string

  /**
   * Base64 encoded icon data.
   */
  iconData?: string

  /**
   * New background color.
   */
  backgroundColor?: string
}

/**
 * Update the contents of a menu bar item.
 *
 * @param payload Menu bar item payload.
 * @returns BetterTouchTool update_menubar_item URL.
 * @example
 * updateMenubarItem({ uuid: 'CC46E199-B07D-4BF7-AC36-48AAE558540B', text: 'updatedText' })
 * // => 'btt://update_menubar_item/?uuid=CC46E199-B07D-4BF7-AC36-48AAE558540B&text=updatedText'
 * @link https://docs.folivora.ai/docs/scripting/url-scheme/#update_menubar_item
 */
export function updateMenubarItem(payload: UpdateMenubarItem) {
  const { uuid, text, iconPath, iconData, backgroundColor, sharedSecret } = payload

  return bttUrl(
    'update_menubar_item',
    {
      uuid,
      text,
      icon_path: iconPath,
      icon_data: iconData,
      background_color: backgroundColor,
    },
    sharedSecret,
  )
}
