import { type SalesforceMobileRecordPayload, salesforceMobileSObjectUrl } from './shared'

export type ViewRecordPayload = SalesforceMobileRecordPayload

/**
 * Open a Salesforce record detail page in the Salesforce mobile app.
 *
 * @param payload Salesforce mobile record payload.
 * @returns Salesforce mobile record detail URL scheme.
 * @example
 * viewRecord({ id: '001D000000Jwj9v' })
 * // => 'salesforce1://sObject/001D000000Jwj9v/view'
 * @link https://help.salesforce.com/s/articleView?id=xcloud.sapp_url_schemes_format.htm&language=en_US&type=5
 */
export function viewRecord(payload: ViewRecordPayload) {
  return salesforceMobileSObjectUrl(payload.id, 'view', payload)
}
