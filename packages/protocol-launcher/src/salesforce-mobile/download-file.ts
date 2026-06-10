import { type SalesforceMobileFilePayload, salesforceMobileSObjectUrl } from './shared'

export type DownloadFilePayload = SalesforceMobileFilePayload

/**
 * Build a Salesforce file download URL scheme.
 *
 * @param payload Salesforce mobile file payload.
 * @returns Salesforce mobile file download URL scheme.
 * @example
 * downloadFile({ id: '069R00000000mr3' })
 * // => 'salesforce1://sObject/069R00000000mr3/download'
 * @link https://help.salesforce.com/s/articleView?id=xcloud.sapp_url_schemes_format.htm&language=en_US&type=5
 */
export function downloadFile(payload: DownloadFilePayload) {
  return salesforceMobileSObjectUrl(payload.id, 'download', payload)
}
