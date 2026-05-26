import { teamsIdentifierParam, teamsPathSegment, teamsUrl } from './shared'

/**
 * Microsoft Teams channel file payload definition.
 */
type OpenFile = {
  /**
   * Unique file ID from SharePoint Online.
   */
  fileId: string

  /**
   * Microsoft Entra tenant ID.
   */
  tenantId: string

  /**
   * Supported file type, such as docx, pptx, xlsx, or pdf.
   */
  fileType: string

  /**
   * SharePoint object URL of the file.
   */
  objectUrl: string

  /**
   * SharePoint base URL of the file.
   */
  baseUrl: string

  /**
   * Service name.
   */
  serviceName: string

  /**
   * Team ID of the team where the file is stored.
   */
  threadId?: string

  /**
   * Microsoft 365 group ID of the file.
   */
  groupId: string
}

/**
 * Navigate to a file in a Microsoft Teams channel.
 *
 * @param payload - Teams channel file payload.
 * @returns Microsoft Teams channel file deep link.
 * @example
 * openFile({
 *   fileId: '5E0154FC-F2B4-4DA5-8CDA-F096E72C0A80',
 *   tenantId: '0d9b645f-597b-41f0-a2a3-ef103fbd91bb',
 *   fileType: 'pptx',
 *   objectUrl: 'https://microsoft.sharepoint.com/teams/ActionPlatform/Shared Documents/deck.pptx',
 *   baseUrl: 'https://microsoft.sharepoint.com/teams/ActionPlatform',
 *   serviceName: 'teams',
 *   groupId: 'ae063b79-5315-4ddb-ba70-27328ba6c31e',
 * })
 * // => 'https://teams.microsoft.com/l/file/5E0154FC-F2B4-4DA5-8CDA-F096E72C0A80?tenantId=0d9b645f-597b-41f0-a2a3-ef103fbd91bb&fileType=pptx&objectUrl=https%3A%2F%2Fmicrosoft.sharepoint.com%2Fteams%2FActionPlatform%2FShared%20Documents%2Fdeck.pptx&baseUrl=https%3A%2F%2Fmicrosoft.sharepoint.com%2Fteams%2FActionPlatform&serviceName=teams&groupId=ae063b79-5315-4ddb-ba70-27328ba6c31e'
 * @link https://learn.microsoft.com/en-us/microsoftteams/platform/concepts/build-and-test/deep-link-teams#generate-deep-link-to-a-file-in-a-channel
 */
export function openFile(payload: OpenFile) {
  const { fileId, tenantId, fileType, objectUrl, baseUrl, serviceName, threadId, groupId } = payload

  return teamsUrl(`file/${teamsPathSegment(fileId)}`, {
    tenantId,
    fileType,
    objectUrl,
    baseUrl,
    serviceName,
    threadId: teamsIdentifierParam(threadId),
    groupId,
  })
}
