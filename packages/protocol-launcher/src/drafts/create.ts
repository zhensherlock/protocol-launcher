import { qs } from '@protocol-launcher/shared'

/**
 * Create action payload definition.
 */
type Create = {
  /**
   * Text to be used as the content of the new draft.
   */
  text: string
  /**
   * Name of a tag to attach to the draft. Parameter can appear multiple times to add more than one tag.
   */
  tag?: string | string[]
  /**
   * Location for the new draft. Default: inbox
   */
  folder?: 'inbox' | 'archive'
  /**
   * Should the newly created draft be flagged. Default: false
   */
  flagged?: boolean
  /**
   * Name of an action in the action list. If provided, this action will be run on the specified draft.
   */
  action?: string
  /**
   * If an action parameter is provided, adding `allowEmpty=false` to the URL will prevent that action from running if the text is empty.
   */
  allowEmpty?: boolean
  /**
   * The name of the argument to use to pass the draft UUID back to the x-success URL. Defaults to "uuid".
   */
  retParam?: string
}

/**
 * Create a new draft with the content passed in the "text" argument.
 *
 * @param payload Create action payload.
 * @returns Drafts create URL.
 * @example
 * create({ text: 'Hello World' })
 * // => 'drafts:///create?text=Hello%20World'
 * @example
 * create({ text: 'Hello World', tag: ['work', 'important'], flagged: true })
 * // => 'drafts:///create?text=Hello%20World&tag=work&tag=important&flagged=true'
 * @link https://docs.getdrafts.com/docs/automation/urlschemes
 */
export function create(payload: Create) {
  const { text, tag, folder, flagged, action, allowEmpty, retParam } = payload
  const tags = Array.isArray(tag) ? tag : tag ? [tag] : []

  const params = qs({
    text,
    ...(tags.length > 0 ? { tag: tags } : {}),
    ...(folder ? { folder } : {}),
    ...(flagged !== undefined ? { flagged } : {}),
    ...(action ? { action } : {}),
    ...(allowEmpty !== undefined ? { allowEmpty } : {}),
    ...(retParam ? { retParam } : {}),
  })

  return `drafts:///create${params}`
}
