import { qs } from '@protocol-launcher/shared'

/**
 * Dictate action payload definition.
 */
type Dictate = {
  /**
   * Locale identifier to use for dictation, in the standard language-country abbreviated format. Examples: en-US, it-IT, es-MX.
   */
  locale?: string
  /**
   * Default to "true". If "false", the results of the dictation will be returned to the callback, but not saved as a draft in Drafts.
   */
  save?: boolean
  /**
   * The name of the argument to use to pass the draft content back to the x-success URL. Defaults to "text".
   */
  retParam?: string
  /**
   * The x-success callback URL to receive the dictated text.
   */
  xSuccess?: string
}

/**
 * Open Drafts dictation interface.
 *
 * @param payload Dictate action payload.
 * @returns Drafts dictate URL.
 * @example
 * dictate({ xSuccess: 'APP-URL' })
 * // => 'drafts:///dictate?x-success=APP-URL'
 * @example
 * dictate({ locale: 'en-US', save: false, xSuccess: 'myapp://callback' })
 * // => 'drafts:///dictate?locale=en-US&save=false&x-success=myapp://callback'
 * @link https://docs.getdrafts.com/docs/automation/urlschemes
 */
export function dictate(payload: Dictate = {}) {
  const { locale, save, retParam, xSuccess } = payload

  const params = qs({
    ...(locale ? { locale } : {}),
    ...(save !== undefined ? { save } : {}),
    ...(retParam ? { retParam } : {}),
    ...(xSuccess ? { 'x-success': xSuccess } : {}),
  })

  return `drafts:///dictate${params}`
}
