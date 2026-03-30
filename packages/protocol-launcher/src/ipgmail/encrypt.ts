import { qs } from '@protocol-launcher/shared'

/**
 * Encrypt command payload definition.
 */
type Encrypt = {
  /**
   * Currently the only datasource supported is "clipboard".
   */
  datasource?: 'clipboard'
  /**
   * The text to be encrypted. Must be properly URL escaped.
   */
  text?: string
  /**
   * The 8 character KeyID of the public key that you wish to use to encrypt the data.
   * If the KeyID is not currently in the iPGMail keychain, the operation will fail.
   */
  keyid?: string
  /**
   * The 8 character KeyID of the private key that you wish to use to sign the data.
   * If the KeyID is not currently in the iPGMail keychain, the operation will fail.
   */
  signkey?: string
  /**
   * Direct the resulting PGP armor text to a file or the clipboard.
   * If this option is not present, the result is still sent back to the caller in the x-success callback.
   */
  result?: 'clipboard' | string
  /**
   * Use symmetric (i.e. password-based) crypto to encrypt the data.
   */
  symmetric?: boolean
  /**
   * Password to use when the symmetric option is set to true.
   */
  passwd?: string
}

/**
 * Encrypt a block of plaintext and either save it to a file or return it to the requesting app in the x-success callback.
 *
 * @param payload Encrypt command payload.
 * @returns iPGMail encrypt URL.
 * @example
 * encrypt({
 *   datasource: 'clipboard',
 *   keyid: '47E3234C',
 *   result: 'clipboard',
 * })
 * // => 'x-ipgmail://x-callback-url/encrypt?datasource=clipboard&keyid=47E3234C&result=clipboard'
 * @example
 * encrypt({
 *   text: 'This is a test...',
 * })
 * // => 'x-ipgmail://x-callback-url/encrypt?text=This%20is%20a%20test...'
 * @example
 * encrypt({
 *   datasource: 'clipboard',
 *   keyid: '47E3234C',
 *   result: 'savefile.pgp',
 * })
 * // => 'x-ipgmail://x-callback-url/encrypt?datasource=clipboard&keyid=47E3234C&result=savefile.pgp'
 * @link https://ipgmail.com/developers/
 */
export function encrypt(payload: Encrypt = {}) {
  const { datasource, text, keyid, signkey, result, symmetric, passwd } = payload
  const params = qs({
    ...(datasource ? { datasource } : {}),
    ...(text ? { text } : {}),
    ...(keyid ? { keyid } : {}),
    ...(signkey ? { signkey } : {}),
    ...(result ? { result } : {}),
    ...(symmetric ? { symmetric: 'true' } : {}),
    ...(passwd ? { passwd } : {}),
  })

  return `x-ipgmail://x-callback-url/encrypt${params}`
}
