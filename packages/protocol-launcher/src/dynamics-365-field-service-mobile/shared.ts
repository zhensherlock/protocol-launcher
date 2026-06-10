import { qs } from '@protocol-launcher/shared'

export const DYNAMICS_365_FIELD_SERVICE_MOBILE_SCHEME = 'ms-apps-fs'

export type Dynamics365FieldServiceMobileViewType = 1039 | 4230

export interface Dynamics365FieldServiceMobileAppPayload {
  /**
   * Organization URL without the `https://` prefix.
   *
   * @example 'contoso.onmicrosoft.com'
   */
  orgUrl: string
  /**
   * App module ID.
   *
   * @example 'e6429eba-2204-40e8-b9dd-fc74791ff2c2'
   */
  appId: string
  /**
   * Microsoft Entra tenant ID.
   *
   * @example 'aaaabbbb-0000-cccc-1111-dddd2222eeee'
   */
  tenantId: string
}

export interface Dynamics365FieldServiceMobileEntityRecordPayload extends Dynamics365FieldServiceMobileAppPayload {
  /**
   * Entity logical name.
   *
   * @example 'bookableresourcebooking'
   */
  etn: string
  /**
   * Record ID.
   *
   * @example '00000000-1111-2222-3333-444444444444'
   */
  id: string
  /**
   * Form ID or extra query string values.
   */
  extraqs?: string
}

export interface Dynamics365FieldServiceMobileCreateEntityRecordPayload
  extends Dynamics365FieldServiceMobileAppPayload {
  /**
   * Entity logical name.
   *
   * @example 'bookableresourcebooking'
   */
  etn: string
  /**
   * Form ID or extra query string values.
   */
  extraqs?: string
}

export interface Dynamics365FieldServiceMobileEntityListPayload extends Dynamics365FieldServiceMobileAppPayload {
  /**
   * Entity logical name.
   *
   * @example 'bookableresourcebooking'
   */
  etn: string
  /**
   * View ID.
   *
   * @example '11111111-2222-3333-4444-555555555555'
   */
  viewid: string
  /**
   * View type. Microsoft documents 1039 for system views and 4230 for personal views.
   */
  viewType: Dynamics365FieldServiceMobileViewType
}

type Dynamics365FieldServiceMobilePageParams = Record<string, unknown>

export function fieldServiceMobileUrl(
  payload: Dynamics365FieldServiceMobileAppPayload,
  pageParams: Dynamics365FieldServiceMobilePageParams = {},
) {
  const { orgUrl, appId, tenantId } = payload

  return `${DYNAMICS_365_FIELD_SERVICE_MOBILE_SCHEME}://${orgUrl}_${encodeURIComponent(appId)}${qs({
    tenantId,
    isShortcut: true,
    appType: 'AppModule',
    openApp: true,
    restartApp: true,
    forceOfflineDataSync: true,
    ...pageParams,
  })}`
}
