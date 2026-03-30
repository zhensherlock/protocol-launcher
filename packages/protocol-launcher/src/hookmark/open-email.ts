import { qs } from '@protocol-launcher/shared'

/**
 * Open email payload definition.
 */
type OpenEmail = {
  /**
   * The RFC compliant email ID.
   *
   * @example '<CABc123xyz@mail.gmail.com>'
   */
  id: string
}

/**
 * Open an email in the default email client using hook://email/ URL.
 *
 * @param payload Open email payload.
 * @returns Hookmark open email URL.
 * @example
 * openEmail({
 *   id: '<CABc123xyz@mail.gmail.com>',
 * })
 * // => 'hook://email/?id=%3CCABc123xyz@mail.gmail.com%3E'
 * @link https://hookproductivity.com/help/integration/url-scheme-selection-principles
 */
export function openEmail(payload: OpenEmail) {
  const { id } = payload
  const params = qs({ id })

  return `hook://email/${params}`
}
