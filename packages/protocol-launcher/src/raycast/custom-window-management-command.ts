import { qs } from '@protocol-launcher/shared'

type WindowValue = number | string

/**
 * Raycast custom window management command deeplink definition.
 */
export interface CustomWindowManagementCommand {
  /**
   * Command name. If a matching custom single-window command is found, other
   * arguments are ignored. Omit `name` to create a temporary command.
   * For Window Layout deeplinks, Raycast only supports the `name` argument.
   */
  name?: string

  /**
   * Pin window to this position. If omitted with a temporary command, Raycast
   * defaults to top left.
   */
  position?: string

  /**
   * Width in points.
   */
  absoluteWidth?: WindowValue

  /**
   * Width as a percentage of the screen width.
   * Ignored if `absoluteWidth` is set.
   */
  relativeWidth?: WindowValue

  /**
   * Height in points.
   */
  absoluteHeight?: WindowValue

  /**
   * Height as a percentage of the screen height.
   * Ignored if `absoluteHeight` is set.
   */
  relativeHeight?: WindowValue

  /**
   * Horizontal offset in points.
   */
  absoluteXOffset?: WindowValue

  /**
   * Horizontal offset as a percentage of the screen width.
   * Ignored if `absoluteXOffset` is set.
   */
  relativeXOffset?: WindowValue

  /**
   * Vertical offset in points.
   */
  absoluteYOffset?: WindowValue

  /**
   * Vertical offset as a percentage of the screen height.
   * Ignored if `absoluteYOffset` is set.
   */
  relativeYOffset?: WindowValue
}

/**
 * Create a Raycast custom window management command deeplink.
 *
 * @param payload - Custom window management command deeplink definition.
 * @returns Raycast custom window management command deeplink URL.
 * @example
 * customWindowManagementCommand({
 *   name: 'MyCommand',
 *   position: 'center',
 *   absoluteWidth: '500.0',
 *   relativeHeight: '0.5',
 *   absoluteXOffset: '0.0',
 *   absoluteYOffset: '0.0',
 * })
 * // => 'raycast://customWindowManagementCommand?&name=MyCommand&position=center&absoluteWidth=500.0&relativeHeight=0.5&absoluteXOffset=0.0&absoluteYOffset=0.0'
 * @link https://manual.raycast.com/window-management#deeplinks
 */
export function customWindowManagementCommand(payload: CustomWindowManagementCommand = {}) {
  const {
    name,
    position,
    absoluteWidth,
    relativeWidth,
    absoluteHeight,
    relativeHeight,
    absoluteXOffset,
    relativeXOffset,
    absoluteYOffset,
    relativeYOffset,
  } = payload

  const query = qs({
    name,
    position,
    absoluteWidth,
    relativeWidth,
    absoluteHeight,
    relativeHeight,
    absoluteXOffset,
    relativeXOffset,
    absoluteYOffset,
    relativeYOffset,
  })

  return `raycast://customWindowManagementCommand${query.replace('?', '?&')}`
}
