import { bttUrl, type SharedSecret } from './shared'

/**
 * Update Touch Bar widget payload definition.
 */
type UpdateTouchBarWidget = SharedSecret & {
  /**
   * The UUID of the Touch Bar widget to update.
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
   * New background color as R,G,B,A values.
   */
  backgroundColor?: string
}

/**
 * Update the contents of a Touch Bar Script Widget.
 *
 * @param payload Touch Bar widget payload.
 * @returns BetterTouchTool update_touch_bar_widget URL.
 * @example
 * updateTouchBarWidget({ uuid: 'CC46E199-B07D-4BF7-AC36-48AAE558540B', text: 'updatedText' })
 * // => 'btt://update_touch_bar_widget/?uuid=CC46E199-B07D-4BF7-AC36-48AAE558540B&text=updatedText'
 * @link https://docs.folivora.ai/docs/scripting/url-scheme/#update_touch_bar_widget
 */
export function updateTouchBarWidget(payload: UpdateTouchBarWidget) {
  const { uuid, text, iconPath, iconData, backgroundColor, sharedSecret } = payload

  return bttUrl(
    'update_touch_bar_widget',
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
