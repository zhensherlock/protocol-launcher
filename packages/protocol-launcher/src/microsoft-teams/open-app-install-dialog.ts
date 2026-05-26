import { teamsPathSegment, teamsUrl } from './shared'

/**
 * Microsoft Teams app install dialog payload definition.
 */
type OpenAppInstallDialog = {
  /**
   * Teams app ID.
   */
  appId: string

  /**
   * Microsoft Entra tenant ID.
   */
  tenantId?: string
}

/**
 * Open a Microsoft Teams app install dialog.
 *
 * @param payload - Teams app install dialog payload.
 * @returns Microsoft Teams app install dialog deep link.
 * @example
 * openAppInstallDialog({
 *   appId: 'fxxxxxxx-0xxx-4xxx-8xxx-cxxxxxxxxxxx',
 *   tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
 * })
 * // => 'https://teams.microsoft.com/l/app/fxxxxxxx-0xxx-4xxx-8xxx-cxxxxxxxxxxx?tenantId=72f988bf-86f1-41af-91ab-2d7cd011db47'
 * @link https://learn.microsoft.com/en-us/microsoftteams/platform/concepts/build-and-test/deep-link-application#configure-deep-link-manually-using-the-app-id
 */
export function openAppInstallDialog(payload: OpenAppInstallDialog) {
  const { appId, tenantId } = payload

  return teamsUrl(`app/${teamsPathSegment(appId)}`, {
    tenantId,
  })
}
