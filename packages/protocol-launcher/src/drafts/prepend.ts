import { qs } from '@protocol-launcher/shared'

/**
 * Prepend action payload definition.
 */
type Prepend = {
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
 * Prepend the passed text to the beginning of a draft identified by the UUID argument.
 *
 * @param payload Prepend action payload.
 * @returns Drafts prepend URL.
 * @example
 * prepend({ uuid: 'UUID-TO-VALID-DRAFT', text: 'TEXT-TO-ADD' })
 * // => 'drafts:///prepend?uuid=UUID-TO-VALID-DRAFT&text=TEXT-TO-ADD'
 * @example
 * prepend({ uuid: 'xxx', text: 'Prefix', tag: ['work', 'important'] })
 * // => 'drafts:///prepend?uuid=xxx&text=Prefix&tag=work&tag=important'
 * @link https://docs.getdrafts.com/docs/automation/urlschemes
 */
export function prepend(payload: Prepend) {
  const { uuid, text, action, allowEmpty, tag } = payload
  const tags = Array.isArray(tag) ? tag : tag ? [tag] : []

  const params = qs({
    uuid,
    text,
    ...(action ? { action } : {}),
    ...(allowEmpty !== undefined ? { allowEmpty } : {}),
    ...(tags.length > 0 ? { tag: tags } : {}),
  })

  return `drafts:///prepend${params}`
}
