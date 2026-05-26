import { teamsPathSegment, teamsUrl } from './shared'

/**
 * Microsoft Teams dialog payload definition.
 */
type OpenDialog = {
  /**
   * Teams app ID.
   */
  appId: string

  /**
   * TaskInfo height.
   */
  height: number

  /**
   * TaskInfo width.
   */
  width: number

  /**
   * TaskInfo title.
   */
  title: string

  /**
   * Bot app ID to receive the task/submit invoke result.
   */
  completionBotId?: string
} & (
  | {
      /**
       * TaskInfo URL.
       */
      url: string
      card?: never
    }
  | {
      /**
       * TaskInfo card JSON string.
       */
      card: string
      url?: never
    }
)

/**
 * Open a Microsoft Teams dialog.
 *
 * @param payload - Teams dialog payload.
 * @returns Microsoft Teams dialog deep link.
 * @example
 * openDialog({
 *   appId: 'fxxxxxxx-0xxx-4xxx-8xxx-cxxxxxxxxxxx',
 *   url: 'https://example.com/task',
 *   height: 600,
 *   width: 800,
 *   title: 'Example Task',
 * })
 * // => 'https://teams.microsoft.com/l/task/fxxxxxxx-0xxx-4xxx-8xxx-cxxxxxxxxxxx?url=https%3A%2F%2Fexample.com%2Ftask&height=600&width=800&title=Example%20Task'
 * @link https://learn.microsoft.com/en-us/microsoftteams/platform/concepts/build-and-test/deep-link-application#deep-link-to-open-a-dialog
 */
export function openDialog(payload: OpenDialog) {
  const { appId, height, width, title, completionBotId } = payload
  const content = 'url' in payload ? { url: payload.url } : { card: payload.card }

  return teamsUrl(`task/${teamsPathSegment(appId)}`, {
    ...content,
    height,
    width,
    title,
    completionBotId,
  })
}
