import { qs } from '@protocol-launcher/shared'

export type DEVONthinkBoolean = 0 | 1

export type DEVONthinkCommon = {
  /**
   * The title of the item to be created.
   */
  title?: string

  /**
   * A comment to be added.
   */
  comment?: string

  /**
   * The URL linking to the content, e.g., the URL of the website for the bookmark.
   */
  location?: string

  /**
   * Tags to be added, as comma-separated strings.
   */
  tags?: string

  /**
   * The UUID of a group where the item shall be created.
   */
  destination?: string

  /**
   * Hide and deactivate DEVONthink after executing the command.
   */
  hide?: DEVONthinkBoolean

  /**
   * Skip the group selector.
   */
  noselector?: DEVONthinkBoolean

  /**
   * Post-process the page. 0 means no post-processing; any other value means post-process.
   */
  reader?: number

  /**
   * The URL that referred to the item.
   */
  referrer?: string
}

export function commandUrl(command: string, params: Record<string, unknown> = {}) {
  return `x-devonthink://${command}${qs(params)}`
}

export function commonParams(payload: DEVONthinkCommon) {
  const { title, comment, location, tags, destination, hide, noselector, reader, referrer } = payload

  return {
    ...(title ? { title } : {}),
    ...(comment ? { comment } : {}),
    ...(location ? { location } : {}),
    ...(tags ? { tags } : {}),
    ...(destination ? { destination } : {}),
    ...(hide !== undefined ? { hide } : {}),
    ...(noselector !== undefined ? { noselector } : {}),
    ...(reader !== undefined ? { reader } : {}),
    ...(referrer ? { referrer } : {}),
  }
}
