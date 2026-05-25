import { bttUrl, type SharedSecret } from './shared'

/**
 * Reveal element in UI payload definition.
 */
type RevealElementInUi = SharedSecret & {
  /**
   * The UUID of the element to reveal.
   */
  uuid: string
}

/**
 * Open the BetterTouchTool configuration UI and reveal an element.
 *
 * @param payload Element UUID payload.
 * @returns BetterTouchTool reveal_element_in_ui URL.
 * @example
 * revealElementInUi({ uuid: '0E2F7963-E64C-403A-8591-C3725D4D9ADC' })
 * // => 'btt://reveal_element_in_ui/?uuid=0E2F7963-E64C-403A-8591-C3725D4D9ADC'
 * @link https://docs.folivora.ai/docs/scripting/url-scheme/#reveal_element_in_ui
 */
export function revealElementInUi(payload: RevealElementInUi) {
  const { uuid, sharedSecret } = payload

  return bttUrl('reveal_element_in_ui', { uuid }, sharedSecret)
}
