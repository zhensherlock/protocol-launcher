import { ringCentralDesktopPath } from './shared'

/**
 * Open the RingCentral fax composer screen.
 *
 * @returns RingCentral desktop fax composer deep link.
 * @example
 * desktopFax()
 * // => '/r/fax?type=new'
 * @link https://developers.ringcentral.com/guide/basics/uri-schemes
 */
export function desktopFax() {
  return ringCentralDesktopPath('fax', {
    type: 'new',
  })
}
