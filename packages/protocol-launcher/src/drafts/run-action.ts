import { qs } from '@protocol-launcher/shared'

/**
 * RunAction action payload definition.
 */
type RunAction = {
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
}

/**
 * Run a drafts action on the passed text without saving that text to a draft.
 *
 * @param payload RunAction action payload.
 * @returns Drafts runAction URL.
 * @example
 * runAction({ text: 'TEXT', action: 'VALID-ACTION-NAME' })
 * // => 'drafts:///runAction?text=TEXT&action=VALID-ACTION-NAME'
 * @example
 * runAction({ text: 'TEXT', allowEmpty: false })
 * // => 'drafts:///runAction?text=TEXT&allowEmpty=false'
 * @link https://docs.getdrafts.com/docs/automation/urlschemes
 */
export function runAction(payload: RunAction) {
  const { text, action, allowEmpty } = payload

  const params = qs({
    text,
    ...(action ? { action } : {}),
    ...(allowEmpty !== undefined ? { allowEmpty } : {}),
  })

  return `drafts:///runAction${params}`
}
