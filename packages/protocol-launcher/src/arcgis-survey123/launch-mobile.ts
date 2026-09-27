import { SURVEY123_MOBILE_SCHEME, type Survey123MobilePayload, survey123MobileQuery } from './shared'

/**
 * Launch Survey123 Mobile with its documented custom scheme.
 *
 * @param payload Survey123 Mobile parameters.
 * @returns Survey123 Mobile URL.
 * @example
 * launchMobile({ itemID: '36ff9e8c13e042a58cfce4ad87f55d19' })
 * // => 'arcgis-survey123-mobile://?itemID=36ff9e8c13e042a58cfce4ad87f55d19'
 * @link https://doc.arcgis.com/en/survey123/get-started/integrate-launchmobile.htm
 */
export function launchMobile(payload: Survey123MobilePayload = {}) {
  return `${SURVEY123_MOBILE_SCHEME}${survey123MobileQuery(payload)}`
}
