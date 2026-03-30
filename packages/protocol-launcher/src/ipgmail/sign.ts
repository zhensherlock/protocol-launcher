import { qs } from '@protocol-launcher/shared'

/**
 * Sign command payload definition.
 */
type Sign = {
  /**
   * Currently the only datasource supported is "clipboard".
   */
  datasource?: 'clipboard'
  /**
   * The text to be signed. Must be properly URL escaped.
   */
  text?: string
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
}

/**
 * Sign a block of plaintext and either save it to a file or return it to the requesting app in the x-success callback.
 *
 * @param payload Sign command payload.
 * @returns iPGMail sign URL.
 * @example
 * sign({
 *   datasource: 'clipboard',
 *   signkey: '47E3234C',
 *   result: 'clipboard',
 * })
 * // => 'x-ipgmail://x-callback-url/sign?datasource=clipboard&signkey=47E3234C&result=clipboard'
 * @example
 * sign({
 *   text: 'This is a test...',
 * })
 * // => 'x-ipgmail://x-callback-url/sign?text=This%20is%20a%20test...'
 * @example
 * sign({
 *   datasource: 'clipboard',
 *   signkey: '47E3234C',
 *   result: 'savefile.sig',
 * })
 * // => 'x-ipgmail://x-callback-url/sign?datasource=clipboard&signkey=47E3234C&result=savefile.sig'
 * @link https://ipgmail.com/developers/
 */
export function sign(payload: Sign = {}) {
  const { datasource, text, signkey, result } = payload
  const params = qs({
    ...(datasource ? { datasource } : {}),
    ...(text ? { text } : {}),
    ...(signkey ? { signkey } : {}),
    ...(result ? { result } : {}),
  })

  return `x-ipgmail://x-callback-url/sign${params}`
}
