import { qs } from '@protocol-launcher/shared'

/**
 * Decrypt command payload definition.
 */
type Decrypt = {
  /**
   * The pgp message to be decrypted. If the special keyword "clipboard" is used,
   * ipgmail will copy the contents of the system clipboard and attempt to decrypt it.
   * The message must be a complete ASCII-ARMOR PGP message.
   */
  pgpmsg: string
  /**
   * Copy the results of the decryption back to the system clipboard upon completion.
   */
  result?: 'clipboard'
}

/**
 * Decrypt a PGP message and return the status to the caller.
 *
 * @param payload Decrypt command payload.
 * @returns iPGMail decrypt URL.
 * @example
 * decrypt({
 *   pgpmsg: 'clipboard',
 *   result: 'clipboard',
 * })
 * // => 'x-ipgmail://x-callback-url/decrypt?pgpmsg=clipboard&result=clipboard'
 * @example
 * decrypt({
 *   pgpmsg: '-----BEGIN PGP MESSAGE-----...',
 * })
 * // => 'x-ipgmail://x-callback-url/decrypt?pgpmsg=-----BEGIN%20PGP%20MESSAGE-----...'
 * @link https://ipgmail.com/developers/
 */
export function decrypt(payload: Decrypt) {
  const { pgpmsg, result } = payload
  const params = qs({
    pgpmsg,
    ...(result ? { result } : {}),
  })

  return `x-ipgmail://x-callback-url/decrypt${params}`
}
