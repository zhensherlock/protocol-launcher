import { launchbarUrl } from './shared'

/**
 * Hide LaunchBar.
 *
 * @returns LaunchBar hide URL.
 * @example
 * hide()
 * // => 'x-launchbar:hide'
 * @link https://www.obdev.at/resources/launchbar/help/URLCommands.html
 */
export function hide() {
  return launchbarUrl('hide')
}
