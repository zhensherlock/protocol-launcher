import { type RoyalTsCliCommandPayload, royalTsCliUrl } from './shared'

/**
 * Royal TS CLI command URI payload.
 */
export type CliCommandPayload = RoyalTsCliCommandPayload

/**
 * Build a Royal TS CLI command URI using the documented `rtscli://` scheme.
 *
 * @param payload Royal TS CLI command URI payload.
 * @returns Royal TS CLI command URI.
 * @example
 * cliCommand({
 *   scope: 'action',
 *   command: 'connect',
 *   options: { '-n': 'QNAP (SSH)' },
 * })
 * // => 'rtscli://local/action/connect?-n=QNAP+(SSH)'
 *
 * @link https://docs.royalapps.com/r2023/royalts/advanced/uri.html
 */
export function cliCommand(payload: CliCommandPayload) {
  return royalTsCliUrl(payload)
}
