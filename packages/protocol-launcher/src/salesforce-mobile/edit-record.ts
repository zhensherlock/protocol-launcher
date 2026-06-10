import { type SalesforceMobileRecordPayload, salesforceMobileSObjectUrl } from './shared'

export type EditRecordPayload = SalesforceMobileRecordPayload

/**
 * Open a Salesforce record edit page in the Salesforce mobile app.
 *
 * @param payload Salesforce mobile record payload.
 * @returns Salesforce mobile record edit URL scheme.
 * @example
 * editRecord({ id: '006R0000001r7Rq' })
 * // => 'salesforce1://sObject/006R0000001r7Rq/edit'
 * @link https://help.salesforce.com/s/articleView?id=xcloud.sapp_url_schemes_format.htm&language=en_US&type=5
 */
export function editRecord(payload: EditRecordPayload) {
  return salesforceMobileSObjectUrl(payload.id, 'edit', payload)
}
