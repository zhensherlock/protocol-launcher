import { SURVEY123_MOBILE_LINK, type Survey123MobilePayload, survey123MobileQuery } from './shared'

/**
 * Launch Survey123 Mobile with its documented app link.
 *
 * @param payload Survey123 Mobile parameters.
 * @returns Survey123 Mobile URL.
 * @example
 * launchMobileLink({ itemID: '36ff9e8c13e042a58cfce4ad87f55d19' })
 * // => 'https://survey123-mobile.arcgis.app?itemID=36ff9e8c13e042a58cfce4ad87f55d19'
 * @link https://doc.arcgis.com/en/survey123/get-started/integrate-launchmobile.htm
 */
export function launchMobileLink(payload: Survey123MobilePayload = {}) {
  return `${SURVEY123_MOBILE_LINK}${survey123MobileQuery(payload)}`
}
