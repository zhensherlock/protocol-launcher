import { qs } from '@protocol-launcher/shared'

/**
 * Append action payload definition.
 */
type Append = {
  /**
   * The UUID identifier for a draft.
   */
  uuid: string
  /**
   * Text to add.
   */
  text: string
  /**
   * Name of an action in the action list. If provided, this action will be run on the specified draft.
   */
  action?: string
  /**
   * If an action parameter is provided, adding `allowEmpty=false` to the URL will prevent that action from running if the text is empty.
   */
  allowEmpty?: boolean
  /**
   * Name of a tag to attach to the draft. Parameter can appear multiple times to add more than one tag.
   */
  tag?: string | string[]
}

/**
 * Append the passed text to the end of a draft identified by the UUID argument.
 *
 * @param payload Append action payload.
 * @returns Drafts append URL.
 * @example
 * append({ uuid: 'UUID-TO-VALID-DRAFT', text: 'TEXT-TO-ADD' })
 * // => 'drafts:///append?uuid=UUID-TO-VALID-DRAFT&text=TEXT-TO-ADD'
 * @example
 * append({ uuid: 'xxx', text: 'Suffix', action: 'MyAction' })
 * // => 'drafts:///append?uuid=xxx&text=Suffix&action=MyAction'
 * @link https://docs.getdrafts.com/docs/automation/urlschemes
 */
export function append(payload: Append) {
  const { uuid, text, action, allowEmpty, tag } = payload
  const tags = Array.isArray(tag) ? tag : tag ? [tag] : []

  const params = qs({
    uuid,
    text,
    ...(action ? { action } : {}),
    ...(allowEmpty !== undefined ? { allowEmpty } : {}),
    ...(tags.length > 0 ? { tag: tags } : {}),
  })

  return `drafts:///append${params}`
}
