import { type SalesforceMobileObjectHomePayload, salesforceMobileObjectHomeUrl } from './shared'

export type ObjectHomePayload = SalesforceMobileObjectHomePayload

/**
 * Open a Salesforce object home page in the Salesforce mobile app.
 *
 * @param payload Salesforce mobile object home payload.
 * @returns Salesforce mobile object home URL scheme.
 * @example
 * objectHome({ objectName: 'Account' })
 * // => 'salesforce1://sObject/Account/home'
 * @link https://help.salesforce.com/s/articleView?id=xcloud.sapp_url_schemes_format.htm&language=en_US&type=5
 */
export function objectHome(payload: ObjectHomePayload) {
  return salesforceMobileObjectHomeUrl(payload.objectName, payload)
}
