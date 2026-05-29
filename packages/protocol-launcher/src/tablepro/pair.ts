import { tableproCsv, tableproUrl } from './shared'

export type PairScope = 'readOnly' | 'readWrite' | 'fullAccess'

export type Pair = {
  /**
   * Display name shown in the TablePro approval sheet.
   *
   * @example 'Raycast on macbook-pro'
   */
  client: string
  /**
   * Base64url-encoded SHA-256 hash of the verifier.
   */
  challenge: string
  /**
   * URL that receives the `code` query parameter on success.
   *
   * @example 'raycast://extensions/ngoquocdat/tablepro/pair-callback'
   */
  redirect: string
  /**
   * Requested scopes. TablePro documents `readOnly`, `readWrite`, and `fullAccess`.
   *
   * If omitted, TablePro defaults to `readOnly`.
   */
  scopes?: readonly PairScope[]
  /**
   * Connection UUIDs to preselect in the allowlist.
   *
   * If omitted, TablePro defaults to all connections.
   */
  connectionIds?: readonly string[]
}

/**
 * Start a TablePro MCP pairing flow.
 *
 * The query parameters are a request, not a grant. The user can change scopes and connections in TablePro.
 *
 * @param payload TablePro pairing payload.
 * @returns TablePro pairing URL.
 * @example
 * pair({
 *   client: 'Raycast on macbook-pro',
 *   challenge: 'REPLACE_WITH_PKCE_CHALLENGE',
 *   redirect: 'raycast://extensions/ngoquocdat/tablepro/pair-callback',
 *   scopes: ['readOnly', 'readWrite'],
 * })
 * // => 'tablepro://integrations/pair?client=Raycast%20on%20macbook-pro&challenge=REPLACE_WITH_PKCE_CHALLENGE&redirect=raycast%3A%2F%2Fextensions%2Fngoquocdat%2Ftablepro%2Fpair-callback&scopes=readOnly%2CreadWrite'
 * @link https://docs.tablepro.app/external-api/url-scheme
 */
export function pair(payload: Pair) {
  const { client, challenge, redirect, scopes, connectionIds } = payload

  return tableproUrl('integrations/pair', {
    client,
    challenge,
    redirect,
    scopes: tableproCsv(scopes),
    'connection-ids': tableproCsv(connectionIds),
  })
}
