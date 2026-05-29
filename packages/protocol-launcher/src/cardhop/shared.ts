import { qs } from '@protocol-launcher/shared'

/**
 * Values Cardhop documents for immediately adding a parsed new contact.
 */
export type CardhopAddImmediately = 'Y' | 'y' | 'T' | 't' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'

/**
 * Main Cardhop views documented for the show endpoint.
 */
export type CardhopView = 'favorites' | 'recents' | 'contacts' | 'birthdays' | 'settings' | 'cards' | 'lists'

/**
 * Cardhop documents edit, call, message, mail, or base64 serialized action data.
 */
export type CardhopContactAction = 'edit' | 'call' | 'message' | 'mail' | (string & {})

/**
 * Preference paths documented by Cardhop.
 */
export type CardhopPreferencesPath = 'help' | 'about' | 'notifications' | 'actions' | 'cards'

export function cardhopUrl(action: string, params: Record<string, unknown> = {}) {
  return `x-cardhop://${action}${qs(params)}`
}
