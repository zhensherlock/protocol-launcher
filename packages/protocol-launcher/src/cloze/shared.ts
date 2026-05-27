import { qs } from '@protocol-launcher/shared'

export type ClozeContactPayload = {
  /**
   * Unique identifier for a person record or company.
   *
   * Cloze documents email addresses, phone numbers, domains, social handles such as `twitter:cloze`,
   * and third-party app IDs such as `lead.salesforce.com:9425897598`.
   */
  identifier: string
}

export type ClozeCallbackPayload = ClozeContactPayload & {
  /**
   * URL Cloze opens as a back button after showing the profile full-screen.
   */
  xSuccess?: string
}

export type ClozeWebContactPayload =
  | (ClozeContactPayload & {
      /**
       * Cloze's documented hash URL form.
       */
      syntax?: 'hash'
      /**
       * Show the profile filling the entire page.
       */
      full?: false
      back?: never
    })
  | (ClozeContactPayload & {
      syntax?: 'hash'
      /**
       * Show the profile filling the entire page.
       */
      full: true
      /**
       * URL used by the back button on a full-screen profile.
       */
      back?: string
    })
  | (ClozeContactPayload & {
      /**
       * Cloze's documented `/in/contact/<identifier>` web URL example form.
       */
      syntax: 'path'
      full?: never
      back?: never
    })

export function clozeContactUrl(path: 'contact', payload: ClozeContactPayload): string
export function clozeContactUrl(path: 'x-callback-url/contact', payload: ClozeCallbackPayload): string
export function clozeContactUrl(path: 'contact' | 'x-callback-url/contact', payload: ClozeCallbackPayload) {
  const encodedIdentifier = encodeClozeIdentifier(payload.identifier)
  const callbackParams = path === 'x-callback-url/contact' ? { 'x-success': payload.xSuccess } : {}

  return `cloze://${path}/${encodedIdentifier}${qs(callbackParams)}`
}

export function clozeWebContactUrl(payload: ClozeWebContactPayload) {
  if (payload.syntax === 'path') {
    return `https://www.cloze.com/in/contact/${encodeClozeIdentifier(payload.identifier)}`
  }

  const parts = [`contact=${encodeClozeIdentifier(payload.identifier)}`]

  if (payload.full) {
    parts.push('full')

    if (payload.back !== undefined) {
      parts.push(`back=${encodeURIComponent(payload.back)}`)
    }
  }

  return `https://www.cloze.com/in/#${parts.join(',')}`
}

function encodeClozeIdentifier(identifier: string) {
  return encodeURIComponent(identifier).replace(/%40/g, '@')
}
