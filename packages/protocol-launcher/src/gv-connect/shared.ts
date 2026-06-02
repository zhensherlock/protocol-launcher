import { qs } from '@protocol-launcher/shared'

export type GvConnectTab = 'call' | 'sms' | 'vm' | 'history' | 'settings'

export interface GvConnectAccountPayload {
  /**
   * Optional GV Connect account name for multi-account setups.
   */
  account?: string
}

export interface OpenTabPayload extends GvConnectAccountPayload {
  /**
   * Case-sensitive GV Connect tab name.
   */
  tab: GvConnectTab
}

export interface DialPayload extends GvConnectAccountPayload {
  /**
   * Phone number to enter on the dial pad, or `FAVORITES` to open the in-app favorites list.
   */
  number: string
}

export interface CallPayload extends GvConnectAccountPayload {
  /**
   * Phone number to call, or `FAVORITES` to open the in-app favorites list.
   */
  number: string

  /**
   * Calling method to use. GV Connect documents a forwarding phone name/number or `DirectCall`.
   */
  callMethod: string
}

export type GvConnectSmsRecipientList = [string, string?, string?, string?, string?]

export type GvConnectSmsRecipient = string | GvConnectSmsRecipientList

export type SmsPayload = GvConnectAccountPayload &
  (
    | {
        /**
         * SMS recipient number, or up to five numbers for a group SMS.
         */
        number: GvConnectSmsRecipient

        /**
         * Message text to prefill in the compose window.
         */
        message?: string
      }
    | {
        /**
         * SMS recipient number, or up to five numbers for a group SMS.
         */
        number?: GvConnectSmsRecipient

        /**
         * Message text to prefill in the compose window.
         */
        message: string
      }
  )

export interface SmsRecipientPayload extends GvConnectAccountPayload {
  /**
   * SMS recipient number, or up to five numbers for a group SMS.
   */
  number: GvConnectSmsRecipient
}

export interface QuickSettingPayload extends GvConnectAccountPayload {
  /**
   * Case-sensitive Quick Setting name.
   */
  name: string
}

export function gvConnectQuery(params: Record<string, unknown>) {
  return qs(params)
}

export function gvConnectBareQuery(value: string, account?: string) {
  const encodedValue = encodeURIComponent(value)

  if (!account) {
    return `?${encodedValue}`
  }

  return `?${encodedValue}&account=${encodeURIComponent(account)}`
}

export function gvConnectSmsRecipientList(number: GvConnectSmsRecipient): string
export function gvConnectSmsRecipientList(number: undefined): undefined
export function gvConnectSmsRecipientList(number: GvConnectSmsRecipient | undefined): string | undefined
export function gvConnectSmsRecipientList(number: GvConnectSmsRecipient | undefined) {
  const recipientCount = Array.isArray(number) ? number.length : number?.split(',').length

  if (recipientCount && recipientCount > 5) {
    throw new Error('GV Connect SMS supports up to five recipients.')
  }

  return Array.isArray(number) ? number.join(',') : number
}
