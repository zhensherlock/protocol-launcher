import { qs } from '@protocol-launcher/shared'

export const SALESFORCE_MOBILE_SCHEME = 'salesforce1'

export type SalesforceMobileRecordAction = 'view' | 'edit' | 'download' | 'follow'

export interface SalesforceMobileContextPayload {
  /**
   * Documented `s1oid` query parameter for the org that contains the content.
   *
   * @example '00DT00000000ABC'
   */
  s1oid?: string
  /**
   * Documented `s1nid` query parameter for the Experience Cloud site that contains the content.
   *
   * @example '00UT00000000XYZ'
   */
  s1nid?: string
  /**
   * Documented `s1uid` query parameter for the user who has access to the data.
   *
   * @example '005T0000000AAAA'
   */
  s1uid?: string
  /**
   * Documented `iosoru` query parameter for the URL where Salesforce prompts to redirect users.
   *
   * @example 'https://example.com/fallback'
   */
  iosoru?: string
}

export interface SalesforceMobileRecordPayload extends SalesforceMobileContextPayload {
  /**
   * Salesforce record ID. Salesforce documents support for 15- and 18-character IDs.
   *
   * @example '001D000000Jwj9v'
   */
  id: string
}

export interface SalesforceMobileObjectHomePayload extends SalesforceMobileContextPayload {
  /**
   * API name of a Salesforce object.
   *
   * @example 'Account'
   */
  objectName: string
}

export interface SalesforceMobileFilePayload extends SalesforceMobileContextPayload {
  /**
   * ContentDocument or ContentDocumentVersion ID.
   *
   * @example '069R00000000mr3'
   */
  id: string
}

export interface SalesforceMobileFollowUserPayload extends SalesforceMobileRecordPayload {
  /**
   * Documented `userid` query parameter for follow links.
   *
   * @example '005R0000000HfcF'
   */
  userid: string
}

function salesforceMobileQuery(payload: SalesforceMobileContextPayload, params: Record<string, unknown> = {}) {
  const { s1oid, s1nid, s1uid, iosoru } = payload

  return qs({
    ...params,
    s1oid,
    s1nid,
    s1uid,
    iosoru,
  })
}

export function salesforceMobileSObjectUrl(
  id: string,
  action: SalesforceMobileRecordAction,
  payload: SalesforceMobileContextPayload = {},
  params: Record<string, unknown> = {},
) {
  return `${SALESFORCE_MOBILE_SCHEME}://sObject/${encodeURIComponent(id)}/${action}${salesforceMobileQuery(
    payload,
    params,
  )}`
}

export function salesforceMobileObjectHomeUrl(objectName: string, payload: SalesforceMobileContextPayload = {}) {
  return `${SALESFORCE_MOBILE_SCHEME}://sObject/${encodeURIComponent(objectName)}/home${salesforceMobileQuery(payload)}`
}
