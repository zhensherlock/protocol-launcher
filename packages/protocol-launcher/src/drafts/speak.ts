import { qs } from '@protocol-launcher/shared'
import type { Callbacks } from './callbacks'
import { callbackParams } from './callbacks'

type Speak = Callbacks & {
  /** Text to speak aloud. */
  text?: string
}

/**
 * Open Drafts and speak the supplied text aloud.
 *
 * @param payload Text to speak.
 * @returns Drafts speak URL.
 * @example
 * speak({ text: 'Hello world' })
 * // => 'drafts:///speak?text=Hello%20world'
 * @link https://docs.getdrafts.com/docs/automation/urlschemes#speak
 */
export function speak(payload: Speak = {}) {
  return `drafts:///speak${qs({ text: payload.text, ...callbackParams(payload) })}`
}
