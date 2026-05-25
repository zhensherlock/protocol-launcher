import { qs } from '@protocol-launcher/shared'
import { type JsonObject, jsonObjectParam, raycastPathSegment } from './shared'

/**
 * Raycast extension command deeplink definition.
 */
export interface ExtensionCommand {
  /**
   * For store extensions, the `owner` or `author` field in the extension manifest.
   * For built-in extensions, use `raycast`.
   */
  authorOrOwner: string

  /**
   * For store extensions, the extension manifest `name`.
   * For built-in extensions, use the slugified extension name.
   */
  extensionName: string

  /**
   * For store extensions, the command manifest `name`.
   * For built-in commands, use the slugified command name.
   */
  commandName: string

  /**
   * Command launch type.
   */
  launchType?: 'userInitiated' | 'background'

  /**
   * URL-encoded JSON object passed as command arguments.
   */
  arguments?: JsonObject

  /**
   * URL-encoded JSON object passed as launch context.
   */
  context?: JsonObject

  /**
   * Text to prefill the search bar or first text input of the command.
   */
  fallbackText?: string
}

/**
 * Launch an installed and enabled Raycast extension command.
 *
 * @param payload - Raycast extension command deeplink definition.
 * @returns Raycast extension command deeplink URL.
 * @example
 * extensionCommand({
 *   authorOrOwner: 'linear',
 *   extensionName: 'linear',
 *   commandName: 'create-issue-for-myself',
 *   arguments: { title: 'Triage new issues' },
 * })
 * // => 'raycast://extensions/linear/linear/create-issue-for-myself?arguments=%7B%22title%22%3A%22Triage%20new%20issues%22%7D'
 * @link https://developers.raycast.com/information/lifecycle/deeplinks
 */
export function extensionCommand(payload: ExtensionCommand) {
  const {
    authorOrOwner,
    extensionName,
    commandName,
    launchType,
    arguments: commandArguments,
    context,
    fallbackText,
  } = payload

  const query = qs({
    launchType,
    arguments: jsonObjectParam(commandArguments),
    context: jsonObjectParam(context),
    fallbackText,
  })

  return `raycast://extensions/${raycastPathSegment(authorOrOwner)}/${raycastPathSegment(
    extensionName,
  )}/${raycastPathSegment(commandName)}${query}`
}
