import { qs } from '@protocol-launcher/shared'
import type { Callbacks } from './callbacks'
import { callbackParams } from './callbacks'

/**
 * Arrange action payload definition.
 */
type Arrange = Callbacks & {
  /**
   * Text to arrange.
   */
  text: string
  /**
   * The name of the argument to use to pass the draft content back to the x-success URL. Defaults to "text".
   */
  retParam?: string
  /**
   * The x-success callback URL to receive the arranged text.
   */
  xSuccess?: string
}

/**
 * Open Drafts arrange interface.
 *
 * @param payload Arrange action payload.
 * @returns Drafts arrange URL.
 * @example
 * arrange({ text: 'TEXT-TO-ARRANGE', xSuccess: 'APP-URL' })
 * // => 'drafts:///arrange?text=TEXT-TO-ARRANGE&x-success=APP-URL'
 * @example
 * arrange({ text: 'unsorted list', retParam: 'input', xSuccess: 'myapp://callback' })
 * // => 'drafts:///arrange?text=unsorted%20list&retParam=input&x-success=myapp%3A%2F%2Fcallback'
 * @link https://docs.getdrafts.com/docs/automation/urlschemes
 */
export function arrange(payload: Arrange) {
  const { text, retParam } = payload

  const params = qs({
    text,
    ...(retParam ? { retParam } : {}),
    ...callbackParams(payload),
  })

  return `drafts:///arrange${params}`
}
