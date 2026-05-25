import { bttUrl, type JsonObject, jsonParam, type SharedSecret } from './shared'

/**
 * Update Stream Deck widget payload definition.
 */
type UpdateStreamDeckWidget = SharedSecret & {
  /**
   * The UUID of the Stream Deck widget to update.
   */
  uuid: string

  /**
   * New text to display.
   */
  text?: string

  /**
   * A JSON object with additional update properties.
   */
  json?: JsonObject
}

/**
 * Update the contents of a Stream Deck widget.
 *
 * @param payload Stream Deck widget payload.
 * @returns BetterTouchTool update_stream_deck_widget URL.
 * @example
 * updateStreamDeckWidget({ uuid: 'CC46E199-B07D-4BF7-AC36-48AAE558540B', text: 'updatedText' })
 * // => 'btt://update_stream_deck_widget/?uuid=CC46E199-B07D-4BF7-AC36-48AAE558540B&text=updatedText'
 * @link https://docs.folivora.ai/docs/scripting/url-scheme/#update_stream_deck_widget
 */
export function updateStreamDeckWidget(payload: UpdateStreamDeckWidget) {
  const { uuid, text, json, sharedSecret } = payload

  return bttUrl(
    'update_stream_deck_widget',
    {
      uuid,
      text,
      ...(json ? { json: jsonParam(json) } : {}),
    },
    sharedSecret,
  )
}
