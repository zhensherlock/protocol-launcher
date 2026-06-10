import { type SalesforceMobileFollowUserPayload, salesforceMobileSObjectUrl } from './shared'

export type FollowUserPayload = SalesforceMobileFollowUserPayload

/**
 * Follow a user and navigate to the user's profile page in the Salesforce mobile app.
 *
 * @param payload Salesforce mobile follow user payload.
 * @returns Salesforce mobile follow user URL scheme.
 * @example
 * followUser({ id: '005R0000000Df5W', userid: '005R0000000HfcF' })
 * // => 'salesforce1://sObject/005R0000000Df5W/follow?userid=005R0000000HfcF'
 * @link https://help.salesforce.com/s/articleView?id=xcloud.sapp_url_schemes_format.htm&language=en_US&type=5
 */
export function followUser(payload: FollowUserPayload) {
  return salesforceMobileSObjectUrl(payload.id, 'follow', payload, { userid: payload.userid })
}
